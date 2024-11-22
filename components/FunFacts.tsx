"use client";

import React, { useState } from "react";
import { Chakra_Petch } from "next/font/google";
import FlipCard from "./FlipCard";
import {
    images,
    storyList,
    historyFigureName,
    storyContent,
} from "./static/funfactStatic";

const chakraPetch = Chakra_Petch({ weight: "700", subsets: ["vietnamese"] });

const imageWidthHeight = 150;

const FFHeader = () => {
    return (
        <div
            className={`${chakraPetch.className} md:pt-6 pt-2 md:text-[40px] text-[35px] leading-[42.5px] flex text-nowrap`}
        >
            <div className="w-[40px] aspect-square mr-3">
                <svg
                    viewBox="0 0 49.7 44.55"
                    className="w-[40px] aspect-square"
                >
                    <path
                        d="M209,355.28c0-3.48,6.39-2.29,10.13-7.15,4.15-5.4,5.79-15.28,8.3-15.28s4,9.1,8.3,14.85c3.66,4.9,10.46,4.67,10.46,7.58s-6.85,3-11,8.2-4.12,13.86-7.62,13.92-4-9.48-8.23-14.59C215.31,357.86,209,358.76,209,355.28Z"
                        transform="translate(-196.54 -332.85)"
                        fill="url(#gradient7)"
                    />
                    <path
                        d="M202.76,340.16c0-1.05,1.93-.69,3.07-2.17s1.75-4.63,2.51-4.63,1.21,2.76,2.52,4.5c1.11,1.49,3.17,1.42,3.17,2.3s-2.08.92-3.33,2.49-1.25,4.19-2.31,4.22-1.2-2.88-2.49-4.43S202.76,341.21,202.76,340.16Z"
                        transform="translate(-196.54 -332.85)"
                        fill="url(#gradient7)"
                    />
                    <path
                        d="M196.54,366c0-1.51,2.77-1,4.39-3.1,1.8-2.35,2.51-6.63,3.6-6.63s1.73,3.95,3.6,6.44c1.59,2.13,4.54,2,4.54,3.29s-3,1.32-4.76,3.56-1.79,6-3.31,6-1.72-4.12-3.57-6.33S196.54,367.54,196.54,366Z"
                        transform="translate(-196.54 -332.85)"
                        fill="url(#gradient7)"
                    />
                </svg>
            </div>
            Fun facts
            <div className="w-[64px] aspect-square">
                <svg
                    className="w-[64px] aspect-square -translate-x-6 -translate-y-7"
                    viewBox="0 0 100 100"
                >
                    <defs>
                        <linearGradient
                            x1="0%"
                            x2="100%"
                            y1="0%"
                            y2="0%"
                            id="gradient6"
                        >
                            <stop offset="0%" stopColor="#2e5bff" />
                            <stop offset="100%" stopColor="#75cfff" />
                        </linearGradient>
                        <linearGradient
                            x1="100%"
                            x2="0%"
                            y1="0%"
                            y2="0%"
                            id="gradient7"
                        >
                            <stop offset="0%" stopColor="#2e5bff" />
                            <stop offset="100%" stopColor="#75cfff" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M12.811 45.999a2 2 0 0 0 2-2V16.494a2 2 0 0 0-4 0v27.505a2 2 0 0 0 2 2zM52.774 55.067c.487 0 .976-.177 1.36-.534l29.54-27.427a2 2 0 0 0-2.721-2.932l-29.54 27.427a2 2 0 0 0 1.361 3.466zM92.022 90.517H59.124a2 2 0 0 0 0 4h32.898a2 2 0 0 0 0-4zM81.742 63.364l-23.603 7.051a2 2 0 0 0 1.144 3.833l23.603-7.051a2 2 0 0 0-1.144-3.833zM33.656 45.887a1.996 1.996 0 0 0 2.547-1.231l7.933-22.78a2 2 0 0 0-3.777-1.315l-7.933 22.78a2 2 0 0 0 1.23 2.546z"
                        fill="url(#gradient6)"
                    ></path>
                    <path
                        d="M9.811 42.499a1.5 1.5 0 0 0 1.5-1.5V13.493c-.034-1.972-2.967-1.971-3 0v27.505a1.5 1.5 0 0 0 1.5 1.5zM49.774 51.567a1.5 1.5 0 0 0 1.021-.401l29.54-27.427c1.414-1.352-.563-3.522-2.041-2.198l-29.54 27.427c-1.006.869-.29 2.649 1.021 2.599zM54.624 89.517a1.5 1.5 0 0 0 1.5 1.5h32.898c1.972-.034 1.971-2.967 0-3H56.124a1.5 1.5 0 0 0-1.5 1.5zM56.142 70.769l23.603-7.051c1.873-.593 1.045-3.407-.859-2.874l-23.602 7.051c-1.881.596-1.033 3.412.859 2.874zM30.821 42.415a1.503 1.503 0 0 0 1.91-.923l7.933-22.78a1.502 1.502 0 0 0-2.834-.987l-7.933 22.78a1.502 1.502 0 0 0 .924 1.91z"
                        fill="#000000"
                    ></path>
                </svg>
            </div>
            <div className="md:-translate-x-6 -translate-x-9 w-[40px] aspect-square ml-3">
                <svg
                    viewBox="0 0 49.7 44.55"
                    className="w-[40px] aspect-square"
                >
                    <path
                        d="M209,355.28c0-3.48,6.39-2.29,10.13-7.15,4.15-5.4,5.79-15.28,8.3-15.28s4,9.1,8.3,14.85c3.66,4.9,10.46,4.67,10.46,7.58s-6.85,3-11,8.2-4.12,13.86-7.62,13.92-4-9.48-8.23-14.59C215.31,357.86,209,358.76,209,355.28Z"
                        transform="translate(-196.54 -332.85)"
                        fill="url(#gradient6)"
                    />
                    <path
                        d="M202.76,340.16c0-1.05,1.93-.69,3.07-2.17s1.75-4.63,2.51-4.63,1.21,2.76,2.52,4.5c1.11,1.49,3.17,1.42,3.17,2.3s-2.08.92-3.33,2.49-1.25,4.19-2.31,4.22-1.2-2.88-2.49-4.43S202.76,341.21,202.76,340.16Z"
                        transform="translate(-196.54 -332.85)"
                        fill="url(#gradient6)"
                    />
                    <path
                        d="M196.54,366c0-1.51,2.77-1,4.39-3.1,1.8-2.35,2.51-6.63,3.6-6.63s1.73,3.95,3.6,6.44c1.59,2.13,4.54,2,4.54,3.29s-3,1.32-4.76,3.56-1.79,6-3.31,6-1.72-4.12-3.57-6.33S196.54,367.54,196.54,366Z"
                        transform="translate(-196.54 -332.85)"
                        fill="url(#gradient6)"
                    />
                </svg>
            </div>
        </div>
    );
};

const FunFact1 = () => {
    const [openFlipCard, setOpenFlipCard] = useState<[number, number]>([
        -1, -1,
    ]);

    const triggerCloseCard = () => {
        setOpenFlipCard([-1, -1]);
    };

    return (
        <div className="*:md:pl-4 *:pl-2 lgmi:pt-0 md:pt-12 pt-2">
            <FFHeader />
            <div className="md:overflow-y-auto h-[calc(100vh-190px)] md:ml-7 flex flex-col">
                {storyList.map((section, idx) => (
                    <div key={idx} className="mb-5">
                        <span className="font-semibold text-2xl">
                            {historyFigureName[idx]}
                        </span>
                        <div className="md:ml-7 flex flex-wrap mt-5">
                            {section.map((title, idxs) => (
                                <React.Fragment key={idxs}>
                                    <svg
                                        viewBox="-160 -180 320 360"
                                        className="md:h-[180px] h-[150px] md:mr-5 mr-[14px] md:mb-5 mb-[14px] cursor-pointer"
                                        style={{
                                            aspectRatio: 8 / 9,
                                        }}
                                        onClick={() => {
                                            setOpenFlipCard([idx, idxs]);
                                        }}
                                    >
                                        <path
                                            d="M-120 -177.5 L120 -177.5 L157.5 -140 L157.5 130 L120 167.5 L-120 167.5 L-157.5 130 L-157.5 -140 Z"
                                            strokeWidth="5"
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            className="stroke-black"
                                            fill="white"
                                        />
                                        <foreignObject
                                            x="-160"
                                            y="-180"
                                            width="320"
                                            height="360"
                                        >
                                            <div className="flex justify-center">
                                                {images[idx][idxs]}
                                            </div>
                                        </foreignObject>
                                        <foreignObject
                                            x="-160"
                                            y="-20"
                                            width="320"
                                            height="360"
                                        >
                                            <div className="text-[30px] leading-[37.5px] w-full absolute left-0 top-0 font-semibold px-[11px] text-center">
                                                {idxs + 1}.
                                                <br />
                                                {title}
                                            </div>
                                        </foreignObject>
                                    </svg>
                                    {openFlipCard[0] === idx &&
                                        openFlipCard[1] === idxs && (
                                            <FlipCard
                                                title={title}
                                                idxs={idxs}
                                                triggerCloseCard={
                                                    triggerCloseCard
                                                }
                                            >
                                                {storyContent[idx][idxs]
                                                    .split("//")
                                                    .map((text, idxt) => (
                                                        <p
                                                            key={idxt}
                                                            className="mb-5"
                                                        >
                                                            {text}
                                                        </p>
                                                    ))}
                                            </FlipCard>
                                        )}
                                </React.Fragment>
                            ))}
                        </div>
                        <hr className="mr-10" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const FunFact = [[<FunFact1 />], [], []];
