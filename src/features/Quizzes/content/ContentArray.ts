import { StaticImageData } from "next/image";
import { MDTH } from "./grade10";
import React from "react";

export type ContentType = {
    title: string;
    quiz: React.JSX.Element;
    choices: {
        array: string[] | React.JSX.Element[];
        answerId: number;
    };
    explaination: React.JSX.Element;
    src: StaticImageData;
    className?: string;
};

const ContentArray: Record<string, Record<string, ContentType[]>> = {
    grade10: {
        chapter1: MDTH,
    },
};

export default ContentArray;
