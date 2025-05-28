import { AnimationScope, useAnimate } from "motion/react";
import { createContext, useContext, useState } from "react";

type IPContextType = {
    id: string;
    handleTrigger: (state: boolean) => void;
    openP: boolean;
    scope: AnimationScope;
};

export const IPContext = createContext<IPContextType | undefined>(undefined);

export function useIPContextValues(id: string) {
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
        } else {
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

export function useIPContext() {
    const context = useContext(IPContext);

    if (!context)
        throw new Error("usePContext phải được dùng trong PContextProvider");

    return context;
}
