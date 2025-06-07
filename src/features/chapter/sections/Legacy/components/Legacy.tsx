"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
import style from "../assets/renderedContentContainer.module.css";

export default function Legacy({ grade, chapter }: ChapterChildProps) {
    const ct = ContentArray["grade" + grade]["chapter" + chapter];

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const partQ = searchParams.get("part");

    const { values } = useScrollTableValues(partQ);

    useEffect(() => {
        if (!ct) return;

        if (partQ) {
            if (typeof ct === "function") {
                const params = new URLSearchParams(searchParams.toString());

                params.delete("part");

                replace(`${pathname}?${params.toString()}`);
            }

            return;
        }

        if (typeof ct === "object") {
            const firstPart = Object.keys(ct)[0];

            const params = new URLSearchParams(searchParams.toString());

            params.set("part", firstPart);

            replace(`${pathname}?${params.toString()}`);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const RenderedContent = (() => {
        if (!ct) return null;

        if (typeof ct === "object") {
            if (partQ && ct[partQ]) return ct[partQ];

            const first = Object.keys(ct)[0];
            return ct[first];
        }

        return ct;
    })();

    if (!RenderedContent) return null;

    return (
        <ScrollTableContext.Provider value={values}>
            <main className="w-full flex justify-center bg-[#fafafa]">
                <ScrollTable />
                <div className="max-w-[60rem] min-[62.5rem]:mx-[10rem] min-[48rem]:mx-[7rem] min-[40rem]:mx-[5rem] max-[768px]:ml-[1.75rem] max-[768px]:mr-[1rem] mb-[30lvh] mt-[1rem]">
                    <div className={style.container}>
                        <RenderedContent components={overrideComponents} />
                    </div>
                    <FinishBtn grade={grade} />
                </div>
            </main>
        </ScrollTableContext.Provider>
    );
}
