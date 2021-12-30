// tailwind.config.js
module.exports = {
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or "media" or "class"
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#2563eb",
                    DEFAULT: "#1d4ed8",
                    dark: "#1e40af"
                }
            },
            fontFamily: {
                jost: "'Jost', sans-serif"
            },
            gridTemplateRows: {
                "7": "repeat(7, minmax(0, 1fr))",
                "8": "repeat(8, minmax(0, 1fr))",
                "9": "repeat(9, minmax(0, 1fr))",
                "10": "repeat(10, minmax(0, 1fr))",
                "11": "repeat(11, minmax(0, 1fr))",
                "12": "repeat(12, minmax(0, 1fr))",
              }
        },
    },
    variants: {
        extend: {
            backgroundColor: ["active"],
            textColor: ["active", "visited"],
            borderColor: ["active"],
        },
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/line-clamp"),
    ],
}
