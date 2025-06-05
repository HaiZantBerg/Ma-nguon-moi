import { ComponentType } from "react";
import { LuongGiac10, MD, TH } from "./grade10";
import { MDXComponents } from "mdx/types";

export type MDXElement = ComponentType<{ components?: MDXComponents }>;

const ContentArray: Record<
    string,
    Record<string, MDXElement | Record<string, MDXElement>>
> = {
    grade10: {
        chapter1: { "menh-de": MD, "tap-hop": TH },
        chapter3: LuongGiac10,
    },
};

export default ContentArray;
