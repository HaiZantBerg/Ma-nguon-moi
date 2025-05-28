import { Legacy } from "@/features/chapter";
import { ChapterProps } from "@/types/ChapterType";
import React from "react";

export default async function page({ params }: ChapterProps) {
    const { khoi, chuong } = await params;

    return <Legacy grade={khoi.slice(4)} chapter={chuong.slice(6)} />;
}
