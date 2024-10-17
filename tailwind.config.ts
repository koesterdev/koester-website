import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './content/**/*.mdx'],
  plugins: [require('@tailwindcss/typography')],
};
export default config;
