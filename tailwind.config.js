module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                "spin-slow": "spin-slow 13s linear infinite",
                "rotate-img": "rotate-img 13s linear infinite",
            },
        },
    },
    plugins: [],
};
