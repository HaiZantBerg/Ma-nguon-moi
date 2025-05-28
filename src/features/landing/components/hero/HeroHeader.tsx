import React from "react";
import Threed1Icon from "../../assets/3d1.svg";
import LandingPageHeader from "../../assets/landingPageHeader.svg";

export default function HeroHeader() {
    return (
        <div className="relative z-10 mx-auto">
            <LandingPageHeader
                id="landingPageHeader"
                className="h-[10rem] w-auto select-none sm:h-[18rem]"
            />
            <Threed1Icon className="absolute top-[-2.5rem] left-[-3.5rem] h-[3.5rem] w-auto select-none sm:top-[-4rem] sm:left-[-6.5rem] sm:h-[5.5rem]" />
        </div>
    );
}
