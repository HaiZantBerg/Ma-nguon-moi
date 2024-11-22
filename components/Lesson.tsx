import React from "react";
import { Chakra_Petch } from "next/font/google";
import { Landmark, Timeline } from "@/Svg/Timeline";
import Link from "next/link";
// import Drawer from "./Drawer";
// import Image from "next/image";
// import Aristotle from "@/Image/image-removebg-preview.png";
// import GeorgeBoole from "@/Image/george-boole.png";
import { useAnimate } from "framer-motion";

const chakraPetch = Chakra_Petch({ weight: "700", subsets: ["vietnamese"] });

const MdTh = () => {
    const [scope, animate] = useAnimate();

    const handleZoomOutClick = () => {
        animate(
            "#landmarkContainer",
            {
                height: "200%",
            },
            {
                duration: 1,
            }
        );

        animate(
            "#landmarkContainer",
            {
                overflow: "visible",
            },
            {
                delay: 1,
                duration: 0.1,
            }
        );

        animate(
            "#timeline1",
            {
                opacity: [0, 1],
            },
            {
                duration: 1,
            }
        );

        animate(
            "#timeline1",
            {
                overflow: "visible",
            },
            {
                delay: 1,
                duration: 0.1,
            }
        );

        animate(
            "#landmark",
            {
                transform: ["scale(3.25)", "scale(1)"],
            },
            {
                duration: 1,
            }
        );

        animate(
            "#buttonContainer",
            {
                display: "block",
            },
            {
                duration: 0.1,
            }
        );

        animate(
            "#zoomOutButton",
            { display: "none", opacity: [1, 0] },
            {
                duration: 1,
                ease: "easeIn",
            }
        );
    };

    const handleLandmarkClick = () => {
        animate(
            "#landmarkContainer",
            {
                height: "100%",
                overflow: "hidden",
            },
            {
                duration: 1,
            }
        );

        animate(
            "#timeline1",
            {
                opacity: [1, 0],
            },
            {
                duration: 1,
            }
        );

        animate(
            "#timeline1",
            {
                overflow: "hidden",
            },
            {
                duration: 0.1,
            }
        );

        animate(
            "#landmark",
            {
                transform: ["scale(1)", "scale(3.25)"],
            },
            {
                duration: 1,
            }
        );

        animate(
            "#buttonContainer",
            {
                display: "none",
            },
            {
                duration: 0.1,
            }
        );

        animate(
            "#zoomOutButton",
            { display: "block", opacity: [0, 1] },
            {
                duration: 1,
                ease: "easeIn",
            }
        );
    };

    return (
        <div
            className="*:md:pl-4 *:pl-2 overflow-y-auto h-[calc(100vh-100px)]"
            ref={scope}
        >
            <div className="pt-4">
                <span className={`${chakraPetch.className} text-3xl`}>
                    Bài 1: Mệnh đề
                </span>
                <div className="md:pl-5 font-light my-6">
                    Dòng thời gian phát triển mệnh đề:
                    <div
                        className="mt-3 overflow-x-auto overflow-y-hidden relative"
                        id="timeline"
                    >
                        <div
                            className="absolute left-0 top-0 h-full w-full grid grid-cols-4 z-10"
                            id="buttonContainer"
                        >
                            <button
                                className="h-full w-[95%]"
                                onClick={() => handleLandmarkClick()}
                            />
                            <button
                                className="h-full w-[95%]"
                                onClick={() => handleLandmarkClick()}
                            />
                            <button
                                className="h-full w-[95%]"
                                onClick={() => handleLandmarkClick()}
                            />
                            <button
                                className="h-full w-[95%]"
                                onClick={() => handleLandmarkClick()}
                            />
                        </div>
                        <div
                            className="absolute left-0 top-0 h-[190%] w-full flex justify-center flex-col"
                            id="landmarkContainer"
                        >
                            <div className="w-full absolute top-[35%]">
                                <div className="absolute w-full" id="landmark">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 473.35 16.2"
                                        className="w-full min-w-[750px]"
                                    >
                                        <Landmark />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div id="timeline1">
                            <Timeline />
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <Link
                            href="/khoi-10/menh-de-1"
                            className="rounded-full border-2 border-black w-fit font-semibold px-5 py-[0.65rem] flex items-center gap-3 mt-4 h-fit"
                        >
                            Tìm hiểu
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 319.05 306"
                                className="w-[25px] h-[25px]"
                            >
                                <circle
                                    cx="137.53"
                                    cy="117.45"
                                    r={95}
                                    fill="none"
                                    stroke="#231f20"
                                    strokeMiterlimit={10}
                                    strokeWidth={14}
                                />
                                <path
                                    d="M294.83,334.85s3.32,12-8.09,14.6c0,0,26,12.91,39,37.36,0,0,1.28-14.17,15.07-8.94C340.79,377.87,326.57,349.57,294.83,334.85Z"
                                    transform="translate(-112.47 -310.55)"
                                    fill="#fff"
                                />
                                <circle
                                    cx="202.7"
                                    cy="49.13"
                                    r={7}
                                    fill="#231f20"
                                />
                                <circle
                                    cx="137.53"
                                    cy="117.45"
                                    r="63.77"
                                    fill="none"
                                    stroke="#231f20"
                                    strokeMiterlimit={10}
                                    stroke-widtah="11.88"
                                />
                                <path
                                    d="M367.56,587.37c3.78,6,.93,14.57-6.37,19.19s-16.28,3.51-20.06-2.48l-3.05-4.81L286.6,517.86,313,501.14l51.49,81.42Z"
                                    transform="translate(-112.47 -310.55)"
                                    fill="none"
                                    stroke="#231f20"
                                    strokeMiterlimit={10}
                                    strokeWidth="12.43"
                                />
                                <rect
                                    x="288.41"
                                    y="529.19"
                                    width="53.74"
                                    height="9.53"
                                    rx="4.77"
                                    transform="translate(-349.05 -59.37) rotate(-32.31)"
                                    fill="#231f20"
                                    stroke="#231f20"
                                    strokeMiterlimit={10}
                                    strokeWidth={6}
                                />
                                <line
                                    x1={5}
                                    y1={244}
                                    x2="20.83"
                                    y2={244}
                                    fill="#fff"
                                    stroke="#231f20"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={10}
                                />
                                <line
                                    x1="38.04"
                                    y1={244}
                                    x2="53.87"
                                    y2={244}
                                    fill="#fff"
                                    stroke="#231f20"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={10}
                                />
                                <line
                                    x1="29.68"
                                    y1="253.96"
                                    x2="29.68"
                                    y2="269.79"
                                    fill="#fff"
                                    stroke="#231f20"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={10}
                                />
                                <line
                                    x1="29.68"
                                    y1="218.66"
                                    x2="29.68"
                                    y2="234.49"
                                    fill="#fff"
                                    stroke="#231f20"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={10}
                                />
                                <line
                                    x1="265.18"
                                    y1="30.34"
                                    x2="281.01"
                                    y2="30.34"
                                    fill="#fff"
                                    stroke="#231f20"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={10}
                                />
                                <line
                                    x1="298.22"
                                    y1="30.34"
                                    x2="314.05"
                                    y2="30.34"
                                    fill="#fff"
                                    stroke="#231f20"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={10}
                                />
                                <line
                                    x1="289.86"
                                    y1="40.3"
                                    x2="289.86"
                                    y2="56.13"
                                    fill="#fff"
                                    stroke="#231f20"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={10}
                                />
                                <line
                                    x1="289.86"
                                    y1={5}
                                    x2="289.86"
                                    y2="20.83"
                                    fill="#fff"
                                    stroke="#231f20"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={10}
                                />
                            </svg>
                        </Link>
                        <button
                            id="zoomOutButton"
                            className="opacity-0"
                            onClick={handleZoomOutClick}
                        >
                            <svg viewBox="0 0 24 24" width={35} height={35}>
                                <path
                                    d="m15.8 3.8 1.4 1.5L15 7.5c-.4.4-.4 1 0 1.4s1 .4 1.4 0l2.2-2.2 1.5 1.4c.4.4.9.1.9-.3V3.5c0-.3-.2-.5-.5-.5h-4.3c-.4 0-.7.5-.4.8zm-12 4.3 1.4-1.4 2.2 2.2c.4.4 1 .4 1.4 0s.4-1 0-1.4L6.7 5.3l1.4-1.5c.4-.3.1-.8-.3-.8H3.5c-.3 0-.5.2-.5.5v4.3c0 .4.5.7.8.3zm4.3 12-1.5-1.4 2.2-2.2c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-2.2 2.2-1.5-1.4c-.2-.4-.7-.1-.7.3v4.3c0 .3.2.5.5.5h4.3c.4 0 .7-.5.3-.9zm12.1-4.3-1.5 1.4-2.2-2.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.2 2.2-1.4 1.5c-.3.3-.1.9.4.9h4.3c.3 0 .5-.2.5-.5v-4.3c-.1-.4-.6-.7-.9-.4z"
                                    fill="#000000"
                                    opacity="1"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="pt-2">
                <span className={`${chakraPetch.className} text-3xl`}>
                    Bài 2: Tập hợp
                </span>
            </div>
        </div>
    );
};

export const Lessons = [[<MdTh key="lesson1" />], [], []];
