import type { Config } from 'tailwindcss';
const theme = require('./theme');

const config: Config = {
  important: true,
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'lg-1': '1281px',
      },
      height: {
        'custom-100': 'calc(100vh - 2rem)',
        'custom-200': 'calc(100vh - 9.625rem)',
      },
      fontFamily: {
        ibmPlexSans: ['IBM Plex Sans', 'sans-serif'],
      },
      boxShadow: {
        lg: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        xlg: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
        xs: '0px 0px 0px 4px #E6EFFF, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        xslg: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
      },
      backgroundColor: {
        customGray: 'rgba(52, 64, 84, 0.15)',
      },
      backgroundImage: {
        customGrayXL:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 100%)',
        customGrayXL2:
          'linear-gradient(180deg, rgba(242, 247, 255, 0.00) -1.02%, #F2F7FF 29.75%)',
        patternBlue:
          "url('/src/_shared/assets/images/companyonboarding/patterns/pattern-blue.svg')",
      },
    },
    colors: {
      ...theme.colors,
      onboardBg:
        'linear-gradient(180deg, rgba(242, 244, 247, 0.00) -1.02%, #F2F4F7 29.75%)',
    },
  },
  plugins: [],
};
export default config;
