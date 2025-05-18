import React from "react";
import { ChapterChildProps } from "feature/chapter/types/General";

export default function Content({ grade, chapter }: ChapterChildProps) {
    return (
        <div>
            {grade}
            {chapter}Content
        </div>
    );
}
