// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#013328', 
        dark:'#100C0D',
        light:'#E3DCD2',
        green:'#3D4E17',
        screens: {
          'sm': '640px',
          'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        },
      },
      fontFamily: {
        abc: ["Charmonman", 'cursive'],
        xyz: ["Hahmlet", 'serif'],
      },
    },
  },
  plugins: [],
};
