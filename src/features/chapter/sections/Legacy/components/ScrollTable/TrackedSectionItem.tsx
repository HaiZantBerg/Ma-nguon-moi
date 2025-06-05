"use client";

import React, { HTMLAttributes, useEffect, useRef } from "react";
import { useScrollTableContext } from "../../context/ScrollTableContext";
import { useSectionIdContext } from "../../context/SectionIdContext";
import { useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/tailwind/tailwindMerge";

type TrackedSectionItemProps = {
    id: number;
    title: string;
    isTop?: boolean;
    isBottom?: boolean;
} & HTMLAttributes<HTMLElement>;

export default function TrackedSectionItem({
    id,
    title,
    children,
    isTop,
    isBottom,
}: TrackedSectionItemProps) {
    const { id: parId } = useSectionIdContext();

    const {
        registerSectionItem,
        scrollYProgressSectionItem,
        setActiveSectionItem,
        activeSection,
        activeSectionItem,
    } = useScrollTableContext();

    useEffect(() => {
        registerSectionItem({ id, title }, parId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const container = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: isTop
            ? ["start start", "end center"]
            : isBottom
              ? ["start center", "center center"]
              : ["start center", "end center"],
        layoutEffect: false,
    });

    const handleScrollChange = (val: number) => {
        const shouldUpdate =
            (isTop && val < 1) ||
            (isBottom && val > 0) ||
            (!isTop && !isBottom && val > 0 && val < 1);

        if (!shouldUpdate) return;

        if (activeSectionItem !== id) {
            setActiveSectionItem(id);
        } else if (activeSection === parId) {
            scrollYProgressSectionItem.set(val);
        }
    };

    useMotionValueEvent(scrollYProgress, "change", handleScrollChange);

    return (
        <section
            id={`section${parId}-item${id}`}
            style={{
                scrollMargin: "30dvh",
            }}
            ref={container}
            className={cn(
                isBottom ? "[&>:last-child]:pb-[5rem]" : "",
                "min-[1100px]:*:mx-[10rem] [&>div]:mx-0",
            )}
        >
            {children}
        </section>
    );
}
