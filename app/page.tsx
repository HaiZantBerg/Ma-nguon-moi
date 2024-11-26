import React from "react";
// import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <div>
            <div className="absolute w-screen h-screen -z-10"></div>
            <div className="py-4">
                <div className="px-10 flex justify-between items-center">
                    <Link href="/" className="flex items-center w-fit">
                        {/* <Image src="" alt="" /> */}
                        <div className="bg-black w-12 h-12 mr-4"></div>
                        <div className="text-2xl font-[900]">EThems</div>
                    </Link>
                    <Link
                        className="h-12 w-36 rounded-full bg-black flex justify-center items-center"
                        href="/gettingstarted"
                    >
                        <span className="text-white font-semibold">
                            Get started
                        </span>
                        <span className="hidden">Hùng béo vcl</span>
                    </Link>
                </div>
            </div>
            <div className="h-96 w-screen flex justify-center pt-64 text-6xl font-bold">
                Slogan
            </div>
        </div>
    );
};

export default page;
