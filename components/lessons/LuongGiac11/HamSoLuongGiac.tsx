import React from "react";
import {
    generalClassName,
    generalContentClassName,
    timelineStar,
} from "../../static/lessonsStatic";
import Image from "next/image";
import ancientCalcTable from "@/public/Image/ancientcalctable.png";
import ExtraInlineFact from "@/components/Extra/ExtraInlineFact";
import HistoricalFigure from "@/components/Extra/HistoricalFigure";
import geocentricModel from "@/public/Image/geocentricmodel.png";
import IsaacNewton from "@/public/Image/isaacnewton.png";
import LeonhardEuler from "@/public/Image/leonhardeuler.png";
import Regiomontanus from "@/public/Image/regiomontanus.png";
import Hipparchus from "@/public/Image/hipparchus.png";
import Ptolemy from "@/public/Image/ptolemy.png";
import Aryabhata from "@/public/Image/aryabhata.png";
import Varahamihira from "@/public/Image/varahamihira.png";

export default function HamSoLuongGiac() {
    return (
        <>
            <div className="col-[1/-1] row-[1/2] h-fit mt-[10px]">
                <div className={`${generalClassName}`}>
                    <span className="font-[475]">Hàm số lượng giác</span> (hay
                    hàm lượng giác) là một phần quan trọng của toán học, gắn
                    liền với các nghiên cứu về các mối quan hệ trong tam giác
                    vuông, hình học, và thiên văn học.
                    <div className="mt-4 flex flex-col md1:w-fit w-full items-center gap-4">
                        <Image src={ancientCalcTable} alt="" />
                        <div>
                            <span className="text-[rgba(0,0,0,0.75)] font-[475]">
                                Bàn tính cổ Lưỡng Hà
                            </span>{" "}
                            hơn 3.700 tuổi
                        </div>
                    </div>
                </div>
                {timelineStar.ThoiCoDai(4)}
                <div className={`${generalClassName}`}>
                    <div className={`${generalContentClassName}`}>
                        <ExtraInlineFact buttonContent="Hipparchus">
                            <HistoricalFigure
                                historicalFigureName="Hipparchus"
                                image={<Image src={Hipparchus} alt="" />}
                            >
                                (190 - 120 TCN) là một nhà thiên văn học và toán
                                học người Hy Lạp, nổi tiếng với việc phát triển
                                các bảng lượng giác đầu tiên sử dụng các đoạn
                                cung tròn. Ông có những đóng góp quan trọng
                                trong việc tính toán các góc và chu kỳ thiên
                                văn, đặt nền móng cho nhiều lý thuyết toán học
                                sau này. Các công trình của Hipparchus đã có ảnh
                                hưởng sâu rộng đến thiên văn học và toán học
                                hiện đại.
                            </HistoricalFigure>
                        </ExtraInlineFact>
                        , nhà thiên văn học người Hy Lạp, được cho là người đầu
                        tiên nghiên cứu các bảng lượng giác. Tuy nhiên, ông
                        không sử dụng các hàm lượng giác mà thay vào đó dùng các
                        đoạn cung tròn trong việc tính toán các góc và chu kỳ.
                        Mặc dù không có khái niệm chính thức về hàm số lượng
                        giác, Hipparchus đã tạo ra bảng tra cứu các giá trị cho
                        các góc từ 0 đến 90 độ.
                        <br />
                        <br />
                        Trong tác phẩm Almagest,{" "}
                        <ExtraInlineFact buttonContent="Ptolemy">
                            <HistoricalFigure
                                historicalFigureName="Claudius Ptolemaeus"
                                image={<Image src={Ptolemy} alt="" />}
                            >
                                (100 - 170 SCN), hay{" "}
                                <span className="font-[475]">Ptolemy</span>, là
                                một nhà thiên văn học, toán học và địa lý người
                                Ai Cập, sinh khoảng năm 100. Ông nổi tiếng với
                                tác phẩm "
                                <span className="font-[475]">Almagest</span>",
                                mô hình hệ Mặt Trời trung tâm (geocentric model)
                                và các đóng góp quan trọng trong địa lý và thiên
                                văn học. Ptolemy cũng đã ghi lại độ dài và vĩ độ
                                của khoảng 8,000 địa điểm trên bản đồ thế giới
                                của ông.
                                <div className="mt-4 flex flex-col w-full items-center gap-4">
                                    <Image src={geocentricModel} alt="" />
                                    <div className="text-[rgba(255,255,255,0.75)] font-[475]">
                                        Thuyết địa tâm
                                    </div>
                                </div>
                            </HistoricalFigure>
                        </ExtraInlineFact>{" "}
                        đã phát triển các bảng lượng giác với các giá trị tương
                        tự như hàm sin và cos mà chúng ta sử dụng ngày nay, tuy
                        nhiên chúng không phải là hàm mà là kết quả từ các công
                        thức hình học và các đoạn cung tròn.
                    </div>
                </div>
            </div>
            <div className="col-[1/-1] row-[2/3] h-fit mt-[10px]">
                {timelineStar.TheKy(920142, "5 - 6")}
                <div className={`${generalClassName}`}>
                    <div className={`${generalContentClassName}`}>
                        Nhà toán học và thiên văn học Ấn Độ{" "}
                        <ExtraInlineFact buttonContent="Aryabhata">
                            <HistoricalFigure
                                historicalFigureName="Aryabhata"
                                image={<Image src={Aryabhata} alt="" />}
                            >
                                (476 - 550 CE) là một nhà toán học và thiên văn
                                học nổi tiếng của Ấn Độ. Ông được biết đến với
                                tác phẩm "
                                <span className="font-[475]">Aryabhatiya</span>
                                ", trong đó ông đã tính toán chính xác giá trị
                                của π (pi) và đề xuất lý thuyết Trái Đất tự
                                quay. Những đóng góp của ông đã đặt nền móng cho
                                nhiều nghiên cứu toán học và thiên văn học sau
                                này.
                            </HistoricalFigure>
                        </ExtraInlineFact>{" "}
                        là người đầu tiên sử dụng các hàm lượng giác như một
                        phần của các phép toán thiên văn, đặc biệt là sin. Ông
                        đã phát triển một bảng giá trị cho sin của các góc.
                        <br />
                        <br />
                        <ExtraInlineFact buttonContent="Varahamihira">
                            <HistoricalFigure
                                historicalFigureName="Varahamihira"
                                image={<Image src={Varahamihira} alt="" />}
                            >
                                (505 - 587 CE) là một nhà thiên văn học, toán
                                học và huyền thuật người Ấn Độ. Ông nổi tiếng
                                với tác phẩm "
                                <span className="font-[475]">
                                    Pancha-siddhantikaa
                                </span>
                                ", một tổng hợp các tài liệu thiên văn học của
                                Hy Lạp, Ai Cập, La Mã và Ấn Độ. Varahamihira
                                cũng là tác giả của "
                                <span className="font-[475]">
                                    Brihat-samhitaa
                                </span>
                                ", một tác phẩm đa ngành bao gồm kiến trúc,
                                thiên văn học, huyền thuật và nhiều lĩnh vực
                                khác.
                            </HistoricalFigure>
                        </ExtraInlineFact>{" "}
                        là một nhà thiên văn học và toán học người Ấn Độ, và
                        cũng có đóng góp vào việc phát triển các khái niệm lượng
                        giác, đặc biệt liên quan đến sin và tan.
                    </div>
                </div>
            </div>
            <div className="col-[1/-1] row-[3/4] h-fit mt-[10px]">
                {timelineStar.TheKy(929142, "16 - 17")}
                <div className={`${generalClassName}`}>
                    <div className={`${generalContentClassName}`}>
                        <ExtraInlineFact buttonContent="Regiomontanus" flip>
                            <HistoricalFigure
                                historicalFigureName="Regiomontanus"
                                image={<Image src={Regiomontanus} alt="" />}
                            >
                                (1436 - 1476) hay còn có tên gọi khác là
                                Johannes Müller von Könisberg, là một nhà toán
                                học và thiên văn học người Đức trong thời kỳ
                                Phục hưng. Ông sáng lập nhà in khoa học đầu tiên
                                trên thế giới và xuất bản cuốn sách giáo khoa
                                thiên văn học đầu tiên vào năm 1472.
                                Regiomontanus cũng tính toán các bảng thiên văn
                                và quan sát sao chổi, đóng góp quan trọng vào sự
                                phát triển của hệ nhật tâm Copernicus.
                            </HistoricalFigure>
                        </ExtraInlineFact>{" "}
                        là một trong những nhà toán học đầu tiên của phương Tây
                        phát triển lý thuyết lượng giác hiện đại, với các bảng
                        lượng giác chi tiết hơn. Các công trình của{" "}
                        <ExtraInlineFact buttonContent="Isaac Newton" flip>
                            <HistoricalFigure
                                historicalFigureName="Isaac Newton"
                                image={<Image src={IsaacNewton} alt="" />}
                            >
                                Isaac Newton (1643 - 1727) là một nhà toán học
                                và nhà vật lý nổi tiếng người Anh, nổi tiếng với
                                ba định luật chuyển động và định luật hấp dẫn.
                                Ông cũng là một trong những người phát triển độc
                                lập toán học vi phân và đã sáng chế kính hiển vi
                                phản xạ đầu tiên. Các đóng góp của Newton đã đặt
                                nền móng cho nhiều lĩnh vực khoa học hiện đại.
                            </HistoricalFigure>
                        </ExtraInlineFact>{" "}
                        về giải tích và{" "}
                        <ExtraInlineFact buttonContent="Leonhard Euler" flip>
                            <HistoricalFigure
                                historicalFigureName="Leonhard Euler"
                                image={<Image src={LeonhardEuler} alt="" />}
                            >
                                Leonhard Euler (1707 - 1783) là một nhà toán học
                                và thiên văn học người Thụy Sĩ, nổi tiếng với
                                nhiều đóng góp quan trọng trong nhiều lĩnh vực
                                toán học như đại số, đại số phức, đại số vi
                                phân, và đại số đại số. Ông cũng đã đưa ra nhiều
                                khái niệm và phương pháp toán học vĩ đại, bao
                                gồm cách viết hàm số hiện đại và việc sử dụng ký
                                hiệu số học hiện đại.
                            </HistoricalFigure>
                        </ExtraInlineFact>{" "}
                        về lý thuyết hàm lượng giác giúp xây dựng nền tảng cho
                        lý thuyết lượng giác hiện đại, đặc biệt là trong việc
                        nghiên cứu các chu kỳ và dao động.
                    </div>{" "}
                </div>
            </div>
        </>
    );
}
