import React from "react";

export default function Continue() {
    const continuingChapter = {};

    return (
        <div className="py-4 px-6 h-full flex flex-col">
            <p className="text-2xl font-[Chakra_Petch] font-[550] text-secondary">
                Tiếp tục tìm hiểu
            </p>
            {Object.keys(continuingChapter).length ? (
                <div></div>
            ) : (
                <div className="w-full h-full flex px-5 justify-center items-center">
                    <p className="text-[#919191] relative -top-2 text-pretty">
                        Có vẻ không có chương nào mà bạn đang tiếp tục theo dõi
                        - bắt đầu ngay thôi!
                    </p>
                </div>
            )}
        </div>
    );
}
