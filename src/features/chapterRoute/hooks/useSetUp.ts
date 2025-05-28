import { useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function useSetUp() {
    const [isMounted, setIsMounted] = useState(false);
    const [curChapter, setCurChapter] = useState(0);

    useEffect(() => {
        setIsMounted(true);

        return () => {
            setIsMounted(false);
        };
    }, []);

    const container = useRef<HTMLDivElement | null>(null);

    const isMobile = useMediaQuery({ query: "(max-width: 1367px)" });
    const willChangeRouteLayout = useMediaQuery({
        query: "(max-width: 640px)",
    });

    const { scrollYProgress } = useScroll({
        layoutEffect: false,
        target: container,
        offset: ["start start", "end start"],
    });

    return {
        scrollYProgress,
        isMobile,
        willChangeRouteLayout,
        setCurChapter,
        setIsMounted,
        isMounted,
        curChapter,
        container,
    };
}
