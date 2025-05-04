import { useAnimate } from "motion/react";
import { useEffect, useState } from "react";

export default function useHover(isMobile: boolean, id: string) {
    const [mountElement, setMountElement] = useState<HTMLElement | null>(null);

    const [scope, animate] = useAnimate();

    const handleMouseEnter = () => {
        if (isMobile || !MouseEvent) return;

        animate("#detail", {
            opacity: 1,
        });

        animate(
            "#detail",
            {
                width: "22.5rem",
            },
            {
                ease: "easeOut",
            },
        );

        animate(
            "#detail",
            {
                height: "fit-content",
            },
            {
                ease: "easeOut",
                delay: 0.25,
            },
        );
    };

    const handleMouseLeave = () => {
        if (isMobile || !MouseEvent) return;

        animate(
            "#detail",
            {
                height: 0,
            },
            {
                ease: "easeOut",
            },
        );

        animate(
            "#detail",
            {
                width: 0,
            },
            {
                ease: "easeOut",
                delay: 0.25,
            },
        );

        animate(
            "#detail",
            {
                opacity: 0,
            },
            {
                delay: 0.25,
            },
        );
    };

    useEffect(() => {
        const el = document.getElementById(id);

        setMountElement(el);
    }, [id]);

    return { mountElement, scope, handleMouseEnter, handleMouseLeave };
}
