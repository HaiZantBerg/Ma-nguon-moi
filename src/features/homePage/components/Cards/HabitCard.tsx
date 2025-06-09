import React from "react";

const daysOfWeek = ["T.2", "T.3", "T.4", "T.5", "T.6", "T.7", "C.N"];

export default function HabitCard() {
    const today = new Date();

    const streak = 0;

    return (
        <div className="pb-4 px-6 flex flex-col justify-center h-full gap-5">
            <div className="flex">
                <div className="relative size-fit">
                    <div className="absolute top-1/2 text-2xl font-[Chakra_Petch] font-medium -translate-y-1/2 left-1/2 -translate-x-1/2">
                        {streak}
                    </div>
                    <svg viewBox="-100 -100 200 200" height={100} width={100}>
                        <circle
                            cy={0}
                            cx={0}
                            r={75}
                            fill="none"
                            strokeDasharray={475}
                            strokeDashoffset={474}
                            strokeWidth={13}
                            strokeLinecap="round"
                            className="rotate-[-90deg] stroke-secondary"
                        />
                        <circle
                            cy={0}
                            cx={0}
                            r={75}
                            fill="none"
                            strokeWidth={13}
                            strokeLinecap="round"
                            className="rotate-[-90deg] stroke-[rgba(0,0,0,0.1)]"
                        />
                    </svg>
                </div>
                <p className="text-[1.1rem] leading-[1.3rem] self-center font-[Chakra_Petch] text-secondary">
                    Duy trì thói quen khám phá tri thức toán học mỗi ngày 🔥
                </p>
            </div>
            <div className="flex">
                {daysOfWeek.map((day, idx) => {
                    const dateCondition =
                        Number(today.getDay()) === (idx + 1) % 7 ? true : false;

                    return (
                        <div
                            className="w-[44px] gap-2 flex flex-col items-center"
                            key={idx}
                        >
                            <svg
                                viewBox="0 0 100 100"
                                className={`h-full ${
                                    dateCondition ? "w-[2.25rem]" : "w-[2rem]"
                                }`}
                            >
                                <path
                                    d="M48.83 3.38a1.24 1.24 0 0 1 2.373 0l4.498 15.083a38.466 38.466 0 0 0 25.871 25.872l15.083 4.498a1.24 1.24 0 0 1 0 2.372l-15.083 4.498a38.466 38.466 0 0 0-25.87 25.871l-4.499 15.083a1.24 1.24 0 0 1-2.372 0l-4.498-15.083a38.466 38.466 0 0 0-25.872-25.87L3.38 51.204a1.24 1.24 0 0 1 0-2.372l15.082-4.498a38.466 38.466 0 0 0 25.872-25.872L48.83 3.381z"
                                    fill={
                                        dateCondition
                                            ? "rgb(200, 200 ,200)"
                                            : "rgb(230, 230 ,230)"
                                    }
                                    stroke={
                                        dateCondition
                                            ? "rgb(50, 50, 50)"
                                            : "rgb(100, 100, 100)"
                                    }
                                    strokeWidth={dateCondition ? 2 : 1}
                                />
                            </svg>
                            <p
                                className={`text-secondary ${
                                    dateCondition ? "font-bold" : "font-normal"
                                }`}
                            >
                                {day}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
