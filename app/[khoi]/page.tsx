import Slider from "@/components/Slider";
import React from "react";

export default async function page(props: { params: Promise<{ khoi: string }> }) {
    const params = await props.params;
    const gradeId = Number(params.khoi.at(-1));

    if (gradeId >= 0 && gradeId <= 2)
        return (
            <>
                <div className="bg-[#ffffff]">
                    <Slider id={gradeId} />
                </div>
            </>
        );
    else return null;
}
