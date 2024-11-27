/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        'primary-light': '#81C784',
        'secondary-blue': '#64B5F6',
        'secondary-orange': '#FFB74D',
        'neutral-light': '#F5F5F5',
        'neutral-dark': '#212121'
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        nutriai: {
          'primary': '#4CAF50',
          'secondary': '#81C784',
          'accent': '#64B5F6',
          'neutral': '#F5F5F5',
          'base-100': '#FFFFFF',
          'info': '#64B5F6',
          'success': '#4CAF50',
          'warning': '#FFB74D',
          'error': '#FF5252'
        }
      }
    ]
  }
}

