"use client";

import React, { useEffect } from "react";
import { Chakra_Petch } from "next/font/google";
import { Timeline } from "@/Svg/Timeline";
// import Drawer from "./Drawer";
// import Image from "next/image";
// import Aristotle from "@/Image/image-removebg-preview.png";
// import GeorgeBoole from "@/Image/george-boole.png";
import { useAnimate } from "framer-motion";

const chakraPetch = Chakra_Petch({ weight: "700", subsets: ["vietnamese"] });

const MdTh = () => {
    const [scope, animate] = useAnimate();

    return (
        <div
            className="h-full md:overflow-y-auto md:overflow-x-hidden w-full"
            ref={scope}
        >
            <div className="pt-4 w-full">
                <span className={`${chakraPetch.className} text-3xl`}>
                    Bài 1: Mệnh đề
                </span>
                <div className="md:pl-5 font-light mt-6 mb-3 w-full">
                    Dòng thời gian phát triển mệnh đề:
                    <div className="mt-3 overflow-x-auto overflow-y-hidden relative">
                        <div className="min-w-[300px] max-w-[450px] relative">
                            <Timeline />
                        </div>
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
