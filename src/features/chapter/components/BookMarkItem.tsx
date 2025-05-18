"use client";

import PushLink from "@/components/PushLink";
import { motion } from "motion/react";
import React from "react";
import { BookMarkIcon, BookMarkIconOutline } from "./ui/BookMarkIcon";
import useAnimateBookMarks from "../hooks/useAnimateBookMark";

type BookMarkItemProps = {
    config: {
        title: string;
        stopColor: string[];
        image: JSX.Element;
        border: string;
    };
    id: number;
};

export default function BookMarkItem({ config, id }: BookMarkItemProps) {
    const { stopColor, border, title, image } = config;

    const {
        handleMouseEnter,
        handleMouseLeave,
        isSection,
        transitionConfig,
        scope,
    } = useAnimateBookMarks(border, title);

    return (
        <motion.li
            initial={{
                y: -155,
            }}
            animate={{
                y: isSection ? -140 : -150,
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
                push={title.toLowerCase()}
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
                    {image}
                </motion.div>
            </PushLink>
        </motion.li>
    );
}
