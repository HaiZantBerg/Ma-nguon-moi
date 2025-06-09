import {
    createContext,
    MutableRefObject,
    useContext,
    useRef,
    useState,
} from "react";

type PopoverContextType = {
    isOpen: boolean;
    setIsOpen: (_: boolean) => void;
    container: MutableRefObject<HTMLDivElement | null>;
};

export const PopoverContext = createContext<PopoverContextType | undefined>(
    undefined,
);

export const usePopoverValues = () => {
    const [isOpen, setIsOpen] = useState(false);
    const container = useRef<HTMLDivElement | null>(null);

    return {
        values: {
            isOpen,
            setIsOpen,
            container,
        },
    };
};

export const usePopoverContext = () => {
    const context = useContext(PopoverContext);

    if (!context)
        throw new Error(
            "usePopoverContext phải được sử dụng trong PopoverContextProvider",
        );

    return context;
};
