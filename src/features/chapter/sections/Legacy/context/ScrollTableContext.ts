import { MotionValue, useMotionValue } from "motion/react";
import {
    createContext,
    MutableRefObject,
    useContext,
    useRef,
    useState,
} from "react";

type SectionItem = {
    id: number;
    title: string;
};

type Section = {
    id: number;
    title: string;
};

type ScrollTableType = {
    sections: Section[];
    sectionItems: SectionItem[][];
    registerSection: (_: Section) => void;
    activeSection: number;
    setActiveSection: (_: number) => void;
    registerSectionItem: (_: SectionItem, parId: number) => void;
    activeSectionItem: number;
    setActiveSectionItem: (_: number) => void;
    scrollYProgressSectionItem: MotionValue<number>;
    interuptedScroll: MutableRefObject<number>;
};

export const ScrollTableContext = createContext<ScrollTableType | undefined>(
    undefined,
);

export function useScrollTableValues() {
    const interuptedScroll = useRef(-1);

    const [activeSection, setActiveSection] = useState(0);
    const [sections, setSections] = useState<Section[]>([]);

    const [activeSectionItem, setActiveSectionItem] = useState(0);
    const [sectionItems, setSectionItems] = useState<SectionItem[][]>([]);

    const scrollYProgressSectionItem = useMotionValue(0);

    const registerSection = (section: Section) => {
        setSections((prev) => prev.concat(section));
    };

    const registerSectionItem = (section: SectionItem, parId: number) => {
        setSectionItems((prev) => {
            const newSectionItems = [...prev];

            if (!newSectionItems[parId]) newSectionItems[parId] = [];

            newSectionItems[parId] = newSectionItems[parId].concat(section);

            return newSectionItems;
        });
    };

    const process = (sections: Section[]) => {
        const ids = sections.map(({ id }) => id);

        const uniqueSections = sections.filter(
            ({ id }, idx) => !ids.includes(id, idx + 1),
        );

        return uniqueSections;
    };

    return {
        values: {
            sections: process(sections),
            sectionItems,
            registerSectionItem,
            activeSection,
            setActiveSection,
            activeSectionItem,
            setActiveSectionItem,
            registerSection,
            scrollYProgressSectionItem,
            interuptedScroll,
        },
    };
}

export function useScrollTableContext() {
    const context = useContext(ScrollTableContext);

    if (!context)
        throw new Error(
            "useScrollTableContext phải được sử dụng trong ScrollTableContextProvider",
        );

    return context;
}
