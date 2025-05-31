import { LuongGiac10, MDTH } from "./grade10";
import { MDXComponents } from "mdx/types";

const ContentArray: Record<
    string,
    Record<string, (props: { components?: MDXComponents }) => JSX.Element>
> = {
    grade10: {
        chapter1: MDTH,
        chapter3: LuongGiac10,
    },
};

export default ContentArray;
