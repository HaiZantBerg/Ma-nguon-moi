"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

import { ChapterChildProps } from "@/types/General";

import ContentArray from "../content/ContentArray";
import { overrideComponents } from "../libs/mdx/mdxOverrides";

import FinishBtn from "./ui/FinishBtn";
import FixedComponent from "./ui/FixedComponent";

import {
    ScrollTableContext,
    useScrollTableValues,
} from "../context/ScrollTableContext";

import "katex/dist/katex.min.css";
import style from "../assets/renderedContentContainer.module.css";

export default function Legacy({ grade, chapter }: ChapterChildProps) {
    const ct = ContentArray["grade" + grade]?.["chapter" + chapter] ?? false;

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

    if (!RenderedContent) return;
    <div className="h-full w-full">
        <Image
            src="Image/notfound/notfoundbctootired.webp"
            alt=""
            fill
            style={{ objectFit: "contain" }}
        />
    </div>;

    return (
        <ScrollTableContext.Provider value={values}>
            <div className="w-full h-fit flex justify-center bg-[#fafafa]">
                <FixedComponent grade={grade} chapter={chapter} />
                <div className="max-w-[60rem] min-[62.5rem]:mx-[23%] min-[48rem]:mx-[7rem] min-[40rem]:mx-[3rem] mb-[30lvh]">
                    <main className={style.container}>
                        <RenderedContent components={overrideComponents} />
                    </main>
                    <FinishBtn grade={grade} />
                </div>
            </div>
        </ScrollTableContext.Provider>
    );
}
