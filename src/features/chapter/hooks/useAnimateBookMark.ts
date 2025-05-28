import { useAnimate } from "motion/react";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

export default function useAnimateBookMarks(border: string, title: string) {
    const pathname = usePathname();
    const isSection = pathname.split("/")[3] === title;

    const isMobile = useMediaQuery({ query: "(max-width: 1367px)" });
    const isNotMobile = useMediaQuery({ query: "(min-width: 1000px)" });

    const havePlayedInitAnimation = useRef(false);

    const [scope, animate] = useAnimate();

    const transitionConfig = {
        type: "spring",
        stiffness: 900,
        damping: 125,
        mass: 10,
    } as const;

    const dropShadow = `drop-shadow(0 10px 10px ${border})`;
    const dropShadowTranparency = `drop-shadow(0 0 0px transparent)`;

    const handleMouseEnter = () => {
        if (isMobile) return null;

        animate(
            scope.current,
            {
                y: isSection ? -135 : -90,
            },
            transitionConfig,
        );

        animate(
            "#dimmer",
            {
                filter: isSection ? "brightness(95%)" : "brightness(70%)",
            },
            transitionConfig,
        );

        animate(
            "#outline",
            {
                filter: isSection
                    ? "brightness(110%)" + dropShadow
                    : "brightness(100%)" + dropShadow,
            },
            transitionConfig,
        );

        animate(
            "#icon",
            {
                filter: isSection
                    ? "brightness(110%) drop-shadow(0 0 15px white)"
                    : "brightness(90%) drop-shadow(0 0 15px white)",
            },
            transitionConfig,
        );
    };

    const handleMouseLeave = () => {
        if (isMobile) return null;

        animate(
            scope.current,
            {
                y: isSection ? -140 : -155,
            },
            transitionConfig,
        );

        animate(
            "#dimmer",
            {
                filter: isSection
                    ? "brightness(90%)" + dropShadowTranparency
                    : "brightness(40%)" + dropShadowTranparency,
            },
            transitionConfig,
        );

        animate(
            "#outline",
            {
                filter: isSection
                    ? "brightness(100%)" + dropShadowTranparency
                    : "brightness(50%)" + dropShadowTranparency,
            },
            transitionConfig,
        );

        animate(
            "#icon",
            {
                filter: isSection ? "brightness(100%)" : "brightness(50%)",
            },
            transitionConfig,
        );
    };

    return {
        handleMouseEnter,
        handleMouseLeave,
        isSection,
        isNotMobile,
        transitionConfig,
        scope,
        havePlayedInitAnimation,
    };
}
