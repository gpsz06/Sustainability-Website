# Sustainability Website

Landing page em React + Vite + Tailwind CSS + Framer Motion + Lucide React.

## COMANDOS PARA RODAR
```bash
npm install
npm run dev
```

## Estrutura
```
src/
├── App.jsx
├── main.jsx
├── index.css                 # tokens de cor + estilos do Text Reveal
├── assets/hero-bg.jpg        # fundo da Hero
├── components/
│   ├── ScrollReveal.jsx      # <ScrollReveal> + <RevealItem> (stagger em cascata)
│   ├── RevealText.jsx        # texto com "lente" de revelação
│   ├── CursorReveal.jsx      # cursor customizado global
│   ├── Navbar.jsx            # navbar flutuante -> pílula glassmorphism
│   ├── Footer.jsx
│   ├── Logo.jsx              
│   ├── PaperBall.jsx         # bolinha de papel (png)
│   └── RecycleBin.jsx        # lixeira (SVG)
└── sections/
    ├── Hero.jsx              # pagina home
    ├── OQueE.jsx             
    ├── Importancia.jsx       
    ├── GuiaDescarte.jsx      
    ├── TresRs.jsx            
    ├── IdeiasCarousel.jsx    # carrossel de ideias
    ├── Curiosidades.jsx
    └── Feedback.jsx          # feedback (Link do formulario)
```
