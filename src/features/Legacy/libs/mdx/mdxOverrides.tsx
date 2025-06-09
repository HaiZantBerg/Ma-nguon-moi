import { ComponentPropsWithoutRef } from "react";

export const overrideComponents = {
    h1: (props: ComponentPropsWithoutRef<"h1">) => (
        <h1
            className="text-2xl sm:text-3xl min-[1000px]:text-4xl font-bold min-[1000px]:mb-[1rem] mb-[0.5rem]"
            {...props}
        />
    ),
    h2: (props: ComponentPropsWithoutRef<"h2">) => (
        <h2
            className="text-base sm:text-xl min-[1000px]:text-2xl font-bold min-[1000px]:mb-[1rem] mb-[0.5rem]"
            {...props}
        />
    ),
    p: (props: ComponentPropsWithoutRef<"p">) => (
        <p
            className="min-[1000px]:mb-[1rem] mb-[0.5rem] text-sm min-[768px]:text-base min-[1000px]:text-[1.05rem] text-pretty"
            {...props}
        />
    ),
    li: (props: ComponentPropsWithoutRef<"li">) => (
        <li
            className="ml-[1.5rem] text-sm min-[768px]:text-base min-[1000px]:text-[1.05rem] text-pretty"
            {...props}
        />
    ),
    ul: (props: ComponentPropsWithoutRef<"ul">) => (
        <ul className="min-[1000px]:mb-[1rem] mb-[0.5rem]" {...props} />
    ),
    ol: (props: ComponentPropsWithoutRef<"ol">) => (
        <ol
            className="min-[1000px]:mb-[1rem] mb-[0.5rem] list-decimal [&>li>ul>li]:!ml-0"
            {...props}
        />
    ),
    blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
        <blockquote
            className="ml-[0.075em] border-l-3 border-gray-400 pl-4 text-gray-700 rounded-lg"
            {...props}
        />
    ),
};
