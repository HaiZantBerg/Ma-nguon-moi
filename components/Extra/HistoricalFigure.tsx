import React from "react";

export default function HistoricalFigureInlineFact({
    children,
    image,
    historicalFigureName,
}: {
    children: React.ReactNode;
    image: React.JSX.Element;
    historicalFigureName?: string;
}) {
    return (
        <div className="flex md:flex-row flex-col gap-2 md:items-start items-center">
            <div className="md:min-w-[225px] max-w-[200px] *:w-full *:h-auto w-full">
                {image}
            </div>
            <div>
                <span className="font-[475]">{historicalFigureName}</span>{" "}
                {children}
            </div>
        </div>
    );
}
