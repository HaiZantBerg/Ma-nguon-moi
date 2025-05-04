import React from "react";
import {
    generalClassName,
    generalContentClassName,
    generalHeaderClassName,
    generalInstanceClassName,
    timelineStar,
} from "../../../data/lessonsStatic";
import { BlockMath, InlineMath } from "react-katex";
import ExtraInlineFact from "@/components/Extra/ExtraInlineFact";
import Image from "next/image";
import ExtraLearnMore from "@/components/Extra/ExtraLearnMore";
import HistoricalFigure from "@/components/Extra/HistoricalFigure";
import IsaacNewton from "@/public/Image/isaacnewton.png";
import LeonhardEuler from "@/public/Image/leonhardeuler.png";
import JohannesKepler from "@/public/Image/johanneskepler.png";
import Regiomontanus from "@/public/Image/regiomontanus.png";

export default function PhuongTrinhLuongGiac() {
    return (
        <>
            <div className="col-[1/-1] row-[1/2] mt-[10px] h-fit">
                <div className={`${generalClassName}`}>
                    <span className="font-[475]">Phương trình lượng</span> giác
                    là các phương trình chứa các hàm lượng giác của một hoặc
                    nhiều biến. Các phương trình này thường xuất hiện trong việc
                    giải quyết các bài toán liên quan đến chu kỳ, sóng, dao
                    động, và các hiện tượng vật lý khác.
                    <br />
                    <br />
                    <div className={`${generalInstanceClassName}`}>
                        <span className="font-[475]">
                            Phương trình lượng giác cơ bản
                        </span>
                        : Một phương trình lượng giác đơn giản có thể là{" "}
                        <InlineMath math="\sin{x} = 0" />
                        , <InlineMath math="\cos{x} = 1" />, hoặc{" "}
                        <InlineMath math="\tan{x} = 0" />. Các phương trình này
                        có thể được giải bằng cách sử dụng các công thức lượng
                        giác cơ bản và các định lý như định lý Pythagoras.
                        <br /> <br />
                        <span className="font-[475]">
                            Phương trình lượng giác bậc cao
                        </span>
                        : Các phương trình như{" "}
                        <InlineMath math="\sin^{2}{x} + \cos^{2}{x} = 1" />,
                        hoặc các phương trình phức tạp hơn liên quan đến các hàm
                        lượng giác như cot, sin, cos, được sử dụng để giải các
                        vấn đề trong vật lý, đặc biệt là trong dao động và sóng.
                    </div>
                </div>
                {timelineStar.TheKy(1141617, "16 - 17")}
                <div className={`${generalClassName}`}>
                    <div className={`${generalHeaderClassName}`}>
                        Phát triển phương trình lượng giác ở châu Âu
                    </div>
                    <div className={`${generalContentClassName}`}>
                        Trong thời kỳ này, phương trình lượng giác bắt đầu được
                        phát triển ở châu Âu, nhưng vẫn chủ yếu được hiểu thông
                        qua các công thức lượng giác trong việc giải các bài
                        toán thiên văn học và hình học. Các nhà toán học đã bắt
                        đầu sử dụng đại số và các phương trình để giải quyết các
                        bài toán liên quan đến các góc và các hàm lượng giác.
                        <br />
                        <br />
                        <ExtraInlineFact buttonContent="Regiomontanus">
                            <HistoricalFigure
                                historicalFigureName="Regiomontanus"
                                image={<Image src={Regiomontanus} alt="" />}
                            >
                                (1436 - 1476) hay còn có tên gọi khác là
                                Johannes Müller von Könisberg, là một nhà toán
                                học và thiên văn học người Đức trong thời kỳ
                                Phục hưng. Ông sáng lập nhà in khoa học đầu tiên
                                và xuất bản cuốn sách giáo khoa thiên văn học
                                đầu tiên vào năm 1472. Những đóng góp của
                                Regiomontanus đã hỗ trợ phát triển hệ nhật tâm
                                Copernicus.
                            </HistoricalFigure>
                        </ExtraInlineFact>{" "}
                        là một trong những người đầu tiên áp dụng đại số vào
                        việc giải quyết các vấn đề lượng giác. Trước thời của
                        ông, lượng giác chủ yếu được xem như một phần của hình
                        học. Regiomontanus đã tập hợp và hệ thống hóa các bảng
                        lượng giác, làm cơ sở cho các công thức sau này trong
                        việc giải các phương trình lượng giác. Mặc dù ông không
                        phát triển phương trình lượng giác theo cách hiện đại,
                        các bảng lượng giác của ông đã cung cấp các giá trị của
                        các hàm như sine và tangent cho nhiều góc khác nhau,
                        giúp tạo nền tảng cho các phương trình lượng giác trong
                        tương lai. Những bảng lượng giác này trở thành công cụ
                        quan trọng trong thiên văn học, giúp tính toán các vị
                        trí hành tinh và chuyển động của chúng.
                        <br />
                        <br />
                        <ExtraInlineFact buttonContent="Johannes Kepler">
                            <HistoricalFigure
                                historicalFigureName="Johannes Kepler"
                                image={<Image src={JohannesKepler} alt="" />}
                            >
                                (1571 - 1630) là một nhà toán học và thiên văn
                                học người Đức, nổi tiếng với ba định luật chuyển
                                động của vệ tinh. Ông đã khám phá ra rằng các
                                hành tinh di chuyển theo đường cong elip quanh
                                Mặt Trời và đã đóng góp quan trọng vào việc phát
                                triển thiên văn học hiện đại.
                            </HistoricalFigure>
                        </ExtraInlineFact>{" "}
                        đã sử dụng các phương trình lượng giác để mô tả chuyển
                        động của các hành tinh theo định lý của ông về quỹ đạo
                        elip. Ông sử dụng các hàm lượng giác, đặc biệt là sine
                        và cosine, để tính toán các góc và khoảng cách giữa các
                        hành tinh trong hệ mặt trời. Kepler không chỉ sử dụng
                        các bảng lượng giác mà còn xây dựng các phương trình
                        lượng giác liên quan đến các vấn đề thiên văn học.
                        <br />
                        <br />
                        Kepler là người đã áp dụng phương trình lượng giác trong
                        các nghiên cứu thực nghiệm của mình, và đây là bước tiến
                        lớn trong việc sử dụng phương trình lượng giác để mô tả
                        các hiện tượng vật lý thực tế, đặc biệt trong thiên văn
                        học. Việc ông kết hợp lý thuyết lượng giác với dữ liệu
                        quan sát thực tế đánh dấu sự phát triển quan trọng của
                        phương trình lượng giác trong khoa học.
                    </div>
                </div>
            </div>
            <div className="col-[1/-1] row-[2/3] mt-[10px] h-fit">
                {timelineStar.TheKy(1141718, "17 - 18")}

                <div className={`${generalClassName}`}>
                    <div className={`${generalHeaderClassName}`}>
                        Euler và sự ra đời của phương trình lượng giác đại số
                    </div>
                    <div className={`${generalContentClassName}`}>
                        Đến thế kỷ 17 và 18, phương trình lượng giác bắt đầu
                        chuyển từ hình học sang đại số, đặc biệt là nhờ những
                        đóng góp của Leonhard Euler và các nhà toán học khác.
                        <ExtraInlineFact buttonContent="Leonhard Euler">
                            <HistoricalFigure
                                historicalFigureName="Leonhard Euler"
                                image={<Image src={LeonhardEuler} alt="" />}
                            >
                                (1707-1783) là một trong những nhà toán học vĩ
                                đại nhất trong lịch sử, nổi bật với những đóng
                                góp sâu rộng trong nhiều lĩnh vực như lý thuyết
                                đồ thị, lý thuyết số, cơ học, và giải tích. Ông
                                là người đầu tiên phát triển công thức Euler,
                                liên kết số phức với các hàm lượng giác, mở ra
                                một hướng mới trong giải tích phức tạp. Những
                                công trình của Euler đã đặt nền tảng cho nhiều
                                nhánh toán học hiện đại và ứng dụng rộng rãi
                                trong khoa học và kỹ thuật.
                            </HistoricalFigure>
                        </ExtraInlineFact>{" "}
                        đã mở rộng khái niệm về các hàm lượng giác và tìm ra
                        công thức Euler, liên kết giữa số phức và các hàm lượng
                        giác. Công thức Euler được cho là một trong những công
                        cụ mạnh mẽ nhất trong toán học.
                        <ExtraLearnMore>
                            <BlockMath math="e^{ix} = \cos(x) + i \sin(x)" />{" "}
                            Công thức này không chỉ là một biểu thức lượng giác
                            mà còn mở rộng sự hiểu biết về số phức và các phương
                            trình trong không gian phức. Nó cung cấp một cầu nối
                            giữa các hàm lượng giác và lý thuyết số phức, mở ra
                            những ứng dụng mới trong giải tích phức tạp, vật lý,
                            và các lĩnh vực khác.
                        </ExtraLearnMore>
                        Euler không chỉ cải tiến các công thức lượng giác mà còn
                        đặt nền móng cho việc sử dụng đại số trong việc giải
                        quyết các phương trình lượng giác. Ông đã giải thích các
                        phương trình lượng giác trong ngữ cảnh đại số, từ đó cho
                        phép các nhà toán học và khoa học sau này có thể sử dụng
                        chúng để mô tả các hiện tượng vật lý phức tạp.
                        <br />
                        <br />
                        <ExtraInlineFact buttonContent="Isaac Newton">
                            <HistoricalFigure
                                historicalFigureName="Isaac Newton"
                                image={<Image src={IsaacNewton} alt="" />}
                            >
                                (1643 - 1727) là một nhà toán học và nhà vật lý
                                nổi tiếng người Anh, nổi tiếng với ba định luật
                                chuyển động và định luật hấp dẫn. Ông cũng là
                                một trong những người phát triển độc lập toán
                                học vi phân và đã sáng chế kính hiển vi phản xạ
                                đầu tiên. Các đóng góp của Newton đã đặt nền
                                móng cho nhiều lĩnh vực khoa học hiện đại.
                            </HistoricalFigure>
                        </ExtraInlineFact>{" "}
                        trong công trình về giải tích và cơ học, đã sử dụng các
                        phương trình lượng giác để mô tả các hiện tượng vật lý,
                        đặc biệt là các chuyển động cơ học và các phương trình
                        sóng. Phương trình lượng giác bắt đầu được áp dụng trong
                        lý thuyết dao động và chuyển động của vật thể. Newton
                        cũng sử dụng các công thức lượng giác trong các bài toán
                        về lực và chuyển động trong không gian, đặc biệt là
                        trong các phương trình chuyển động của các hành tinh và
                        các vật thể trong vũ trụ.
                        <ExtraLearnMore>
                            Những phương trình mà Newton phát triển có vai trò
                            quan trọng trong việc giải quyết các vấn đề cơ học
                            và thiên văn học, và chúng cũng đánh dấu sự gia tăng
                            sử dụng phương trình lượng giác trong lý thuyết vật
                            lý.
                            <br />
                            <br />
                            <span className="font-[475]">
                                Joseph-Louis Lagrange
                            </span>{" "}
                            (1736 - 1813) là người tiếp tục phát triển lý thuyết
                            động lực học, sử dụng phương trình lượng giác trong
                            việc mô tả các hệ động học và chuyển động dao động.
                            Ông phát triển phương trình Lagrange trong cơ học,
                            cho phép các phương trình lượng giác được ứng dụng
                            trong việc giải các bài toán về dao động cơ học và
                            các hệ thống động học phức tạp. Lagrange là một
                            trong những người đầu tiên áp dụng phương trình
                            lượng giác vào lý thuyết động lực học, đóng góp lớn
                            vào sự phát triển của các phương trình trong vật lý
                            và toán học.
                        </ExtraLearnMore>
                    </div>
                </div>
            </div>
            <div className="col-[1/-1] row-[3/4] mt-[10px] h-fit">
                {timelineStar.TheKy(1142021, "20 - 21")}
                <div className={`${generalClassName}`}>
                    <div className={`${generalHeaderClassName}`}>
                        Phương trình lượng giác trong khoa học hiện đại
                    </div>
                    <div className={`${generalContentClassName}`}>
                        Trong thế kỷ 20 và 21, phương trình lượng giác trở thành
                        công cụ quan trọng trong nhiều lĩnh vực khoa học và kỹ
                        thuật, từ vật lý đến xử lý tín hiệu và phân tích dữ
                        liệu.
                        <br />
                        <br />
                        <div className={`${generalInstanceClassName}`}>
                            <span className="font-[475]">
                                Ứng dụng trong xử lý tín hiệu
                            </span>
                            : Các phương trình lượng giác là nền tảng trong lý
                            thuyết Fourier và các thuật toán xử lý tín hiệu số.
                            Chúng được sử dụng để phân tách các tín hiệu thành
                            các thành phần sóng sin và cos, từ đó phục vụ cho
                            các ứng dụng trong truyền thông, âm thanh, điện tử,
                            và nhiều lĩnh vực khác.
                            <br />
                            <br />
                            <span className="font-[475]">
                                Ứng dụng trong cơ học lượng tử
                            </span>
                            : Trong cơ học lượng tử, các sóng hàm lượng giác
                            được sử dụng để mô tả sự phân bố và chuyển động của
                            các hạt. Các phương trình lượng giác như sóng sóng
                            được sử dụng để giải thích các hiện tượng vật lý vi
                            mô.
                            <br />
                            <br />
                            <span className="font-[475]">
                                Phương trình sóng trong vật lý
                            </span>
                            : Các phương trình sóng Maxwell mô tả sóng điện từ,
                            và chúng sử dụng các hàm lượng giác để mô tả dao
                            động và sóng trong các môi trường khác nhau.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
