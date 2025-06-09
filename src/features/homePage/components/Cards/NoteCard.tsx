import React from "react";

export default function NoteCard() {
    const noteArray: object[] = [];

    return (
        <div className="py-4 px-6 h-full flex flex-col">
            <p className="text-2xl font-[Chakra_Petch] font-[550] text-secondary">
                Note
            </p>
            {noteArray.length ? (
                <div>
                    {noteArray.map((item, id) => {
                        return <div key={id}></div>;
                    })}
                </div>
            ) : (
                <div className="w-full h-full flex justify-center items-center">
                    <p className="text-[#919191]">
                        Hiện tại bạn chưa có note nào{`:(`}
                    </p>
                </div>
            )}
        </div>
    );
}
