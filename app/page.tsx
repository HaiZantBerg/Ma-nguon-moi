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
import CardGrade from "@/components/Main/CardGrade";

const page = () => {
    return (
        <div className="flex flex-col *:justify-between xl:px-[6vw] h-[calc(100vh-64px)] md:px-24 px-5 py-20 xl:gap-[25vh] gap-24">
            <div className="flex gap-8">
                <div className='lg3:text-5xl md:text-[2.3rem] text-[1.75rem] md:min-w-fit min-w-[145px] font-bold font-["Chakra_Petch"] leading-10 pt-5 text-wrap'>
                    <p className="md:block hidden">
                        Chọn Khối Của
                        <br /> Bạn
                    </p>
                    <p className="md:hidden">Chọn Khối Của Bạn</p>
                </div>
                <div className="text-end pt-3 w-[560px] md:text-base text-sm xl:text-lg">
                    Nơi đây tập hợp các cột mốc quan trọng trong toán học, từ
                    các con số cổ đại đến các lý thuyết hiện đại, kết nối kiến
                    thức qua các thời đại và nền văn hóa. Hãy cùng chúng tôi
                    khám phá di sản và sự phát triển của toán học, một lĩnh vực
                    tiếp tục định hình thế giới của chúng ta.
                </div>
            </div>
            <CardGrade />
        </div>
    );
};

export default page;
