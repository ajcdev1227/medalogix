/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'montserrat': ['Montserrat', 'sans-serif'], // Define the Montserrat font family
            },
        },
    },
    plugins: [],
}

