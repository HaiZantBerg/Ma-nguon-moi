import { Chakra_Petch } from "next/font/google";
import React from "react";

const chakraPetch = Chakra_Petch({ weight: "700", subsets: ["vietnamese"] });

export default function page() {
    return (
        <div
            className={`${chakraPetch.className} text-[5rem] leading-[6.5rem] max-h-[250px] overflow-y-auto`}
        >
            adasdasdasdasdasaas
            <br /> sada
        </div>
    );
}
