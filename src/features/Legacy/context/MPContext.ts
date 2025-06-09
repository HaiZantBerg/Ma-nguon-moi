import { AnimationScope, useAnimate } from "motion/react";
import { createContext, useContext, useState } from "react";

type MPContextType = {
    id: string;
    handleTrigger: (state: boolean) => void;
    openP: boolean;
    scope: AnimationScope;
};

export const MPContext = createContext<MPContextType | undefined>(undefined);

export function useMPContextValues(id: string) {
    const [scope, animate] = useAnimate();
    const [openP, setOpenP] = useState(false);

    const handleTrigger = async (state: boolean) => {
        if (state) {
            setOpenP(true);

            animate(
                "#contentTable",
                {
                    height: "auto",
                },
                { delay: 0.1, type: "spring", stiffness: 300, damping: 20 },
            );

            animate(
                `#trigger${id}`,
                {
                    borderRadius: "15px 15px 0px 0px",
                    borderBottomColor: "#ffffc7",
                },
                { duration: 0.1, ease: "easeIn" },
            );
        } else {
            animate(`#trigger${id}`, {
                borderRadius: "15px 15px 15px 15px",
                borderBottomColor: "#6a6a0b",
            });

            await animate("#contentTable", { height: 0 }, { delay: 0.1 });

            const trigger = document.getElementById(`trigger${id}`);

            if (trigger && trigger.getBoundingClientRect().top < 0)
                trigger.scrollIntoView({ behavior: "smooth" });

            setOpenP(false);
        }
    };

    return {
        values: {
            handleTrigger,
            openP,
            scope,
            id,
        },
    };
}

export function useMPContext() {
    const context = useContext(MPContext);

    if (!context)
        throw new Error("useMPContext phải được dùng trong MPContextProvider");

    return context;
}
