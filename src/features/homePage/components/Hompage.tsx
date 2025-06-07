import React from "react";
import { Grade, Habit, Note, Interest, Continue } from "./Cards";

export default function Hompage() {
    return (
        <div className="grid auto-rows-fr grid-cols-12 min-[81.25rem]:h-[55rem] min-[54rem]:h-[80rem] h-[135rem] mx-auto py-[5rem] min-[81.25rem]:w-[72rem] min-[54rem]:w-[48rem] w-[21rem] gap-6">
            <div
                className="min-[81.25rem]:row-[1/7] min-[54rem]:row-[12/16] row-[22/26] min-[81.25rem]:col-[1/5] min-[54rem]:col-[1/8] col-[1/13] border border-secondary rounded-2xl bg-white"
                id="note"
            >
                <Note />
            </div>
            <div
                className="row-[1/6] min-[81.25rem]:col-[5/13] col-[1/13] overflow-x-auto font-['Chakra_Petch'] max-[54rem]:px-[3.2rem]"
                id="grade"
            >
                <Grade />
            </div>
            <div
                className="min-[81.25rem]:row-[7/11] min-[54rem]:row-[12/16] row-[6/10] min-[81.25rem]:col-[1/5] min-[54rem]:col-[8/13] col-[1/13] border border-secondary rounded-2xl bg-white"
                id="habit"
            >
                <Habit />
            </div>
            <div
                className="min-[81.25rem]:row-[6/11] min-[54rem]:row-[6/12] row-[10/16] min-[81.25rem]:col-[5/9] min-[54rem]:col-[1/7] col-[1/13] border border-secondary rounded-2xl bg-white"
                id="maybeInterestedIn"
            >
                <Interest />
            </div>
            <div
                className="min-[81.25rem]:row-[6/11] min-[54rem]:row-[6/12] row-[16/22] min-[81.25rem]:col-[9/13] min-[54rem]:col-[7/13] col-[1/13] border border-secondary rounded-2xl bg-white"
                id="continue"
            >
                <Continue />
            </div>
        </div>
    );
}
