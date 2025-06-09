import { ComponentType } from "react";
import { LuongGiac10, MD, TH } from "./grade10";
import { MDXComponents } from "mdx/types";
import { GTLG, HLG, PTLG } from "./grade11";

export type MDXElement = ComponentType<{ components?: MDXComponents }>;

const ContentArray: Record<
    string,
    Record<string, MDXElement | Record<string, MDXElement>>
> = {
    grade10: {
        chapter1: { "menh-de": MD, "tap-hop": TH },
        chapter3: LuongGiac10,
    },
    grade11: {
        chapter1: {
            "gia-tri-luong-giac-cua-goc-luong-giac": GTLG,
            "don-vi-do-doc-va-do-dai-cung-trong": HLG,
            "phuong-trinh-luong-giac": PTLG,
        },
    },
};

export default ContentArray;
