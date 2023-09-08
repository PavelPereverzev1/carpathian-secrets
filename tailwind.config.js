/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screen: {
        sm: '320px',
        md: '768px',
        lg: '1280px',
      },
      backgroundImage:{
        'hero-bgImg': "url('/images/hero-bkg.png')"
      },
      colors:{
        'bgcHero':'#d9d9d9',
        'hero-backdrop': '#020F08',
      }
    },
  },
  plugins: [],
};
