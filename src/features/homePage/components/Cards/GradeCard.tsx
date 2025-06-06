"use client";

import React, { CSSProperties } from "react";
import { Khoi10, Khoi11, Khoi12, style } from "../../assets";
import { cn } from "@/lib/tailwind/tailwindMerge";
import Link from "next/link";
import { Button3d } from "@/components";

export default function GradeCard() {
    return (
        <>
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
                <p className="absolute -translate-x-1/2 left-1/2 top-[2rem] font-medium text-[#cfd4ff] text-3xl">
                    Khối 10
                </p>
                <Khoi10
                    className="w-[80%] -translate-x-[5%]"
                    style={{
                        filter: "drop-shadow(20px 15px 4px #4444dd8c) brightness(110%)",
                    }}
                />
                <div className="absolute -translate-x-1/2 left-1/2 bottom-[1.5rem] text-white text-lg">
                    <Button3d as={Link} href="/khoi10" variant="blue">
                        <Button3d.Content className="py-[0.5rem] px-[3rem] font-medium text-nowrap">
                            Bắt đầu
                        </Button3d.Content>
                        <Button3d.Behind />
                    </Button3d>
                </div>
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
                <p className="absolute -translate-x-1/2 left-1/2 top-[2rem] font-medium text-[#bbffe1] text-3xl">
                    Khối 11
                </p>
                <Khoi11
                    className="w-[65%] -translate-x-[2%]"
                    style={{
                        filter: "drop-shadow(10px 15px 4px #46dd9669) brightness(110%)",
                    }}
                />
                <div className="absolute -translate-x-1/2 left-1/2 bottom-[1.5rem] text-white text-lg">
                    <Button3d as={Link} href="/khoi11" variant="green">
                        <Button3d.Content className="py-[0.5rem] px-[3rem] font-medium text-nowrap">
                            Bắt đầu
                        </Button3d.Content>
                        <Button3d.Behind />
                    </Button3d>
                </div>
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
                <p className="absolute -translate-x-1/2 left-1/2 top-[2rem] font-medium text-[#e3d4ff] text-3xl">
                    Khối 12
                </p>
                <Khoi12
                    className="w-[80%] translate-x-[5%]"
                    style={{
                        filter: "drop-shadow(-10px 20px 4px #8c46dd8c) brightness(110%)",
                    }}
                />
                <div className="absolute -translate-x-1/2 left-1/2 bottom-[1.5rem] text-white text-lg">
                    <Button3d as={Link} href="/khoi12" variant="purple">
                        <Button3d.Content className="py-[0.5rem] px-[3rem] font-medium text-nowrap">
                            Bắt đầu
                        </Button3d.Content>
                        <Button3d.Behind />
                    </Button3d>
                </div>
            </div>
        </>
    );
}
