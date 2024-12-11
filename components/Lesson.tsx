"use client";

import React, { useRef, useState } from "react";
import { lessonsToggle, timelineStar } from "./static/lessonsStatic";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { useAnimate } from "framer-motion";
import ReactPlayer from "react-player/lazy";

const generalClassName =
    "md1:pl-[70px] pl-[35px] md1:pr-0 pr-1 lg3:text-lg md1:pr-0 pr-5";

const Menhde = () => {
    return (
        <div className="overflow-x-auto overflow-y-hidden grid grid-cols-1 grid-rows-[repeat(4,auto)]">
            <div className="col-[1/-1] row-[1/-1] bg-[#000000] md:w-[1.5px] w-[0.1px] relative md:left-[13.9px] left-[9.6px]" />
            <div className="col-[1/-1] row-[1/2] relative z-10 h-fit mt-[10px]">
                <div className="md:h-[75px] h-[51.5px]">{}</div>
                <div className={generalClassName}>
                    Chúng ta hãy bắt đầu từ khoảng năm 384 TCN, khi Aristotle
                    được sinh ra tại thành phố Stagira, Hy Lạp. Con trai của một
                    bác sĩ hoàng gia, Aristotle được nuôi dưỡng trong môi trường
                    học thuật từ nhỏ.
                    <br />
                    Đến năm 17 tuổi, ông đến Athens và trở thành học trò của
                    triết gia nổi tiếng Plato tại Học viện Athens - một nơi tập
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
    const [playVideo, setPlayVideo] = useState<boolean>(true);

    const handleStartVideo = (idx: number) => {
        setPlayVideo(!playVideo);
    };

    return (
        <div className="grid grid-cols-1 grid-rows-[repeat(6,auto)]">
            <div className="col-[1/-1] row-[1/-1] bg-[#000000] md:w-[1.5px] w-[0.1px] relative md:left-[13.9px] left-[9.6px]" />
            <div className="col-[1/-1] row-[1/2] relative z-10 h-fit mt-[10px]">
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar[0][0][0]}
                </div>
                <div
                    className={`${generalClassName} grid lg2:grid-cols-[auto_auto] lg2:grid-rows-[auto_auto]`}
                >
                    <div className="col-[1/2] row-[1/2] font-semibold md1:text-[1.25rem] text-[1.125rem] mb-5">
                        Người nguyên thủy đếm như thế nào?
                    </div>
                    <div
                        className="lg2:col-[1/2] lg2:row-[2/-1] max-w-[400px] w-full aspect-[304/207] cursor-pointer"
                        onClick={() => handleStartVideo(0)}
                    >
                        <ReactPlayer
                            url={`${process.env.NEXT_PUBLIC_API_URL}/videos/primitive.mp4`}
                            loop={!playVideo}
                            playing={playVideo}
                            onEnded={() => handleStartVideo(0)}
                            muted
                            width="100%"
                            height="100%"
                        />
                        {/* <div className="border-black border lg2:sticky lg2:top-[20px] h-full w-full" /> */}
                    </div>
                    <p className="lg2:col-[2/-1] lg2:row-[2/-1] lg2:pl-5 lg2:pt-0 pt-5 md1:pr-5 md1:text-base text-sm">
                        Khái niệm về số và quá trình đếm phát triển rất lâu
                        trước khi lịch sử loài người được ghi chép lại bằng văn
                        bản nên cách thức phát triển đó chỉ là những phỏng đoán
                        của những thế hệ sau này. Người ta cho rằng ngay trong
                        thời kỳ nguyên thủy xa xưa nhất, con người đã có những
                        khái niệm sơ đẳng về số, để nhận ra sự nhiều hơn hoặc ít
                        hơn khi một nhóm nhỏ các đồ vật được thêm vào hay lấy đi
                        một số. Cùng với từng bước tiến xã hội, việc đếm trở
                        thành một nhu cầu không thể thiếu được của con người.
                        Một bộ lạc cần phải biết có bao nhiêu thành viên. Một
                        người cần phải biết đàn gia súc của mình có bao nhiêu
                        con. Có lẽ cách đếm sớm nhất là phương pháp đối chiếu
                        đơn giản theo nguyên tắc tương ứng một - một. Chẳng hạn
                        khi đếm cừu mỗi con cừu sẽ ứng với một ngón tay. Ngoài
                        ra cách đếm có thể được thực hiện bằng cách tập hợp số
                        viên đá sỏi hoặc qua những cái que, hoặc bằng cách vạch
                        lên mặt đất hay một hòn đá có bề mặt phẳng và nhằn, hoặc
                        bằng cách khắc các dấu chữ v trên một miếng gỗ, hoặc
                        bằng thắt nút trên một sợi dây.
                    </p>
                </div>
            </div>
            <div className="col-[1/-1] row-[2/3] relative z-10 h-fit">
                {/* <div className="grid grid-rows-1 md:grid-cols-[28.5px_auto] grid-cols-[20px_auto]">
                    <div className="col-[1/2] row-[1/-1]">
                        {timelineStar[0][0][1]}
                    </div>
                    <div className="col-[2/-1] row-[1/-1] flex flex-wrap">
                        {timelineStar[0][0][2]}
                        {timelineStar[0][0][3]}
                    </div>
                </div> */}
                <div className="col-[1/-1] row-[1/2] relative z-10 h-fit mt-[10px]">
                    <div className="md:h-[75px] h-[51.5px]">{}</div>
                    <div className={generalClassName}></div>
                </div>
            </div>
            <div className="col-[1/-1] row-[3/4] relative z-10 h-fit">
                <div className="col-[1/-1] row-[1/2] relative z-10 h-fit mt-[10px]">
                    <div className="md:h-[75px] h-[51.5px]">{}</div>
                    <div className={generalClassName}></div>
                </div>
            </div>
            <div className="col-[1/-1] row-[4/5] relative z-10 h-fit">
                <div className="col-[1/-1] row-[1/2] relative z-10 h-fit mt-[10px]">
                    <div className="md:h-[75px] h-[51.5px]">{}</div>
                    <div className={generalClassName}></div>
                </div>
            </div>
            <div className="col-[1/-1] row-[5/6] relative z-10 h-fit">
                <div className="col-[1/-1] row-[1/2] relative z-10 h-fit mt-[10px]">
                    <div className="md:h-[75px] h-[51.5px]">{}</div>
                    <div className={generalClassName}></div>
                </div>
            </div>
        </div>
    );
};

const LuongGiac = () => {
    return (
        <>
            <div className="overflow-x-auto overflow-y-hidden grid grid-cols-1 grid-rows-[repeat(8,auto)]">
                <div className="col-[1/-1] row-[1/-1] bg-[#000000] md:w-[1.5px] w-[0.1px] relative md:left-[13.9px] left-[9.6px]" />
                <div className="col-[1/-1] row-[1/2] relative z-10 h-fit mt-[10px]">
                    <div className="md:h-[75px] h-[51.5px]">
                        {timelineStar[0][2][0]}
                    </div>
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
                    <div className="md:h-[75px] h-[51.5px]">
                        {timelineStar[0][2][1]}
                    </div>
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
                    <div className="md:h-[75px] h-[51.5px]">
                        {timelineStar[0][2][2]}
                    </div>
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
                    <div className="md:h-[75px] h-[51.5px]">
                        {timelineStar[0][2][3]}
                    </div>
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
                    <div className="py-2 text-[1.25rem] font-[475] translate-x-[32.5px] w-fit">
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
                    <div className="md:h-[75px] h-[51.5px]">
                        {timelineStar[0][2][4]}
                    </div>
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
                    <div className="md:h-[75px] h-[51.5px]">
                        {timelineStar[0][2][5]}
                    </div>
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
                    <div className="md:h-[75px] h-[51.5px]">
                        {timelineStar[0][2][6]}
                    </div>
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
                    <div className="md:h-[75px] h-[51.5px]">
                        {timelineStar[0][2][7]}
                    </div>
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
