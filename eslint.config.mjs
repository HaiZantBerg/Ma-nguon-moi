import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

const eslintConfig = [
    ...compat.config({
        ignorePatterns: [
            "node_modules",
            "src/generated/",
            "src/components/_Legacy/",
        ],
        extends: [
            "next/core-web-vitals",
            "next/typescript",
            "plugin:mdx/recommended",
        ],
        plugins: ["boundaries"],
        settings: {
            "mdx/code-blocks": true,
            "boundaries/include": ["src/**/*"],
            "boundaries/elements": [
                {
                    mode: "full",
                    type: "global",
                    pattern: [
                        "src/assets/**/*",
                        "src/auth/**/*",
                        "src/components/**/*",
                        "src/context/**/*",
                        "src/generated/**/*",
                        "src/hooks/**/*",
                        "src/lib/**/*",
                        "src/redis/**/*",
                        "src/types/**/*",
                    ],
                },
                {
                    mode: "full",
                    type: "features",
                    capture: ["featureName"],
                    pattern: ["src/features/*/**/*"],
                },
                {
                    mode: "full",
                    type: "app",
                    capture: ["_", "fileName"],
                    pattern: ["src/app/**/*"],
                },
                {
                    mode: "full",
                    type: "dontImport",
                    pattern: ["src/*"],
                },
            ],
        },
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "boundaries/no-unknown": "error",
            "boundaries/no-unknown-files": "error",
            "boundaries/element-types": [
                "error",
                {
                    default: "disallow",
                    rules: [
                        {
                            from: ["global"],
                            allow: ["global"],
                        },
                        {
                            from: ["features"],
                            allow: [
                                "global",
                                [
                                    "features",
                                    { featureName: "${from.featureName}" },
                                ],
                            ],
                        },
                        {
                            from: ["app", "dontImport"],
                            allow: ["global", "features"],
                        },
                        {
                            from: ["app"],
                            allow: [["app", { fileName: "*.css" }]],
                        },
                    ],
                },
            ],
        },
        overrides: [
            {
                files: ["**/*.mdx"],
                rules: {
                    "react/no-unescaped-entities": "off",
                    "no-unused-expressions": "off",
                    "@typescript-eslint/no-unused-expressions": "off",
                },
            },
        ],
    }),
];

export default eslintConfig;
