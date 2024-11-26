"use client";

import React, { useState } from "react";
import FlipCard from "./FlipCard";
import {
    images,
    storyList,
    historyFigureName,
    storyContent,
} from "./static/funfactStatic";

const FunFact1 = () => {
    const [openFlipCard, setOpenFlipCard] = useState<[number, number]>([
        -1, -1,
    ]);

    const triggerCloseCard = () => {
        setOpenFlipCard([-1, -1]);
    };

    return (
        <div className="h-full md:overflow-y-auto md:overflow-x-hidden w-full">
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
                                            triggerCloseCard={triggerCloseCard}
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
    );
};

export const FunFact = [[<FunFact1 key="funfact1" />], [], []];
