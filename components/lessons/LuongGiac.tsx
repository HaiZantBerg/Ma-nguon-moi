import React from "react";
import "katex/dist/katex.min.css";
import {
    generalClassName,
    generalContentClassName,
    timelineStar,
    generalHeaderClassName,
} from "../static/lessonsStatic";
import Image from "next/image";
import luongGiacImage1 from "@/public/Image/luonggiacimage1.png";
import luongGiacImage2 from "@/public/Image/luonggiacimage2.png";
import ExtraInlineFact, {
    HistoricalFigureInlineFact,
} from "../Extra/ExtraInlineFact";
import ExtraQuiz from "../Extra/ExtraQuiz";
import Link from "next/link";
import ReactPlayer from "react-player";
import luongGiacRightAngle from "@/public/Image/luonggiacrightangle.png";
import luongGiacEratosthenes from "@/public/Image/luonggiaceratosthenes.png";
import luongGiacGieng from "@/public/Image/luonggiacgieng.png";
import xayDungThienVanHoc from "@/public/Image/xaydungthienvanhoc.png";
import banDoSaoAiCap from "@/public/Image/bandosaoaicap.png";
import Hipparchus from "@/public/Image/hipparchus.png";

export default function LuongGiac() {
    return (
        <>
            <div className="col-[1/-1] row-[1/2] h-fit mt-[10px]">
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar.ThoiCoDai}
                </div>
                <div className={`${generalClassName}`}>
                    Khi các con số đã được phát minh, toán học sớm phân thành
                    nhiều nhánh như số học, logic học hay đại số học. Các nhánh
                    rẽ này dần phát triển đến độ chín muồi và trở thành những bộ
                    môn độc lập. Trong đó, một bộ môn nhanh chóng rút khỏi cuộc
                    chơi và thu hút các nhà bác học thời cổ đại: môn hình học.
                    Chính bộ môn này sẽ tạo nên danh tiếng cho những ngôi sao
                    toán học đầu tiên như Thales, Pythagoras và Archimedes,
                    những cái tên cho đến ngày nay vẫn còn gây ám ảnh trong các
                    trang sách giáo khoa của chúng ta.
                    <div className={`${generalHeaderClassName}`}>Đo đạc</div>
                    <div className={`${generalContentClassName}`}>
                        Trước khi trở thành mối bận tâm của các nhà tư tưởng vĩ
                        đại, thực địa mới là nơi hình học được vinh danh. Từ
                        nguyên của nó cho thấy nó vốn là môn khoa học về đo đạc
                        đất đai, và những nhà trắc địa đầu tiên chính là những
                        nhà toán học địa phương. Những vấn đề liên quan đến việc
                        phân chia lãnh thổ trở thành một phạm trù kinh điển của
                        ngành này. Làm sao để chia một cánh đồng này thành những
                        phần bằng nhau? Làm sao để định giá mảnh đất dựa trên
                        diện tích của nó? Trong hai miếng đất kia miếng nào gần
                        sông hơn? Xây con kênh sắp tới theo tuyến nào thì mất ít
                        thời gian nhất? Tất cả những câu hỏi này đều hết sức
                        quan trọng trong các xã hội cổ đại, khi mà toàn bộ nền
                        kinh tế chủ yếu xoay quanh nông nghiệp và bỏi vậy, gắn
                        liền với việc phân bổ đất đai. Để trả lời những câu hỏi
                        đó, những kiến thức về hình học dần được hình thành,
                        được trau dồi và truyền từ đời này sang đời khác. Ai sở
                        hữu những kiến thức này, đương nhiên sẽ nắm giữ vai trò
                        trung tâm và thiết yếu trong xã hội. Đối với các chuyên
                        gia đo lường, dây thừng thường là công cụ hình học đầu
                        tiên. Tại Ai Cập, việc căng dây thừng đã là một nghề hẳn
                        hoi.
                        <div className="grid lgmi:grid-cols-2 grid-cols-1 lgmi:grid-rows-[300px_auto] grid-rows-[300px_auto_300px_auto] my-3">
                            <div className="lgmi:col-[1/2] row-[1/2] lgmi:row-[1/2] justify-self-center p-2">
                                <Image
                                    src={luongGiacImage1}
                                    alt=""
                                    className="h-full w-auto"
                                />
                            </div>
                            <div className="lgmi:col-[2/-1] row-[3/4] lgmi:row-[1/2] justify-self-center p-2">
                                <Image
                                    src={luongGiacImage2}
                                    alt=""
                                    className="h-full w-auto"
                                />
                            </div>
                            <div className="lgmi:col-[1/2] row-[2/3] lgmi:row-[2/-1] pt-2 text-center lgmi:px-1 px-5 lgmi:pb-0 pb-5 text-[rgba(0,0,0,0.75)]">
                                <span className="font-[475]">Groma</span> - Công
                                cụ khảo sát đất đai, được phát minh vào thế kỷ
                                thứ II - TK I TCN bởi Ai Cập, và phổ biến tại Hy
                                Lạp, La Mã
                            </div>
                            <div className="lgmi:col-[2/-1] row-[4/-1] lgmi:row-[2/-1] pt-2 text-center lgmi:px-1 px-5 text-[rgba(0,0,0,0.75)]">
                                Cách sử dụng groma trong khảo sát địa chính
                            </div>
                        </div>
                        Khi những cơn lũ từ sông Nile ập đến và gây nên các đợt
                        ngập úng thường kỳ, họ sẽ được gọi đến để tái xác định
                        ranh giới các mảnh đất ven sông. Dựa vào các thông tin
                        thu thập từ thực địa, họ đóng cọc, chăng sợi dây thừng
                        dài qua những thửa ruộng, rồi thực hiện các phép tính
                        giúp tìm lại viền đất đã bị dòng nước xóa sổ.
                        <br />
                        <br />
                        Khi xây một tòa nhà, họ cũng chính là những người đầu
                        tiên phải xắn tay để đo nền và đánh dấu chính xác vị trí
                        công trình dựa theo sơ đồ của kiến trúc sư. Và khi xây
                        dựng một ngôi đền hay một công trình tưởng niệm quan
                        trọng, đôi lúc các Pharaoh sẽ là người làm nghi thức
                        căng sợi dây đầu tiên. Cần phải nói rằng dây thừng là
                        một công cụ hình học đa năng. Các nhà trắc địa sử dụng
                        nó như một{" "}
                        <ExtraInlineFact buttonContent="cây thước">
                            Để làm thước thì rất đơn giản: căng sợi dây nối hai
                            điểm xác định, bạn sẽ có một đường thẳng. Và nếu
                            muốn có một cây thước chia đơn vị, bạn chỉ cần thắt
                            các nút cách đều nhau trên sợi dây. Để làm compa,
                            cũng chẳng phải trò ảo thuật gì. Chỉ đơn giản là giữ
                            một trong hai đầu đứng yên và quay đầu còn lại là ta
                            đã có một đường tròn. Nếu sợi dây của bạn đã được
                            chia đơn vị, bạn hoàn toàn còn có thể điều chỉnh độ
                            dài bán kính đường tròn.
                        </ExtraInlineFact>
                        , cũng là compa và kiêm luôn chức năng làm êke.
                        <ExtraQuiz
                            buttonContent="Bạn làm thế nào để vẽ được một góc vuông khi mà bạn chỉ có một sợi dây thừng?"
                            extraBodyVariant="content"
                        >
                            <div>
                                <div className="flex lg3:flex-row flex-col">
                                    <div>
                                        Có nhiều phương pháp khác nhau đúng
                                        không nào. Ví dụ, nếu bạn vẽ hai đường
                                        tròn giao nhau, thì đường thẳng nối hai
                                        tâm hai của hai đường tròn ấy sẽ vuông
                                        góc với đường thẳng nối hai giao điểm
                                        của hai đường tròn. Vậy là bạn có góc
                                        vuông.
                                        <br />
                                        <br />
                                        Về mặt lý thuyết, cách dựng này rất hoàn
                                        hảo, nhưng trên thực tế vấn đề lại phức
                                        tạp hơn nhiều. Hãy tưởng tượng rằng trên
                                        mỗi cánh đồng, các nhà trắc địa phải vẽ
                                        chính xác hai đường tròn lớn mỗi khi họ
                                        cần một góc vuông, hoặc đơn giản hơn là
                                        chỉ để kiểm tra xem một góc đã được dựng
                                        sẵn có thật sự vuông hay không. Phương
                                        pháp này chẳng tiện lợi chút nào, cũng
                                        chẳng có mấy hiệu quả.
                                        <br />
                                        <br />
                                        Đây là hình ảnh cách tạo ra góc vuông.
                                        Bạn đọc có thể tự mình thử nghiệm bằng
                                        cách vào đường link sau nhé{" "}
                                        <Link
                                            target="_blank"
                                            href="https://www.geogebra.org/calculator/subgghfq"
                                            className="underline font-[475]"
                                        >
                                            geogebra.org
                                        </Link>
                                    </div>
                                    <div className="lg3:flex-[1_0_30%] flex-none lg3:w-auto md:w-[50%] w-[70%] flex items-end">
                                        <Image
                                            src={luongGiacRightAngle}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <br />
                                Một cách khác khéo léo và thực tế hơn, đã được
                                các nhà trắc địa thông qua: dùng luôn sợi dây
                                thừng để tạo nên một hình tam giác có một góc
                                vuông. Loại tam giác này được gọi là tam giác
                                vuông. Và nổi tiếng nhất trong các loại tam giác
                                vuông, chính là loại 3-4-5! Nếu bạn lấy một sợi
                                dây thừng chia thành mười hai đoạn bằng nhau với
                                mười ba nút, bạn sẽ dựng được một hình tam giác
                                có các cạnh lần lượt dài ba, bốn và năm đoạn. Và
                                kỳ diệu thay, góc tạo thành bởi các cạnh 3 và 4
                                chính xác là một góc vuông.
                                <div className="aspect-video max-w-[700px] mt-2">
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=T5HtvQUj9WA&t=106s"
                                        width="100%"
                                        height="100%"
                                    />
                                </div>
                            </div>
                        </ExtraQuiz>
                        Trong số các ngành nghề liên quan đến hình học, cũng
                        phải tính cả nghề{" "}
                        <ExtraInlineFact buttonContent="trắc địa bộ hành">
                            Vào thế kỉ 4 trước Công nguyên, Alexandros Đại Đế đã
                            mang theo vài viên trắc địa bộ hành trong chiến dịch
                            châu Á, một chiến dịch đã dẫn ông đến tận biên giới
                            của Ấn Độ ngày nay. Những cuộc viễn chinh dài cả
                            nghìn kilômét này đã được đo đạc bởi chính những nhà
                            hình học bộ hành ấy.
                            <br />
                            <br />
                            Cùng lên cao hơn và dành vài phút hình dung cảnh
                            tượng kỳ lạ trong đó những con người với những bước
                            chân nhịp nhàng đi qua những vùng đất rộng lớn ở
                            Trung Đông. Nhìn họ đi khắp các cao nguyên vùng
                            Thượng Lưỡng Hà, đi dọc khung cảnh cằn cỗi và vàng
                            vọt men theo bán đảo Peninsula để đến với những
                            nhánh sông phì nhiêu của thung lũng sông Nile, rồi
                            quay trở lại thách thức vùng núi non trùng điệp của
                            Đế chế Ba Tư và những vùng sa mạc của Afghanistan
                            ngày nay. Bạn có nhìn thấy họ không, điềm tĩnh bước
                            đi không ngừng nghỉ theo một nhịp điệu nhanh và đều,
                            qua những ngọn núi khổng lồ của rặng Hindu Kush để
                            quay lại bên bờ Ấn Độ Dương? Cứ thế, họ miệt mài đếm
                            bước chân mình.
                            <br />
                            <br />
                            Hình ảnh này dễ khiến người ta cảm động và sự thái
                            quá trong công việc của họ có vẻ phi lý. Ấy vậy mà
                            họ đã đem lại những kết quả có tính chính xác đáng
                            khâm phục: khoảng cách họ đo được chênh lệch chưa
                            đến 10% so với khoảng cách thực mà chúng ta được
                            biết ngày nay! Các chuyên gia trắc địa bộ hành của
                            Alexandros đã mô tả địa lý của vương quốc mình khi
                            trước đó chưa từng có ai làm được với một vùng đất
                            rộng đến thế.
                            <br />
                            <br />
                            Hai thế kỷ sau, ở Ai Cập, một nhà bác học gốc Hy Lạp
                            mang tên Eratosthenes đã nghĩ ra một dự án tầm cỡ
                            còn lớn hơn. Ông ta muốn đo chu vi của... cả Trái
                            đất! Chỉ vậy thôi! Tất nhiên, không ai lại cử những
                            nhà trắc địa bộ hành đi vòng quanh Trái đất. Tuy
                            nhiên, dựa trên những quan sát tinh tế về sự khác
                            biệt giữa độ nghiêng của tia nắng Mặt trời ở thành
                            phố Syene, tức là Aswan bây giờ, và ở thành phố
                            Alexandria, Eratosthenes đã tính toán được rằng dự
                            tính khoảng cách giữa hai thành phố này bằng một
                            phần năm mươi tổng chu vi Trái đất. Đương nhiên là
                            sau đó ông ta lại nhờ cậy đến các nhà trắc địa bộ
                            hành tới để làm công việc đo đạc.
                            <div className="grid lgmi:grid-cols-2 grid-cols-1 lgmi:grid-rows-[300px_auto] grid-rows-[300px_300px_auto] my-3">
                                <div className="lgmi:col-[1/2] row-[1/2] lgmi:row-[1/2] justify-self-center p-2">
                                    <Image
                                        src={luongGiacEratosthenes}
                                        alt=""
                                        className="h-full w-auto"
                                    />
                                </div>
                                <div className="lgmi:col-[2/-1] row-[2/3] lgmi:row-[1/2] justify-self-center p-2">
                                    <Image
                                        src={luongGiacGieng}
                                        alt=""
                                        className="h-full w-auto"
                                    />
                                </div>
                                <div className="lgmi:col-[1/-1] row-[3/-1] lgmi:row-[2/-1] pt-2 text-center lgmi:px-1 px-5 lgmi:pb-0 pb-5">
                                    Giếng đặc biệt ở Syene, được Eratosthenes
                                    lấy để tính toán chu vi của trái đất.
                                </div>
                            </div>
                            Không giống như những người đồng nghiệp Hy Lạp, các
                            nhà trắc địa Ai Cập không trực tiếp đếm bước chân
                            của mình, mà đếm bước chân của con lạc đà họ cưỡi.
                            Loài động vật này nổi danh với bước chân đều đặn.
                            Sau hành trình dài dọc theo bờ sông Nile, phán quyết
                            được đưa ra: Hai thành phố cách nhau 5000 xtađion
                            (stadium) và chu vi Trái đất thì vào khoảng 250000
                            xtađion, tức 39375 kilômét. Một lần nữa, kết quả gần
                            đúng đến kinh ngạc khi mà hiện nay chúng ta biết
                            rằng con số chính xác của chu vi Trái đất là 40008
                            kilômét. Chênh lệch còn chưa đến 2%!
                        </ExtraInlineFact>
                        (bématistes). Nếu các nhà trắc địa bình thường hay các
                        thợ căng dây có nghĩa vụ đo đ`ạc các thửa ruộng và công
                        trình thì các nhà trắc địa bộ hành phải chịu trách nhiệm
                        cho những thứ lớn hơn rất nhiều! Ở Hy Lạp, những người
                        này có nhiệm vụ tính các khoảng cách lớn dựa theo số
                        bước chân của mình. Đôi khi, có những nhiệm vụ buộc họ
                        phải đi rất xa.
                    </div>
                </div>
            </div>
            <div className="col-[1/-1] row-[2/3] h-fit mt-[10px]">
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar.Khoang2000TCN}
                </div>
                <div className={`${generalClassName}`}>
                    <div className={`${generalHeaderClassName}`}>
                        Xây dựng thiên văn học
                    </div>
                    Từ buổi hồng hoang của lịch sử, con người đã ngắm nhìn và
                    suy ngẫm về bầu trời sao huyền bí, quyến rũ trên đầu. Người
                    xưa quan sát chuyển động lặp đi lặp lại của Mặt Trời và Mặt
                    Trăng trên bầu trời đêm để nhận biết các thời điểm chuyển
                    mùa.
                    <br />
                    Những hiện tượng thiên văn bí ẩn còn được coi là điềm báo
                    cho những gì sẽ xảy ra trong cuộc sống cũng như củng cố tín
                    ngưỡng của con người. Khi việc trồng trọt và chăn nuôi xuất
                    hiện thì quan sát thiên văn trở nên rất quan trọng. Nông
                    dân, mục đồng, thợ săn và giới tăng lữ quan sát thiên văn để
                    biết được thời vụ đánh bắt, sản xuất. Thời gian trôi đi, dần
                    dần con người nhận ra rằng Mặt Trời, Mặt Trăng và những vì
                    sao di chuyển theo một đường nhất định trên trời còn những
                    hành tinh lại không như vậy.
                    <div className="my-4">
                        <Image src={xayDungThienVanHoc} alt="" />
                    </div>
                    <div className={`${generalHeaderClassName}`}>
                        Ai Cập và Babylon
                    </div>
                    <div className={`${generalContentClassName}`}>
                        Cả người Ai Cập và người Babylon đã phát triển các
                        phương pháp để tính toán các độ dài và góc trong các tam
                        giác, mặc dù họ chưa phát triển đầy đủ lý thuyết lượng
                        giác như ngày nay. Người Babylon đã sử dụng bảng số học
                        để tính toán các phép tính về góc và chu vi của các hình
                        tròn.
                        <div className="mt-4 flex flex-col w-fit items-center gap-4">
                            <Image src={banDoSaoAiCap} alt="" />
                            Một bản đồ sao được người Ai Cập sử dụng khoảng thế
                            kỷ XV TCN
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-[1/-1] row-[3/4] h-fit mt-[10px]">
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar.Khoang300TCN}
                </div>
                <div className={`${generalClassName}`}>
                    <div className={`${generalHeaderClassName}`}>
                        Hy Lạp cổ đại
                    </div>
                    <div className={`${generalContentClassName}`}>
                        Các nhà toán học Hy Lạp, như{" "}
                        <ExtraInlineFact buttonContent="Hipparchus">
                            <HistoricalFigureInlineFact
                                image={<Image src={Hipparchus} alt="" />}
                                historicalFigureName="Hipparchus"
                            >
                                (khoảng 190 TCN - 120 TCN) là một nhà thiên văn
                                học và toán học nổi tiếng người Hy Lạp, được coi
                                là người sáng lập lý thuyết lượng giác. Ông nổi
                                bật với các đóng góp trong thiên văn học và toán
                                học, đặc biệt là trong việc nghiên cứu chuyển
                                động của các thiên thể.
                            </HistoricalFigureInlineFact>
                        </ExtraInlineFact>{" "}
                        và{" "}
                        <ExtraInlineFact buttonContent="Ptolemy">
                            <span className="font-[475]">Ptolemy</span> (khoảng
                            100 - 170 CN) tiếp tục công trình của Hipparchus và
                            viết cuốn sách nổi tiếng "
                            <Link
                                href="https://archive.org/details/in.ernet.dli.2015.547436/page/n57/mode/2up"
                                target="_blank"
                                className="underline font-[475]"
                            >
                                Almagest
                            </Link>
                            ", trong đó có các bảng lượng giác để tính toán các
                            khoảng cách và góc trong thiên văn học.
                        </ExtraInlineFact>{" "}
                        , đã có đóng góp quan trọng trong việc phát triển lý
                        thuyết lượng giác. Hipparchus (khoảng 190 TCN) được coi
                        là người sáng lập ra lượng giác học, ông đã tạo ra bảng
                        giá trị cho các hàm lượng giác cơ bản như sine (sin) và
                        cosine (cos). Hipparchus cũng đã nghiên cứu về các quan
                        hệ góc trong các tam giác vuông và tam giác tròn. Vậy
                        quy ước về góc từ đâu mà có, bạn đọc có thể tìm hiểu
                        thêm ở phần câu chuyện lịch sử.
                    </div>
                </div>
            </div>
        </>
    );
}
