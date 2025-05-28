import React from "react";
import Image from "next/image";
import dioptra from "public/Image/chapter/LuongGiac10/300TCN/dioptra.webp";
import dioptra2 from "public/Image/chapter/LuongGiac10/300TCN/dioptra2.webp";

export function ID() {
    return (
        <div className="mb-[2rem] flex max-[1100px]:flex-col gap-[4rem] max-[1100px]:gap-[2rem]">
            <div className="w-full">
                <div className="relative h-[15rem]">
                    <Image
                        src="/Image/chapter/LuongGiac10/TCD/luonggiacimage1.webp"
                        alt=""
                        fill
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>
                <p className="px-5 pt-2 text-center text-[rgba(0,0,0,0.75)] text-sm md:text-base min-[1000px]:text-[1.05rem]">
                    <strong>Groma</strong> - Công cụ khảo sát đất đai, được phát
                    minh vào thế kỷ thứ II - TK I TCN bởi Ai Cập, và phổ biến
                    tại Hy Lạp, La Mã
                </p>
            </div>
            <div className="relative w-full">
                <div className="relative h-[15rem]">
                    <Image
                        src="/Image/chapter/LuongGiac10/TCD/luonggiacimage2.webp"
                        alt=""
                        fill
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>
                <p className="px-5 pt-2 text-center text-[rgba(0,0,0,0.75)] text-sm md:text-base min-[1000px]:text-[1.05rem]">
                    Cách sử dụng groma trong khảo sát địa chính
                </p>
            </div>
        </div>
    );
}

export function ID2() {
    return (
        <div>
            <div className="*:relative flex justify-evenly">
                <div className="max-h-[15rem] w-[40%]">
                    <Image
                        src={dioptra}
                        alt=""
                        className="h-full object-contain"
                    />
                </div>
                <div className="max-h-[15rem] w-[40%]">
                    <Image
                        src={dioptra2}
                        alt=""
                        className="h-full object-contain"
                    />
                </div>
            </div>
            <p className="text-center min-[1000px]:my-[2rem] my-[1rem] text-sm md:text-base min-[1000px]:text-[1.05rem]">
                Dioptra- công cụ dùng để quan sát thiên văn và đo đạc địa chất,
                được phát minh bởi Héron thành Alexandria (Hy Lạp) vào thế kỷ
                III TCN
            </p>
        </div>
    );
}
