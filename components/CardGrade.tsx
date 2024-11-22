"use client";

import React from "react";
import { useAnimate } from "framer-motion";
import Link from "next/link";
import { Chakra_Petch } from "next/font/google";

const chakraPetch = Chakra_Petch({ weight: "700", subsets: ["vietnamese"] });

export default function GradeCard() {
    const [scope, animate] = useAnimate();

    const handleMouseEnter = (index: number) => {
        animate(
            `#blank${index}`,
            {
                fill: "hsla(360, 100%, 100%, 0)",
            },
            {
                ease: "easeIn",
            }
        );
        animate(
            `#arrow${index}`,
            {
                rotate: 360,
                scale: [1, 0.75, 1],
            },
            {
                ease: "easeIn",
                type: "spring",
                stiffness: 150,
                damping: 30,
            }
        );
        animate(
            `#box${index}`,
            {
                rotate: 4,
                scale: 1.05,
            },
            {
                duration: 0.1,
                ease: "easeIn",
                type: "spring",
                stiffness: 300,
            }
        );
    };
    const handleMouseLeave = (index: number) => {
        animate(
            `#blank${index}`,
            {
                fill: "hsla(360, 100%, 100%, 1)",
            },
            {
                ease: "easeIn",
            }
        );
        animate(
            `#arrow${index}`,
            {
                rotate: 0,
            },
            {
                ease: "easeIn",
                type: "spring",
                stiffness: 200,
                damping: 20,
                mass: 4,
            }
        );
        animate(
            `#box${index}`,
            {
                rotate: 0,
                scale: 1,
            },
            {
                duration: 0.1,
                ease: "easeIn",
                type: "spring",
                stiffness: 300,
                mass: 3,
            }
        );
    };

    return (
        <div
            ref={scope}
            className="flex xl:flex-row flex-col justify-between text-white"
        >
            <Link id="box1" href="/khoi-10" className="flex">
                <svg
                    viewBox="0 0 313.35 227.35"
                    width="313.3457"
                    height="227.3457"
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                >
                    <defs>
                        <radialGradient
                            id="radial-gradient"
                            cx="298.63"
                            cy="399.86"
                            fx="0"
                            fy="500"
                            r="374.49"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.01" stopColor="#122615" />
                            <stop offset="0.09" stopColor="#103221" />
                            <stop offset="0.28" stopColor="#0d4939" />
                            <stop offset="0.49" stopColor="#0b5a4a" />
                            <stop offset="0.72" stopColor="#096454" />
                            <stop offset="1" stopColor="#096757" />
                        </radialGradient>
                    </defs>
                    <path
                        d="M425,286.36H185.63a43.5,43.5,0,0,0-43.5,43.5v140a43.49,43.49,0,0,0,43.5,43.5h226a43.5,43.5,0,0,0,43.5-43.5V316.49A30.13,30.13,0,0,0,425,286.36Z"
                        transform="translate(-142.13 -286.02)"
                        fill="url(#radial-gradient)"
                    />
                    <path
                        d="M425.13,346.69a30.34,30.34,0,0,1,0-60.67H356a33.17,33.17,0,0,1,33.17,33.16,33.17,33.17,0,0,0,33.17,33.17,33.17,33.17,0,0,1,33.16,33.17V316.35A30.34,30.34,0,0,1,425.13,346.69Z"
                        transform="translate(-142.13 -286.02)"
                        id="blank1"
                        fill="hsla(360, 100%, 100%, 1)"
                    />
                    <foreignObject
                        x={265}
                        y={10}
                        width={37}
                        height={37}
                        viewBox="-18.5 -18.5 37 37"
                    >
                        <div id="arrow1">
                            <svg
                                x={265}
                                y={10}
                                width={37}
                                height={37}
                                viewBox="-18.5 -18.5 37 37"
                            >
                                <path
                                    d="M-15 0 L15 0 L4 -11 M15 0 L4 11"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    style={{
                                        transform: "rotate(-45deg)",
                                    }}
                                />
                            </svg>
                        </div>
                    </foreignObject>
                    <foreignObject
                        x={40}
                        y={95}
                        width="250.3457"
                        height="227.3457"
                    >
                        <div className="flex flex-col gap-3">
                            <div
                                className={`text-2xl ${chakraPetch.className}`}
                            >
                                KHỐI 10
                            </div>
                            <div className="text-gray-300 text-xs">
                                Khởi đầu hành trình khám phá lịch sử toán học,
                                từ đóng góp của các nền văn minh cổ đại trong
                                đại số và hình học đến những đột phá vào những
                                năm 1900.
                            </div>
                        </div>
                    </foreignObject>
                </svg>
            </Link>
            <Link id="box2" href="/khoi-11" className="flex justify-end">
                <svg
                    viewBox="0 0 313.15 227.35"
                    width="313.3457"
                    height="227.3457"
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={() => handleMouseLeave(2)}
                >
                    <defs>
                        <radialGradient
                            id="radial-gradient1"
                            cx="298.82"
                            cy="399.52"
                            fx="55.36404348292436"
                            fy="415.78112393207647"
                            r="292.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.01" stopColor="#100f3c" />
                            <stop offset="0.09" stopColor="#0d1b44" />
                            <stop offset="0.28" stopColor="#083353" />
                            <stop offset="0.49" stopColor="#04445e" />
                            <stop offset="0.72" stopColor="#024e65" />
                            <stop offset="1" stopColor="#015167" />
                        </radialGradient>
                    </defs>
                    <path
                        d="M425.19,513H185.82a43.5,43.5,0,0,1-43.5-43.5v-140a43.49,43.49,0,0,1,43.5-43.5h226a43.5,43.5,0,0,1,43.5,43.5V482.89A30.13,30.13,0,0,1,425.19,513Z"
                        transform="translate(-142.32 -286.02)"
                        fill="url(#radial-gradient1)"
                    />
                    <path
                        d="M425.23,452.63a30.49,30.49,0,0,0,0,61H355.72a33.34,33.34,0,0,0,33.34-33.33A33.33,33.33,0,0,1,422.39,447a33.34,33.34,0,0,0,33.33-33.34v69.51A30.49,30.49,0,0,0,425.23,452.63Z"
                        transform="translate(-142.32 -286.02)"
                        id="blank2"
                        fill="white"
                    />

                    <foreignObject
                        x={265}
                        y={177.3457}
                        width={37}
                        height={37}
                        viewBox="-18.5 -18.5 37 37"
                    >
                        <div id="arrow2">
                            <svg
                                x={265}
                                y={177.3457}
                                width={37}
                                height={37}
                                viewBox="-18.5 -18.5 37 37"
                            >
                                <path
                                    d="M-15 0 L15 0 L4 -11 M15 0 L4 11"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    style={{
                                        transform: "rotate(-45deg)",
                                    }}
                                />
                            </svg>
                        </div>
                    </foreignObject>
                    <foreignObject
                        x={40}
                        y={30}
                        width="250.3457"
                        height="227.3457"
                    >
                        <div className="flex flex-col gap-3">
                            <div
                                className={`text-2xl ${chakraPetch.className}`}
                            >
                                KHỐI 11
                            </div>
                            <div className="text-gray-300 text-xs">
                                Tìm hiểu sâu hơn về sự phát triển của đại số,
                                lượng giác và những ý tưởng mang tính cải cách
                                đã định hình nên toán học hiện đại.
                            </div>
                        </div>
                    </foreignObject>
                </svg>
            </Link>
            <Link id="box3" href="/khoi-12" className="flex">
                <svg
                    viewBox="0 0 313.35 227.35"
                    width="313.3457"
                    height="227.3457"
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={() => handleMouseLeave(3)}
                >
                    <defs>
                        <radialGradient
                            id="radial-gradient2"
                            cx="298.63"
                            cy="399.86"
                            fx="0"
                            fy="500"
                            r="374.49"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.01" stopColor="#8e53a1" />
                            <stop offset="0.02" stopColor="#8b519f" />
                            <stop offset="0.19" stopColor="#6d408a" />
                            <stop offset="0.36" stopColor="#55337a" />
                            <stop offset="0.54" stopColor="#44296f" />
                            <stop offset="0.75" stopColor="#3a2468" />
                            <stop offset="1" stopColor="#372266" />
                        </radialGradient>
                    </defs>
                    <path
                        d="M425,286.36H185.63a43.5,43.5,0,0,0-43.5,43.5v140a43.49,43.49,0,0,0,43.5,43.5h226a43.5,43.5,0,0,0,43.5-43.5V316.49A30.13,30.13,0,0,0,425,286.36Z"
                        transform="translate(-142.13 -286.02)"
                        fill="url(#radial-gradient2)"
                    />
                    <path
                        d="M425.13,346.69a30.34,30.34,0,0,1,0-60.67H356a33.17,33.17,0,0,1,33.17,33.16,33.17,33.17,0,0,0,33.17,33.17,33.17,33.17,0,0,1,33.16,33.17V316.35A30.34,30.34,0,0,1,425.13,346.69Z"
                        transform="translate(-142.13 -286.02)"
                        id="blank3"
                        fill="white"
                    />
                    <foreignObject
                        x={265}
                        y={10}
                        width={37}
                        height={37}
                        viewBox="-18.5 -18.5 37 37"
                    >
                        <div id="arrow3">
                            <svg
                                x={265}
                                y={10}
                                width={37}
                                height={37}
                                viewBox="-18.5 -18.5 37 37"
                            >
                                <path
                                    d="M-15 0 L15 0 L4 -11 M15 0 L4 11"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    style={{
                                        transform: "rotate(-45deg)",
                                    }}
                                />
                            </svg>
                        </div>
                    </foreignObject>
                    <foreignObject
                        x={40}
                        y={95}
                        width="250.3457"
                        height="227.3457"
                    >
                        <div className="flex flex-col gap-3">
                            <div
                                className={`text-2xl ${chakraPetch.className}`}
                            >
                                KHỐI 12
                            </div>
                            <div className="text-gray-300 text-xs">
                                Khám phá những bước tiến từ giải tích đến lý
                                thuyết xác suất, và xem cách những ý tưởng phát
                                triển này đã biến đổi tư duy toán học qua thời
                                gian.
                            </div>
                        </div>
                    </foreignObject>
                </svg>
            </Link>
        </div>
    );
}
