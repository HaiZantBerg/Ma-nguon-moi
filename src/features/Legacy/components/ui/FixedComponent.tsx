import React from "react";
import ScrollTable from "../ScrollTable/ScrollTable";
import Description from "../Description/Description";
import { ChapterChildProps } from "@/types/General";

export default function FixedComponent({ grade, chapter }: ChapterChildProps) {
    return (
        <div className="fixed w-full h-full top-0 left-0 grid grid-cols-12 grid-rows-8 pt-[7rem] z-[90] pointer-events-none">
            <Description grade={grade} chapter={chapter} />
            <ScrollTable />
        </div>
    );
}
