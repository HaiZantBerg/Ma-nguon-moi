import { createContext, useContext } from "react";

export type ButtonContextType = {
    variant:
        | "blue"
        | "green"
        | "purple"
        | "blue-grey"
        | "sign-up"
        | "sign-in"
        | "grey";
};

export const Button3dContext = createContext<ButtonContextType | undefined>(
    undefined,
);

export function useButton3dContext() {
    const context = useContext(Button3dContext);

    if (!context)
        throw new Error(
            "useButton3dContext phải được sử dụng trong Button3dContextProvider",
        );

    return context;
}
