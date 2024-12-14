"use client";

import React from "react";
import { signal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";

const hello = signal(2);

setInterval(() => {
    console.log(hello);
}, 1000);

const hi = () => {
    hello.value = 4;
};

export default function page() {
    useSignals();
    return (
        <div>
            <div onClick={hi}>{hello.value}</div>
        </div>
    );
}
