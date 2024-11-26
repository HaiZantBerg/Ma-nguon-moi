import Story from "@/components/Story";
import React from "react";

export default async function page(
    props: {
        params: Promise<{ bai: string; khoi: string }>;
    }
) {
    const params = await props.params;
    const storyId = Number(params.bai.split("-").at(-1)) - 1;
    const gradeId = Number(params.khoi.at(-1));

    return (
        <div>
            <Story storyId={storyId} gradeId={gradeId} />
        </div>
    );
}
