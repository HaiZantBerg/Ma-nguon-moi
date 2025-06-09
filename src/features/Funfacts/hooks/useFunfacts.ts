import { useAnimate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ContentType } from "../content/ContentArray";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";

export default function useFunfacts(content: ContentType[][]) {
    const [scope, animate] = useAnimate();

    const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
    const stBreakPoint = useMediaQuery({ query: "(min-width: 1300px)" });

    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState<ContentType | undefined>();
    const willOpenSide = useRef(true);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    useEffect(() => {
        if (!scope.current || isMobile) return;

        if (willOpenSide.current)
            animate("#side", { width: stBreakPoint ? "45.5rem" : "31rem" });
        else
            animate("#side", {
                width: "2rem",
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stBreakPoint, isMobile]);

    useEffect(() => {
        if (!scope.current) return;

        if (isMobile) {
            animate("#side", { width: "100%" });
            if (show)
                animate(
                    "#side",
                    {
                        right: "100%",
                    },
                    { duration: 0.4, ease: "easeOut" },
                );
        } else animate("#side", { right: "0%" });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMobile]);

    useEffect(() => {
        const figureId = searchParams.get("figure-id");
        const funfactId = searchParams.get("funfact-id");

        if (figureId !== null && funfactId !== null)
            handleCardAnimation(Number(figureId), Number(funfactId), false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCardAnimation = (
        id1: number,
        id2: number,
        q: boolean = true,
    ) => {
        if (show || !content) return;

        const term = content[id1][id2];

        if (q) {
            const params = new URLSearchParams(searchParams);

            params.set("figure-id", String(id1));
            params.set("funfact-id", String(id2));

            replace(`${pathname}?${params.toString()}`);
        }

        const randomRotate = -(Math.random() + 0.1) * 160;

        setSelectedItem(term);

        if (isMobile)
            animate(
                "#side",
                {
                    right: "100%",
                },
                { duration: 0.4, ease: "easeOut" },
            );

        animate(
            "#card",
            {
                opacity: 1,
                rotate: ["50deg", `${randomRotate - 40}deg`],
                ...(isMobile
                    ? { right: ["100%", "40%"] }
                    : { left: ["100%", "40%"] }),
            },
            { type: "spring", stiffness: 550, damping: 100, mass: 10 },
        );

        setTimeout(async () => {
            await animate(
                "#card",
                {
                    ...(isMobile ? { right: "0%" } : { left: "0%" }),
                    rotate: "0deg",
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                },
                { type: "spring", bounce: 0, duration: 1 },
            );

            setShow(true);
        }, 1000);
    };

    const handleHide = () => {
        setShow(false);

        if (isMobile) animate("#side", { right: "0%" }, { duration: 0.4 });

        const params = new URLSearchParams(searchParams);

        params.delete("figure-id");
        params.delete("funfact-id");

        replace(`${pathname}?${params.toString()}`);
    };

    const handleSide = () => {
        if (isMobile) return;

        if (willOpenSide.current) {
            animate("#side", {
                width: "2rem",
            });
            animate(
                "#collapseTrigger",
                {
                    rotate: "180deg",
                    left: "-1.25rem",
                },
                { duration: 0.35, ease: "easeOut" },
            );

            willOpenSide.current = false;
        } else {
            animate("#side", { width: stBreakPoint ? "45.5rem" : "31rem" });
            animate(
                "#collapseTrigger",
                {
                    rotate: "0deg",
                    left: "0",
                },
                { duration: 0.35, ease: "easeOut" },
            );

            willOpenSide.current = true;
        }
    };

    return {
        isMobile,
        scope,
        handleCardAnimation,
        show,
        selectedItem,
        handleHide,
        setSelectedItem,
        handleSide,
    };
}
