import fs from 'fs';
import path from 'path';

// Configuração do seu brainstorm: Pasta dedicada para as IAs
const OUTPUT_DIR = './.ai-context'; 
const FILE_PREFIX = 'contexto-projeto-ai-';
const DIRECTORY_TO_SCAN = './'; 

// Gerar data e hora para o carimbo visual na barra lateral
const agora = new Date();
const dataFormated = agora.toISOString().split('T')[0]; 
const horaFormated = String(agora.getHours()).padStart(2, '0') + '-' + String(agora.getMinutes()).padStart(2, '0'); 
const TIMESTAMP = `${dataFormated}_${horaFormated}`;
const OUTPUT_FILE = path.join(OUTPUT_DIR, `${FILE_PREFIX}${TIMESTAMP}.md`);

// LISTA DE IGNORE: Ignoramos apenas coisas que pesam o prompt sem necessidade.
// Mantivemos os arquivos da pasta 'testeshtml' de fora para que entrem no seu contexto!
const IGNORE_LIST = [
  'node_modules',
  '.git',
  'dist',
  'build',
  '.DS_Store',
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml',
  'bundle-ai.js',
  'bundle-aihowtorun.txt',
  '.ai-context' // Ignora a própria pasta para não entrar em loop infinito
];

const BINARY_EXTENSIONS = [
  '.png', '.jpg', '.jpeg', '.gif', '.ico', '.pdf', '.svg',
  '.woff', '.woff2', '.ttf', '.eot', '.mp4', '.mov', '.zip'
];

// Garantir que a pasta de contexto exista antes de gerar o arquivo
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Limpa arquivos antigos para não acumular lixo na pasta .ai-context
function limparContextosAntigos() {
  const arquivos = fs.readdirSync(OUTPUT_DIR);
  arquivos.forEach(arquivo => {
    if (arquivo.startsWith(FILE_PREFIX) && arquivo.endsWith('.md')) {
      try {
        fs.unlinkSync(path.join(OUTPUT_DIR, arquivo));
      } catch (err) {
        console.warn(`⚠️ Não foi possível deletar o arquivo antigo: ${arquivo}`);
      }
    }
  });
}

const buildHeader = () => {
  return `# CONTEXTO DO PROJETO - STUDIO MOBILIZARE
> 🗓️ **Última Atualização:** ${agora.toLocaleDateString('pt-BR')} às ${agora.toLocaleTimeString('pt-BR')}

Olá! Este arquivo contém a estrutura limpa e o código-fonte do projeto **Studio Mobilizare** (incluindo testes e rascunhos em HTML).

### Instruções para a IA:
1. Siga a paleta de cores: Off-white (#FAF8F5), Areia (#F3EFE9), Grafite (#1E2229) e Dourado Terroso (#C5A880).
2. Baseie-se nos conceitos de design limpo do livro "Refactoring UI".

---

## 📁 ESTRUTURA DE ARQUIVOS
`;
};

function generateTree(dir, prefix = '') {
  let tree = '';
  const files = fs.readdirSync(dir);

  files.forEach((file, index) => {
    if (IGNORE_LIST.includes(file) || IGNORE_LIST.includes(path.relative('./', path.join(dir, file)).replace(/\\/g, '/'))) return;

    const filePath = path.join(dir, file);
    const isDirectory = fs.statSync(filePath).isDirectory();
    const isLast = index === files.length - 1;

    tree += `${prefix}${isLast ? '└── ' : '├── '}${file}\n`;

    if (isDirectory) {
      tree += generateTree(filePath, prefix + (isLast ? '    ' : '│   '));
    }
  });

  return tree;
}

function concatFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const relativePath = path.relative('./', path.join(dir, file)).replace(/\\/g, '/');
    if (IGNORE_LIST.includes(file) || IGNORE_LIST.includes(relativePath)) return;

    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      concatFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (!BINARY_EXTENSIONS.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

function buildContext() {
  console.log('🧹 Fazendo faxina na pasta de IA (.ai-context)...');
  limparContextosAntigos();

  console.log('🔄 Empacotando arquivos do projeto (incluindo rascunhos HTML)...');
  
  try {
    let outputContent = buildHeader();

    outputContent += '```text\n';
    outputContent += generateTree(DIRECTORY_TO_SCAN);
    outputContent += '```\n\n---\n\n## 📝 CÓDIGO-FONTE DOS ARQUIVOS\n\n';

    const allFiles = concatFiles(DIRECTORY_TO_SCAN);

    allFiles.forEach(filePath => {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const relativePath = path.relative(DIRECTORY_TO_SCAN, filePath);
      const fileExtension = path.extname(filePath).replace('.', '') || 'text';

      outputContent += `### 📄 Arquivo: \`${relativePath}\`\n`;
      outputContent += `\`\`\`${fileExtension}\n`;
      outputContent += fileContent;
      outputContent += '\n\`\`\`\n\n';
    });

    fs.writeFileSync(OUTPUT_FILE, outputContent, 'utf8');
    console.log(`\n✅ Sucesso! Contexto gerado com data e hora dentro de: "${OUTPUT_FILE}"`);
    console.log('💡 Dica: Agora é só abrir a pasta .ai-context no explorer e copiar o arquivo gerado!');

  } catch (error) {
    console.error('❌ Erro ao rodar o empacotador:', error);
  }
}

buildContext();