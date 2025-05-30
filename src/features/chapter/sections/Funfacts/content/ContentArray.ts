import { StaticImageData } from "next/image";
import g0c1 from "./grade10/chapter1/content";
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
        chapter1: g0c1,
    },
};

export default ContentArray;
