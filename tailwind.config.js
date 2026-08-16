/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0a0503',
        maroon: '#210806',
        ember: '#ff5a1f',
        amber: '#ffab4d',
        bone: '#f4ece2',
        ash: '#a8938a',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'ember-radial':
          'radial-gradient(circle at 50% 0%, rgba(255,90,31,0.35), rgba(33,8,6,0.1) 45%, rgba(10,5,3,1) 75%)',
      },
    },
  },
  plugins: [],
}
