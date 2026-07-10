import fs from 'fs';
import path from 'path';

// Configurações do empacotador
const OUTPUT_FILE = 'contexto-projeto-ai.md';
const DIRECTORY_TO_SCAN = './'; // Direitório atual (raiz do projeto)

// Pastas e arquivos que devem ser completamente ignorados
const IGNORE_LIST = [
  'node_modules',
  '.git',
  'dist',
  'build',
  '.DS_Store',
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml',
  OUTPUT_FILE,        // Ignorar o próprio arquivo de saída
  'bundle-ai.js',     // Ignorar este script
];

// Extensões binárias ou de mídia que não devem ser lidas como texto
const BINARY_EXTENSIONS = [
  '.png', '.jpg', '.jpeg', '.gif', '.ico', '.pdf', '.svg',
  '.woff', '.woff2', '.ttf', '.eot', '.mp4', '.mov', '.zip'
];

// Cabeçalho inicial do documento para contextualizar a IA receptora
const buildHeader = () => {
  return `# CONTEXTO DO PROJETO - STUDIO MOBILIZARE

Olá! Este arquivo contém a estrutura completa e o código-fonte atualizado do projeto **Studio Mobilizare** (Landing Page de Quiropraxia e Fisioterapia para a Dra. Luciana).
Este projeto foi gerado com **React + Vite** e estilizado com **Tailwind CSS**.

### Instruções para a IA:
1. Use as seções abaixo para compreender todo o projeto.
2. Ao sugerir alterações de código, indique claramente em qual arquivo a mudança deve ser aplicada.
3. Respeite as regras de paleta de cores premium (Off-white, Areia, Grafite, Dourado quente) e os ensinamentos do livro "Refactoring UI" discutidos anteriormente.

---

## 📁 ESTRUTURA DE ARQUIVOS DO PROJETO
`;
};

// Função para gerar uma representação em árvore da estrutura de arquivos
function generateTree(dir, prefix = '') {
  let tree = '';
  const files = fs.readdirSync(dir);

  files.forEach((file, index) => {
    if (IGNORE_LIST.includes(file)) return;

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

// Função para ler recursivamente e concatenar os arquivos de código
function concatFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    if (IGNORE_LIST.includes(file)) return;

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

// Função principal que executa a geração do contexto
function buildContext() {
  console.log('🔄 Iniciando mapeamento do projeto para IA...');
  
  try {
    let outputContent = buildHeader();

    // 1. Adiciona a árvore de arquivos ao output
    outputContent += '```text\n';
    outputContent += generateTree(DIRECTORY_TO_SCAN);
    outputContent += '```\n\n---\n\n## 📝 CÓDIGO-FONTE DOS ARQUIVOS\n\n';

    // 2. Coleta e adiciona o conteúdo de cada arquivo válido
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

    // 3. Escreve o arquivo final
    fs.writeFileSync(OUTPUT_FILE, outputContent, 'utf8');
    console.log(`✅ Sucesso! O arquivo de contexto foi gerado em: "${OUTPUT_FILE}"`);
    console.log('💡 Dica: Agora é só abrir esse arquivo, dar Ctrl+A, Ctrl+C e jogar na IA de sua preferência!');

  } catch (error) {
    console.error('❌ Ocorreu um erro ao gerar o arquivo de contexto:', error);
  }
}

buildContext();