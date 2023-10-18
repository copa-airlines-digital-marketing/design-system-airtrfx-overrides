/** @type {import('tailwindcss').Config} */

const cmpreset = require("cmds-tailwind-styles");

module.exports = {
  presets: [cmpreset],
  content: [],
  theme: {
    extend: {
      content: {
        accordion: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10L12 15L17 10H7Z' fill='%230032A0'/%3E%3C/svg%3E%0A")`,
        select: `url("data:image/svg+xml,%3Csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.4 9.09961L12 13.6996L16.6 9.09961L18 10.4996L12 16.4996L6 10.4996L7.4 9.09961Z' fill='%23AAAAAB'/%3E%3C/svg%3E%0A");`,
      },
      colors:{
        headerBottomBar:'rgb(255,255,255,0.32)',
      }
    },
  },
  plugins: [],
};
