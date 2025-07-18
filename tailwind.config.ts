import type { Config } from 'tailwindcss'

//TODO: 이곳에 브랜딩 컬러 정의해놓았다!!!!
export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-orange-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-emerald-500',
    'bg-fuchsia-500',
    'bg-sky-500',
    'bg-rose-500',
    'bg-gray-700',
    'bg-indigo-500',
    'bg-zinc-500',
    'bg-teal-500',
    'bg-pink-500',
    'bg-yellow-500',
    'bg-neutral-500',
    'bg-violet-500',
    'bg-red-500',
    'bg-lime-500',
    'bg-slate-500',
  ],
  theme: {
    extend: {
      fontFamily: {
        aritadotum: ['AritaDotumKR', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        brand: '#0366fb',
        pressedBrand: '#024ecc',
        subBrand: '#66aaff',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      backgroundColor: {
        brand: '#0366fb',
        pressedBrand: '#024ecc',
        subBrand: '#66aaff',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
