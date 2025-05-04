import React from "react";
import threed1 from "../../assets/3d1.svg";
import landingPageHeader from "../../assets/landingPageHeader.svg";
import Image from "next/image";

export default function HeroHeader() {
    return (
        <div className="relative z-10 mx-auto">
            <Image
                src={landingPageHeader}
                alt="Header"
                id="landingPageHeader"
                className="h-[10rem] w-auto select-none sm:h-[18rem]"
            />
            <Image
                src={threed1}
                alt="3dObject1"
                className="absolute top-[-2.5rem] left-[-3.5rem] h-[3.5rem] w-auto select-none sm:top-[-4rem] sm:left-[-6.5rem] sm:h-[5.5rem]"
            />
        </div>
    );
}
