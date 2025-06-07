"use client";

import React, { HTMLAttributes, useEffect, useRef } from "react";
import { useScrollTableContext } from "../../context/ScrollTableContext";
import { useMotionValueEvent, useScroll } from "motion/react";
import { SectionIdContext } from "../../context/SectionIdContext";

type TrackedSectionProps = {
    id: number;
    title: string;
    isFirst?: boolean;
    isLast?: boolean;
} & HTMLAttributes<HTMLElement>;

export default function TrackedSection({
    id,
    title,
    isFirst,
    isLast,
    children,
    ...props
}: TrackedSectionProps) {
    const { registerSection, setActiveSection, activeSection } =
        useScrollTableContext();

    const container = useRef<HTMLElement | null>(null);

    useEffect(() => {
        registerSection({ id, title });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: isFirst
            ? ["start start", "end center"]
            : isLast
              ? ["start center", "end end"]
              : ["start center", "end center"],
        layoutEffect: false,
    });

    useMotionValueEvent(scrollYProgress, "change", (val) => {
        if (val > 0 && val < 1 && activeSection != id) setActiveSection(id);
    });

    return (
        <SectionIdContext.Provider value={{ id }}>
            <section
                ref={container}
                id={`section-${id}`}
                style={{
                    scrollMargin: "30dvh",
                }}
                {...props}
            >
                {children}
            </section>
        </SectionIdContext.Provider>
    );
}
