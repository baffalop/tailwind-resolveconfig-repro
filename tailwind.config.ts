import { Config } from 'tailwindcss'

export default {
  content: ['**/*.js', '**/*.ts'],
  theme: {
    width: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
    },
    extend: {
      colors: {
        cerulean: {
          '50': '#ecfdff',
          '100': '#cef8ff',
          '200': '#a4effd',
          '300': '#65e2fb',
          '400': '#1fc9f1',
          '500': '#03a9d3',
          '600': '#0688b4',
          '700': '#0c6d92',
          '800': '#145976',
          '900': '#154b64',
          '950': '#073045',
        }
      }
    },
  },
} satisfies Config
