"use client";

import PushLink from "@/components/PushLink";
import { motion } from "motion/react";
import React from "react";
import { BookMarkIcon, BookMarkIconOutline } from "./ui/BookMarkIcon";
import useAnimateBookMarks from "../hooks/useAnimateBookMark";
import useIsMounted from "@/hooks/useIsMounted";
import LegacyIcon from "../assets/legacyIcon.svg";
import FunfactsIcon from "../assets/funfactsIcon.svg";
import QuizzesIcon from "../assets/quizzesIcon.svg";

type BookMarkItemProps = {
    config: {
        title: string;
        stopColor: string[];
        border: string;
    };
    id: number;
};

const image = [
    <LegacyIcon
        key={0}
        className="h-[3rem] w-auto absolute bottom-[1.6rem] left-1/2 -translate-x-1/2"
    />,
    <FunfactsIcon
        key={1}
        className="h-[2.75rem] w-auto absolute bottom-[1.6rem] left-1/2 -translate-x-1/2"
    />,
    <QuizzesIcon
        key={2}
        className="h-[2.6rem] w-auto absolute bottom-[1.6rem] left-1/2 -translate-x-1/2"
    />,
];

export default function BookMarkItem({ config, id }: BookMarkItemProps) {
    const { isMounted } = useIsMounted();

    const { stopColor, border, title } = config;

    const {
        handleMouseEnter,
        handleMouseLeave,
        isSection,
        transitionConfig,
        scope,
        isNotMobile,
        havePlayedInitAnimation,
    } = useAnimateBookMarks(border, title);

    if (!isNotMobile || !isMounted) return null;

    return (
        <motion.li
            initial={{
                y: havePlayedInitAnimation.current ? -155 : -250,
            }}
            animate={{
                y: isSection ? -140 : -150,
            }}
            onAnimationComplete={() => {
                havePlayedInitAnimation.current = true;
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={scope}
            transition={transitionConfig}
        >
            <label htmlFor={title} className="sr-only">
                {title}
            </label>
            <PushLink
                id={title}
                push={title}
                slice={[0, 3]}
                className="flex justify-between relative items-center h-fit w-fit"
            >
                <div className="w-[4.5rem] h-auto">
                    <motion.div
                        id="dimmer"
                        initial={{
                            filter: "brightness(40%)",
                        }}
                        animate={{
                            filter: isSection
                                ? "brightness(90%)"
                                : "brightness(40%)",
                        }}
                        transition={transitionConfig}
                    >
                        <BookMarkIcon gradient={stopColor} id={id} />
                    </motion.div>
                    <motion.div
                        id="outline"
                        className="absolute top-0 left-0 size-full"
                        initial={{
                            filter: "brightness(50%)",
                        }}
                        animate={{
                            filter: isSection
                                ? "brightness(95%)"
                                : "brightness(50%)",
                        }}
                        transition={transitionConfig}
                    >
                        <BookMarkIconOutline color={border} />
                    </motion.div>
                </div>
                <motion.div
                    id="icon"
                    initial={{
                        filter: "brightness(40%)",
                    }}
                    animate={{
                        filter: isSection
                            ? "brightness(100%)"
                            : "brightness(40%)",
                    }}
                    transition={transitionConfig}
                    className="w-full h-full absolute top-0 left-0"
                >
                    {image[id]}
                </motion.div>
            </PushLink>
        </motion.li>
    );
}
