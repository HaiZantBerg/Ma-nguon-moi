import React from "react";

export default function page() {
    return (
        <div className="size-full flex justify-center items-center">
            {/* <svg viewBox="-150 -350 300 700" className="w-[10rem] h-auto"> */}
            <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-150 -350 300 700"
            >
                <path
                    d="M-100 -300 L100 -300 L100 300 L0 250 L-100 300 Z"
                    fill="none"
                    stroke="black"
                    strokeWidth={10}
                ></path>
            </svg>
        </div>
    );
}
