"use client";

import React, { CSSProperties } from "react";
import { Khoi10, Khoi11, Khoi12, style } from "../../assets";
import { cn } from "@/lib/tailwind/tailwindMerge";
import Link from "next/link";
import { Button3d } from "@/components";

export default function GradeCard() {
    return (
        <div className="*:rounded-2xl flex justify-between max-[54rem]:w-[48rem] h-full">
            <div
                id="khoi10"
                className={cn(
                    style.gradientBorder,
                    "flex justify-center relative bg-[#002514] w-[15rem] h-full",
                )}
                style={
                    {
                        "--color-start-end": "rgba(61, 251, 108, 1)",
                        "--color-mid": "rgba(0, 37, 20, 1)",
                    } as CSSProperties
                }
            >
                <p className="absolute left-[15%] top-[9.5rem] font-medium text-[#bbffe1] text-3xl">
                    Khối 10
                </p>
                <div className="absolute top-[11.75rem] left-[15%] w-[70%]">
                    <p className="font-semibold text-[#bfe9d8] mb-1 text-[0.875rem] leading-[1rem]">
                        Khởi đầu hành trình
                    </p>
                    <p className="text-[#95bbac] text-[0.85rem] leading-[0.95rem]">
                        Khám phá nền tảng toán học từ các nền văn minh cổ đại
                        đến tư duy hiện đại đầu tiên.
                    </p>
                </div>
                <div className="h-[50%] w-[75%] relative -top-2">
                    <Khoi10
                        className="size-full -translate-x-[5%]"
                        style={{
                            filter: "drop-shadow(20px 15px 4px #46dd9669) brightness(110%)",
                        }}
                    />
                </div>
                <div className="absolute -translate-x-1/2 left-1/2 bottom-[1.5rem] text-white text-lg">
                    <Button3d as={Link} href="/khoi10" variant="green">
                        <Button3d.Content className="py-[0.5rem] px-[3.3rem] font-medium text-nowrap">
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
                    "flex justify-center relative bg-[#1B143B] w-[15rem] h-full",
                )}
                style={
                    {
                        "--color-start-end": "rgba(101, 101, 247, 1)",
                        "--color-mid": "rgba(27, 20, 59, 1)",
                    } as CSSProperties
                }
            >
                <p className="absolute left-[15%] top-[9.5rem] font-medium text-[#cfd4ff] text-3xl">
                    Khối 11
                </p>
                <div className="absolute top-[11.75rem] left-[15%] w-[70%]">
                    <p className="font-semibold text-[#bfc7e9] mb-1 text-[0.875rem] leading-[1rem]">
                        Bước vào chiều sâu
                    </p>
                    <p className="text-[#9895bb] text-[0.85rem] leading-[1rem]">
                        Đại số, lượng giác và các phát triển logic - cốt lõi của
                        tư duy toán học.
                    </p>
                </div>
                <div className="h-[40%] w-[60%] relative top-[1rem]">
                    <Khoi11
                        className="size-full -translate-x-[2%]"
                        style={{
                            filter: "drop-shadow(10px 15px 4px #4661dd8c) brightness(110%)",
                        }}
                    />
                </div>
                <div className="absolute -translate-x-1/2 left-1/2 bottom-[1.5rem] text-white text-lg">
                    <Button3d as={Link} href="/khoi11" variant="blue">
                        <Button3d.Content className="py-[0.5rem] px-[3.3rem] font-medium text-nowrap">
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
                    "flex justify-center relative bg-[#200d26] w-[15rem] h-full",
                )}
                style={
                    {
                        "--color-start-end": "rgba(159, 101, 247, 1)",
                        "--color-mid": "rgba(32, 13, 38, 1)",
                    } as CSSProperties
                }
            >
                <p className="absolute left-[15%] top-[9.5rem] font-medium text-[#e3d4ff] text-3xl">
                    Khối 12
                </p>
                <div className="absolute top-[11.75rem] left-[15%] w-[70%]">
                    <p className="font-semibold text-[#d3bfe9] mb-1 text-[0.875rem] leading-[1rem]">
                        Chạm tới chân trời mới
                    </p>
                    <p className="text-[#a095bb] text-[0.85rem] leading-[1rem]">
                        Giải tích, xác suất và những ý tưởng đã cách mạng hóa
                        toán học hiện đại.
                    </p>
                </div>
                <div className="h-[50%] w-[70%] relative top-1">
                    <Khoi12
                        className="size-full translate-x-[5%]"
                        style={{
                            filter: "drop-shadow(-10px 20px 4px #8c46dd8c) brightness(110%)",
                        }}
                    />
                </div>
                <div className="absolute -translate-x-1/2 left-1/2 bottom-[1.5rem] text-white text-lg">
                    <Button3d as={Link} href="/khoi12" variant="purple">
                        <Button3d.Content className="py-[0.5rem] px-[3.3rem] font-medium text-nowrap">
                            Bắt đầu
                        </Button3d.Content>
                        <Button3d.Behind />
                    </Button3d>
                </div>
            </div>
        </div>
    );
}
