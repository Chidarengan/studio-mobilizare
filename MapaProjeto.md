# 🗺️ Mapa do Projeto - Studio Mobilizare

## 2. O que mais dá para adiantar enquanto ela não responde?

Além do Instagram, você pode aproveitar esse tempo para preparar a "casa" no React para quando os dados reais chegarem:

---

### 🧩 Montar os Componentes React na pasta `src/components/`
Até agora estávamos testando no HTML do Canvas. Você já pode recortar o HTML aprovado e dividir nos componentes oficiais do seu projeto React:

* `Navbar.jsx`
* `Hero.jsx`
* `Triagem.jsx` *(o quiz de dores/objetivos)*
* `Sobre.jsx`
* `Metodos.jsx` *(cards de Pilates/Quiropraxia)*
* `Depoimentos.jsx`
* `InstagramFeed.jsx`
* `Footer.jsx`

---

### 🖼️ Deixar as Imagens Prontas em `.webp`
Criar uma pasta `src/assets/` com imagens temporárias de alta qualidade compactadas em formato `.webp` para que, assim que ela mandar as fotos originais dela, você só precise substituir os arquivos com o mesmo nome.

---

### 🐙 Comandos do Git
```bash
git add .
git commit -m "feat: estrutura inicial dos componentes React e integração do Instagram"
git push origin main