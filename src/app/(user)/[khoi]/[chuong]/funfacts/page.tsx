import { FunFact } from "@/features/Funfacts";
import { ChapterProps } from "@/types/ChapterType";
import React from "react";

export default async function page({ params }: ChapterProps) {
    const { khoi, chuong } = await params;

    return <FunFact grade={khoi.slice(4)} chapter={chuong.slice(6)} />;
}
