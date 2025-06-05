"use client";

import React from "react";
import { AnimatePresence, motion, useTransform } from "motion/react";
import { useScrollTableContext } from "../../context/ScrollTableContext";
import { cn } from "@/lib/tailwind/tailwindMerge";

type ScrollSectionItemTableProps = {
    parId: number;
};

export default function ScrollSectionItemTable({
    parId,
}: ScrollSectionItemTableProps) {
    const {
        sectionItems,
        activeSectionItem,
        scrollYProgressSectionItem,
        activeSection,
        isMobile,
    } = useScrollTableContext();

    const progressHeight = useTransform(
        scrollYProgressSectionItem,
        [0, 1],
        ["0%", "100%"],
    );

    return (
        <motion.div
            initial={{ gridTemplateRows: "0fr" }}
            animate={{ gridTemplateRows: "1fr" }}
            exit={{ gridTemplateRows: "0fr" }}
            className="grid"
        >
            <motion.div
                className="overflow-hidden flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75 }}
            >
                {sectionItems[parId].map((item, id) => {
                    const havePassedItem =
                        parId < activeSection ||
                        (parId === activeSection &&
                            item.id < activeSectionItem);

                    return (
                        <motion.button
                            key={id}
                            className="text-start flex mt-1.5 items-center gap-2 relative"
                            onClick={() => {
                                document
                                    .getElementById(
                                        `section${parId}-item${item.id}`,
                                    )
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                            }}
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                delay: id * 0.05,
                            }}
                        >
                            <div className="min-[768px]:flex-[0_0_22px] flex-[0_0_16px]">
                                <motion.div
                                    className={cn(
                                        havePassedItem
                                            ? "bg-[#bd3702]"
                                            : "bg-neutral-300",
                                        "min-[768px]:w-2 w-[0.375rem] rounded-2xl overflow-hidden mx-auto relative",
                                    )}
                                    animate={{
                                        height:
                                            activeSectionItem === item.id
                                                ? "2rem"
                                                : isMobile
                                                  ? "0.375rem"
                                                  : "0.5rem",
                                    }}
                                    transition={{ ease: "linear" }}
                                >
                                    {activeSection === parId &&
                                        activeSectionItem === item.id && (
                                            <motion.div
                                                className="bg-[#c55123] rounded-2xl w-full"
                                                style={{
                                                    height: progressHeight,
                                                }}
                                            />
                                        )}
                                </motion.div>
                            </div>
                            <AnimatePresence>
                                {activeSectionItem === item.id && !isMobile && (
                                    <motion.div
                                        initial={{ gridTemplateRows: "0fr" }}
                                        animate={{ gridTemplateRows: "1fr" }}
                                        exit={{ gridTemplateRows: "0fr" }}
                                        className="grid"
                                    >
                                        <p className="overflow-hidden text-[#200800]">
                                            {item.title}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    );
                })}
            </motion.div>
        </motion.div>
    );
}
