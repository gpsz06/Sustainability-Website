# 🌿 Sustainability — Website Institucional

Um website interativo, moderno e responsivo focado na conscientização sobre reciclagem, descarte consciente e práticas sustentáveis. Desenvolvido como projeto universitário para a UNINTER.

🔗 **Acesse o site online:** [https://sustainability-website-olive.vercel.app](https://sustainability-website-olive.vercel.app)

---

## 📌 Sobre o Projeto

O **Sustainability** apresenta conceitos fundamentais de reciclagem e preservação ambiental de forma visualmente atraente e interativa. A aplicação conta com animações fluidas, interações ativadas por scroll, carrossel de ideias práticas e integração direta com formulário de feedback do usuário.

### ✨ Principais Recursos
- **Interações Modernas:** Revelação de conteúdo por scroll (`ScrollReveal`), cursor customizado e animações suaves (`Framer Motion`).
- **Guia dos 3 R's & Descarte:** Seções explicativas sobre Reduzir, Reutilizar e Reciclar.
- **Carrossel Interativo:** Inspirações e ideias práticas para o dia a dia.
- **Coleta de Feedback:** Integração direta com Google Forms via formulário incorporado.
- **Design Responsivo:** Navegação adaptada com menu mobile e elementos fluidos para todas as telas.

---

## 🛠️ Tecnologias Utilizadas

- **Core:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Animações:** [Framer Motion](https://www.framer.com/motion/)
- **Ícones:** [Lucide React](https://lucide.dev/)

---

## 📂 Estrutura de Arquivos

src/
├── App.jsx                  # Componente principal
├── main.jsx                 # Ponto de entrada do React
├── index.css                # Tokens de cor + estilos globais
├── assets/                  # Imagens e recursos estáticos
├── components/              # Componentes de UI reutilizáveis
│   ├── ScrollReveal.jsx     # Revelação em cascata no scroll
│   ├── RevealText.jsx       # Efeito de texto com lente
│   ├── CursorReveal.jsx     # Cursor customizado global
│   ├── Navbar.jsx           # Navegação flutuante em glassmorphism
│   ├── Footer.jsx           # Rodapé com autoria e links
│   ├── Logo.jsx             # Logotipo da marca
│   ├── PaperBall.jsx        # Elemento visual (bolinha de papel)
│   └── RecycleBin.jsx       # Elemento visual (SVG lixeira)
└── sections/                # Seções do website
├── Hero.jsx             # Seção inicial / Apresentação
├── OQueE.jsx            # O que é sustentabilidade
├── Importancia.jsx      # Importância da reciclagem
├── GuiaDescarte.jsx     # Orientações sobre descarte correto
├── TresRs.jsx           # Conceito dos 3 R's
├── IdeiasCarousel.jsx   # Carrossel de ideias sustentáveis
├── Curiosidades.jsx     # Dados e impacto em números
└── Feedback.jsx         # Formulário de participação


---

## 👤 Autoria

Desenvolvido por **Guilherme Pereira de Souza** como parte dos projetos acadêmicos do curso de Ciência da Computação.
