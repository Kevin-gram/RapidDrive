// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#013328', // Add navy blue color
        dark:'#100C0D',
        light:'#E3DCD2',
        green:'#3D4E17',
      },
      fontFamily: {
        abc: ["Charmonman", 'cursive'],
        xyz: ["Hahmlet", 'serif'],
      },
    },
  },
  plugins: [],
};
