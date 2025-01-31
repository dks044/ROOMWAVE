import type { Config } from 'tailwindcss'

//TODO: 이곳에 브랜딩 컬러 정의해놓았다!!!!
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brand: '#0366fb',
        subBrand: '#66aaff',
      },
      backgroundColor: {
        brand: '#0366fb',
        subBrand: '#66aaff',
      },
    },
  },
  plugins: [],
} satisfies Config
