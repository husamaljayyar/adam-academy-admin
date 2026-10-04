/** @type {import('tailwindcss').Config} */
 export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#F6F4F5',  
        ink: { DEFAULT: '#1E191B', soft: '#61595D', mute: '#80787C' }, // neutral-900 / 600 / 500
         brand: { 50: '#FDF4F6', 100: '#FBE6EB', 200: '#F7CCD6', 400: '#DA4C7D', 500: '#BE2C69', 600: '#9F1F56', 700: '#7F1F46' },
        gold: { DEFAULT: '#8F5D00', soft: '#FFF8E6' }, // gold-700 / gold-50
        plum: { DEFAULT: '#7F3A8F' }, // plum-600
        danger: { DEFAULT: '#D92D3A', soft: '#FDECEC' }, // red-500 / red-50
        success: { DEFAULT: '#157040', soft: '#EAF7EF' }, // green-700 / green-50
        info: { DEFAULT: '#1D5CA6', soft: '#EAF3FD' }, // blue-700 / blue-50
        slate: { DEFAULT: '#80787C' }, // neutral-500
      },
      fontFamily: { sans: ['Tajawal', 'system-ui', 'sans-serif'] },
      boxShadow: {
        // Raised and inset shadows = --neu-raised-* and --neu-inset-* (shadow color rgba(110,90,100,.16) and highlight #fff)
         raised: '8px 8px 20px rgba(110,90,100,.16), -8px -8px 20px #fff',
        'raised-sm': '4px 4px 10px rgba(110,90,100,.16), -4px -4px 10px #fff',
        'raised-md': '8px 8px 20px rgba(110,90,100,.16), -8px -8px 20px #fff',
        inset: 'inset 2px 2px 5px rgba(110,90,100,.16), inset -2px -2px 5px #fff',
        'inset-md': 'inset 5px 5px 12px rgba(110,90,100,.24), inset -5px -5px 12px #fff',
        brand: '0 10px 18px -4px rgba(159,31,86,.45)',
// Primary Button = --neu-primary: Outer shadow + inner highlight
        'btn-primary': '6px 6px 14px rgba(110,90,100,.24), -6px -6px 14px #fff, inset 1px 1px 2px rgba(255,255,255,.35), inset -2px -2px 4px rgba(99,29,55,.3)',
        'btn-primary-hover': '8px 8px 18px rgba(110,90,100,.24), -7px -7px 16px #fff, inset 1px 1px 2px rgba(255,255,255,.4), inset -2px -2px 4px rgba(99,29,55,.3)',
        'btn-primary-pressed': '2px 2px 5px rgba(110,90,100,.16), -2px -2px 5px #fff, inset 3px 3px 7px rgba(99,29,55,.4), inset -2px -2px 4px rgba(255,255,255,.2)',
        focus: '0 0 0 3px rgba(190,44,105,.3)', // --focus-ring
        nav: '0 10px 18px -4px rgba(90,5,40,.55), 0 0 14px rgba(255,255,255,.35)', // بيضة الشريط الجانبي
      },
      backgroundImage: {
// --neu-primary-bg: Blend of primary with white/black (base surface gradient)        
        'brand-gradient': 'linear-gradient(145deg, #C6457B, #AF2961)',
        'btn-gradient': 'linear-gradient(145deg, #C6457B, #AF2961)',
        'brand-vertical': 'linear-gradient(180deg, #C6457B, #AF2961)',
      },
      borderRadius: {
        blob: '50% 50% 48% 48% / 64% 64% 36% 36%',  
         petal: '28px 8px 28px 8px',
        'petal-sm': '20px 6px 20px 6px',  
        'petal-lg': '44px 12px 44px 12px', // --radius-card في الـ design system
        card: '28px',
        shell: '36px',
      },
    },
  },
  plugins: [],
};
