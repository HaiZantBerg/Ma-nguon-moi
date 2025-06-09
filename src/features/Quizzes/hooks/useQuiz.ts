import { useAnimate } from "motion/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useQuiz() {
    const [scope, animate] = useAnimate();

    const [curQuiz, setCurQuiz] = useState(-1);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleOpenQuiz = async (id: number, q: boolean = false) => {
        if (curQuiz !== -1) return;

        if (q) {
            const params = new URLSearchParams(searchParams);

            params.set("quiz-id", String(id));

            replace(`${pathname}?${params.toString()}`);
        }

        setCurQuiz(id);

        animate("#quizContainer", {
            width: "100%",
            opacity: 1,
        });

        await animate(
            "#quizContainer",
            {
                height: "100%",
            },
            { delay: 0.4 },
        );

        const scroll = document.getElementById("scroll");

        if (!scroll) return;

        scroll.style.overflowY = "auto";
    };

    const handleCloseQuiz = async () => {
        const params = new URLSearchParams(searchParams);

        params.delete("quiz-id");

        replace(`${pathname}?${params.toString()}`);

        const scroll = document.getElementById("scroll");

        if (!scroll) return;

        scroll.style.overflowY = "hidden";

        animate("#quizContainer", {
            height: "5%",
        });

        await animate(
            "#quizContainer",
            {
                width: "0%",
                opacity: 0,
            },
            { delay: 0.4 },
        );

        setCurQuiz(-1);
    };

    useEffect(() => {
        const quizId = searchParams.get("quiz-id");

        if (quizId !== null) handleOpenQuiz(Number(quizId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        curQuiz,
        scope,
        handleCloseQuiz,
        handleOpenQuiz,
    };
}
