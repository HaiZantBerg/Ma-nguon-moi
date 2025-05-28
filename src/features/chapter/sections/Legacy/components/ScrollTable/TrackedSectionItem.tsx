"use client";

import React, { HTMLAttributes, useEffect, useRef } from "react";
import { useScrollTableContext } from "../../context/ScrollTableContext";
import { useSectionIdContext } from "../../context/SectionIdContext";
import { useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/tailwind/tailwindMerge";

type TrackedSectionItemProps = {
    id: number;
    title: string;
    isFirst?: boolean;
    isLast?: boolean;
    isTop?: boolean;
    isBottom?: boolean;
} & HTMLAttributes<HTMLElement>;

export default function TrackedSectionItem({
    id,
    title,
    children,
    isFirst,
    isLast,
    isTop,
    isBottom,
}: TrackedSectionItemProps) {
    const { id: parId } = useSectionIdContext();

    const {
        registerSectionItem,
        scrollYProgressSectionItem,
        setActiveSectionItem,
        activeSectionItem,
    } = useScrollTableContext();

    useEffect(() => {
        registerSectionItem({ id, title }, parId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const container = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: isFirst
            ? ["start start", "end center"]
            : isLast
              ? ["start center", "center center"]
              : ["start center", "end center"],
    });

    const handleScrollChange = (val: number) => {
        const shouldUpdate =
            (isTop && val < 1) ||
            (isBottom && val > 0) ||
            (!isTop && !isBottom && val > 0 && val < 1);

        if (!shouldUpdate) return;

        if (activeSectionItem !== id) {
            setActiveSectionItem(id);
        } else {
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
                isLast ? "[&>:last-child]:pb-[5rem]" : "",
                "min-[1100px]:*:mx-[10rem] [&>div]:mx-0",
            )}
        >
            {children}
        </section>
    );
}
