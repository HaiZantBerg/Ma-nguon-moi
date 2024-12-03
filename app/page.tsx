// import React from "react";
// // import Image from "next/image";
// import Link from "next/link";

// const page = () => {
//     return (
//         <div>
//             <div className="absolute w-screen h-screen -z-10"></div>
//             <div className="py-4">
//                 <div className="px-10 flex justify-between items-center">
//                     <Link href="/" className="flex items-center w-fit">
//                         {/* <Image src="" alt="" /> */}
//                         <div className="bg-black w-12 h-12 mr-4"></div>
//                         <div className="text-2xl font-[900]">EThems</div>
//                     </Link>
//                     <Link
//                         className="h-12 w-36 rounded-full bg-black flex justify-center items-center"
//                         href="/gettingstarted"
//                     >
//                         <span className="text-white font-semibold">
//                             Get started
//                         </span>
//                         <span className="hidden">Hùng béo vcl</span>
//                     </Link>
//                 </div>
//             </div>
//             <div className="h-96 w-screen flex justify-center pt-64 text-6xl font-bold">
//                 Slogan
//             </div>
//         </div>
//     );
// };

import React from "react";
import CardGrade from "@/components/CardGrade";
import { Chakra_Petch } from "next/font/google";

const chakraPetch = Chakra_Petch({ weight: "700", subsets: ["vietnamese"] });

export default function page() {
    return (
        <div className="flex flex-col *:justify-between xl:px-40 md:px-24 px-5 pt-20 gap-24">
            <div className="flex gap-8">
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
