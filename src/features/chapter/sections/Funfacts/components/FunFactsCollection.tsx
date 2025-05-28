import React from "react";
import { ChapterChildProps } from "feature/chapter/types/General";

export default function FunFactsCollection({
    grade,
    chapter,
}: ChapterChildProps) {
    return (
        <div className="pt-[7rem]">
            {grade}
            {chapter}
        </div>
    );
}
