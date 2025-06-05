"use client";

import { motion, MotionValue, useTransform } from "motion/react";
import React from "react";

type ParallaxBgProps = {
    scrollYProgress: MotionValue<number>;
    bg: string[];
};

export default function ParallaxBg({ scrollYProgress, bg }: ParallaxBgProps) {
    const parallax2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const parallax3 = useTransform(scrollYProgress, [0, 1], [0, -600]);
    const parallax4 = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const parallax5 = useTransform(scrollYProgress, [0, 1], [0, -300]);

    return (
        <div className="pointer-events-none fixed top-0 left-0 h-lvh w-full select-none">
            <motion.div
                className="absolute top-[50%] left-1/2 aspect-video h-[60%] -translate-x-1/2 opacity-[17.5%] md:top-[20%] md:h-full"
                style={{
                    backgroundImage: `url(${bg[0]})`,
                    backgroundPosition: "bottom",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    y: parallax5,
                }}
            />
            <motion.div
                className="absolute top-0 left-[5%] size-[25rem] opacity-[15%]"
                style={{
                    backgroundImage: `url(${bg[1]})`,
                    backgroundPosition: "bottom",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    y: parallax2,
                }}
            />
            <motion.div
                className="absolute bottom-[-40%] left-[5%] size-[30rem] opacity-[16%]"
                style={{
                    backgroundImage: `url(${bg[2]})`,
                    backgroundPosition: "bottom",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    y: parallax3,
                }}
            />
            <motion.div
                className="absolute top-[40%] right-[5rem] size-[35.5rem] opacity-[15%] md:top-[25%]"
                style={{
                    backgroundImage: `url(${bg[3]})`,
                    backgroundPosition: "bottom",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    y: parallax4,
                }}
            />
        </div>
    );
}
