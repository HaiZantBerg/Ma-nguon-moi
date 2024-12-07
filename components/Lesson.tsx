"use client";

import React, { useRef } from "react";
// import Drawer from "./Drawer";
// import Image from "next/image";
// import Aristotle from "@/Image/image-removebg-preview.png";
// import GeorgeBoole from "@/Image/george-boole.png";
import { lessonsToggle, timelineStar } from "./static/lessonsStatic";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { useAnimate } from "framer-motion";

const generalClassName = "md1:pl-[70px] pl-[50px] md1:pr-0 pr-1 ";

const Menhde = () => {
    return (
        <div className="overflow-x-auto overflow-y-hidden grid grid-cols-1 grid-rows-[repeat(4,auto)]">
            <div className="col-[1/-1] row-[1/-1] bg-[#050505] md:w-[1.5px] w-[1.5px] relative md:left-[13.9px] left-[14.25px]" />
            <div className="col-[1/-1] row-[1/2] relative z-10 h-fit mt-[10px]">
                <div className="md:h-[75px] h-[51.5px]">{}</div>
                <div className={generalClassName}>
                    Chúng ta hãy bắt đầu từ khoảng năm 384 TCN, khi Aristotle
                    được sinh ra tại thành phố Stagira, Hy Lạp. Con trai của một
                    bác sĩ hoàng gia, Aristotle được nuôi dưỡng trong môi trường
                    học thuật từ nhỏ.
                    <br />
                    Đến năm 17 tuổi, ông đến Athens và trở thành học trò của
                    triết gia nổi tiếng Plato tại Học viện Athens – một nơi tập
                    trung những bộ óc vĩ đại của thời đại. Tại đây, Aristotle
                    sớm nổi lên như một trong những học giả hàng đầu, nhưng tư
                    tưởng của ông dần dần tách biệt khỏi những ý tưởng lý thuyết
                    của Plato.
                    <br /> Aristotle bị ám ảnh bởi câu hỏi về sự chính xác trong
                    tư duy. Làm thế nào con người có thể đạt được sự thật thông
                    qua lý luận? Ông phát triển một hệ thống suy luận logic mà
                    sau này được gọi là logic học suy diễn (syllogistic logic).
                    Aristotle lập luận rằng mọi kết luận đều có thể được rút ra
                    từ hai hoặc nhiều tiền đề. Ví dụ, nếu “Mọi người đều là sinh
                    vật” và “Socrates là người”, thì có thể suy ra “Socrates là
                    sinh vật”. Đây là cách thức đầu tiên mà loài người có thể
                    suy luận về thế giới một cách có hệ thống và chặt chẽ.
                    <br /> Trong gần 2000 năm, lý thuyết logic của Aristotle
                    chiếm vị trí thống trị trong triết học phương Tây. Các học
                    giả thời Trung cổ như Thomas Aquinas và Albertus Magnus đã
                    đưa các nguyên lý logic của ông vào hệ thống triết học và
                    thần học, củng cố thêm tầm quan trọng của nó. Nhưng dù những
                    nền tảng mà Aristotle xây dựng rất mạnh mẽ, chúng vẫn chưa
                    đủ để giải quyết những thách thức của toán học hiện đại.
                </div>
            </div>
            <div className="col-[1/-1] row-[2/3] relative z-10 h-fit">
                <div className="md:h-[75px] h-[51.5px]">{}</div>
                <div className={generalClassName}>
                    Trong giai đoạn này, các nhà logic học như William of Ockham
                    và Peter Abelard đã tiếp tục phát triển các khái niệm về
                    logic và ngôn ngữ, tập trung vào cách các phát biểu có thể
                    được kết hợp và phân tích. Mặc dù chưa hình thành rõ ràng
                    mệnh đề như ta hiểu ngày nay, những nghiên cứu về suy luận
                    và ngôn ngữ của họ đã đặt nền móng cho sự phát triển sau
                    này.
                </div>
            </div>
            <div className="col-[1/-1] row-[3/4] relative z-10 h-fit">
                <div className="md:h-[75px] h-[51.5px]">{}</div>
                <div className={generalClassName}>
                    Chuyển sang thế kỷ 19, một nhân vật mới xuất hiện: George
                    Boole, xuất thân từ một gia đình khiêm tốn; cha ông là một
                    người thợ giày nhưng lại rất đam mê về toán học và khoa học.
                    Boole sớm bộc lộ tài năng xuất sắc trong học tập, và dù hoàn
                    cảnh khó khăn, ông vẫn tự học toán học và các ngôn ngữ cổ
                    đại như Latin và Hy Lạp. Khi bước vào tuổi trưởng thành,
                    Boole cảm thấy rằng logic học truyền thống không đủ để giải
                    quyết những vấn đề phức tạp trong toán học và các lĩnh vực
                    khoa học khác. Ông nhận ra rằng để lý giải suy luận một cách
                    có hệ thống, cần phải có một phương pháp mới, một ngôn ngữ
                    toán học có thể biểu diễn logic.
                    <br /> Năm 1847, Boole xuất bản tác phẩm “The Mathematical
                    Analysis of Logic”, trong đó ông giới thiệu một ý tưởng đột
                    phá: các mệnh đề logic có thể được đại số hóa. Theo Boole,
                    logic có thể được xử lý giống như các phép toán đại số với
                    những ký hiệu cho “và” (AND), “hoặc” (OR) và “không” (NOT),
                    và các mệnh đề có thể được biểu diễn bằng số nhị phân: đúng
                    là 1, sai là 0. Ví dụ, phát biểu “Socrates là người và
                    Socrates là sinh vật” có thể được viết dưới dạng phép toán
                    đại số như: , trong đó và lần lượt đại diện cho các mệnh đề.
                    Boole không chỉ dừng lại ở đó.
                    <br />
                    Trong tác phẩm “An Investigation of the Laws of Thought”
                    (1854), ông mở rộng ý tưởng của mình và đặt nền móng cho
                    toàn bộ một hệ thống logic đại số, gọi là Đại số Boole. Điều
                    đặc biệt là dù Boole phát triển hệ thống này từ quan điểm lý
                    thuyết thuần túy, nhưng các khái niệm mà ông đưa ra sau này
                    đã trở thành nền tảng cho khoa học máy tính hiện đại.
                    <br /> Khi Boole qua đời năm 1864 ở tuổi 49, ông không biết
                    rằng những tư tưởng của mình sẽ định hình tương lai của công
                    nghệ và viễn thông.
                </div>
                <div className={generalClassName}>
                    Khoảng 15 năm sau cái chết của Boole, một giáo sư trầm lặng
                    người Đức tên Gottlob Frege bắt đầu suy nghĩ về các vấn đề
                    sâu xa hơn trong logic. Frege sinh năm 1848 tại Wismar, Đức,
                    và ban đầu ông theo đuổi toán học thuần túy. Tuy nhiên,
                    Frege nhanh chóng nhận ra rằng lý thuyết mệnh đề của Boole
                    chưa đủ để giải quyết những vấn đề phức tạp trong toán học
                    và triết học. Ông muốn tạo ra một hệ thống logic không chỉ
                    biểu diễn các mệnh đề đơn giản mà còn cả các khái niệm phức
                    tạp liên quan đến đối tượng và thuộc tính của chúng.
                    <br /> Trong tác phẩm {'"'}Begriffsschrift{'"'} (1879),
                    Frege đã phát triển logic vị từ (predicate logic), một bước
                    tiến lớn so với logic mệnh đề của Boole. Nếu logic mệnh đề
                    chỉ xử lý các phát biểu đơn giản như {'"'}Socrates là người
                    {'"'}, thì logic vị từ cho phép Frege xử lý những phát biểu
                    phức tạp hơn như
                    {'"'}Mọi người đều có một trái tim{'"'}. Frege đã phát triển
                    một hệ thống ký hiệu hoàn toàn mới để biểu diễn các khái
                    niệm này, trong đó các đối tượng (như Socrates) và các thuộc
                    tính (như
                    {'"'}có trái tim{'"'}) có thể được biểu diễn một cách chính
                    xác. Tuy nhiên, trong suốt cuộc đời của mình, Frege không
                    được công nhận rộng rãi và phải đối mặt với nhiều thất bại
                    cá nhân. Một trong những thất bại lớn nhất của Frege là khi
                    ông phát hiện ra rằng hệ thống logic của mình chứa đựng một
                    mâu thuẫn nghiêm trọng, được nhà toán học Bertrand Russell
                    chỉ ra trong một lá thư vào năm 1902. Dù vậy, công trình của
                    Frege sau này đã trở thành nền tảng cho nhiều nhánh của
                    logic hiện đại và ảnh hưởng sâu sắc đến những nhà tư tưởng
                    sau ông, như Ludwig Wittgenstein và Kurt Gödel.
                </div>
            </div>
            <div className="col-[1/-1] row-[4/-1] relative z-1 h-fit0">
                <div className="md:h-[75px] h-[51.5px]">{}</div>
                <div className={generalClassName}></div>
            </div>
        </div>
    );
};

const Taphop = () => {
    return (
        <div className="overflow-x-auto overflow-y-hidden grid grid-cols-1 grid-rows-[repeat(6,auto)]">
            <div className="col-[1/-1] row-[1/-1] bg-[#000000] md:w-[1.5px] w-[0.1px] relative md:left-[13.9px] left-[9.8px]" />
            <div className="col-[1/-1] row-[1/2] relative z-10 h-fit mt-[10px]">
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar[0][0][0][1][0]}
                </div>
                <div className={generalClassName}>
                    Cantor và tập hợp: Vào cuối thế kỷ 19, Georg Cantor đã giới
                    thiệu khái niệm về tập hợp (set) trong toán học, coi tập hợp
                    là một tập hợp các đối tượng hoặc phần tử mà có thể được xác
                    định rõ ràng. Cantor không chỉ khái quát hóa các tập hợp hữu
                    hạn mà còn mở rộng ra tập hợp vô hạn.
                    <br />
                    Lý thuyết tập hợp vô hạn: Một trong những đóng góp quan
                    trọng của Cantor là sự phân biệt giữa các loại vô hạn. Ông
                    phát hiện rằng không phải tất cả các tập hợp vô hạn đều có
                    cùng kích thước (số lượng phần tử). Cantor đưa ra khái niệm
                    về số siêu hạn (cardinality), trong đó có sự phân biệt giữa
                    tập hợp đếm được (countably infinite) như tập các số tự
                    nhiên và tập hợp không đếm được (uncountably infinite) như
                    tập các số thực. Ví dụ, tập các số tự nhiên{" "}
                    <InlineMath math="\mathbb{N}" />={"{1, 2, 3,…}"} là một tập
                    hợp đếm được.
                    <br />
                    Tập các số thực <InlineMath math="\mathbb{R}" /> lại không
                    thể đếm được. Điều này được chứng minh qua định lý Cantor
                    rằng không thể thiết lập một ánh xạ một - một giữa tập{" "}
                    <InlineMath math="\mathbb{N}" /> và{" "}
                    <InlineMath math="\mathbb{R}" />.
                    <br />
                    Các phép toán tập hợp cơ bản của Cantor:
                    <br />
                    Hợp tập (Union): Nếu A và B là hai tập hợp, thì hợp tập A{" "}
                    <InlineMath math="\cup" /> B là tập hợp tất cả các phần tử
                    thuộc A hoặc B, không trùng lặp.
                    <br />
                    Giao tập (Intersection): Giao tập A{" "}
                    <InlineMath math="\cap" /> B là tập hợp tất cả các phần tử
                    mà A và B cùng chia sẻ.
                    <br />
                    Hiệu tập (Difference): Hiệu tập A{" "}
                    <InlineMath math="\setminus" /> B là tập hợp tất cả các phần
                    tử thuộc A nhưng không thuộc B.
                    <br />
                    Tập con (Subset): Một tập hợp A là một tập con của tập hợp B
                    (ký hiệu A <InlineMath math="\subset" /> B ) nếu mọi phần tử
                    của A đều là phần tử của B.
                </div>
            </div>
            <div className="col-[1/-1] row-[2/3] relative z-10 h-fit">
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar[0][0][0][1][1]}
                </div>
                <div className={generalClassName}>
                    Frege sử dụng khái niệm {'"'}tập hợp{'"'} trong lý thuyết
                    của ông, đặc biệt là trong cách ông định nghĩa khái niệm.
                    Theo Frege, một khái niệm toán học là một tập hợp của các
                    đối tượng thỏa mãn một thuộc tính cụ thể. Ví dụ, {'"'}tập
                    hợp tất cả các số chẵn{'"'} là một tập hợp mà phần tử của nó
                    là những số tự nhiên chẵn.
                    <br />
                    Frege không chỉ định nghĩa tập hợp như là một tập hợp các
                    đối tượng vật lý mà ông coi tập hợp là một đối tượng toán
                    học chính thống, có thể được mô tả và sử dụng trong các phép
                    toán toán học. Frege tin rằng lý thuyết tập hợp của ông có
                    thể giúp xác định một cách chính xác các khái niệm trong
                    toán học.
                </div>
            </div>
            <div className="col-[1/-1] row-[3/4] relative z-10 h-fit">
                <div className="grid grid-rows-1 md:grid-cols-[28.5px_auto] grid-cols-[20px_auto]">
                    {Array.isArray(timelineStar[0][0][0][1][2]) && (
                        <>
                            <div className="col-[1/2] row-[1/-1]">
                                {timelineStar[0][0][0][1][2][0]}
                            </div>
                            <div className="col-[2/-1] row-[1/-1] flex flex-wrap">
                                {timelineStar[0][0][0][1][2][1]}
                                {timelineStar[0][0][0][1][2][2]}
                            </div>
                        </>
                    )}
                </div>
                <div className={generalClassName}>
                    Tuy nhiên, lý thuyết tập hợp của Frege gặp phải một vấn đề
                    lớn khi Bertrand Russell phát hiện ra nghịch lý Russell vào
                    năm 1901. Nghịch lý này xuất hiện trong lý thuyết của Frege
                    khi ông cố gắng định nghĩa tập hợp của tất cả các tập hợp
                    không phải là phần tử của chính nó. Bertrand Russell và
                    nghịch lý của tập hợp:
                    <br />
                    Nghịch lý Russell là một trong những mâu thuẫn quan trọng
                    nhất trong lý thuyết tập hợp, được Bertrand Russell phát
                    hiện vào năm 1901. Nghịch lý này liên quan đến tập hợp chứa
                    chính nó như một phần tử. Cụ thể, nếu ta định nghĩa tập hợp{" "}
                    <InlineMath math="\mathbb{R}" /> là tập hợp của tất cả các
                    tập hợp không phải là phần tử của chính nó, thì câu hỏi đặt
                    ra là: liệu <InlineMath math="\mathbb{R}" /> có phải là phần
                    tử của chính nó không?
                    <br />
                    Nếu
                    <InlineMath math="\mathbb{R}" /> <InlineMath math="\in" />{" "}
                    <InlineMath math="\mathbb{R}" />, thì theo định nghĩa{" "}
                    <InlineMath math="\mathbb{R}" /> phải không phải là phần tử
                    của chính nó, điều này mâu thuẫn.
                    <br />
                    Nếu <InlineMath math="\mathbb{R}" />{" "}
                    <InlineMath math="\notin" />{" "}
                    <InlineMath math="\mathbb{R}" />, thì theo định nghĩa,{" "}
                    <InlineMath math="\mathbb{R}" /> phải là phần tử của chính
                    nó, lại dẫn đến mâu thuẫn.
                    <br />
                    <InlineMath math="\Rightarrow" /> Hệ quả của nghịch lý: Sau
                    khi nghịch lý Russell được phát hiện, Frege nhận ra rằng lý
                    thuyết tập hợp của ông không thể hoạt động như một nền tảng
                    vững chắc cho toán học. Trong một lá thư gửi Russell, Frege
                    đã thể hiện sự thất vọng sâu sắc về việc lý thuyết của ông
                    bị phá vỡ. Nghịch lý này là một trong những lý do quan trọng
                    dẫn đến sự phát triển của các lý thuyết tập hợp sau này, vào
                    những năm 1920 để tránh các nghịch lý như của Frege và
                    Russell. Zermelo-Fraenkel sử dụng các tiên đề để hạn chế các
                    tập hợp không hợp lệ và bảo vệ lý thuyết tập hợp khỏi các
                    nghịch lý.
                </div>
            </div>
            <div className="col-[1/-1] row-[4/5] relative z-10 h-fit">
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar[0][0][0][1][3]}
                </div>
                <div className={generalClassName}>
                    Lý thuyết tập hợp tiên đề Zermelo-Fraenkel là một hệ thống
                    tiên đề được phát triển vào những năm 1920 để giải quyết các
                    vấn đề và nghịch lý trong lý thuyết tập hợp, đặc biệt là
                    nghịch lý Russell. Hệ thống này được xây dựng bởi Ernst
                    Zermelo và sau đó được mở rộng bởi Abraham Fraenkel. Mục
                    tiêu của lý thuyết này là tạo ra một nền tảng logic vững
                    chắc cho lý thuyết tập hợp mà không gặp phải các nghịch lý
                    như trong lý thuyết tập hợp trước đó của Frege.
                    <br />
                    Hệ tiên đề Zermelo-Fraenkel bao gồm các tiên đề cơ bản đảm
                    bảo rằng các tập hợp có thể được xây dựng một cách hợp lý mà
                    không gặp phải nghịch lý. Một trong những tiên đề quan trọng
                    trong lý thuyết này là tiên đề tập hợp trống và tập hợp con.
                    Tiên đề Zermelo-Fraenkel:
                    <br />
                    Tiên đề tập hợp trống: Có tồn tại một tập hợp không có phần
                    tử nào (tập hợp rỗng, ký hiệu{" "}
                    <InlineMath math="\varnothing" />
                    ).
                    <br />
                    Tiên đề hình thành: Nếu A là tập hợp, thì tồn tại một tập
                    hợp con của A có các phần tử là các tập hợp con của các phần
                    tử trong A.
                    <br />
                    Tiên đề lựa chọn: Tiên đề này cho phép chọn phần tử từ mỗi
                    tập hợp không rỗng. Đây là một tiên đề quan trọng trong lý
                    thuyết tập hợp, mặc dù đôi khi nó có thể dẫn đến các kết quả
                    phi trực quan.
                </div>
            </div>
            <div className="col-[1/-1] row-[5/6] relative z-10 h-fit">
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar[0][0][0][1][4]}
                </div>
                <div className={generalClassName}>
                    <div>Lý thuyết tập hợp và các phép toán nâng cao</div>
                    Khái niệm về thứ tự và số hạng (Ordinal and Cardinal
                    Numbers):
                    <br />
                    Trong lý thuyết tập hợp, số hạng (ordinal numbers) dùng để
                    chỉ thứ tự của các phần tử trong một tập hợp (ví dụ: {'"'}
                    phần tử thứ nhất{'"'}, {'"'}phần tử thứ hai{'"'},...).
                    <br />
                    Số cardinal là một khái niệm quan trọng dùng để chỉ kích
                    thước hoặc số lượng phần tử của một tập hợp. Số cardinal có
                    thể là hữu hạn hoặc vô hạn. Lý thuyết mô hình (Model Theory)
                    và ứng dụng trong lý thuyết tập hợp:
                    <br />
                    Vào nửa sau thế kỷ 20, lý thuyết tập hợp trở thành cơ sở cho
                    lý thuyết mô hình, trong đó các mô hình toán học được mô tả
                    bằng các tập hợp và phép toán trên chúng. Lý thuyết mô hình
                    giúp giải quyết các câu hỏi về sự đúng đắn và tính khả thi
                    của các lý thuyết toán học.
                    <div>
                        Ứng dụng lý thuyết tập hợp trong khoa học máy tính
                    </div>
                    Khoa học máy tính:
                    <br />
                    Ngôn ngữ lập trình: Các ngôn ngữ lập trình sử dụng các cấu
                    trúc dữ liệu như danh sách, tập hợp và mảng, trong đó tập
                    hợp là một công cụ quan trọng để tổ chức và thao tác dữ
                    liệu. <br /> Cơ sở dữ liệu: Trong lý thuyết cơ sở dữ liệu,
                    tập hợp được sử dụng để mô hình hóa các đối tượng dữ liệu và
                    quan hệ giữa chúng.
                    <br />
                    Các ứng dụng khác:
                    <br />
                    Lý thuyết đồ thị: Các tập hợp và phép toán trên tập hợp cũng
                    được ứng dụng trong lý thuyết đồ thị, nơi các đỉnh và cạnh
                    có thể được coi là các phần tử trong các tập hợp.
                    <br />
                    Lý thuyết thông tin và mã hóa: Tập hợp cũng là công cụ quan
                    trọng trong lý thuyết mã hóa, nơi các tập hợp của các mã có
                    thể được sử dụng để đảm bảo tính chính xác trong việc truyền
                    tải thông tin.
                    <br />
                    Định lý Cantor (hay Định lý Cantor về tính không đếm được)
                    khẳng định rằng tập hợp các số thực (
                    <InlineMath math="\mathbb{R}" />) có {'"'}số phần tử{'"'}{" "}
                    nhiều hơn tập hợp các số tự nhiên (
                    <InlineMath math="\mathbb{N}" />
                    ), tức là tập các số thực không thể đếm được. Cụ thể, định
                    lý này chỉ ra rằng không tồn tại một ánh xạ một-một (hay một
                    phép biên dịch) giữa tập hợp các số tự nhiên và tập hợp các
                    số thực. Nói cách khác, tập các số thực là vô hạn nhưng
                    không thể đếm được, có {'"'}số siêu hạn{'"'} lớn hơn tập hợp
                    các số tự nhiên. Định lý này được chứng minh bởi Cantor vào
                    năm 1874, sử dụng một kỹ thuật gọi là phương pháp đối chứng
                    (diagonalization argument).
                    <br />
                    Lý thuyết mô hình (Model Theory) là một nhánh quan trọng của
                    toán học và logic học, nghiên cứu mối quan hệ giữa các lý
                    thuyết toán học (thường được biểu diễn qua hệ thống tiên đề
                    hoặc ngôn ngữ hình thức) và các mô hình mà lý thuyết đó mô
                    tả. Mô hình trong lý thuyết mô hình là một cấu trúc toán học
                    xác định một lý thuyết cụ thể, trong đó các tiên đề của lý
                    thuyết này được thỏa mãn. Lý thuyết mô hình có ứng dụng rộng
                    rãi trong nhiều lĩnh vực, từ lý thuyết tập hợp, lý thuyết đồ
                    thị, đến lý thuyết đồ thị trong khoa học máy tính và logic
                    học.
                    <br />
                    1. Khái niệm cơ bản trong lý thuyết mô hình Lý thuyết
                    (Theory): Là một tập hợp các tiên đề được mô tả bằng một
                    ngôn ngữ logic cụ thể. Ví dụ, trong lý thuyết tập hợp, các
                    tiên đề Zermelo-Fraenkel là một lý thuyết, và lý thuyết số
                    học có thể được mô tả qua các tiên đề liên quan đến các số
                    tự nhiên.
                    <br />
                    Mô hình (Model): Một mô hình của một lý thuyết là một cấu
                    trúc toán học cụ thể trong đó các công thức của lý thuyết
                    này được thỏa mãn. Một mô hình bao gồm một tập hợp các đối
                    tượng (các phần tử) và một số phép toán hoặc quan hệ định
                    nghĩa giữa các đối tượng này, sao cho các tiên đề của lý
                    thuyết đều được thỏa mãn trong mô hình đó.
                    <br />
                    Ví dụ, trong lý thuyết số học, tập hợp các số tự nhiên với
                    phép cộng và nhân là một mô hình của lý thuyết số học
                    (theory of natural numbers).
                    <br />
                    Công thức (Sentence): Là các biểu thức logic được xây dựng
                    từ các ký hiệu, quan hệ và phép toán trong ngôn ngữ của lý
                    thuyết.
                    <br />
                    2. Các loại mô hình
                    <br />
                    Mô hình chuẩn (Standard model): Là mô hình mà trong đó các
                    khái niệm của lý thuyết được mô tả theo cách {'"'}bình
                    thường{'"'}
                    hoặc {'"'}tiêu chuẩn{'"'}. Ví dụ, trong lý thuyết số học, mô
                    hình chuẩn là tập hợp các số tự nhiên cùng với các phép toán
                    cộng và nhân thông thường.
                    <br />
                    Mô hình không chuẩn (Non-standard model): Là mô hình của lý
                    thuyết mà các phần tử của mô hình không hoàn toàn tuân theo
                    cấu trúc mà lý thuyết mô tả. Ví dụ, trong lý thuyết số học,
                    có những mô hình không chuẩn của lý thuyết này, trong đó có
                    các {'"'}số tự nhiên không chuẩn{'"'} không xuất hiện trong
                    tập hợp số tự nhiên tiêu chuẩn.
                    <br />
                    3. Các khái niệm quan trọng trong lý thuyết mô hình
                    <br />
                    Đúng đắn (Soundness): Một lý thuyết là đúng đắn nếu tất cả
                    các công thức mà lý thuyết chứng minh được đều đúng trong
                    mọi mô hình của lý thuyết đó.
                    <br />
                    Đầy đủ (Completeness): Một lý thuyết là đầy đủ nếu tất cả
                    các công thức đúng trong mọi mô hình của lý thuyết đó đều có
                    thể được chứng minh từ lý thuyết.
                    <br />
                    Tính độc lập (Independence): Một tập hợp các công thức là
                    độc lập nếu không có công thức nào có thể được suy luận từ
                    các công thức còn lại.
                    <br />
                    Tính xác định (Definability): Một khái niệm trong lý thuyết
                    được gọi là có thể định nghĩa được nếu có một công thức
                    logic có thể mô tả nó trong một mô hình sao cho các phần tử
                    của mô hình có đặc tính đó.
                    <br />
                    4. Các khái niệm cơ bản khác
                    <br />
                    Tính đúng đắn (Satisfiability): Một lý thuyết hoặc một công
                    thức được gọi là {'"'}đúng đắn{'"'} nếu có ít nhất một mô
                    hình mà trong đó công thức hoặc lý thuyết đó được thỏa mãn.
                    <br />
                    Tính quyết định (Decidability): Tính quyết định của lý
                    thuyết có nghĩa là có thể xây dựng một thuật toán để quyết
                    định xem một công thức có đúng trong mô hình của lý thuyết
                    hay không. Một lý thuyết là quyết định được nếu có một thuật
                    toán xác định cho phép kiểm tra tính đúng đắn của các công
                    thức trong lý thuyết.
                    <br />
                    Tính xác định của lý thuyết (Categoricity): Một lý thuyết
                    được gọi là {'"'}đúng đắn{'"'} hoặc {'"'}đặc trưng{'"'}{" "}
                    (categorical) nếu mọi mô hình của lý thuyết đó là đồng nhất
                    (tức là chỉ có một mô hình duy nhất) hoặc có một mô hình duy
                    nhất trong một không gian cụ thể.
                    <br />
                    5. Ứng dụng của lý thuyết mô hình
                    <br />
                    Logic học và phân tích tiên đề: Lý thuyết mô hình giúp phân
                    tích tính đúng đắn và tính đầy đủ của các lý thuyết toán học
                    và logic học. Nó giúp kiểm tra xem một lý thuyết có thể mô
                    tả chính xác các cấu trúc toán học mà nó muốn nghiên cứu hay
                    không.
                    <br />
                    Lý thuyết tập hợp: Lý thuyết mô hình được sử dụng để phân
                    tích các mô hình của lý thuyết tập hợp, bao gồm các mô hình
                    chuẩn và không chuẩn. Nó giúp hiểu rõ hơn về các tiên đề
                    trong lý thuyết tập hợp, đặc biệt là liên quan đến các tiên
                    đề như Axiom of Choice và các lý thuyết vô hạn.
                    <br />
                    Lý thuyết nhóm và lý thuyết đồ thị: Lý thuyết mô hình cũng
                    có ứng dụng trong lý thuyết nhóm (group theory) và lý thuyết
                    đồ thị, nơi các cấu trúc mô hình được sử dụng để nghiên cứu
                    các đặc tính của các đối tượng toán học này.
                    <br />
                    Khoa học máy tính: Trong khoa học máy tính, lý thuyết mô
                    hình giúp nghiên cứu các mô hình tính toán và các hệ thống
                    lý thuyết phức tạp, đặc biệt trong việc hiểu các lý thuyết
                    tính toán như lý thuyết phức tạp và lý thuyết tự động.
                    <br />
                    6. Các định lý quan trọng Định lý hoàn chỉnh của Gödel: Định
                    lý này chứng minh rằng trong một hệ thống hình thức đầy đủ
                    và đúng đắn, nếu một công thức là đúng trong tất cả các mô
                    hình của lý thuyết, thì công thức đó có thể được chứng minh
                    từ các tiên đề của lý thuyết.
                    <br />
                    Định lý không đầy đủ của Gödel: Định lý này chỉ ra rằng
                    trong mọi hệ thống tiên đề đủ mạnh để bao gồm lý thuyết số
                    học, luôn tồn tại những câu hỏi đúng mà không thể chứng minh
                    được trong hệ thống đó (tức là không đầy đủ).
                </div>
            </div>
        </div>
    );
};

const LuongGiac = () => {
    return (
        <>
            <div className="overflow-x-auto overflow-y-hidden grid grid-cols-1 grid-rows-[repeat(8,auto)]">
                <div className="col-[1/-1] row-[1/-1] bg-[#050505] md:w-[1.5px] w-[0.1px] relative md:left-[13.9px] left-[14.25px]" />
                <div className="col-[1/-1] row-[1/2] relative z-10 h-fit mt-[10px]">
                    <div className="md:h-[75px] h-[51.5px]">{}</div>
                    <div className={generalClassName}>
                        Lượng giác có nguồn gốc từ các nền văn minh cổ đại, đặc
                        biệt là ở Ai Cập, Babylon, và Hy Lạp. Các nền văn hóa
                        này đã nghiên cứu các hình học đơn giản và sử dụng chúng
                        trong các lĩnh vực như đo đạc đất đai, xây dựng và thiên
                        văn học.
                        <br />
                        Đo đạc đất đai: Người Ai Cập sử dụng các phương pháp
                        hình học đơn giản để đo đạc đất đai, đặc biệt là trong
                        việc xác định diện tích của các mảnh đất. Khi nước sông
                        Nile dâng cao và tạo ra lũ lụt, họ cần đo lại diện tích
                        đất đai bị ảnh hưởng. Lượng giác giúp họ xác định các
                        góc và khoảng cách trong các khu đất hình chữ nhật hoặc
                        tam giác, từ đó tính toán diện tích.
                        <br />
                        Xây dựng thiên văn học: Người Ai Cập rất chú trọng việc
                        quan sát bầu trời, đặc biệt là để xác định thời gian
                        trong ngày và mùa. Họ sử dụng các công cụ như tháp đồng
                        hồ mặt trời và bảng sao để theo dõi chu kỳ mặt trời và
                        các vì sao, phục vụ cho việc lập lịch canh tác và xây
                        dựng.
                    </div>
                </div>
                <div className="col-[1/-1] row-[2/3] relative z-10 h-fit">
                    <div className="md:h-[75px] h-[51.5px]">{}</div>
                    <div className={generalClassName}>
                        Cả người Ai Cập và người Babylon đã phát triển các
                        phương pháp để tính toán các độ dài và góc trong các tam
                        giác, mặc dù họ chưa phát triển đầy đủ lý thuyết lượng
                        giác như ngày nay. Người Babylon đã sử dụng bảng số học
                        để tính toán các phép tính về góc và chu vi của các hình
                        tròn.
                    </div>
                </div>
                <div className="col-[1/-1] row-[3/4] relative z-10 h-fit">
                    <div className="md:h-[75px] h-[51.5px]">{}</div>
                    <div className={generalClassName}>
                        Các nhà toán học Hy Lạp, như Hipparchus và Ptolemy, đã
                        có đóng góp quan trọng trong việc phát triển lý thuyết
                        lượng giác. Hipparchus (khoảng 190 TCN) được coi là
                        người sáng lập ra lượng giác học, ông đã tạo ra bảng giá
                        trị cho các hàm lượng giác cơ bản như sine (sin) và
                        cosine (cos). Hipparchus cũng đã nghiên cứu về các quan
                        hệ góc trong các tam giác vuông và tam giác tròn.
                        <br />
                        Ptolemy (khoảng 100 - 170 CN) tiếp tục công trình của
                        Hipparchus và viết cuốn sách nổi tiếng {'"'}Almagest
                        {'"'}, trong đó có các bảng lượng giác để tính toán các
                        khoảng cách và góc trong thiên văn học. (Có thể link đến
                        trang web có cuốn sách để người dùng có thể tham khảo)
                        <br />
                        Hipparchus (khoảng 190 TCN - 120 TCN) là một nhà thiên
                        văn học và toán học nổi tiếng người Hy Lạp, được coi là
                        người sáng lập lý thuyết lượng giác. Ông nổi bật với các
                        đóng góp trong thiên văn học và toán học, đặc biệt là
                        trong việc nghiên cứu chuyển động của các thiên thể.
                    </div>
                </div>
                <div className="col-[1/-1] row-[4/5] relative z-10 h-fit">
                    <div className="md:h-[75px] h-[51.5px]">{}</div>
                    <div className={generalClassName}>
                        Lượng giác được phát triển mạnh mẽ ở Ấn Độ, đặc biệt là
                        trong các công trình của các nhà toán học như Aryabhata,
                        Brahmagupta, và Bhaskara I. Aryabhata (476 - 550 CN) đã
                        giới thiệu các khái niệm về sine và cosine trong công
                        trình của mình và thậm chí đã sử dụng những khái niệm
                        này để tính toán các hiện tượng thiên văn. Các nhà toán
                        học Ấn Độ đã phát triển bảng sine với độ chính xác cao
                        và bắt đầu sử dụng các phương pháp giải phương trình
                        lượng giác.
                        <br /> Aryabhata (khoảng 476 - 550 CN) là một nhà toán
                        học và thiên văn học vĩ đại người Ấn Độ, được biết đến
                        là một trong những học giả nổi bật nhất trong lịch sử
                        khoa học Ấn Độ cổ đại. Ông là tác giả của cuốn
                        <br />
                        {'"'}Aryabhatiya{'"'}, một tác phẩm nổi tiếng trong toán
                        học và thiên văn học, chứa đựng nhiều khái niệm quan
                        trọng vẫn có ảnh hưởng lâu dài.
                        <br />
                        Brahmagupta (khoảng 598 - 668 CN) là một trong những nhà
                        toán học và thiên văn học vĩ đại của Ấn Độ cổ đại, nổi
                        bật với những đóng góp quan trọng trong cả hai lĩnh vực
                        này. Ông là tác giả của cuốn {'"'}Brahmasphutasiddhanta
                        {'"'}, một tác phẩm nổi tiếng mà trong đó, ông đã phát
                        triển và trình bày nhiều lý thuyết toán học mới.
                        <br />
                        Bhaskara I là một nhà toán học và thiên văn học Ấn Độ,
                        nổi tiếng với những đóng góp trong các lĩnh vực toán học
                        và thiên văn học. Một trong những tác phẩm nổi bật của
                        ông là {'"'}Mahabhaskariya{'"'}, trong đó ông đã phát
                        triển các lý thuyết về chu kỳ của các hành tinh và các
                        hiện tượng thiên văn như nhật thực và nguyệt thực. Ông
                        cũng là người đầu tiên giới thiệu các khái niệm về số
                        không vào các phép toán và cải tiến các phương pháp tính
                        toán trước đó.
                    </div>
                    <div className="py-2 text-[1.25rem] font-semibold translate-x-[32.5px] w-fit">
                        CÁC HIỆN TƯỢNG THIÊN VĂN
                    </div>
                    <div className={generalClassName}>
                        1. Chuyển động của các hành tinh và Mặt Trăng: Aryabhata
                        là người đầu tiên mô tả chuyển động quay của Trái Đất
                        quanh trục của nó, điều này làm rõ rằng ngày và đêm
                        không phải là kết quả của việc Mặt Trời di chuyển quanh
                        Trái Đất (như trong các mô hình vũ trụ trước đó). Thay
                        vào đó, ông cho rằng sự chuyển động này là do Trái Đất
                        quay quanh trục của nó. Các nhà thiên văn học Ấn Độ đã
                        nghiên cứu và tính toán chu kỳ của các hành tinh (như
                        sao Mộc, sao Thổ) và xác định được các chu kỳ và sự thay
                        đổi quỹ đạo của chúng. Họ cũng phát triển các mô hình để
                        tính toán vị trí các hành tinh, giúp xác định thời gian
                        và vị trí của các hiện tượng như nhật thực và nguyệt
                        thực.
                        <br />
                        2. Nhật thực và Nguyệt thực: Aryabhata giải thích nguyên
                        nhân của các hiện tượng thiên văn này là do sự giao thoa
                        giữa ánh sáng của Mặt Trời và Mặt Trăng, với việc Trái
                        Đất che khuất ánh sáng Mặt Trời trong nhật thực và Mặt
                        Trăng che khuất Trái Đất trong nguyệt thực. Trái ngược
                        với các nền văn hóa khác, nơi các hiện tượng này thường
                        được coi là những dấu hiệu của thần thánh hay điềm báo,
                        Aryabhata đã đưa ra một giải thích thiên văn dựa trên cơ
                        sở khoa học. Brahmagupta tiếp tục phát triển lý thuyết
                        về nhật thực và nguyệt thực, mô tả bóng của Trái Đất và
                        Mặt Trăng trong các hiện tượng này, đồng thời đưa ra các
                        công thức chính xác để tính toán thời gian và vị trí của
                        các hiện tượng này.
                        <br />
                        3. Chu kỳ Trái Đất quay quanh Mặt Trời: Aryabhata đã
                        tính toán chu kỳ quay của Trái Đất quanh Mặt Trời là
                        khoảng 365,2588 ngày, rất gần với giá trị hiện đại. Con
                        số này cho thấy sự hiểu biết sâu sắc của ông về thiên
                        văn học và chu kỳ của các thiên thể. Trong khi các nền
                        văn hóa khác vẫn tin rằng Trái Đất là trung tâm của vũ
                        trụ, Aryabhata đã đi tiên phong trong việc phát triển mô
                        hình vũ trụ mà trong đó Trái Đất quay quanh Mặt Trời,
                        điều này phản ánh tầm nhìn khoa học đáng kinh ngạc của
                        ông.
                        <br />
                        4. Chuyển động của Mặt Trăng: Brahmagupta nghiên cứu các
                        chuyển động của Mặt Trăng và tính toán khoảng cách và
                        thời gian Mặt Trăng di chuyển trong quỹ đạo của nó. Ông
                        cũng đưa ra các công thức để dự đoán thời gian của các
                        hiện tượng như nguyệt thực. Các nhà thiên văn học Ấn Độ
                        thời kỳ này đã phát triển các phương pháp để tính toán
                        thời gian Mặt Trăng chuyển qua các chòm sao và xác định
                        vị trí của Mặt Trăng trong quỹ đạo của nó so với các
                        ngôi sao cố định.
                        <br />
                        5. Các hiện tượng sao băng và sao chổi: Mặc dù các tài
                        liệu cổ điển không tập trung nhiều vào sao chổi hay sao
                        băng, nhưng các nhà thiên văn học Ấn Độ đã thực hiện
                        những quan sát về những hiện tượng này. Các hiện tượng
                        như sao băng thường được ghi nhận trong các văn bản
                        thiên văn học cổ đại của Ấn Độ và được kết hợp với các
                        tín ngưỡng và lý thuyết thiên văn.
                        <br />
                        6. Hệ thống thiên văn học và các công cụ đo đạc: Các nhà
                        thiên văn học Ấn Độ trong thời kỳ này sử dụng các công
                        cụ như astrolabe (điều hướng các ngôi sao) và goniometer
                        (đo góc) để đo đạc và tính toán các vị trí thiên thể.
                        Những công cụ này giúp các nhà thiên văn học có thể tính
                        toán các chuyển động của các hành tinh, sao, Mặt Trăng
                        và Mặt Trời với độ chính xác cao.
                    </div>
                </div>
                <div className="col-[1/-1] row-[5/6] relative z-10 h-fit mt-[10px]">
                    <div className="md:h-[75px] h-[51.5px]">{}</div>
                    <div className={generalClassName}>
                        Trong thời kỳ Trung Cổ, các học giả Ả Rập như Al-Battani
                        và Al-Khwarizmi tiếp tục phát triển lý thuyết lượng
                        giác. Al-Battani đã mở rộng và hoàn thiện bảng lượng
                        giác của Ptolemy và nghiên cứu các mối quan hệ giữa các
                        góc trong tam giác vuông và hình tròn. Al-Khwarizmi là
                        người có công trong việc dịch các công trình toán học từ
                        tiếng Ả Rập sang tiếng Latinh, giúp truyền bá các kiến
                        thức về lượng giác sang châu Âu.
                        <br />
                        Al-Battani (khoảng 858-929 CN), còn được gọi là
                        Albategnius, là một nhà thiên văn học và toán học vĩ đại
                        người Ả Rập, nổi tiếng với những đóng góp quan trọng
                        trong việc cải tiến các lý thuyết thiên văn cổ điển và
                        phát triển các phương pháp tính toán. Ông sinh ra và làm
                        việc tại vùng đất hiện nay là Syria.
                        <br />
                        l-Khwarizmi (khoảng 780-850 CN) là một nhà toán học,
                        thiên văn học, và địa lý học người Ả Rập nổi tiếng, được
                        coi là {'"'}cha đẻ của đại số{'"'} vì những đóng góp
                        quan trọng của ông trong lĩnh vực này.
                        <br />
                        Bảng lượng giác: Al-Battani đã phát triển các bảng lượng
                        giác với độ chính xác cao hơn so với các bảng trước đó,
                        bao gồm các giá trị của sine, cosine, và tangent (tương
                        ứng với các khái niệm sau này trong toán học hiện đại).
                        Các bảng lượng giác này là công cụ rất quan trọng trong
                        các phép tính thiên văn học và các nghiên cứu về quỹ đạo
                        các hành tinh.
                        <br />
                        Phương pháp đo góc: Al-Battani là một trong những người
                        đầu tiên áp dụng các khái niệm về lượng giác vào việc đo
                        góc của Mặt Trăng, Mặt Trời và các hành tinh, đặc biệt
                        trong việc tính toán các hiện tượng thiên văn như nguyệt
                        thực và nhật thực.
                    </div>
                </div>
                <div className="col-[1/-1] row-[6/7] relative z-10 h-fit mt-[10px]">
                    <div className="md:h-[75px] h-[51.5px]">{}</div>
                    <div className={generalClassName}>
                        Lượng giác bắt đầu phát triển mạnh mẽ ở châu Âu trong
                        thời kỳ Phục Hưng và Cách mạng khoa học. Các nhà toán
                        học như Regiomontanus, Johannes Kepler, và Isaac Newton
                        đã mở rộng lý thuyết lượng giác để áp dụng vào các
                        nghiên cứu thiên văn, hình học, và cơ học.
                        <br />
                        Johannes Regiomontanus (1436-1476) là một nhà toán học
                        và thiên văn học nổi bật người Đức thời kỳ Phục Hưng.
                        Ông là một trong những nhân vật quan trọng trong sự phát
                        triển của khoa học phương Tây, đặc biệt là trong lĩnh
                        vực thiên văn học. Regiomontanus đã cải tiến và phổ biến
                        việc sử dụng bảng sao, đồng thời phát triển các công cụ
                        tính toán thiên văn chính xác hơn, giúp cải thiện khả
                        năng dự đoán các hiện tượng thiên văn. Ông cũng là người
                        dịch và phổ biến các tác phẩm cổ điển về toán học và
                        thiên văn học từ tiếng Hy Lạp và Latin, làm cầu nối giữa
                        tri thức cổ đại và tri thức hiện đại.
                        <br />
                        Bảng sao (Ephemerides): Regiomontanus đã biên soạn các
                        bảng sao chính xác hơn để giúp các nhà thiên văn dự đoán
                        vị trí của các hành tinh và các hiện tượng thiên văn
                        khác. Bảng sao của ông là một công cụ quan trọng trong
                        việc xác định vị trí các hành tinh trên bầu trời và hỗ
                        trợ cho việc tính toán các chuyển động của chúng.
                        <br />
                        Các dụng cụ quan sát: Regiomontanus đã cải tiến và phát
                        triển các dụng cụ quan sát, chẳng hạn như thiết bị định
                        vị (astrolabe) và quy mô thiên văn. Những công cụ này
                        giúp ông đo đạc và ghi lại chính xác các chuyển động
                        thiên thể.
                        <br />
                        Johannes Kepler (1571-1630) là một nhà thiên văn học và
                        toán học người Đức, nổi tiếng với việc phát triển ba
                        định lý về chuyển động của các hành tinh, gọi là Ba định
                        lý Kepler. Kepler cũng nghiên cứu sự tương quan giữa
                        thời gian quay của hành tinh và khoảng cách từ Mặt Trời,
                        đóng góp lớn vào sự phát triển của thiên văn học và giúp
                        củng cố lý thuyết về hệ Mặt Trời của Copernicus. Các
                        công trình của Kepler là nền tảng quan trọng cho sự phát
                        triển của lý thuyết vật lý và thiên văn học sau này.
                        <br />
                        Định luật 1:
                        {/* (video)  */}
                        <br />
                        Định luật 2:
                        {/* (video)  */}
                        <br />
                        Định luật 3:
                        {/* (video) (Link video: https://www.youtube.com/watch?v=AKbfR5KHUm4 )  */}
                        {/* Video mặt trời: (Link video: https://www.youtube.com/watch?v=ZGr1nHdzLyk )  */}
                        <br />
                        Isaac Newton (1642-1727) là một nhà khoa học, toán học,
                        và thiên văn học người Anh, được coi là một trong những
                        nhân vật vĩ đại nhất trong lịch sử khoa học. Ông nổi
                        tiếng với Ba định lý chuyển động (Ba định lý Newton) và
                        Định lý vạn vật hấp dẫn. Newton cũng là người sáng lập
                        Calculus (giải tích), một công cụ toán học quan trọng
                        trong nghiên cứu các hiện tượng thay đổi liên tục. Các
                        công trình của ông, đặc biệt là cuốn sách {'"'}
                        Philosophiæ Naturalis Principia Mathematica{'"'}{" "}
                        (Mathematical Principles of Natural Philosophy), đã đặt
                        nền tảng cho cơ học cổ điển và có ảnh hưởng sâu rộng đến
                        sự phát triển của khoa học tự nhiên. (có thể liên kết
                        với trang sách khác) Ba định lý chuyển động (Ba định lý
                        Newton)
                        <br />
                        Định lí 1:
                        {/* https://www.youtube.com/watch?v=-lToBk24L8w */}
                        <br />
                        Định lí 2:
                        {/* https://www.youtube.com/watch?v=eR9Co5d1ycw */}
                        <br />
                        Định lí 3:
                        {/* https://www.youtube.com/watch?v=5JQdSRf1yzA */}
                        <br />
                        Định lý vạn vật hấp dẫn:
                        {/* https://www.youtube.com/watch?v=7gf6YpdvtE0  */}
                        <br />
                        Giải tích:
                    </div>
                </div>
                <div className="col-[1/-1] row-[7/8] relative z-10 h-fit mt-[10px]">
                    <div className="md:h-[75px] h-[51.5px]">{}</div>
                    <div className={generalClassName}>
                        Vào thế kỷ 18, các hàm lượng giác được định nghĩa rõ
                        ràng hơn và ứng dụng trong các lĩnh vực khác nhau như
                        phân tích, cơ học, điện học, v.v. Các nhà toán học như
                        Leonhard Euler đã phát triển các công thức lượng giác
                        quan trọng và định lý lượng giác, đặt nền tảng cho sự
                        phát triển của giải tích toán học. Euler cũng đã đóng
                        góp vào sự phát triển của hàm lượng giác phức, mở rộng
                        khả năng ứng dụng lượng giác trong các lĩnh vực như sóng
                        và dao động. Leonhard Euler (1707-1783) là một trong
                        những nhà toán học và lý thuyết vĩ đại nhất trong lịch
                        sử. Ông là người Thụy Sĩ và có ảnh hưởng sâu rộng đến
                        nhiều lĩnh vực của toán học, từ giải tích đến lý thuyết
                        đồ thị, lý thuyết số, và cơ học lý thuyết. Những đóng
                        góp của Euler rất phong phú và có ảnh hưởng lớn đến sự
                        phát triển của toán học và khoa học kỹ thuật. Phương
                        trình Euler: Là những phương trình cơ bản trong giải
                        tích và lý thuyết vi phân, trong đó nổi bật là Phương
                        trình Euler trong cơ học chất lưu và lý thuyết cấu trúc.
                        Chữ Euler và Công thức Euler: Công thức nổi tiếng của
                        Euler <InlineMath math="e^{i\pi} + 1 = 0" />, được coi
                        là một trong những công thức đẹp nhất trong toán học vì
                        liên kết giữa năm số cơ bản của toán học:{" "}
                        <InlineMath math="e" /> (hằng số cơ số tự nhiên),{" "}
                        <InlineMath math="i" /> (số ảo),{" "}
                        <InlineMath math="\pi" /> (số pi), 0 và 1. Lý thuyết đồ
                        thị: Euler là người sáng lập lý thuyết đồ thị, nổi bật
                        là giải quyết bài toán cầu Konigsberg, qua đó ông đã
                        phát triển khái niệm về đồ thị và các đoạn nối. Toán học
                        lý thuyết số: Euler đã có những đóng góp quan trọng
                        trong lý thuyết số, đặc biệt là về hàm Euler là các lý
                        thuyết liên quan đến số nguyên tố. Giải tích và đại số:
                        Euler đóng góp rất nhiều vào việc phát triển giải tích,
                        chẳng hạn như các chuỗi vô hạn, khai triển Taylor và các
                        công thức quan trọng trong đại số và giải tích phức.
                    </div>
                </div>
                <div className="col-[1/-1] row-[8/-1] relative z-1 h-fit0 mt-[10px]">
                    <div className="md:h-[75px] h-[51.5px]">{}</div>
                    <div className={generalClassName}>
                        Lượng giác ngày nay không chỉ là một công cụ quan trọng
                        trong toán học mà còn trong nhiều ngành khoa học và kỹ
                        thuật, như vật lý, điện tử, cơ học, và cả máy tính. Các
                        ứng dụng hiện đại của lượng giác bao gồm vẽ đồ thị, phân
                        tích tín hiệu, truyền thông và giải quyết các vấn đề về
                        ánh sáng và sóng.
                    </div>
                </div>
            </div>
        </>
    );
};

const Lessons = [
    [
        [<Menhde key="lesson1s1" />, <Taphop key="lesson1s2" />],
        null,
        <LuongGiac key="lesson3" />,
    ],
    [],
    [],
];

export default function LessonLayout({ id, idx }: { id: number; idx: number }) {
    const [scope, animate] = useAnimate();

    const toggleRef = useRef<(HTMLDivElement | null)[]>([]);
    let curToggleId = 0;

    const handleToggle = (idxl: number) => {
        const constCurToggleId = curToggleId;

        if (!toggleRef.current[idxl] || !toggleRef.current[constCurToggleId])
            return;

        if (idxl !== curToggleId) {
            animate(
                `#lessonName${idxl}`,
                {
                    width: "fit-content",
                },
                { ease: "easeOut" }
            );

            animate(
                `#toggleLine${idxl}`,
                {
                    width: "100%",
                },
                { delay: 0.2, ease: "easeOut" }
            );

            animate(
                `#toggleLine${curToggleId}`,
                {
                    width: "0px",
                },
                { ease: "easeOut" }
            );

            animate(
                `#lessonName${curToggleId}`,
                {
                    width: "0px",
                },
                { ease: "easeOut" }
            );

            toggleRef.current[idxl].style.display = "block";
            toggleRef.current[constCurToggleId].style.display = "none";

            curToggleId = idxl;
        }
    };

    return (
        <>
            {lessonsToggle[id][idx] && (
                <div
                    className="md1:h-[50px] h-[40px] ml-[30px] mb-[10px] md1:mt-[20px] w-fit relative"
                    ref={scope}
                >
                    <div className="flex h-full">
                        {lessonsToggle[id][idx].map((lessonName, idxl) => (
                            <button
                                className="h-full flex w-fit md1:text-[1.25rem] text-[1.125rem] md1:leading-[1.75rem] leading-[1.5rem] px-3 relative text-nowrap overflow-hidden"
                                key={idxl}
                                onClick={() => handleToggle(idxl)}
                            >
                                <div>Bài {idxl + 1}</div>
                                <div
                                    className={`${
                                        idxl ? "w-0" : "w-fit"
                                    } overflow-hidden`}
                                    id={`lessonName${idxl}`}
                                >
                                    : {lessonName}
                                </div>
                                <div className="w-full absolute bottom-0 left-0 flex justify-center">
                                    <div
                                        className={`h-[1.5px] bg-black ${
                                            idxl ? "w-0" : "w-full"
                                        }`}
                                        id={`toggleLine${idxl}`}
                                    />
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="h-[1.5px] bg-[rgba(0,0,0,0.25)] absolute bottom-0 left-0 w-full" />
                </div>
            )}
            {Array.isArray(Lessons[id][idx]) ? (
                Lessons[id][idx].map((lesson, idxl) => (
                    <div
                        key={idxl}
                        className={`h-full md1:overflow-y-auto md1:overflow-x-hidden font-light md1:pl-5 w-full ${
                            idxl ? "hidden" : "block"
                        }`}
                        ref={(el) => {
                            toggleRef.current[idxl] = el;
                        }}
                    >
                        {lesson}
                    </div>
                ))
            ) : (
                <div
                    className="mt-8 h-full md1:overflow-y-auto md1:overflow-x-hidden font-light md1:pl-5 w-full"
                    style={{
                        scrollbarGutter: "stable",
                    }}
                >
                    {Lessons[id][idx]}
                </div>
            )}
        </>
    );
}
