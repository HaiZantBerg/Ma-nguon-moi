import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

const eslintConfig = [
    ...compat.config({
        ignorePatterns: [
            "node_modules",
            "src/generated/",
            "src/components/Legacy",
        ],
        extends: ["next/core-web-vitals", "next/typescript", "prettier"],
        plugins: ["boundaries"],
        settings: {
            "boundaries/include": ["src/**/*"],
            "boundaries/elements": [
                {
                    mode: "full",
                    type: "global",
                    pattern: [
                        "src/redis/**/*",
                        "src/generated/**/*",
                        "src/assets/**/*",
                        "src/components/**/*",
                        "src/context/**/*",
                        "src/data/**/*",
                        "src/hooks/**/*",
                        "src/lib/**/*",
                        "src/services/**/*",
                        "src/utils/**/*",
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
            "boundaries/no-unknown": ["error"],
            "boundaries/no-unknown-files": ["error"],
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
    }),
];

export default eslintConfig;
