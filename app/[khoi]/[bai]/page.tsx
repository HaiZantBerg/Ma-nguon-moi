import Story from "@/components/Story";
import React from "react";

export default function page({
    params,
}: {
    params: { bai: string; khoi: string };
}) {
    const storyId = Number(params.bai.split("-").at(-1)) - 1;
    const gradeId = Number(params.khoi.at(-1));

    return (
        <div>
            <Story storyId={storyId} gradeId={gradeId} />
        </div>
    );
}
