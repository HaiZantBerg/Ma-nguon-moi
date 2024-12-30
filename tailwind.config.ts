import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/Extra/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            height: {
                dvh: "100dvh",
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            screens: {
                smpl: "400px",
                lgmi: "971px",
                xxlg: "1730px",
                lg2: "1300px",
                lgpl: "1200px",
                lg3: "1450px",
                md1: "1100px",
            },
        },
    },
    plugins: [],
};
export default config;
