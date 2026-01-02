const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * Minimal Tailwind config to ensure the `spacing` theme is explicitly
 * available during build and that Tailwind processes our `@tailwind`
 * directives correctly on Vercel.
 */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    // expose the default spacing scale explicitly so plugins that depend
    // on `theme('spacing')` or `--spacing(...)` find the values.
    spacing: defaultTheme.spacing,
    extend: {},
  },
};
