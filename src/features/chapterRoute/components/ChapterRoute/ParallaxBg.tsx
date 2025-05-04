import { motion, MotionValue, useTransform } from "motion/react";
import bg2 from "public/Image/chapterRoute/bgpart2.png";
import bg3 from "public/Image/chapterRoute/bgpart3.png";
import bg4 from "public/Image/chapterRoute/bgpart4.png";
import bg5 from "public/Image/chapterRoute/bgpart5.png";
import Image from "next/image";
import React from "react";

type ParallaxBgProps = {
    // isMobile: boolean;
    scrollYProgress: MotionValue<number>;
};

export default function ParallaxBg({
    // isMobile,
    scrollYProgress,
}: ParallaxBgProps) {
    const parallax2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const parallax3 = useTransform(scrollYProgress, [0, 1], [0, -600]);
    const parallax4 = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const parallax5 = useTransform(scrollYProgress, [0, 1], [0, -300]);

    return (
        <div className="pointer-events-none fixed top-0 left-0 h-lvh w-full select-none">
            <motion.div
                className="absolute top-[15%] left-[5%] w-[25rem] opacity-[14%]"
                style={{
                    y: parallax2,
                }}
            >
                <Image src={bg2} alt="" />
            </motion.div>
            <motion.div
                className="absolute bottom-[-40%] left-[5%] w-[30rem] opacity-[16%]"
                style={{
                    y: parallax3,
                }}
            >
                <Image src={bg3} alt="" />
            </motion.div>
            <motion.div
                className="absolute top-[40%] right-[5rem] w-[22.5rem] opacity-[15%] md:top-[25%]"
                style={{
                    y: parallax4,
                }}
            >
                <Image src={bg4} alt="" />
            </motion.div>
            <motion.div
                className="absolute top-[50%] left-1/2 aspect-video h-[60%] -translate-x-1/2 opacity-[17.5%] md:top-[20%] md:h-full"
                style={{
                    y: parallax5,
                }}
            >
                <Image src={bg5} alt="" priority />
            </motion.div>
        </div>
    );
}
