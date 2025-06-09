import React from "react";

export function BookMarkIcon({
    gradient,
    id,
}: {
    gradient: string[];
    id: number;
}) {
    return (
        <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-108 -400 216 708"
        >
            <defs>
                <linearGradient
                    x1="0%"
                    x2="0%"
                    y1="0%"
                    y2="100%"
                    id={`gradient${id}`}
                    gradientTransform="rotate(330)"
                >
                    <stop offset="0%" stopColor={`rgb(${gradient[0]})`} />
                    <stop offset="100%" stopColor={`rgb(${gradient[1]}`} />
                </linearGradient>
            </defs>
            <path
                d="M-100 -400 L100 -400 L100 300 L0 250 L-100 300 Z"
                fill={`url(#gradient${id})`}
                stroke="none"
            />
        </svg>
    );
}

export function BookMarkIconOutline({ color }: { color: string }) {
    return (
        <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-108 -400 216 720"
        >
            <path
                d="M-100 -400 L100 -400 L100 300 L0 250 L-100 300 Z"
                fill="none"
                stroke={color}
                strokeWidth={8}
            />
        </svg>
    );
}
