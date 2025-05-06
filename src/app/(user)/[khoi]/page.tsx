import ChapterRoute from "@/features/chapterRoute/components/ChapterRoute/ChapterRoute";
import { notFound } from "next/navigation";
import React from "react";

const numberOfChapter = [9, 9, 6];
const acceptableGrade = [0, 1, 2];

export default async function page({
    params,
}: {
    params: Promise<{ khoi: string }>;
}) {
    const grade = Number((await params).khoi.at(-1));

    if (!acceptableGrade.includes(grade)) notFound();

    return (
        <>
            <ChapterRoute
                grade={grade}
                numberOfChapter={numberOfChapter[grade]}
            />
        </>
    );
}
