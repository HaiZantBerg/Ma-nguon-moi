"use client";

import React from "react";
import { ChapterChildProps } from "feature/chapter/types/General";
import ContentArray from "../content/ContentArray";
import { overrideComponents } from "@/features/chapter/libs/mdx/mdxOverrides";
import FinishBtn from "./FinishBtn";
import ScrollTable from "./ScrollTable/ScrollTable";
import {
    ScrollTableContext,
    useScrollTableValues,
} from "../context/ScrollTableContext";
import "katex/dist/katex.min.css";

export default function Legacy({ grade, chapter }: ChapterChildProps) {
    const Content = ContentArray["grade" + grade]["chapter" + chapter];

    const { values } = useScrollTableValues();

    if (!Content) return null;

    return (
        <ScrollTableContext.Provider value={values}>
            <main className="w-full flex justify-center">
                <ScrollTable />
                <div className="max-w-[60rem] md:mx-[10rem] sm:mx-[5rem] max-[768px]:ml-[1.75rem] max-[768px]:mr-[1rem] mb-[30lvh] mt-[1rem]">
                    <div className="[&>section:first-child>section]:flex [&>section:first-child>section]:flex-col [&>section:first-child>section]:min-h-[100dvh] [&>section:first-child>section]:justify-center">
                        <Content components={overrideComponents} />
                    </div>
                    <FinishBtn grade={grade} />
                </div>
            </main>
        </ScrollTableContext.Provider>
    );
}
