/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-texture": "url('/gradient.png')",
            },
            fontFamily: {
                sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "dark-brown": "#967E76",
                "bright-pink": "#ff04b4",
                "bright-yellow": "#FAFF00",
                "bright-purple": "#BD00FF",
                "bright-blue": "#0AD3FF",
            },
        },
    },
    plugins: [],
};
