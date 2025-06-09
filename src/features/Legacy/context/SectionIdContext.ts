import { createContext, useContext } from "react";

type Section = {
    id: number;
};

export const SectionIdContext = createContext<Section | undefined>(undefined);

export const useSectionIdContext = () => {
    const context = useContext(SectionIdContext);

    if (!context)
        throw new Error(
            "useSectionIdContext phải được sử dụng trong SectionIdContextProvider",
        );

    return context;
};
