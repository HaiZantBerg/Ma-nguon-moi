import { MotionValue, useMotionValue } from "motion/react";
import {
    createContext,
    MutableRefObject,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { useMediaQuery } from "react-responsive";

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
    isMobile: boolean;
};

export const ScrollTableContext = createContext<ScrollTableType | undefined>(
    undefined,
);

export function useScrollTableValues(part: string | null) {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    const interuptedScroll = useRef(-1);
    const didMount = useRef(false);

    const [activeSection, setActiveSection] = useState(0);
    const [sections, setSections] = useState<Section[]>([]);

    const [activeSectionItem, setActiveSectionItem] = useState(0);
    const [sectionItems, setSectionItems] = useState<SectionItem[][]>([]);

    const scrollYProgressSectionItem = useMotionValue(0);

    useEffect(() => {
        if (!part) return;
        console.log(part);

        if (!didMount.current) {
            didMount.current = true;
            return;
        }

        setSections([]);
        setSectionItems([]);

        setActiveSection(0);
        setActiveSectionItem(0);

        interuptedScroll.current = -1;
    }, [part]);

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
        const seen = new Set<number>();

        return sections.filter(({ id }) => {
            if (seen.has(id)) return false;

            seen.add(id);
            return true;
        });
    };

    const processItem = (items: SectionItem[][]): SectionItem[][] => {
        return items.map((item) => {
            const seen = new Set<number>();

            return item.filter(({ id }) => {
                if (seen.has(id)) return false;

                seen.add(id);
                return true;
            });
        });
    };

    return {
        values: {
            sections: process(sections),
            sectionItems: processItem(sectionItems),
            registerSectionItem,
            activeSection,
            setActiveSection,
            activeSectionItem,
            setActiveSectionItem,
            registerSection,
            scrollYProgressSectionItem,
            interuptedScroll,
            isMobile,
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
