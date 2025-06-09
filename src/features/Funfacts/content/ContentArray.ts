import { StaticImageData } from "next/image";
import { LuongGiac10, MDTH } from "./grade10";
import React from "react";

export type ContentType = {
    id: string;
    title: string;
    content: React.JSX.Element;
    src?: StaticImageData;
};

const ContentArray: Record<
    string,
    Record<string, Record<string, ContentType[]>>
> = {
    grade10: {
        chapter1: MDTH,
        chapter3: LuongGiac10,
    },
};

export default ContentArray;
