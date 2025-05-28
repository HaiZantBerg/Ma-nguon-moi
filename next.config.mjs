import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // turbopack: {
    //     rules: {
    //         "*.svg": {
    //             loaders: ["@svgr/webpack"],
    //             as: "*.js",
    //         },
    //     },
    // },
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.(".svg"),
        );

        config.module.rules.push({
            test: /\.svg$/i,
            issuer: fileLoaderRule.issuer,
            use: ["@svgr/webpack"],
        });

        fileLoaderRule.exclude = /\.svg$/i;

        return config;
    },
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
    options: {},
});

export default withMDX(nextConfig);
