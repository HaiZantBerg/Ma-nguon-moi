"use client";

import { useAnimate } from "framer-motion";
import React, { useEffect } from "react";

export default function FlipCard({
    children,
    title,
    idxs,
    triggerCloseCard,
}: {
    children: React.ReactNode;
    title: string;
    idxs: number;
    triggerCloseCard: () => void;
}) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            "#backdrop",
            {
                opacity: [0, 1],
            },
            { duration: 0.5 }
        );
        animate(
            "#flipCard",
            {
                transform: [
                    "rotateY(180deg) scale(0.35)",
                    "rotateY(0deg) scale(1)",
                ],
            },
            {
                duration: 0.1,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 2,
            }
        );
    }, []);

    const closeCard = async () => {
        animate(
            "#backdrop",
            {
                opacity: [1, 0.25],
            },
            { duration: 0.5 }
        );

        await animate(
            "#flipCard",
            {
                transform: [
                    "rotateY(0deg) scale(1)",
                    "rotateY(180deg) scale(0.35)",
                ],
            },
            {
                duration: 0.1,
                type: "spring",
                stiffness: 200,
                damping: 30,
                mass: 0.075,
            }
        );

        triggerCloseCard();
    };

    return (
        <div
            className="fixed z-[100] w-screen h-screen -left-[2.5vw] -bottom-[2.5vh] flex items-center justify-center"
            style={{
                perspective: "750px",
            }}
            ref={scope}
        >
            <div
                className="absolute top-0 left-0 w-screen h-screen -z-10"
                style={{
                    background: "rgba(0, 0, 0, 0.75)",
                }}
                id="backdrop"
                onClick={closeCard}
            />
            <div
                className="relative w-[82.22vh] h-[92.5vh]"
                style={{
                    transformStyle: "preserve-3d",
                }}
                id="flipCard"
            >
                <div
                    className="relative top-[50%]"
                    style={{
                        aspectRatio: 8 / 9,
                        transformStyle: "preserve-3d",
                        transform: "translateY(-50%)",
                    }}
                >
                    <svg viewBox="-160 -180 320 360">
                        <path
                            d="M-120 -177.5 L120 -177.5 L157.5 -140 L157.5 140 L120 177.5 L-120 177.5 L-157.5 140 L-157.5 -140 Z"
                            strokeWidth="3"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            className="stroke-[rgb(25,25,25)]"
                            fill="white"
                        />
                    </svg>
                    <div
                        className="w-full h-full absolute top-0 left-0"
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <div
                            className="text-[55px] leading-[60px] flex justify-center h-full items-center w-full absolute left-0 top-0 font-semibold px-[40px] text-center overflow-hidden"
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "translateZ(-1px) scale(-1, 1)",
                            }}
                        >
                            <div
                                style={{
                                    transform: "translateY(50%)",
                                }}
                            >
                                {idxs + 1}.
                                <br />
                                {title}
                            </div>
                        </div>
                        <div
                            className="w-full h-full flex justify-between flex-col items-center absolute top-0 left-0 px-11 pt-[10%] pb-10"
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "translateZ(1px)",
                            }}
                        >
                            <div
                                className="text-[20px] leading-[24px] w-full font-medium px-2 text-center overflow-y-auto"
                                style={{
                                    aspectRatio: 8 / 9,
                                }}
                            >
                                {children}
                            </div>
                            <div>
                                <button
                                    className="rounded-full border-2 border-black font-semibold px-5 py-2"
                                    onClick={closeCard}
                                >
                                    Thoát
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
