"use client";

import { Button3d } from "@/components";
import React from "react";

type FinishBtnProps = {
    grade: string;
};

export default function FinishBtn({ grade }: FinishBtnProps) {
    return (
        <div className="w-full flex justify-center mt-[5rem]">
            <Button3d
                variant="grey"
                className="min-[1000px]:w-[11rem] w-[10rem] min-[1000px]:h-[3rem] h-[2.5rem]"
                as={"a"}
                href={`/khoi${grade}`}
            >
                <Button3d.Content
                    className="text-white text-base min-[1000px]:text-[1.05rem] font-medium"
                    style={{
                        borderRadius: "calc(infinity * 1px)",
                    }}
                >
                    Hoàn thành
                </Button3d.Content>
                <Button3d.Behind
                    style={{
                        borderRadius: "calc(infinity * 1px)",
                    }}
                />
            </Button3d>
        </div>
    );
}
