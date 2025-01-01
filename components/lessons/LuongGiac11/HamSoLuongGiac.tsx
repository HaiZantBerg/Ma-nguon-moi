import React from "react";
import {
    generalClassName,
    generalContentClassName,
    generalHeaderClassName,
    generalInstanceClassName,
    timelineStar,
} from "../../static/lessonsStatic";
import { BlockMath } from "react-katex";
import Image from "next/image";
import ExtraLearnMore from "@/components/Extra/ExtraLearnMore";
import ancientCalcTable from "@/public/Image/ancientCalcTable.png";

export default function HamSoLuongGiac() {
    return (
        <>
            <div className="col-[1/-1] row-[1/2] h-fit mt-[10px]">
                <div className={`${generalClassName}`}>
                    <span className="font-[475]">Hàm số lượng giác</span> (hay
                    hàm lượng giác) là một phần quan trọng của toán học, gắn
                    liền với các nghiên cứu về các mối quan hệ trong tam giác
                    vuông, hình học, và thiên văn học.
                    <div>
                        <Image src={ancientCalcTable} alt="" />
                        <span className="text-[rgba(0,0,0,0.75)]">
                            Bàn tính cổ Lưỡng Hà hơn 3.700 tuổi
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
