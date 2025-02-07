import { Colors } from 'react-native/Libraries/NewAppScreen';

/** @type {import('tailwindcss').Config} */
export default {
  content:
    [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"

    ],
  theme: {
    extend: {
      Colors: {
        "mainBackgroundColor": '#0D1117',
        "columnBackgroundColor": '#161C22'
      }
    },
  },
  plugins: [],
}