import Slider from "@/components/Main/Slider";
import { Suspense } from "react";
import React from "react";

export default function page() {
    return (
        <Suspense>
            <Slider id={0} />
        </Suspense>
    );
}
