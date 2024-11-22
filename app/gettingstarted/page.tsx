import React from "react";
import CardGrade from "@/components/CardGrade";
import { Chakra_Petch } from "next/font/google";

const chakraPetch = Chakra_Petch({ weight: "700", subsets: ["vietnamese"] });

export default function page() {
    return (
        <div className="flex flex-col *:justify-between xl:px-40 md:px-24 px-5 pt-20 gap-24">
            <div className="flex">
                <div
                    className={`text-[2.3rem] font-black ${chakraPetch.className} leading-10 pt-5`}
                >
                    Chọn Khối Của
                    <br /> Bạn
                </div>
                <div className="text-end pt-3 w-[560px]">
                    Nơi đây tập hợp các cột mốc quan trọng trong toán học, từ
                    các con số cổ đại đến các lý thuyết hiện đại, kết nối kiến
                    ​​thức qua các thời đại và nền văn hóa. Hãy cùng chúng tôi
                    khám phá di sản và sự phát triển của toán học, một lĩnh vực
                    tiếp tục định hình thế giới của chúng ta.
                </div>
            </div>
            <CardGrade />
        </div>
    );
}
