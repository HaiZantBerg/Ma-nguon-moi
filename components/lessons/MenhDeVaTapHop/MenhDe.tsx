import { BlockMath, InlineMath } from "react-katex";
import ExtraInlineFact, {
    HistoricalFigureInlineFact,
} from "../../Extra/ExtraInlineFact";
import {
    generalClassName,
    timelineStar,
    generalContentClassName,
    generalInstanceClassName,
    generalHeaderClassName,
} from "../../static/lessonsStatic";
import ExtraLearnMore from "../../Extra/ExtraLearnMore";
import Aristotle from "@/public/Image/aristotle.png";
import GeogreBoole from "@/public/Image/georgeboole.png";
import GottlobFrege from "@/public/Image/gottlobfrege.png";
import BertrandRussell from "@/public/Image/bertrandrussell.png";
import WilliamOfOckham from "@/public/Image/williamofockham.png";
import PeterAbelard from "@/public/Image/peterabelard.png";
import Image from "next/image";

export default function MenhDe() {
    return (
        <>
            <div className="col-[1/-1] row-[1/2] h-fit mt-[10px]">
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar.TheKy4TCN}
                </div>
                <div className={`${generalClassName}`}>
                    <div className={`${generalHeaderClassName}`}>
                        Aristotle và Triết Học Logic
                    </div>
                    <div className={`${generalContentClassName}`}>
                        <ExtraInlineFact buttonContent="Aristotle">
                            <HistoricalFigureInlineFact
                                image={<Image src={Aristotle} alt="" />}
                                historicalFigureName="Aristotle"
                            >
                                (384-322 TCN), một trong những triết gia Hy Lạp
                                cổ đại, là người đầu tiên hệ thống hóa các quy
                                tắc của suy luận logic. Ông đã xây dựng các
                                nguyên tắc cơ bản của logic học, mà sau này được
                                biết đến với tên gọi logic học suy diễn
                                (syllogistic logic). Tuy nhiên, logic của
                                Aristotle chưa phải là logic mệnh đề, mà chỉ tập
                                trung vào các phán đoán và suy luận liên quan
                                đến các danh từ và động từ.
                                <br />
                                <br />
                                Tác phẩm nổi tiếng {'"'}Organon{'"'} của
                                Aristotle đã đi sâu vào phân tích logic học.
                                Trong đó, ông đã định nghĩa và phân tích mệnh đề
                                theo một hệ thống chặt chẽ, từ đó tạo nền tảng
                                cho các nghiên cứu về luận lý học sau này.
                                Aristotle cũng giới thiệu khái niệm {'"'}mệnh đề
                                đơn{'"'} (Simple Proposition) và {'"'}mệnh đề
                                phức{'"'}
                                (Compound Proposition), đồng thời phát triển các
                                lý thuyết về suy luận hợp lý từ các mệnh đề này,
                                dẫn đến các hình thức suy diễn như {'"'}
                                syllogism{'"'} (hình thức suy luận thông qua 3
                                mệnh đề).
                            </HistoricalFigureInlineFact>
                        </ExtraInlineFact>
                        , người sáng lập trường phái logic học, đã đưa ra các
                        định lý cơ bản về mệnh đề trong các tác phẩm của mình.
                        Ông là người đầu tiên khái quát hóa cách thức mà các câu
                        trong ngôn ngữ có thể được phân loại là {'"'}đúng{'"'}{" "}
                        hoặc
                        {'"'}sai{'"'}. Mặc dù các nền văn minh khác cũng có
                        những nghiên cứu sơ khai về logic, nhưng Aristotle là
                        người đầu tiên có hệ thống hóa và đưa ra những nguyên lý
                        áp dụng chung. Một trong những lý thuyết quan trọng của
                        Aristotle là khái niệm {'"'}sự phủ định{'"'} của một
                        mệnh đề. Ông phân loại mệnh đề thành {'"'}đúng{'"'} hoặc{" "}
                        {'"'}sai{'"'}, và mỗi mệnh đề có thể được phủ định để
                        trở thành một mệnh đề ngược lại. Ví dụ: {'"'}Tất cả
                        người Hy Lạp là công dân tự do{'"'} có thể bị phủ định
                        thành {'"'}Không phải tất cả người Hy Lạp là công dân tự
                        do{'"'}. Mặc dù Aristotle không sử dụng các ký hiệu toán
                        học như chúng ta làm ngày nay, nhưng lý thuyết của ông
                        đã chi phối tư tưởng triết học phương Tây suốt hơn 2000
                        năm. Các nguyên lý cơ bản của ông về mệnh đề và suy luận
                        vẫn là nền tảng cho lý thuyết logic cho đến thời đại
                        hiện đại.
                    </div>
                </div>
                <div className="col-[1/-1] row-[1/2] h-fit mt-[10px]">
                    <div className="md:h-[75px] h-[51.5px]">
                        {timelineStar.TheKy1217}
                    </div>
                    <div className={`${generalClassName}`}>
                        <div className={`${generalContentClassName}`}>
                            Trong giai đoạn này, các nhà logic học như{" "}
                            <ExtraInlineFact
                                buttonContent="William
                            of Ockham"
                            >
                                <HistoricalFigureInlineFact
                                    image={
                                        <Image src={WilliamOfOckham} alt="" />
                                    }
                                    historicalFigureName="William of Ockham"
                                >
                                    (1287-1347) là một nhà triết học và tu sĩ
                                    người Anh, nổi tiếng với nguyên lý {'"'}Dao
                                    cạo Ockham
                                    {'"'}
                                    (Occam{"'"}s Razor), cho rằng khi đối mặt
                                    với nhiều giả thuyết, giả thuyết đơn giản
                                    nhất với ít giả định nhất là hợp lý nhất.
                                    Ông là người sáng lập trường phái {'"'}
                                    Nominalism{'"'}, phủ nhận sự tồn tại của các
                                    khái niệm chung và chỉ chấp nhận các sự vật
                                    cụ thể. Ockham cũng có ảnh hưởng sâu rộng
                                    đến logic học, khoa học và triết học hiện
                                    đại.
                                </HistoricalFigureInlineFact>
                            </ExtraInlineFact>{" "}
                            và{" "}
                            <ExtraInlineFact buttonContent="Peter Abelard">
                                <div className="flex md:flex-row flex-col gap-2 md:items-start items-center">
                                    <HistoricalFigureInlineFact
                                        image={
                                            <Image src={PeterAbelard} alt="" />
                                        }
                                        historicalFigureName="Peter Abelard"
                                    >
                                        (1079-1142) là một triết gia và thần học
                                        gia người Pháp, nổi bật với phương pháp{" "}
                                        {'"'}Sic et Non{'"'}, khuyến khích đối
                                        chiếu các quan điểm đối lập trong thần
                                        học. Ông cũng nổi tiếng với mối tình với
                                        Héloïse và là một trong những người tiên
                                        phong trong việc áp dụng lý luận logic
                                        vào thần học. Abelard có ảnh hưởng lớn
                                        đến triết học và thần học thời Trung Cổ.
                                    </HistoricalFigureInlineFact>
                                </div>
                            </ExtraInlineFact>{" "}
                            đã tiếp tục phát triển các khái niệm về logic và
                            ngôn ngữ, tập trung vào cách các phát biểu có thể
                            được kết hợp và phân tích. Mặc dù chưa hình thành rõ
                            ràng mệnh đề như ta hiểu ngày nay, những nghiên cứu
                            về suy luận và ngôn ngữ của họ đã đặt nền móng cho
                            sự phát triển sau này.
                        </div>
                    </div>
                </div>
                <div className="col-[1/-1] row-[1/2] h-fit mt-[10px]">
                    <div className="md:h-[75px] h-[51.5px]">
                        {timelineStar.TheKy19(1)}
                    </div>
                    <div className={`${generalClassName}`}>
                        <div className={`${generalHeaderClassName}`}>
                            Đại số Boole (1847)
                        </div>
                        <div className={`${generalContentClassName}`}>
                            Vào thế kỷ 19,{" "}
                            <ExtraInlineFact buttonContent="George Boole">
                                <HistoricalFigureInlineFact
                                    image={<Image src={GeogreBoole} alt="" />}
                                    historicalFigureName="George Boole"
                                >
                                    (1815-1864) là người đầu tiên phát triển hệ
                                    thống logic mệnh đề hiện đại với việc sáng
                                    tạo ra Đại số Boole. Trong cuốn sách {'"'}
                                    The Mathematical Analysis of Logic{'"'}{" "}
                                    (1847) và {'"'}An Investigation of the Laws
                                    of Thought
                                    {'"'} (1854), Boole đã hệ thống hóa cách
                                    thức xử lý các phát biểu toán học thông qua
                                    các phép toán đại số như AND, OR, và NOT,
                                    tương ứng với các mệnh đề logic. Đại số
                                    Boole cho phép biểu diễn các mệnh đề bằng
                                    các giá trị đúng (1) hoặc sai (0), từ đó
                                    thực hiện các phép toán logic để kiểm tra
                                    tính hợp lý của các mệnh đề.
                                </HistoricalFigureInlineFact>
                            </ExtraInlineFact>{" "}
                            phát triển logic đại số, nơi ông áp dụng các phép
                            toán đại số vào lý thuyết logic. Ông giới thiệu các
                            phép toán logic cơ bản như AND (và), OR (hoặc), và
                            NOT (không), và biểu diễn mệnh đề bằng số nhị phân
                            (1 cho đúng, 0 cho sai). Công trình của Boole, được
                            trình bày trong tác phẩm {'"'}The Laws of Thought
                            {'"'}
                            (1854), đã đặt nền tảng cho lý thuyết logic hiện đại
                            và là cơ sở cho sự phát triển của máy tính và kỹ
                            thuật số.
                            <br />
                            Ví dụ về mệnh đề {'"'}Socrates là người và Socrates
                            là sinh vật{'"'} có thể được biểu diễn bằng các phép
                            toán đại số như sau: Giả sử:
                            <br />
                            P: {'"'}Socrates là người{'"'} (được biểu diễn bằng{" "}
                            <span className="font-[475]">1</span> nếu đúng,{" "}
                            <span className="font-[475]">0</span> nếu sai).
                            <br />
                            Q: {'"'}Socrates là sinh vật{'"'} (được biểu diễn
                            bằng <span className="font-[475]">1</span> nếu đúng,{" "}
                            <span className="font-[475]">0</span> nếu sai).
                            <br />
                            Phát biểu {'"'}Socrates là người và Socrates là sinh
                            vật{'"'} có thể được viết dưới dạng phép toán đại số
                            như sau:
                            <BlockMath math="P \land Q" />
                            Trong đó:
                            <br />
                            <InlineMath math="\land" /> là phép toán logic {'"'}
                            và{'"'}
                            (AND), có giá trị{" "}
                            <span className="font-[475]">1</span> khi cả hai
                            mệnh đề đều đúng (tức là P=1 và Q=1), và 0 khi một
                            trong hai mệnh đề là sai.
                            <ExtraLearnMore extraBodyVariant="content">
                                <span className="font-[475]">
                                    Các phép toán logic cơ bản trong đại số
                                    Boole:
                                </span>
                                <div className={`${generalInstanceClassName}`}>
                                    <span className="font-[475]">AND</span> (
                                    <InlineMath math="\land" />
                                    ): Kết quả là{" "}
                                    <span className="font-[475]">1</span> khi cả
                                    hai mệnh đề đều đúng, ngược lại là{" "}
                                    <span className="font-[475]">0</span>.
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    <span className="font-[475]">OR</span> (
                                    <InlineMath math="\lor" />
                                    ): Kết quả là{" "}
                                    <span className="font-[475]">1</span> nếu ít
                                    nhất một trong hai mệnh đề đúng, ngược lại
                                    là <span className="font-[475]">0</span>.
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    <span className="font-[475]">NOT</span> (
                                    <InlineMath math="\neg" />
                                    ): Đảo ngược giá trị của mệnh đề (đúng thành
                                    sai và ngược lại).
                                </div>
                                Ví dụ, nếu:
                                <div className={`${generalInstanceClassName}`}>
                                    P=1 (Socrates là người) và
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    Q=1 (Socrates là sinh vật),
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    thì P <InlineMath math="\land" /> Q=1, nghĩa
                                    là
                                    {' "'}Socrates là người và Socrates là sinh
                                    vật
                                    {'"'} là đúng. Nếu một trong hai mệnh đề là
                                    sai, kết quả của phép toán AND sẽ là 0.
                                </div>
                            </ExtraLearnMore>
                        </div>
                    </div>
                    <div className={`${generalClassName}`}>
                        <div className={`${generalHeaderClassName}`}>
                            Logic hình thức (Frege và Peano)
                        </div>
                        <div className={`${generalContentClassName}`}>
                            Vào cuối thế kỷ 19, logic học được nâng cấp mạnh mẽ
                            nhờ những đóng góp của{" "}
                            <ExtraInlineFact buttonContent="Gottlob Frege">
                                <HistoricalFigureInlineFact
                                    image={
                                        <Image
                                            src={GottlobFrege}
                                            alt=""
                                            className="w-full h-auto"
                                        />
                                    }
                                    historicalFigureName="Gottlob Frege"
                                >
                                    (1848-1925) là một triết gia và nhà toán học
                                    người Đức, được xem là cha đẻ của{" "}
                                    <span className="font-[475]">
                                        logic học hiện đại
                                    </span>
                                    . Ông phát triển hệ thống lý thuyết logic
                                    formal, phân biệt giữa ngữ nghĩa và cú pháp
                                    trong logic. Frege sáng tạo ra hệ thống ký
                                    hiệu logic để mô tả các mệnh đề và suy luận.
                                    Tác phẩm nổi bật của ông là{" "}
                                    <span className="font-[475]">
                                        {'"'}Begriffsschrift
                                    </span>
                                    {'"'}
                                    (1879) và{" "}
                                    <span className="font-[475]">
                                        {'"'}Die Grundlagen der Arithmetik
                                        {'"'}
                                    </span>
                                    (1884), trong đó ông đề xuất rằng toán học
                                    có thể được xây dựng từ logic cơ bản. Công
                                    trình của Frege ảnh hưởng sâu rộng đến các
                                    triết gia và nhà toán học như Bertrand
                                    Russell và Ludwig Wittgenstein.
                                </HistoricalFigureInlineFact>
                            </ExtraInlineFact>
                            , một nhà toán học và logic học người Đức. Frege
                            phát triển lý thuyết về logic toán học, đồng thời
                            đưa ra khái niệm về {'"'}logic ngữ nghĩa{'"'}, trong
                            đó ông nghiên cứu về các biểu thức và quan hệ giữa
                            chúng trong ngữ cảnh toán học.
                            <br />
                            <br />
                            Frege không chỉ định nghĩa mệnh đề là một câu có thể
                            đúng hoặc sai, mà còn phát triển một hệ thống ký
                            hiệu hóa mới để mô tả mệnh đề, mà sau này được gọi
                            là{" "}
                            <ExtraInlineFact buttonContent="hệ thống ký hiệu logic của Frege">
                                <span className="font-[475]">
                                    Hệ thống ký hiệu logic của Gottlob Frege
                                </span>{" "}
                                là một trong những đóng góp quan trọng nhất của
                                ông trong triết học và toán học, đánh dấu sự
                                khởi đầu của logic học hiện đại. Hệ thống này
                                được trình bày trong tác phẩm{" "}
                                <span className="font-[475]">
                                    {'"'}Begriffsschrift{'"'}
                                </span>
                                (1879), nơi Frege phát triển một ngôn ngữ hình
                                thức để mô tả các quan hệ logic và toán học.
                                <br />
                                <br />
                                Những đặc điểm chính của hệ thống ký hiệu logic
                                của Frege:
                                <div className={`${generalInstanceClassName}`}>
                                    <span className="font-[475]">
                                        Ký hiệu hàm và đối tượng:
                                    </span>
                                    <br />
                                    Frege phân biệt giữa hai loại khái niệm
                                    trong logic:
                                    <div
                                        className={`${generalInstanceClassName}`}
                                    >
                                        Hàm (Function): Các ký hiệu biểu thị
                                        những quan hệ giữa các đối tượng, ví dụ,
                                        {'"'}x là một số nguyên{'"'} hoặc {'"'}x
                                        là một người{'"'}.
                                    </div>
                                    <div
                                        className={`${generalInstanceClassName}`}
                                    >
                                        Đối tượng (Object): Các thành phần trong
                                        các mệnh đề, ví dụ, các số hay các vật
                                        thể cụ thể.
                                    </div>
                                    <span className="font-[475]">
                                        Quan hệ giữa các mệnh đề:
                                    </span>
                                    <br />
                                    Frege sử dụng ký hiệu để diễn đạt quan hệ
                                    giữa các mệnh đề, như:
                                    <div
                                        className={`${generalInstanceClassName}`}
                                    >
                                        <span className="font-[475]">
                                            {'"'}
                                            <InlineMath math="\forall" />
                                            {'"'} (for all)
                                        </span>
                                        : ký hiệu cho phép diễn đạt khái niệm
                                        tổng quát, ví dụ, {'"'}Mọi người đều tử
                                        tế.
                                        {'"'}
                                    </div>
                                    <div
                                        className={`${generalInstanceClassName}`}
                                    >
                                        <span className="font-[475]">
                                            {'"'}
                                            <InlineMath math="\exists" />
                                            {'"'} (there exists)
                                        </span>
                                        : ký hiệu để diễn đạt sự tồn tại, ví dụ,{" "}
                                        {'"'}Có ít nhất một người tốt.{'"'}
                                    </div>
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    <span className="font-[475]">
                                        Ký hiệu cho các phép toán logic:
                                    </span>
                                    <div
                                        className={`${generalInstanceClassName}`}
                                    >
                                        <span className="font-[475]">
                                            {'"'}
                                            <InlineMath math="\neg" />
                                            {'"'}
                                        </span>
                                        : phủ định (NOT)
                                    </div>
                                    <div
                                        className={`${generalInstanceClassName}`}
                                    >
                                        <span className="font-[475]">
                                            {'"'}
                                            <InlineMath math="\land" />
                                            {'"'}
                                        </span>
                                        : phép toán {'"'}và{'"'} (AND)
                                    </div>
                                    <div
                                        className={`${generalInstanceClassName}`}
                                    >
                                        <span className="font-[475]">
                                            {'"'}
                                            <InlineMath math="\lor" />
                                            {'"'}
                                        </span>
                                        : phép toán {'"'}hoặc{'"'} (OR)
                                    </div>
                                    <div
                                        className={`${generalInstanceClassName}`}
                                    >
                                        <span className="font-[475]">
                                            {'"'}
                                            <InlineMath math="\rightarrow" />
                                            {'"'}
                                        </span>
                                        : phép toán {'"'}suy ra{'"'} (implies)
                                    </div>
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    <span className="font-[475]">
                                        Mệnh đề và câu hỏi:
                                    </span>
                                    <br />
                                    <div
                                        className={`${generalInstanceClassName}`}
                                    >
                                        Frege dùng hệ thống ký hiệu này để phân
                                        tích các mệnh đề, phân biệt giữa tính
                                        đúng sai của các mệnh đề và nghĩa của
                                        các mệnh đề (ý nghĩa hay sự kiện).
                                    </div>
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    <span className="font-[475]">
                                        Ý nghĩa của hàm và đối tượng:
                                    </span>
                                    <br />
                                    <div
                                        className={`${generalInstanceClassName}`}
                                    >
                                        Frege đưa ra định nghĩa về nghĩa của một
                                        hàm (hay mệnh đề), và ông giải thích
                                        rằng hàm có thể mang một giá trị (đúng
                                        hoặc sai) khi nó được áp dụng vào một
                                        đối tượng cụ thể.
                                    </div>
                                </div>
                            </ExtraInlineFact>
                            . Điều này cho phép ông phân tích mệnh đề một cách
                            chính xác và cấu trúc chúng thành các biểu thức có
                            thể thao tác với các phép toán.
                            <br /> <br />
                            Frege là người đầu tiên làm rõ sự khác biệt giữa ngữ
                            nghĩa và cú pháp của các mệnh đề trong logic. Công
                            trình của ông không chỉ ảnh hưởng đến các nhà toán
                            học như David Hilbert và Kurt Gödel, mà còn là cơ sở
                            cho sự phát triển của lý thuyết ngôn ngữ trong triết
                            học ngôn ngữ và lý thuyết logic hiện đại. Tuy nhiên,
                            trong suốt cuộc đời của mình, Frege không được công
                            nhận rộng rãi và phải đối mặt với nhiều thất bại cá
                            nhân. Một trong những thất bại lớn nhất của Frege là
                            khi ông phát hiện ra rằng hệ thống logic của mình
                            chứa đựng một mâu thuẫn nghiêm trọng, được nhà toán
                            học Bertrand Russell chỉ ra trong một lá thư vào năm
                            1902. Dù vậy, công trình của Frege sau này đã trở
                            thành nền tảng cho nhiều nhánh của logic hiện đại và
                            ảnh hưởng sâu sắc đến những nhà tư tưởng sau ông,
                            như Ludwig Wittgenstein và Kurt Gödel.
                        </div>
                        <ExtraLearnMore>
                            {'"'}Begriffsschrift{'"'} (1879) là một trong những
                            tác phẩm đột phá của Frege, trong đó ông giới thiệu
                            hệ thống ký hiệu logic. Đây là nền tảng của hệ thống
                            toán học được sử dụng trong lý thuyết tập hợp và lý
                            thuyết về các hàm toán học.
                            <br />
                            Trong tác phẩm này, Frege cũng phân tích các loại
                            mệnh đề phức tạp hơn và khái niệm của {'"'}lượng từ
                            {'"'}
                            (quantifiers), qua đó cho phép tạo ra các mệnh đề
                            trong một hệ thống hình thức logic học có thể được
                            kiểm tra và suy luận một cách chặt chẽ.
                        </ExtraLearnMore>
                    </div>
                </div>
                <div className="col-[1/-1] row-[1/2] h-fit mt-[10px]">
                    <div className="md:h-[75px] h-[51.5px]">
                        {timelineStar.TheKy20(1)}
                    </div>
                    <div className={`${generalClassName}`}>
                        <div className={`${generalHeaderClassName}`}>
                            Sự phát hiện mâu thuẫn trong hệ thống logic của
                            Frege
                        </div>
                        <div className={`${generalContentClassName}`}>
                            Một trong những thất bại lớn nhất của Gottlob Frege
                            là khi ông phát hiện ra một mâu thuẫn nghiêm trọng
                            trong hệ thống logic của mình, được nhà toán học{" "}
                            <ExtraInlineFact buttonContent="Bertrand Russell">
                                <HistoricalFigureInlineFact
                                    image={
                                        <Image src={BertrandRussell} alt="" />
                                    }
                                    historicalFigureName="Bertrand Russell"
                                >
                                    (1872-1970) là một triết gia, toán học gia,
                                    và nhà logic học người Anh, nổi tiếng với
                                    công trình trong triết học phân tích và lý
                                    thuyết logic. Ông là đồng sáng lập{" "}
                                    <span className="font-[475]">
                                        Trường phái
                                    </span>
                                    logic học phân tích và đóng góp quan trọng
                                    vào sự phát triển của{" "}
                                    <span className="font-[475]">
                                        logic toán học
                                    </span>
                                    . Russell cùng
                                    <span className="font-[475]">
                                        Alfred North Whitehead
                                    </span>{" "}
                                    viết tác phẩm{" "}
                                    <span className="font-[475]">
                                        Principia Mathematica
                                    </span>{" "}
                                    (1910-1913), một công trình nền tảng về
                                    logic và toán học. Ông cũng nổi tiếng với
                                    các quan điểm về triết học đạo đức, chính
                                    trị và xã hội. Russell giành giải Nobel Văn
                                    học năm 1950 vì những đóng góp vào tư tưởng
                                    triết học.
                                </HistoricalFigureInlineFact>
                            </ExtraInlineFact>{" "}
                            chỉ ra trong một lá thư vào năm 1902.
                            <br />
                            <br />
                            Mâu thuẫn này được gọi là {'"'}
                            <ExtraInlineFact buttonContent="nghịch lý của Russell">
                                Trong hệ thống logic của Frege, ông cho phép
                                định nghĩa một tập hợp R chứa tất cả các tập hợp
                                không phải là phần tử của chính nó. Tuy nhiên,
                                câu hỏi đặt ra là liệu tập hợp R có phải là phần
                                tử của chính nó hay không:
                                <div className={`${generalInstanceClassName}`}>
                                    Nếu <InlineMath math="\mathbb{R}" /> là phần
                                    tử của chính nó, thì theo định nghĩa, nó
                                    không phải là phần tử của chính nó.
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    Nếu <InlineMath math="\mathbb{R}" /> không
                                    phải là phần tử của chính nó, thì theo định
                                    nghĩa, nó phải là phần tử của chính nó.
                                </div>
                            </ExtraInlineFact>
                            {'"'}.
                            <br />
                            Mâu thuẫn này khiến Frege phải từ bỏ phần lớn công
                            trình của mình, bởi vì nó chỉ ra rằng lý thuyết về
                            tập hợp trong hệ thống logic của ông không thể đồng
                            nhất và nhất quán. Bertrand Russell đã phát hiện ra
                            nghịch lý này khi đang làm việc với Frege và gửi cho
                            ông một lá thư vào năm 1902, trong đó chỉ ra sự tồn
                            tại của nghịch lý. Điều này là một cú sốc lớn đối
                            với Frege và khiến ông nhận ra rằng lý thuyết của
                            mình bị sai lầm nghiêm trọng. Mặc dù Frege đã cố
                            gắng sửa chữa sai sót này, nhưng đây vẫn là một
                            trong những thất bại lớn nhất trong sự nghiệp của
                            ông.
                        </div>
                        <div className={`${generalHeaderClassName}`}>
                            Logic tính toán và thế kỷ 20
                        </div>
                        <div className={`${generalContentClassName}`}>
                            Trong thế kỷ 20, các lý thuyết mệnh đề trở thành
                            công cụ không thể thiếu trong các nghiên cứu về máy
                            tính và điện toán. Các nhà toán học và kỹ sư điện tử
                            đã ứng dụng lý thuyết mệnh đề vào các thiết kế mạch
                            điện tử, sau này hình thành nên các máy tính hiện
                            đại.
                            <br />
                            <br />
                            Alan Turing và John von Neumann là hai nhân vật nổi
                            bật trong việc ứng dụng lý thuyết mệnh đề vào phát
                            triển máy tính. Turing đã sử dụng lý thuyết mệnh đề
                            để mô tả các thuật toán tính toán (với máy Turing),
                            trong khi von Neumann phát triển lý thuyết về các
                            cổng logic và mạch điện tử, đóng góp vào việc xây
                            dựng máy tính điện tử.
                            <ExtraLearnMore extraBodyVariant="content">
                                {'"'}On Computable Numbers{'"'} của Turing
                                (1936) là một công trình quan trọng, trong đó
                                ông mô tả cách thức máy tính có thể thực hiện
                                các phép toán logic và mô phỏng các mệnh đề toán
                                học. John von Neumann đã phát triển lý thuyết về
                                mạch logic và máy tính điện tử, đồng thời xây
                                dựng các mô hình tính toán trong đó mệnh đề và
                                phép toán logic đóng vai trò then chốt.
                            </ExtraLearnMore>
                            Công trình của Turing và von Neumann mở đường cho sự
                            phát triển của ngành khoa học máy tính, đồng thời
                            hình thành các lý thuyết về thuật toán, lập trình và
                            phần cứng máy tính.
                        </div>
                    </div>
                    <div className="col-[1/-1] row-[1/2] h-fit mt-[10px]">
                        <div className="md:h-[75px] h-[51.5px]">
                            {timelineStar.NgayNay(0)}
                        </div>
                        <div className={`${generalClassName}`}>
                            <div className={`${generalHeaderClassName}`}>
                                Mệnh Đề Trong Lập Trình, Trí Tuệ Nhân Tạo và Lý
                                Thuyết Máy Tính
                            </div>
                            <div className={`${generalContentClassName}`}>
                                Ngày nay, mệnh đề không chỉ đóng vai trò trong
                                lý thuyết toán học mà còn được sử dụng rộng rãi
                                trong các lĩnh vực như trí tuệ nhân tạo (AI),
                                học máy (Machine Learning) và lập trình máy
                                tính. Các thuật toán học máy như mạng nơ-ron
                                nhân tạo sử dụng lý thuyết logic mệnh đề để xây
                                dựng các mô hình học tập.
                                <br />
                                <br />
                                Trong khi đó, trong lập trình, mệnh đề được sử
                                dụng để tạo các điều kiện và quyết định trong
                                các thuật toán. Trong AI, mệnh đề có thể giúp
                                xây dựng các hệ thống chuyên gia, trong đó các
                                câu hỏi và câu trả lời được xác định qua logic
                                mệnh đề. Các chương trình máy tính sử dụng mệnh
                                đề để kiểm tra các điều kiện, ví dụ như trong
                                các ngôn ngữ lập trình như Python, JavaScript,
                                C++, nơi các mệnh đề được áp dụng trong các câu
                                lệnh if, while và các vòng lặp logic. Mệnh đề
                                hiện nay vẫn là công cụ chủ yếu trong phát triển
                                các ứng dụng AI, đặc biệt trong xử lý ngôn ngữ
                                tự nhiên và phân tích dữ liệu. Các công nghệ
                                tiên tiến như chatbot, tự động hóa và các hệ
                                thống phân tích dữ liệu đều dựa vào logic mệnh
                                đề để thực hiện các quyết định thông minh.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
