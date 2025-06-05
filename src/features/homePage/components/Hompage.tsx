import React, { CSSProperties } from "react";
import { Khoi10, Khoi11, Khoi12, style } from "../assets";
import { cn } from "@/lib/tailwind/tailwindMerge";

export default function Hompage() {
    return (
        <div className="grid grid-rows-10 grid-cols-12 h-[55rem] mx-auto py-[5rem] w-[72rem] gap-6">
            <div
                className="row-[1/7] col-[1/5] border rounded-2xl bg-white"
                id="note"
            ></div>
            <div
                className="row-[1/6] col-[5/13] *:rounded-2xl flex justify-between"
                id="grade"
            >
                <div
                    id="khoi10"
                    className={cn(
                        style.gradientBorder,
                        "flex justify-center items-center relative bg-[#1B143B] w-[15rem] h-full",
                    )}
                    style={
                        {
                            "--color-start-end": "rgba(101, 101, 247, 1)",
                            "--color-mid": "rgba(27, 20, 59, 1)",
                        } as CSSProperties
                    }
                >
                    <Khoi10
                        className="w-[80%] -translate-x-[5%]"
                        style={{
                            filter: "drop-shadow(20px 15px 4px #4444dd8c) brightness(110%)",
                        }}
                    />
                </div>
                <div
                    id="khoi11"
                    className={cn(
                        style.gradientBorder,
                        "flex justify-center items-center relative bg-[#002514] w-[15rem] h-full",
                    )}
                    style={
                        {
                            "--color-start-end": "rgba(61, 251, 108, 1)",
                            "--color-mid": "rgba(0, 37, 20, 1)",
                        } as CSSProperties
                    }
                >
                    <Khoi11
                        className="w-[65%] -translate-x-[2%]"
                        style={{
                            filter: "drop-shadow(10px 15px 4px #46dd9669) brightness(110%)",
                        }}
                    />
                </div>
                <div
                    id="khoi12"
                    className={cn(
                        style.gradientBorder,
                        "flex justify-center items-center relative bg-[#200d26] w-[15rem] h-full",
                    )}
                    style={
                        {
                            "--color-start-end": "rgba(159, 101, 247, 1)",
                            "--color-mid": "rgba(32, 13, 38, 1)",
                        } as CSSProperties
                    }
                >
                    <Khoi12
                        className="w-[80%] translate-x-[5%]"
                        style={{
                            filter: "drop-shadow(-10px 20px 4px #8c46dd8c) brightness(110%)",
                        }}
                    />
                </div>
            </div>
            <div
                className="row-[7/11] col-[1/5] border rounded-2xl bg-white"
                id="habit"
            ></div>
            <div
                className="row-[6/11] col-[5/9] border rounded-2xl bg-white"
                id="maybeInterestedIn"
            ></div>
            <div
                className="row-[6/11] col-[9/13] border rounded-2xl bg-white"
                id="continue"
            ></div>
        </div>
    );
}
