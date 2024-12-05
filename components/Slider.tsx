"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Chakra_Petch } from "next/font/google";
import { useAnimate } from "framer-motion";
import ChapterDialog from "./ChapterDialog";
import debounce from "debounce";
import {
    gradeBorderColor,
    colorStop2,
    gradeButtonColor,
    gradeParticleColor,
    circleColor,
    gradeButtonOpenColor,
} from "./static/static";
import { description, chapter } from "./static/chaptersStatic";
import { db } from "@/db";

const firstCord = 20;
const secondCord = 7.5;

class plusParticle {
    angle: number;
    radians: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    gravity: number;
    scale: number;
    color: string;
    scaleTime: number;

    constructor(
        angle: number,
        radians: number,
        gravity: number,
        dx: number,
        dy: number,
        vx: number,
        vy: number,
        scale: number,
        color: string
    ) {
        this.angle = angle;
        this.radians = radians;
        this.x = dx;
        this.y = dy;
        this.vx = vx;
        this.vy = vy;
        this.gravity = gravity;
        this.scale = scale;
        this.color = color;
        this.scaleTime = 0.001;
    }

    draw(ctx: CanvasRenderingContext2D) {
        if (ctx) {
            ctx.save();

            ctx.translate(this.x, this.y);

            ctx.rotate(this.radians);

            ctx.fillStyle = `${this.color}`;

            ctx.beginPath();

            ctx.moveTo(-firstCord / this.scale, -secondCord / this.scale);
            ctx.lineTo(-secondCord / this.scale, -secondCord / this.scale);
            ctx.lineTo(-secondCord / this.scale, -firstCord / this.scale);
            ctx.lineTo(secondCord / this.scale, -firstCord / this.scale);
            ctx.lineTo(secondCord / this.scale, -secondCord / this.scale);
            ctx.lineTo(firstCord / this.scale, -secondCord / this.scale);
            ctx.lineTo(firstCord / this.scale, secondCord / this.scale);
            ctx.lineTo(secondCord / this.scale, secondCord / this.scale);
            ctx.lineTo(secondCord / this.scale, firstCord / this.scale);
            ctx.lineTo(-secondCord / this.scale, firstCord / this.scale);
            ctx.lineTo(-secondCord / this.scale, secondCord / this.scale);
            ctx.lineTo(-firstCord / this.scale, secondCord / this.scale);

            ctx.closePath();

            ctx.stroke();
            ctx.fill();

            ctx.restore();
        }
    }

    update() {
        if (this.angle < 360) this.angle += (Math.abs(this.vy) + 3) / 2.5;
        else this.angle = 0;

        this.radians = (this.angle * Math.PI) / 180;

        this.x += this.vx;
        this.vy += this.gravity;
        this.y -= this.vy;

        if (this.scaleTime < 1) this.scaleTime += 0.01;

        this.scale = 1 / (1 - Math.pow(1 - this.scaleTime, 3));
    }
}

class minusParticle {
    angle: number;
    radians: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    gravity: number;
    scale: number;
    color: string;
    scaleTime: number;

    constructor(
        angle: number,
        radians: number,
        gravity: number,
        dx: number,
        dy: number,
        vx: number,
        vy: number,
        scale: number,
        color: string
    ) {
        this.angle = angle;
        this.radians = radians;
        this.x = dx;
        this.y = dy;
        this.vx = vx;
        this.vy = vy;
        this.gravity = gravity;
        this.scale = scale;
        this.color = color;
        this.scaleTime = 0.001;
    }

    draw(ctx: CanvasRenderingContext2D) {
        if (ctx) {
            ctx.save();

            ctx.translate(this.x, this.y);

            ctx.rotate(this.radians);

            ctx.fillStyle = `${this.color}`;

            ctx.beginPath();

            ctx.moveTo(-secondCord / this.scale, -firstCord / this.scale);
            ctx.lineTo(secondCord / this.scale, -firstCord / this.scale);
            ctx.lineTo(secondCord / this.scale, firstCord / this.scale);
            ctx.lineTo(-secondCord / this.scale, firstCord / this.scale);

            ctx.closePath();

            ctx.stroke();
            ctx.fill();

            ctx.restore();
        }
    }

    update() {
        if (this.angle < 360) this.angle += (Math.abs(this.vy) + 3) / 2.5;
        else this.angle = 0;

        this.radians = (this.angle * Math.PI) / 180;

        this.x += this.vx;
        this.vy += this.gravity;
        this.y -= this.vy;

        if (this.scaleTime < 1) this.scaleTime += 0.01;

        this.scale = 1 / (1 - Math.pow(1 - this.scaleTime, 3));
    }
}

const chakraPetch = Chakra_Petch({ weight: "700", subsets: ["vietnamese"] });

export default function Slider({ id }: { id: number }) {
    const [scope, animate] = useAnimate();

    const [curChapterId, setCurChapterId] = useState<number>(-1);

    const chapterId = useRef<number>(0);
    const chapterContentRef = useRef<HTMLDivElement | null>(null);
    const nextBtnRef = useRef<HTMLDivElement | null>(null);
    const prevBtnRef = useRef<HTMLDivElement | null>(null);
    const middleNextRef = useRef<HTMLDivElement | null>(null);
    const backNextRef = useRef<HTMLDivElement | null>(null);
    const middlePrevRef = useRef<HTMLDivElement | null>(null);
    const backPrevRef = useRef<HTMLDivElement | null>(null);
    const canvasNextRef = useRef<HTMLCanvasElement | null>(null);
    const canvasPrevRef = useRef<HTMLCanvasElement | null>(null);
    const playAnimation = useRef<boolean>(false);

    let stopNextAnimate = false;
    let stopPrevAnimate = false;

    const plusParticleArray: plusParticle[] = [];
    const minusParticleArray: minusParticle[] = [];

    const today = new Date();

    const resizeCanvas = useCallback(
        debounce(() => {
            if (!canvasNextRef.current) return;

            canvasNextRef.current.width = window.innerWidth;
            canvasNextRef.current.height = window.innerHeight - 65;

            if (!canvasPrevRef.current) return;

            canvasPrevRef.current.width = window.innerWidth;
            canvasPrevRef.current.height = window.innerHeight - 65;
        }, 500),
        []
    );

    useEffect(() => {
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, [resizeCanvas]);

    const random = (min: number, max: number) => {
        return min + Math.random() * (max - min);
    };

    const animationPlusLoop = (ctx: CanvasRenderingContext2D) => {
        stopNextAnimate = true;

        let animationId: number;

        const animation = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            plusParticleArray.forEach((plusIcon, idx) => {
                if (plusIcon) {
                    plusIcon.update();
                    plusIcon.draw(ctx);

                    if (
                        plusIcon.y > window.innerHeight + 200 ||
                        plusIcon.x < -500 ||
                        plusIcon.x > window.innerWidth + 200
                    )
                        plusParticleArray.splice(idx, 1);
                }
            });

            if (!plusParticleArray.length) {
                cancelAnimationFrame(animationId);
                stopNextAnimate = false;
            } else animationId = requestAnimationFrame(animation);
        };

        animationId = requestAnimationFrame(animation);

        return () => cancelAnimationFrame(animationId);
    };

    const animationPrevLoop = (ctx: CanvasRenderingContext2D) => {
        stopPrevAnimate = true;

        let animationId: number;

        const animation = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            minusParticleArray.forEach((minusIcon, idx) => {
                if (minusIcon) {
                    minusIcon.update();
                    minusIcon.draw(ctx);

                    if (
                        minusIcon.y > window.innerHeight + 200 ||
                        minusIcon.x < -500 ||
                        minusIcon.x > window.innerWidth + 200
                    )
                        minusParticleArray.splice(idx, 1);
                }
            });

            if (!minusParticleArray.length) {
                cancelAnimationFrame(animationId);
                stopPrevAnimate = false;
            } else animationId = requestAnimationFrame(animation);
        };

        animationId = requestAnimationFrame(animation);

        return () => cancelAnimationFrame(animationId);
    };

    const handleNextMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (
            !nextBtnRef.current ||
            !middleNextRef.current ||
            !backNextRef.current
        )
            return;

        const { left, top, width, height } =
            nextBtnRef.current.getBoundingClientRect();

        const x = (e.clientX - left - width / 2) / 3;
        const y = (e.clientY - top - height / 2) / 3;

        nextBtnRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
        middleNextRef.current.style.transform = `rotateY(${
            x / 0.9
        }deg) rotateX(${-y / 0.9}deg) translateX(${-x / 0.8 + 22}px)`;
        backNextRef.current.style.transform = `rotateY(${
            x / 0.75
        }deg) rotateX(${-y / 0.75}deg) translateX(${-x / 0.5 + 40}px)`;
    };

    const handlePrevMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (
            !prevBtnRef.current ||
            !middlePrevRef.current ||
            !backPrevRef.current
        )
            return;

        const { left, top, width, height } =
            prevBtnRef.current.getBoundingClientRect();

        const x = (e.clientX - left - width / 2) / 3;
        const y = (e.clientY - top - height / 2) / 3;

        prevBtnRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
        middlePrevRef.current.style.transform = `rotateY(${
            x / 0.9
        }deg) rotateX(${-y / 0.9}deg) translateX(${-x / 0.8 - 22}px)`;
        backPrevRef.current.style.transform = `rotateY(${
            x / 0.75
        }deg) rotateX(${-y / 0.75}deg) translateX(${-x / 0.5 - 40}px)`;
    };

    const handleNextClickAnimation = (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        if (
            !nextBtnRef.current ||
            !middleNextRef.current ||
            !backNextRef.current
        )
            return;

        const { left, top, width, height } =
            nextBtnRef.current.getBoundingClientRect();

        const x = (e.clientX - left - width / 2) / 6;
        const y = (e.clientY - top - height / 2) / 2;

        animate(
            "#outerNext",
            {
                transform: [
                    `rotateY(0deg) rotateX(0deg) translateZ(0px)`,
                    `rotateY(${x}deg) rotateX(${-y}deg) translateZ(-15px)`,
                    `rotateY(0deg) rotateX(0deg) translateZ(0px)`,
                ],
            },
            {
                duration: 0.5,
                ease: "easeOut",
            }
        );

        animate(
            "#outerMiddleNext",
            {
                transform: [
                    `rotateY(0deg) rotateX(0deg) translateZ(0px)`,
                    `rotateY(${x / 2}deg) rotateX(${
                        -y / 2
                    }deg) translateZ(-10px)`,
                    `rotateY(0deg) rotateX(0deg) translateZ(0px)`,
                ],
            },
            { duration: 0.5, ease: "easeOut", delay: 0.1 }
        );

        animate(
            "#outerBackNext",
            {
                transform: [
                    `rotateY(0deg) rotateX(0deg) translateZ(0px)`,
                    `rotateY(${x / 4}deg) rotateX(${
                        -y / 4
                    }deg) translateZ(-5px)`,
                    `rotateY(0deg) rotateX(0deg) translateZ(0px)`,
                ],
            },
            { duration: 0.5, ease: "easeOut", delay: 0.05 }
        );

        if (canvasNextRef.current && nextBtnRef.current) {
            const ctx = canvasNextRef.current.getContext("2d");

            const { left, top, right, bottom } =
                nextBtnRef.current.getBoundingClientRect();

            const dx = e.clientX,
                dy = top - 60,
                vx =
                    (dx - (left + (right - left) / 2)) / (20 + random(-10, -5)),
                vy = (bottom - e.clientY) / (30 + random(-15, 15)) + 5;

            plusParticleArray.push(
                new plusParticle(
                    0,
                    0,
                    -0.3,
                    dx,
                    dy,
                    vx,
                    vy,
                    150,
                    gradeParticleColor[id]
                )
            );

            if (!stopNextAnimate && ctx) animationPlusLoop(ctx);
        }
    };

    const handlePrevClickAnimation = (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        if (
            !prevBtnRef.current ||
            !middlePrevRef.current ||
            !backPrevRef.current
        )
            return;

        const { left, top, width, height } =
            prevBtnRef.current.getBoundingClientRect();

        const x = (e.clientX - left - width / 2) / 6;
        const y = (e.clientY - top - height / 2) / 2;

        animate(
            "#outerPrev",
            {
                transform: [
                    `rotateY(0deg) rotateX(0deg) translateZ(0px)`,
                    `rotateY(${x}deg) rotateX(${-y}deg) translateZ(-15px)`,
                    `rotateY(0deg) rotateX(0deg) translateZ(0px)`,
                ],
            },
            {
                duration: 0.5,
                ease: "easeOut",
            }
        );

        animate(
            "#outerMiddlePrev",
            {
                transform: [
                    `rotateY(0deg) rotateX(0deg) translateZ(0px)`,
                    `rotateY(${x / 2}deg) rotateX(${
                        -y / 2
                    }deg) translateZ(-10px)`,
                    `rotateY(0deg) rotateX(0deg) translateZ(0px)`,
                ],
            },
            { duration: 0.5, ease: "easeOut", delay: 0.1 }
        );

        animate(
            "#outerBackPrev",
            {
                transform: [
                    `rotateY(0deg) rotateX(0deg) translateZ(0px)`,
                    `rotateY(${x / 4}deg) rotateX(${
                        -y / 4
                    }deg) translateZ(-5px)`,
                    `rotateY(0deg) rotateX(0deg) translateZ(0px)`,
                ],
            },
            { duration: 0.5, ease: "easeOut", delay: 0.05 }
        );

        if (canvasPrevRef.current && prevBtnRef.current) {
            const ctx = canvasPrevRef.current.getContext("2d");

            const { left, top, right, bottom } =
                prevBtnRef.current.getBoundingClientRect();

            const dx = e.clientX,
                dy = top - 70,
                vx =
                    (dx - (left + (right - left) / 2)) / (20 + random(-10, -5)),
                vy = (bottom - e.clientY) / (30 + random(-15, 15)) + 5;

            minusParticleArray.push(
                new minusParticle(
                    0,
                    0,
                    -0.3,
                    dx,
                    dy,
                    vx,
                    vy,
                    150,
                    gradeParticleColor[id]
                )
            );

            if (!stopPrevAnimate && ctx) animationPrevLoop(ctx);
        }
    };

    const handleIncreaseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        chapterId.current = (chapterId.current + 1) % chapter[id].length;

        if (chapterContentRef.current) {
            chapterContentRef.current.textContent =
                chapter[id][chapterId.current];
        }

        animate(
            "#chapterTitle1",
            {
                transform: ["translateY(-80px)", "translateY(0px)"],
                color: ["rgba(0,0,0,0)", "rgba(0,0,0,1)"],
            },
            {
                type: "spring",
                bounce: 0.7,
            }
        );

        chapter[id].forEach((_, idx) => {
            animate(
                `#chapterCard${idx}`,
                {
                    offsetDistance: `${
                        50 +
                        (100 / chapter[id].length) * (idx - chapterId.current)
                    }%`,
                },
                {
                    type: "spring",
                    stiffness: 150,
                    damping: 30,
                    mass: 5,
                }
            );
        });

        handleNextClickAnimation(e);
    };

    const handleDecreaseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        chapterId.current =
            (chapterId.current + chapter[id].length - 1) % chapter[id].length;

        if (chapterContentRef.current) {
            chapterContentRef.current.textContent =
                chapter[id][chapterId.current];
        }

        animate(
            "#chapterTitle1",
            {
                transform: ["translateY(80px)", "translateY(0px)"],
                color: ["rgba(0,0,0,0)", "rgba(0,0,0,1)"],
            },
            {
                type: "spring",
                bounce: 0.7,
            }
        );

        chapter[id].map((_, idx) => {
            animate(
                `#chapterCard${idx}`,
                {
                    offsetDistance: `${
                        50 +
                        (100 / chapter[id].length) * (idx - chapterId.current)
                    }%`,
                },
                {
                    type: "spring",
                    stiffness: 150,
                    damping: 30,
                    mass: 5,
                }
            );
        });

        handlePrevClickAnimation(e);
    };

    const handleNextButtonEnter = () => {
        animate(
            "#nextButton",
            {
                transform: "translate(15px, -10px)",
            },
            { type: "spring" }
        );

        animate(
            "#middleNext",
            {
                transform: "translate(5px, -5px)",
                opacity: 0.75,
            },
            { type: "spring" }
        );

        animate(
            "#backNext",
            {
                transform: "translate(-5px)",
                opacity: 0.5,
            },
            { type: "spring" }
        );

        animate("#innerNextItems", {
            transform: "translateZ(10px)",
        });
    };

    const handleNextButtonLeave = () => {
        animate(
            "#nextButton",
            {
                transform: "translate(0px, 0px)",
            },
            { type: "spring" }
        );

        animate(
            "#middleNext",
            {
                transform: "translate(0px, 0px)",
                opacity: 0,
            },
            { type: "spring" }
        );

        animate(
            "#backNext",
            {
                transform: "translate(0px)",
                opacity: 0,
            },
            { type: "spring" }
        );

        animate("#innerNextItems", {
            transform: "translateZ(0px)",
        });

        if (
            nextBtnRef.current &&
            middleNextRef.current &&
            backNextRef.current
        ) {
            nextBtnRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
            middleNextRef.current.style.transform =
                "rotateY(0deg) rotateX(0deg)";
            backNextRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
        }
    };

    const handlePrevButtonEnter = () => {
        animate(
            "#prevButton",
            {
                transform: "translate(-15px, -10px)",
            },
            { type: "spring" }
        );

        animate(
            "#middlePrev",
            {
                transform: "translate(-5px, -5px)",
                opacity: 0.75,
            },
            { type: "spring" }
        );

        animate(
            "#backPrev",
            {
                transform: "translate(5px)",
                opacity: 0.5,
            },
            { type: "spring" }
        );

        animate("#innerPrevItems", {
            transform: "translateZ(10px)",
        });
    };

    const handlePrevButtonLeave = () => {
        animate(
            "#prevButton",
            {
                transform: "translate(0px, 0px)",
            },
            { type: "spring" }
        );

        animate(
            "#middlePrev",
            {
                transform: "translate(0px, 0px)",
                opacity: 0,
            },
            { type: "spring" }
        );

        animate(
            "#backPrev",
            {
                transform: "translate(0px)",
                opacity: 0,
            },
            { type: "spring" }
        );

        animate("#innerPrevItems", {
            transform: "translateZ(0px)",
        });

        if (
            prevBtnRef.current &&
            middlePrevRef.current &&
            backPrevRef.current
        ) {
            prevBtnRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
            middlePrevRef.current.style.transform =
                "rotateY(0deg) rotateX(0deg)";
            backPrevRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
        }
    };

    const handleOpenDialog = async (idx: number) => {
        setCurChapterId(idx);

        try {
            await db.chapterData.put({
                id: 1,
                curGrade: id,
                curChapter: idx,
            });
        } catch (err) {
            console.log(err);
        }
    };

    const handleCloseDialog = async () => {
        setCurChapterId(-1);

        try {
            await db.chapterData.put({
                id: 1,
                curGrade: id,
                curChapter: -1,
            });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const fetchCurChapter = async () => {
            const openChapter = await db.chapterData.get(1);

            if (openChapter) setCurChapterId(openChapter.curChapter);

            setTimeout(() => (playAnimation.current = true), 100);
        };

        fetchCurChapter();
    }, []);

    return (
        <div ref={scope}>
            <canvas
                ref={canvasNextRef}
                className="fixed z-20 pointer-events-none"
            />
            <canvas
                ref={canvasPrevRef}
                className="fixed z-20 pointer-events-none"
            />
            <div className="absolute w-screen overflow-hidden top-0 left-0 h-[550px] flex justify-center">
                <svg
                    width={2400}
                    height={500}
                    viewBox="0 0 2400 500"
                    className="absolute xxlg:stroke-[3.25px] sm:stroke-[2.5px] stroke-[1.75px] xxlg:scale-125 scale-100 xxlg:translate-y-28 translate-y-10"
                >
                    <path
                        d="M1200 550 L100 550 C -100 -40 2500 -40 2300 550 Z"
                        stroke="black"
                        fill="none"
                    />
                </svg>
                <div className="absolute overflow-hidden xxlg:scale-125 scale-100 xxlg:translate-y-[6.75rem] translate-y-10 w-[2400px] h-[485px]">
                    {chapter[id].map((_, idx) => (
                        <div
                            key={idx}
                            id={`chapterCard${idx}`}
                            className="absolute sm:translate-y-[7.5px] translate-y-[5px]"
                            style={{
                                offsetPath:
                                    "path('M1200 550 L100 550 C -100 -42 2500 -42 2300 550 Z')",
                                offsetDistance: `${
                                    50 + (100 / chapter[id].length) * idx
                                }%`,
                            }}
                        >
                            <svg
                                viewBox="-2 -2 129 34"
                                className="xxlg:w-[340px] xxlg:h-[85px] sm:w-[400px] sm:h-[100px] w-[360px] h-[90px]"
                            >
                                <defs>
                                    <linearGradient
                                        id={`chapterCardGradient${idx}`}
                                        y1="0%"
                                        y2="0%"
                                        x1="0%"
                                        x2="100%"
                                    >
                                        <stop
                                            stopColor={colorStop2[id][idx][0]}
                                            offset="0%"
                                        />
                                        <stop
                                            stopColor={colorStop2[id][idx][1]}
                                            offset="100%"
                                        />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M124.8,15.1c0,0-6.6,0-10.5-12.4c-0.1-0.2-1-2.7-2.2-2.7H12.6c-1.2,0-2.1,2.5-2.2,2.7C6.7,15.1,0,15.1,0,15.1
                                    s6.6,0,10.5,12.4c0.1,0.2,1,2.7,2.2,2.7h99.5c1.2,0,2.1-2.5,2.2-2.7C118.1,15.1,124.8,15.1,124.8,15.1z"
                                    fill={`url(#chapterCardGradient${idx})`}
                                    stroke="black"
                                    strokeWidth={1}
                                />
                                <circle
                                    cx="124.8"
                                    cy="15.1"
                                    r="1.3"
                                    fill={circleColor[id]}
                                    stroke="black"
                                    strokeWidth={1}
                                />
                                <circle
                                    cx="0"
                                    cy="15.1"
                                    r="1.3"
                                    fill={circleColor[id]}
                                    stroke="black"
                                    strokeWidth={1}
                                />
                                <foreignObject
                                    x={-2}
                                    y={-2}
                                    className="w-[129px] h-[34px]"
                                >
                                    <div
                                        className={`${chakraPetch.className} w-full h-full flex justify-center items-center`}
                                    >
                                        Chương {idx + 1}
                                    </div>
                                </foreignObject>
                            </svg>
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-[calc(100dvh-64px)] flex justify-between relative z-10">
                <div className="flex-1 h-full items-end flex justify-end pt-[550px] xxlg:pb-[10vh] pb-8">
                    <div className=" bg-gray-50 border-[2.5px] border-gray-300 rounded-[30px] max-w-[460px] w-full max-h-[300px] px-7 py-5 lg3:flex flex-col hidden">
                        <div className="flex flex-row items-center justify-normal gap-3">
                            <svg
                                viewBox="-100 -100 200 200"
                                height={100}
                                width={100}
                            >
                                <circle
                                    cy={0}
                                    cx={0}
                                    r={75}
                                    fill="none"
                                    strokeDasharray={475}
                                    strokeDashoffset={474}
                                    strokeWidth={13}
                                    strokeLinecap="round"
                                    className="rotate-[-90deg] stroke-[rgba(0,0,0,0.5)]"
                                />
                                <circle
                                    cy={0}
                                    cx={0}
                                    r={75}
                                    fill="none"
                                    strokeWidth={13}
                                    strokeLinecap="round"
                                    className="rotate-[-90deg] stroke-[rgba(0,0,0,0.1)]"
                                />
                                <foreignObject
                                    x={-100}
                                    y={-100}
                                    width={200}
                                    height={200}
                                >
                                    <div className="w-full h-full flex justify-center items-center text-[3rem]">
                                        0
                                    </div>
                                </foreignObject>
                            </svg>
                            <div className="flex flex-col gap-2">
                                <div className="text-4xl font-bold">Chuỗi</div>
                                <div className="max-w-[17.5rem] text-[14px]">
                                    Khám phá một số câu chuyện lịch sử hoặc giải
                                    các câu đố để bắt đầu chuỗi 🔥
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            {[
                                "T.2",
                                "T.3",
                                "T.4",
                                "T.5",
                                "T.6",
                                "T.7",
                                "C.N",
                            ].map((day, idx) => {
                                const dateCondition =
                                    Number(today.getDay()) === (idx + 1) % 7
                                        ? true
                                        : false;

                                return (
                                    <div
                                        key={idx}
                                        className="flex flex-col lg3:gap-0 gap-2 items-center"
                                    >
                                        <div className="max-h-[100px] h-[50vh] w-[44px] flex justify-center">
                                            <svg
                                                viewBox="0 0 100 100"
                                                className={`h-full ${
                                                    dateCondition
                                                        ? "w-[44px]"
                                                        : "w-[36px]"
                                                }`}
                                            >
                                                <path
                                                    d="M48.83 3.38a1.24 1.24 0 0 1 2.373 0l4.498 15.083a38.466 38.466 0 0 0 25.871 25.872l15.083 4.498a1.24 1.24 0 0 1 0 2.372l-15.083 4.498a38.466 38.466 0 0 0-25.87 25.871l-4.499 15.083a1.24 1.24 0 0 1-2.372 0l-4.498-15.083a38.466 38.466 0 0 0-25.872-25.87L3.38 51.204a1.24 1.24 0 0 1 0-2.372l15.082-4.498a38.466 38.466 0 0 0 25.872-25.872L48.83 3.381z"
                                                    fill={
                                                        dateCondition
                                                            ? "rgb(200, 200 ,200)"
                                                            : "rgb(230, 230 ,230)"
                                                    }
                                                    stroke={`rgb(${
                                                        dateCondition
                                                            ? "50, 50, 50"
                                                            : "100, 100, 100"
                                                    })`}
                                                    strokeWidth={
                                                        dateCondition ? 3 : 2
                                                    }
                                                />
                                            </svg>
                                        </div>
                                        <div className="h-[2.5px] w-[50px] bg-gray-500 lg3:block hidden" />
                                        <span
                                            className={`${
                                                dateCondition
                                                    ? "font-bold"
                                                    : "font-normal"
                                            }`}
                                        >
                                            {day}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between h-full flex-1 sm:min-w-[500px] min-w-[300px] xxlg:pb-[15vh] pb-8">
                    <div className="flex flex-col items-center xxlg:gap-[10vh] gap-10 xxlg:pt-[30vh] pt-[15rem] md:px-0 px-5">
                        <div className="sm:text-[2rem] leading-[2.25rem] text-2xl font-light text-center md:px-12 px-3 h-24">
                            <div
                                id="chapterTitle1"
                                ref={chapterContentRef}
                                style={{
                                    color: "rgba(0,0,0,1)",
                                }}
                            >
                                {chapter[id][0]}
                            </div>
                        </div>
                        <button
                            onClick={() => handleOpenDialog(chapterId.current)}
                            className={`${gradeButtonOpenColor[id]} transition-colors ease-out duration-500 text-white gap-2 rounded-full sm:px-[20px] sm:py-[12.5px] px-5 py-2 mt-10 sm:mt-3 font-[550] flex items-center sm:text-xl text-lg select-none`}
                        >
                            <svg
                                viewBox="-10 -5 20 10"
                                className="h-[10px] w-[20px] sm:h-[11px] sm:w-[32px]"
                            >
                                <path
                                    d="M-9 -2.5 L9 -2.5 M-1 2.5 L9 2.5"
                                    stroke="white"
                                    fill="none"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth={2}
                                />
                            </svg>
                            Mở
                            <svg
                                viewBox="-10 -5 20 10"
                                className="h-[10px] w-[20px] sm:h-[11px] sm:w-[22px] ml-1"
                            >
                                <path
                                    d="M-9 -2.5 L9 -2.5 M1 2.5 L-9 2.5"
                                    stroke="white"
                                    fill="none"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth={2}
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="select-none flex justify-center sm:gap-8 gap-4 sm:text-xl text-lg sm:*:w-40 sm:*:h-[60px] *:w-36 *:h-14">
                        <div
                            className="absolute h-full sm:*:right-[92px] *:right-[60px] -z-10"
                            style={{
                                perspective: "300px",
                                transformStyle: "preserve-3d",
                            }}
                        >
                            <div
                                id="middlePrev"
                                className="h-12 w-36 absolute opacity-0 sm:bottom-0 bottom-[-6px]"
                                style={{
                                    perspective: "450px",
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <div
                                    id="outerMiddlePrev"
                                    style={{
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    <div
                                        ref={middlePrevRef}
                                        className={`rounded-full border-[1.75px] ${gradeBorderColor[id]} sm:h-12 sm:w-36 h-[2.75rem] w-32 absolute transition-all duration-200 ease-linear`}
                                    />
                                </div>
                            </div>
                            <div
                                id="backPrev"
                                className="h-10 w-32 absolute opacity-0 sm:bottom-0 bottom-[-7.5px]"
                                style={{
                                    perspective: "450px",
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <div
                                    id="outerBackPrev"
                                    style={{
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    <div
                                        ref={backPrevRef}
                                        className={`rounded-full border-[1.5px] ${gradeBorderColor[id]} sm:h-10 sm:w-32 h-[2.25rem] w-28 absolute transition-all duration-200 ease-linear`}
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            onMouseEnter={handlePrevButtonEnter}
                            onMouseLeave={handlePrevButtonLeave}
                            onClick={handleDecreaseClick}
                            onMouseMove={handlePrevMouseMove}
                            id="prevButton"
                            style={{
                                perspective: "450px",
                                transformStyle: "preserve-3d",
                            }}
                            className="group"
                        >
                            <div
                                id="outerPrev"
                                className="w-full h-full"
                                style={{
                                    perspective: "450px",
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <div
                                    ref={prevBtnRef}
                                    className={`rounded-full items-center flex justify-center h-full w-full ${gradeButtonColor[id]} text-white font-semibold transition-all duration-200 ease-linear`}
                                    style={{
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    <div
                                        className="flex gap-3 justify-center items-center"
                                        id="innerPrevItems"
                                    >
                                        <svg
                                            viewBox="-10 -10 20 20"
                                            className="w-[20px] h-[20px] sm:w-[22.5px] sm:h-[22.5px]"
                                        >
                                            <path
                                                d="M9 0 L-9 0 L0 -8 M-9 0 L0 8"
                                                stroke="white"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                            />
                                        </svg>
                                        Quay lại
                                    </div>
                                </div>
                            </div>
                        </button>
                        <div
                            className="absolute h-full sm:*:left-[92px] *:left-[75px] -z-10"
                            style={{
                                perspective: "300px",
                                transformStyle: "preserve-3d",
                            }}
                        >
                            <div
                                id="middleNext"
                                className="h-12 w-36 absolute opacity-0 sm:bottom-0 bottom-[-6px]"
                                style={{
                                    perspective: "450px",
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <div
                                    id="outerMiddleNext"
                                    style={{
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    <div
                                        ref={middleNextRef}
                                        className={`rounded-full border-[1.75px] ${gradeBorderColor[id]} sm:h-12 sm:w-36 h-[2.75rem] w-32 relative transition-all duration-200 ease-linear`}
                                    />
                                </div>
                            </div>
                            <div
                                id="backNext"
                                className="h-10 w-32 absolute opacity-0 sm:bottom-0 bottom-[-7.5px]"
                                style={{
                                    perspective: "450px",
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <div
                                    id="outerBackNext"
                                    style={{
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    <div
                                        ref={backNextRef}
                                        className={`rounded-full border-[1.5px] ${gradeBorderColor[id]} sm:h-10 sm:w-32 h-[2.25rem] w-28 relative transition-all duration-200 ease-linear`}
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            onMouseEnter={handleNextButtonEnter}
                            onMouseLeave={handleNextButtonLeave}
                            onClick={handleIncreaseClick}
                            onMouseMove={handleNextMouseMove}
                            id="nextButton"
                            style={{
                                perspective: "450px",
                                transformStyle: "preserve-3d",
                            }}
                            className="group"
                        >
                            <div
                                id="outerNext"
                                className="w-full h-full"
                                style={{
                                    perspective: "450px",
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <div
                                    ref={nextBtnRef}
                                    className={`rounded-full items-center flex justify-center h-full w-full ${gradeButtonColor[id]} text-white font-semibold transition-all duration-200 ease-linear`}
                                    style={{
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    <div
                                        className="flex gap-3 justify-center items-center"
                                        id="innerNextItems"
                                    >
                                        Tiếp theo
                                        <svg
                                            viewBox="-10 -10 20 20"
                                            className="w-[20px] h-[20px] sm:w-[22.5px] sm:h-[22.5px]"
                                        >
                                            <path
                                                d="M-9 0 L9 0 L0 -8 M9 0 L0 8"
                                                stroke="white"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex items-end flex-1 pt-[550px] xxlg:pb-[10vh] pb-8">
                    <div className=" bg-gray-50 border-[2.5px] border-gray-300 rounded-[30px] w-[460px] max-h-[271.3px] px-7 py-5 lg3:flex hidden lg3:flex-col justify-end">
                        <div className="text-4xl font-bold ml-auto">Notes</div>
                        <div className="h-[300px] w-full flex justify-center items-center text-gray-700">
                            {`Hiện tại bạn chưa note gì hết:(`}
                        </div>
                    </div>
                </div>
            </div>
            {curChapterId !== -1 && (
                <ChapterDialog
                    chapterTitle={chapter[id][curChapterId]}
                    id={id}
                    idx={curChapterId}
                    description={description}
                    playAnimation={playAnimation.current}
                    handleCloseDialog={handleCloseDialog}
                />
            )}
        </div>
    );
}
