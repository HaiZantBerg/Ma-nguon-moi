import { createContext, useContext } from "react";

export type ButtonContextProps = {
    variant: "blue" | "grey" | "sign-up" | "sign-in";
};

export const Button3dContext = createContext<ButtonContextProps | undefined>(
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
