/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#116735',
        customGreen1: '#E7F1E9',
      },
      backgroundImage: {
        'banner-1': "url('/imgs/integracao/banner-1.png')",
        'banner-2': "url('/imgs/integracao/banner-2.png')",
        'semeadeira': "url('/imgs/integracao/semeadeira-bg.png')",
        'fazemos': "url('/imgs/integracao/bg-quem-somos.png')",
        'semeadeirapage': "url('/imgs/integracao/banner-semeadeira1.png')",
        'brachiaria': "url('/imgs/bachiaria.png')",
        'panicum': "url('/imgs/panicum.png')",
        'leguminosas': "url('/imgs/leguminosas.png')",
        'gramineas': "url('/imgs/gramineas.png')",
      },
      backgroundPosition: {
        'bannerPosition-1': 'top right 0rem',
        'responsive-b1': 'top right -10rem',
        'responsive-p-b1': 'top right -19rem',
        'bannerPosition-2': 'top right',
        'bannerPosition-3': 'top right',
        'responsive-b2': 'top right -10rem',
        'mercadoExterno': 'bottom left',
      },
      fontFamily: {
        openSans: ['openSans', 'sans-serif'],
        effra: ['effra', 'serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
      },
    },
  },
  plugins: [],
};
