import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/*.{js,ts,jsx,tsx,mdx,css}",
    "./app/**/*.{js,ts,jsx,tsx,md,css}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/assets/**/*.{png,jpg,jpeg,gif,svg}",
  ],
  theme: {
    backgroundImage: {
      'hero-banner-desktop': "url('./assets/banner/desktop.png')",
      'hero-banner-tablet': "url('./assets/banner/tablet.png')",
      'hero-banner-mobile': "url('./assets/banner/mobile.png')",
      'card-one': "url('./assets/section_with_buckets/card-bg-1.png')",
      'card-two': "url('./assets/section_with_buckets/card-bg-2.png')",
      'card-three': "url('./assets/section_with_buckets/card-bg-3.png')",
      'cta-desktop': "url('./assets/cta/cta-bg.png')",
      'cta-tablet': "url('./assets/cta/cta-bg-tablet.png')",
      'cta-mobile': "url('./assets/cta/cta-bg-mobile.png')",
      'contentbox' : "url('./assets/team/about-us-bg.png')",
    },
    textColor: {
      'white': '#FFFFFF',
      'black': '#000000',
      enfold_orange: "#FF9040",
      enfold_red: '#D76451',
      enfold_blue: '#4A90E8',
      enfold_blue_dark: '#1F4558',
    },
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'enfold_orange': "#FF9040",
      'enfold_red': '#D76451',
      'enfold_blue': '#4A90E8',
      'enfold_blue-dark': '#1F4558',
    },
    animation: {
      fade: 'fadeIn .5s ease-in-out forwards',
      fadeUp: 'fadeInUp .5s ease-in-out forwards',
      fadeInOut: 'fadeInOut 2s ease-in-out forwards',
      pulse: 'pulse 2s infinite',
      bgElementLoad: 'bgElementLoad 1s ease-out forwards',
    },
    keyframes: {
      fadeIn: {
        from: { opacity: '0' },
        to: { opacity: '1' },
      },
      fadeInUp: {
        from: { opacity: '0', transform: 'translateY(40px)' },
        to: { opacity: '1', transform: 'translateY(0)' },
      },
      pulse: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0.5' },
      },
      bgElementLoad: {
        '0%': { opacity: '0', transform: 'translateY(-20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    extend: {
    },
  },
  plugins: [],
};
export default config;
