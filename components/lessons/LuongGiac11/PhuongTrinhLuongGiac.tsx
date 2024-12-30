import React from "react";
import {
    generalClassName,
    generalHeaderClassName,
    generalInstanceClassName,
    timelineStar,
} from "../../static/lessonsStatic";
import { InlineMath } from "react-katex";
// import unitAndArcLength from "@/public/Image/unitandarclength.png";

export default function PhuongTrinhLuongGiac() {
    return (
        <>
            <div className="col-[1/-1] row-[1/2] h-fit mt-[10px]">
                <div className={`${generalClassName}`}>
                    <span className={`${generalHeaderClassName} mb-1`}>
                        Góc lượng giác
                    </span>
                    <br />
                    Khái niệm về {'"'}góc âm{'"'} và {'"'}góc lớn hơn 360
                    <InlineMath math="\degree" />
                    {'"'} xuất hiện khi các nhà toán học mở rộng định nghĩa góc
                    vượt ra ngoài hình học thuần túy để đáp ứng nhu cầu trong
                    lượng giác, giải tích, và các lĩnh vực khoa học khác. Đây là
                    một phần quan trọng trong việc phát triển góc lượng giác
                    hiện đại.
                    <div className={`${generalInstanceClassName}`}>
                        <br />
                        1. Khái niệm ban đầu về góc (trước góc âm và lớn hơn 360
                        <InlineMath math="\degree" />)
                        <br />
                        <div className={`${generalInstanceClassName}`}>
                            Trong hình học cổ đại, góc được hiểu là một phần của
                            mặt phẳng tạo bởi hai tia giao nhau tại một đỉnh.
                            Góc chỉ được đo trong khoảng từ 0
                            <InlineMath math="\degree" /> đến 360
                            <InlineMath math="\degree" />, vì ứng dụng chính lúc
                            đó là trong hình học và thiên văn học.
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            Người Babylon đã định nghĩa một vòng tròn đầy đủ là
                            360
                            <InlineMath math="\degree" />, dựa trên chu kỳ của
                            năm.
                        </div>
                        <br />
                        2. Sự xuất hiện của góc âm
                        <div className={`${generalInstanceClassName}`}>
                            Thế kỷ 17: Khái niệm góc âm được đề xuất để mô tả
                            hướng quay ngược chiều kim đồng hồ (theo cách nhìn
                            từ vòng tròn đơn vị):
                            <div className={`${generalInstanceClassName}`}>
                                Góc dương: Được đo khi quay ngược chiều kim đồng
                                hồ.{" "}
                            </div>
                            <div className={`${generalInstanceClassName}`}>
                                Góc âm: Được đo khi quay theo chiều kim đồng hồ.
                            </div>
                        </div>
                        <br />
                        3. Góc lớn hơn 360°
                        <div className={`${generalInstanceClassName}`}>
                            Khi các nhà toán học nghiên cứu các hiện tượng tuần
                            hoàn (dao động, sóng, chuyển động tròn), họ nhận ra
                            rằng việc giới hạn góc trong khoảng 0
                            <InlineMath math="\degree" /> đến 360
                            <InlineMath math="\degree" /> là không đủ: Góc bằng
                            360
                            <InlineMath math="\degree" /> (hoặc 2
                            <InlineMath math="\pi" /> radian) biểu thị một vòng
                            quay đầy đủ. Góc 720
                            <InlineMath math="\degree" /> (hoặc 4
                            <InlineMath math="\pi" /> radian) biểu thị hai vòng
                            quay đầy đủ…
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            Khái niệm này giúp mô tả rõ hơn các chuyển động xoay
                            liên tục trong vật lý và kỹ thuật.{" "}
                        </div>
                        <br />
                        4. Vòng tròn đơn vị và sự phổ biến của khái niệm
                        <div className={`${generalInstanceClassName}`}>
                            Vòng tròn đơn vị (với bán kính bằng 1) đã đóng vai
                            trò lớn trong việc mở rộng khái niệm góc.
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            Nhờ khái niệm về vòng tròn đơn vị mà việc tính toán
                            lượng giác trở nên đơn giản hơn. Khi mà mọi kích
                            thước có thể co về bên trong đường tròn đơn vị.
                        </div>
                        <br />
                        5. Kết luận
                        <div className={`${generalInstanceClassName}`}>
                            Khái niệm góc âm và góc lớn hơn 360° xuất hiện từ
                            nhu cầu mô tả các chuyển động phức tạp trong toán
                            học và vật lý, được định hình rõ ràng vào thế kỷ
                            17-18, khi lượng giác và vòng tròn đơn vị trở nên
                            phổ biến. Những khái niệm này hiện nay là nền tảng
                            quan trọng trong toán học hiện đại, giải tích, và
                            các ngành kỹ thuật.{" "}
                        </div>
                    </div>
                    <br />
                    <span className={`${generalHeaderClassName} mb-1`}>
                        Đơn vị đo góc và độ dài cung tròn
                    </span>
                    <div>
                        Việc đo góc bằng{" "}
                        <span className="font-[475]">radian</span> bắt nguồn từ
                        sự phát triển của toán học vào{" "}
                        <span className="font-[475]">thế kỷ 18</span>, mặc dù
                        khái niệm cơ bản đã có trước đó nhưng chưa được chuẩn
                        hóa. Đây là quá trình phát triển:
                        <div className={`${generalInstanceClassName}`}>
                            <br />
                            1. Khái niệm cơ bản trước radian{" "}
                            <div className={`${generalInstanceClassName}`}>
                                Trong thời kỳ cổ đại, các nhà toán học như{" "}
                                <span className="font-[475]">Euclid</span> và{" "}
                                <span className="font-[475]">Archimedes</span>{" "}
                                đã biết rằng độ dài của một cung tròn liên hệ
                                với bán kính của nó. Tuy nhiên, họ chưa đặt tên
                                hay sử dụng hệ đo góc dựa trên tỷ lệ này.{" "}
                            </div>
                            <div className={`${generalInstanceClassName}`}>
                                Người Babylon sử dụng hệ{" "}
                                <span className="font-[475]">độ (degree)</span>,
                                chia một vòng tròn thành 360
                                <InlineMath math="\degree" />.{" "}
                            </div>
                            <br />
                            2. Sự xuất hiện của ý tưởng radian
                            <div className={`${generalInstanceClassName}`}>
                                {" "}
                                <span className="font-[475]">Thế kỷ 17</span>: Ý
                                tưởng đo góc dựa trên tỉ lệ giữa cung tròn và
                                bán kính xuất hiện trong các nghiên cứu của{" "}
                                <span className="font-[475]">Isaac Newton</span>{" "}
                                và{" "}
                                <span className="font-[475]">Roger Cotes</span>.{" "}
                            </div>
                            <br />
                            3. Định nghĩa radian chính thức
                            <div className={`${generalInstanceClassName}`}>
                                {" "}
                                Một vòng tròn đầy đủ có góc 2
                                <InlineMath math="\pi" /> radian: 2
                                <InlineMath math="\pi" />, radian = 360
                                <InlineMath math="\degree" />.{" "}
                            </div>
                            <div className={`${generalInstanceClassName}`}>
                                Độ dài cung tròn được tính bằng công thức:{" "}
                                <InlineMath math="s = r \cdot \theta" />, với{" "}
                                <InlineMath math="\theta" /> tính bằng radian.{" "}
                            </div>
                            <br />
                            4. Tóm lại
                            <div className={`${generalInstanceClassName}`}>
                                Khái niệm radian xuất hiện vào thế kỷ 17 và được
                                Leonhard Euler chính thức hóa vào năm 1743.
                                Thuật ngữ {'"'}radian{'"'} được đặt tên vào năm
                                1873 bởi James Thomson.{" "}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar.ThoiCoDai}
                </div>
            </div>
        </>
    );
}
