import React from "react";
import {
    generalClassName,
    generalContentClassName,
    generalInstanceClassName,
    timelineStar,
} from "../../static/lessonsStatic";
import { InlineMath } from "react-katex";
import Image from "next/image";
import unitAndArcLength from "@/public/Image/unitandarclength.png";

export default function GiaTriLuongGiacCuaGocLuongGiac() {
    return (
        <>
            <div className="col-[1/-1] row-[1/2] h-fit mt-[10px]">
                <div className="bg-white relative z-[100] md:text-[45px] text-[32.5px] leading-[1] left-[4px] md:h-[55px] h-[40px] pt-2 top-[-10px] font-['Algerian'] flex">
                    I.
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 165.5 24.35"
                        className="h-[120%] md:-translate-y-2 -translate-y-1 translate-x-3"
                    >
                        <path
                            d="M272.25,306.86a1.85,1.85,0,0,1,.3.87,1,1,0,0,1-.42.95,1.5,1.5,0,0,1-1.32.24,1.49,1.49,0,0,0,.88.18,1.06,1.06,0,0,0,1-1.21A1.47,1.47,0,0,0,272.25,306.86Z"
                            transform="translate(-198.25 -285.15)"
                            fill="#231f20"
                        />
                        <circle
                            cx="71.6"
                            cy="21.69"
                            r="1.21"
                            fill="#231f20"
                            transform="translate(1.01 0.75)"
                        />
                        <polygon
                            points="23.01 1.21 19.63 3.97 19.04 3.37 21.79 0 23.01 1.21"
                            fill="#231f20"
                        />
                        <polygon
                            points="21.28 0.04 18.5 3.44 19.13 4.07 18.91 4.04 18.32 3.45 21.07 0.08 21.28 0.04"
                            fill="#231f20"
                        />
                        <polygon
                            points="139.56 1.21 136.19 3.97 135.59 3.37 138.35 0 139.56 1.21"
                            fill="#231f20"
                            transform="translate(2 0)"
                        />
                        <polygon
                            points="137.83 0.04 135.06 3.44 135.68 4.07 135.46 4.04 134.87 3.45 137.62 0.08 137.83 0.04"
                            fill="#231f20"
                            transform="translate(2 0)"
                        />
                        <text
                            transform="translate(0 19.17)"
                            fontSize={20}
                            fill="#231f20"
                            className="font-['Algerian']"
                        >
                            goc luong giac
                        </text>
                        <path
                            d="M272.17,290.16l.15,0s1-.85,1.49-.67.19.58.19.58.16-.42-.06-.6S273.12,289.33,272.17,290.16Z"
                            transform="translate(-199 -285.9)"
                            fill="#231f20"
                        />
                        <path
                            d="M274.26,289a4.4,4.4,0,0,0,3.12-.14,48.78,48.78,0,0,0-3.82,3.45c-.08.09-.19-.1-.25,0-.5.63,1.38-2.75.87-3.14s-1.73.48-2.19.88l.9-1.41a.4.4,0,0,1,.55-.19C273.67,288.59,273.75,288.73,274.26,289Z"
                            transform="translate(-199 -285.9)"
                            fill="#231f20"
                        />
                        <path
                            d="M274.1,292.11a30,30,0,0,1,3.21-2.71l0,.18a25.61,25.61,0,0,0-3.18,2.64Z"
                            transform="translate(-199 -285.9)"
                            fill="#231f20"
                        />
                        <path
                            d="M263.18,289.81l.15,0s1-.85,1.49-.66.19.58.19.58.16-.42-.06-.6S264.13,289,263.18,289.81Z"
                            transform="translate(-199 -285.9)"
                            fill="#231f20"
                        />
                        <path
                            d="M265.26,288.69a4.42,4.42,0,0,0,3.13-.13,43.24,43.24,0,0,0-3.82,3.17c-.09.1-.27,0-.32.06-.5.63,1.45-2.56.94-3s-1.73.48-2.2.87c0,0,.5-.75.91-1.4a.4.4,0,0,1,.55-.19C264.67,288.25,264.76,288.39,265.26,288.69Z"
                            transform="translate(-199 -285.9)"
                            fill="#231f20"
                        />
                        <path
                            d="M264.75,292.19l.26-.39a20,20,0,0,1,3.38-3l-.09.27a15,15,0,0,0-3.07,2.61c-.31.38-.25.66-.33.75Z"
                            transform="translate(-199 -285.9)"
                            fill="#231f20"
                        />
                    </svg>
                </div>
                <div className={`${generalClassName}`}>
                    Khái niệm về {'"'}góc âm{'"'} và {'"'}góc lớn hơn 360
                    <InlineMath math="\degree" />
                    {'"'} xuất hiện khi các nhà toán học mở rộng định nghĩa góc
                    vượt ra ngoài hình học thuần túy để đáp ứng nhu cầu trong
                    lượng giác, giải tích, và các lĩnh vực khoa học khác. Đây là
                    một phần quan trọng trong việc phát triển góc lượng giác
                    hiện đại.
                </div>
            </div>{" "}
            <div className="col-[1/-1] row-[2/3] h-fit mt-[10px]">
                {timelineStar.ThoiCoDai(6)}
                <div className={`${generalClassName}`}>
                    <div className={`${generalContentClassName}`}>
                        Trong hình học cổ đại, góc được hiểu là một phần của mặt
                        phẳng tạo bởi hai tia giao nhau tại một đỉnh. Góc chỉ
                        được đo trong khoảng từ 0<InlineMath math="\degree" />{" "}
                        đến 360
                        <InlineMath math="\degree" />, vì ứng dụng chính lúc đó
                        là trong hình học và thiên văn học.
                        <br />
                        <br />
                        Người Babylon đã định nghĩa một vòng tròn đầy đủ là 360
                        <InlineMath math="\degree" />, dựa trên chu kỳ của năm.
                        <br />
                        <br />
                        Các nhà toán học Hy Lạp chỉ định nghĩa góc dương (góc
                        quay theo chiều ngược chiều kim đồng hồ) trong các
                        nghiên cứu hình học và thiên văn. Họ chưa đề cập đến góc
                        âm.
                    </div>
                </div>
            </div>{" "}
            <div className="col-[1/-1] row-[3/4] h-fit mt-[10px]">
                {timelineStar.TheKy(381921, "15 - 16")}
                <div className={`${generalClassName}`}>
                    <div className={`${generalContentClassName}`}>
                        Regiomontanus (1436-1476): Trong De Triangulis
                        Omnimodis, ông sử dụng các khái niệm lượng giác trên
                        đường tròn, nhưng chưa gắn cụ thể với bán kính{" "}
                        <InlineMath math="1" />.
                        <br />
                        <br /> François Viète (1540-1603): Đưa vào các ký hiệu
                        và công thức lượng giác gần với hiện đại, mở đường cho
                        khái niệm vòng tròn đơn vị.
                        <div className={`${generalInstanceClassName}`}>
                            <br />
                            Vòng tròn đơn vị (với bán kính bằng{" "}
                            <InlineMath math="1" />) đã đóng vai trò lớn trong
                            việc mở rộng khái niệm góc.
                            <br />
                            <br />
                            Nhờ khái niệm về vòng tròn đơn vị mà việc tính toán
                            lượng giác trở nên đơn giản hơn. Khi mà mọi kích
                            thước có thể có về bên trong đường tròn đơn vị.{" "}
                        </div>
                    </div>
                </div>
            </div>{" "}
            <div className="col-[1/-1] row-[4/5] h-fit mt-[10px]">
                {timelineStar.TheKy(38321, "17 - 18")}
                <div className={`${generalClassName}`}>
                    <div className={`${generalContentClassName}`}>
                        Khái niệm này giúp mô tả rõ hơn các chuyển động xoay
                        liên tục trong vật lý và kỹ thuật.
                        <div className={`${generalInstanceClassName}`}>
                            <br />
                            <span className="font-[475]">
                                René Descartes (1596-1650)
                            </span>
                            : Trong hệ tọa độ Descartes, các điểm trên mặt phẳng
                            được biểu diễn với tọa độ âm và dương. Điều này gián
                            tiếp tạo điều kiện để định nghĩa góc âm trên vòng
                            tròn đơn vị.
                            <br />
                            <br />
                            <span className="font-[475]">
                                Isaac Newton (1642-1727)
                            </span>
                            : Nghiên cứu của Newton về dao động và sóng tuần
                            hoàn cho thấy sự cần thiết của góc âm để biểu diễn
                            các pha chuyển động ngược chiều kim đồng hồ.
                            <br />
                            <br />
                            <span className="font-[475]">
                                Leonhard Euler (1707-1783)
                            </span>
                            : Euler chính thức hóa định nghĩa các hàm lượng giác
                            tuần hoàn trong vòng tròn đơn vị. Ông định nghĩa rõ
                            ràng:
                            <div className={`${generalInstanceClassName}`}>
                                Góc dương: Quay theo chiều{" "}
                                <span className="font-[475]">
                                    ngược chiều kim đồng hồ
                                </span>
                                .
                                <br />
                                Góc âm: Quay theo chiều{" "}
                                <span className="font-[475]">kim đồng hồ</span>.
                            </div>
                        </div>{" "}
                        <br />
                        Các bằng chứng về góc âm và góc lớn hơn 360
                        <InlineMath math="\degree" /> sẽ được nêu rõ trong phần
                        hàm số lượng giác và phương trình lượng giác ở phần tiếp
                        theo.
                    </div>
                </div>
            </div>
            <div className="col-[1/-1] row-[5/6] h-fit mt-[10px]">
                <div className="*:bg-white flex flex-wrap relative z-[100] md:text-[45px] text-[32.5px] leading-[1] left-[4px] pt-2 top-[-10px] font-['Algerian']">
                    <div className="mr-3">II.</div>
                    <svg
                        id="Layer_3"
                        data-name="Layer 3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 170.29 24.74"
                        className="md:h-[57px] h-[42px] md:-translate-y-2 -translate-y-[6px] mr-3"
                    >
                        <polygon
                            points="117.76 1.72 114.54 4.35 113.98 3.78 116.6 0.56 117.76 1.72"
                            fill="#231f20"
                            transform="translate(3 0)"
                        />
                        <polygon
                            points="116.11 0.6 113.47 3.84 114.06 4.44 113.85 4.42 113.29 3.85 115.91 0.64 116.11 0.6"
                            fill="#231f20"
                            transform="translate(3 0)"
                        />
                        <path
                            d="M272.25,306.86a1.85,1.85,0,0,1,.3.87,1,1,0,0,1-.42.95,1.5,1.5,0,0,1-1.32.24,1.49,1.49,0,0,0,.88.18,1.06,1.06,0,0,0,1-1.21A1.47,1.47,0,0,0,272.25,306.86Z"
                            transform="translate(-211.5 -284.75)"
                            fill="#231f20"
                        />
                        <circle
                            cx="71.6"
                            cy="21.69"
                            r="1.21"
                            fill="#231f20"
                            transform="translate(-12.5 0.75)"
                        />
                        <polygon
                            points="154.72 1.11 157.81 3.63 158.35 3.09 155.83 0 154.72 1.11"
                            fill="#231f20"
                            transform="translate(5 0)"
                        />
                        <polygon
                            points="156.3 0.03 158.84 3.15 158.27 3.72 158.47 3.7 159.01 3.16 156.5 0.07 156.3 0.03"
                            fill="#231f20"
                            transform="translate(5 0)"
                        />
                        <polygon
                            points="3.73 14.01 1.49 14.01 0.98 14.52 0.64 14.44 1.3 13.78 3.55 13.77 3.73 14.01"
                            fill="#231f20"
                        />
                        <polygon
                            points="6.5 14.6 6.5 11.88 6.35 11.61 6.35 14.44 6.5 14.6"
                            fill="#231f20"
                        />
                        <polygon
                            points="2.98 13.25 5.22 13.25 5.96 13.98 5.96 11.28 5.22 12.02 2.98 12.02 0.73 12.02 0 11.28 0 13.98 0.73 13.25 2.98 13.25"
                            fill="#231f20"
                        />
                        <polygon
                            points="68.67 14.01 66.42 14.01 65.91 14.52 65.57 14.44 66.24 13.78 68.48 13.77 68.67 14.01"
                            fill="#231f20"
                            transform="translate(2.5 0)"
                        />
                        <polygon
                            points="71.43 14.6 71.43 11.88 71.28 11.61 71.28 14.44 71.43 14.6"
                            fill="#231f20"
                            transform="translate(2.5 0)"
                        />
                        <polygon
                            points="67.91 13.25 70.16 13.25 70.89 13.98 70.89 11.28 70.16 12.02 67.91 12.02 65.67 12.02 64.94 11.28 64.94 13.98 65.67 13.25 67.91 13.25"
                            fill="#231f20"
                            transform="translate(2.5 0)"
                        />
                        <text
                            transform="translate(0.37 19.56)"
                            fontSize={20}
                            fill="#231f20"
                        >
                            don vi do goc va
                        </text>
                        <path
                            d="M216.41,284.83l.15,0s1-.85,1.49-.66c.32.13.19.58.19.58s.15-.42-.07-.6S217.36,284,216.41,284.83Z"
                            transform="translate(-196.25 -280.17)"
                            fill="#231f20"
                        />
                        <path
                            d="M218.49,283.71a4.42,4.42,0,0,0,3.13-.13,41.21,41.21,0,0,0-4,3.3c0,.05-.17,0-.21,0-.5.63,1.48-2.65,1-3s-1.73.48-2.19.87c0,0,.5-.75.91-1.4a.39.39,0,0,1,.54-.19C217.9,283.27,218,283.41,218.49,283.71Z"
                            transform="translate(-196.25 -280.17)"
                            fill="#231f20"
                        />
                        <path
                            d="M218.33,286.77a31,31,0,0,1,3.21-2.71l0,.18a27.16,27.16,0,0,0-3.18,2.64Z"
                            transform="translate(-196.25 -280.17)"
                            fill="#231f20"
                        />
                    </svg>
                    <svg
                        id="Layer_3"
                        data-name="Layer 3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 179.49 24.74"
                        className="md:h-[57px] h-[42px] md:-translate-y-2 -translate-y-[6px]"
                    >
                        <path
                            d="M272.25,306.86a1.85,1.85,0,0,1,.3.87,1,1,0,0,1-.42.95,1.5,1.5,0,0,1-1.32.24,1.49,1.49,0,0,0,.88.18,1.06,1.06,0,0,0,1-1.21A1.47,1.47,0,0,0,272.25,306.86Z"
                            transform="translate(-251.5 -284.75)"
                            fill="#231f20"
                        />
                        <circle
                            cx="71.6"
                            cy="21.69"
                            r="1.21"
                            fill="#231f20"
                            transform="translate(-52.5 0.75)"
                        />
                        <polygon
                            points="46.82 1.11 49.9 3.63 50.44 3.09 47.92 0 46.82 1.11"
                            fill="#231f20"
                        />
                        <polygon
                            points="48.39 0.03 50.93 3.15 50.36 3.72 50.56 3.7 51.1 3.16 48.59 0.07 48.39 0.03"
                            fill="#231f20"
                        />
                        <polygon
                            points="150.13 1.11 153.22 3.63 153.76 3.09 151.24 0 150.13 1.11"
                            fill="#231f20"
                            transform="translate(2.5 0)"
                        />
                        <polygon
                            points="151.71 0.03 154.25 3.15 153.68 3.72 153.88 3.7 154.42 3.16 151.91 0.07 151.71 0.03"
                            fill="#231f20"
                            transform="translate(2.5 0)"
                        />
                        <polygon
                            points="3.73 13.7 1.49 13.7 0.98 14.21 0.64 14.13 1.3 13.47 3.55 13.46 3.73 13.7"
                            fill="#231f20"
                        />
                        <polygon
                            points="6.5 14.29 6.5 11.57 6.35 11.31 6.35 14.13 6.5 14.29"
                            fill="#231f20"
                        />
                        <polygon
                            points="2.98 12.95 5.22 12.95 5.96 13.68 5.96 10.98 5.22 11.71 2.98 11.71 0.73 11.71 0 10.98 0 13.68 0.73 12.95 2.98 12.95"
                            fill="#231f20"
                        />
                        <polygon
                            points="18.52 2.65 16.2 4.5 14.69 4.5 14.96 4.64 16.48 4.64 18.64 2.93 18.52 2.65"
                            fill="#231f20"
                        />
                        <path
                            d="M386.2,281.64l-.33-.24a16.19,16.19,0,0,0,3.22,3.27h-1.77l.53.14h1.53A21.85,21.85,0,0,1,386.2,281.64Z"
                            transform="translate(-366.68 -280.17)"
                            fill="#231f20"
                        />
                        <path
                            d="M381.21,284.38h1.53l2-1.61,2,1.61h1.52s-2.59-1.94-3.17-3.22h-.78C383.81,282.44,381.21,284.38,381.21,284.38Z"
                            transform="translate(-366.68 -280.17)"
                            fill="#231f20"
                        />
                        <text
                            transform="translate(0.4 19.56)"
                            fontSize={20}
                            fill="#231f20"
                        >
                            do dai cung tron
                        </text>
                    </svg>
                </div>
                <div className={`${generalClassName}`}>
                    <div className="my-2 flex flex-col md1:w-fit w-full items-center gap-4">
                        <Image src={unitAndArcLength} alt="" />
                    </div>
                    Việc đo góc bằng <span className="font-[475]">radian</span>{" "}
                    bắt nguồn từ sự phát triển của toán học vào{" "}
                    <span className="font-[475]">thế kỷ 18</span>, mặc dù khái
                    niệm cơ bản đã có trước đó nhưng chưa được chuẩn hóa. Đây là
                    quá trình phát triển:
                </div>
            </div>
            <div className="col-[1/-1] row-[6/7] h-fit mt-[10px]">
                {timelineStar.ThoiCoDai(1)}
                <div className={`${generalClassName}`}>
                    <div className={`${generalContentClassName}`}>
                        Trong thời kỳ cổ đại, các nhà toán học như{" "}
                        <span className="font-[475]">Euclid</span> và
                        <span className="font-[475]">Archimedes</span> đã biết
                        rằng độ dài của một cung tròn liên hệ với bán kính của
                        nó. Tuy nhiên, họ chưa đặt tên hay sử dụng hệ đo góc dựa
                        trên tỷ lệ này.
                        <br /> <br />
                        Người Babylon sử dụng hệ{" "}
                        <span className="font-[475]">độ (degree)</span>, chia
                        một vòng tròn thành 360
                        <InlineMath math="\degree" />.
                    </div>
                </div>
            </div>
            <div className="col-[1/-1] row-[7/8] h-fit mt-[10px]">
                {timelineStar.TheKy(325, "15 - 16")}
                <div className={`${generalClassName}`}>
                    <div className={`${generalContentClassName}`}>
                        Regiomontanus (1436-1476): Trong cuốn De Triangulis
                        Omnimodis, ông đã nhấn mạnh mối quan hệ giữa cung tròn,
                        bán kính và góc. Đây là một bước tiến quan trọng trong
                        việc chuẩn hóa khái niệm này ở châu Âu.
                        <br />
                        <br />
                        René Descartes (1596-1650): Descartes định nghĩa các
                        điểm trên đường tròn trong hệ tọa độ Descartes, tạo nền
                        tảng để biểu diễn cung tròn và góc một cách chính xác.
                    </div>
                </div>
            </div>
            <div className="col-[1/-1] row-[8/9] h-fit mt-[10px]">
                {timelineStar.TheKy(3125, "17")}
                <div className={`${generalClassName}`}>
                    <div className={`${generalContentClassName}`}>
                        Sự xuất hiện của ý tưởng radian. Ý tưởng đo góc dựa trên
                        tỉ lệ giữa cung tròn và bán kính xuất hiện trong các
                        nghiên cứu của Isaac Newton và Roger Cotes. Định nghĩa
                        radian chính thức Một vòng tròn đầy đủ có góc{" "}
                        <InlineMath math="2\pi" /> radian:{" "}
                        <InlineMath math="2\pi" />, radian = 360
                        <InlineMath math="\degree" />. Độ dài cung tròn được
                        tính bằng công thức:{" "}
                        <InlineMath math="s = r \cdot \theta" />, với{" "}
                        <InlineMath math="\theta" /> tính bằng radian.
                    </div>
                </div>
            </div>
        </>
    );
}
