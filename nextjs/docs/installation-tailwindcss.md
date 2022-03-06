```bash:ターミナル
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```js:tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```css:global.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```