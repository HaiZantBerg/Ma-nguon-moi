import Slider from "@/components/Slider";
import React from "react";

export default function page({ params }: { params: { khoi: string } }) {
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
