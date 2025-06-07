import React from "react";
import { Grade, Habit, Note, Interest, Continue } from "./Cards";

export default function Hompage() {
    return (
        <div className="grid grid-rows-10 grid-cols-12 h-[55rem] mx-auto py-[5rem] w-[72rem] gap-6">
            <div
                className="row-[1/7] col-[1/5] border border-secondary rounded-2xl bg-white"
                id="note"
            >
                <Note />
            </div>
            <div
                className="row-[1/6] col-[5/13] *:rounded-2xl flex justify-between font-['Chakra_Petch']"
                id="grade"
            >
                <Grade />
            </div>
            <div
                className="row-[7/11] col-[1/5] border border-secondary rounded-2xl bg-white"
                id="habit"
            >
                <Habit />
            </div>
            <div
                className="row-[6/11] col-[5/9] border border-secondary rounded-2xl bg-white"
                id="maybeInterestedIn"
            >
                <Interest />
            </div>
            <div
                className="row-[6/11] col-[9/13] border border-secondary rounded-2xl bg-white"
                id="continue"
            >
                <Continue />
            </div>
        </div>
    );
}
