import ChapterRoute from "@/components/Main/ChapterRoute";
import React from "react";

const numberOfChapter = [9, 9, 6];

export default async function page({
  params,
}: {
  params: Promise<{ khoi: string }>;
}) {
  const grade = Number((await params).khoi.at(-1));

  return (
    <ChapterRoute grade={grade} numberOfChapter={numberOfChapter[grade]} />
  );
}
