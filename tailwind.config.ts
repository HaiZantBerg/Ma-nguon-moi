import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            height: {
                dvh: "100dvh",
                svh: "100svh",
                lvh: "100lvh",
            },
            width: {
                dvh: "100dvh",
                svh: "100svh",
                lvh: "100lvh",
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
