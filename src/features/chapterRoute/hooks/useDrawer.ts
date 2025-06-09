import { useAnimate, useMotionValue } from "motion/react";
import { useEffect } from "react";

export default function useDrawer(
    setCurChapter: React.Dispatch<React.SetStateAction<number>>,
) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);

    const dragY = useMotionValue(0);

    const handleCloseDrawer = async () => {
        animate(
            scope.current,
            {
                backgroundColor: "#00000000",
            },
            {
                duration: 0.3,
                ease: "easeIn",
            },
        );

        await animate("#drawer", {
            y: "100%",
            scale: 0.85,
        });

        document.body.style.overflow = "auto";

        setCurChapter(0);
    };

    return { handleCloseDrawer, dragY, scope };
}
