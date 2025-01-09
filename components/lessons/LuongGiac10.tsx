import React from "react";
import "katex/dist/katex.min.css";
import {
    generalClassName,
    generalContentClassName,
    timelineStar,
    generalHeaderClassName,
    generalInstanceClassName,
} from "../static/lessonsStatic";
import Image from "next/image";
import luongGiacImage1 from "@/public/Image/luonggiacimage1.png";
import luongGiacImage2 from "@/public/Image/luonggiacimage2.png";
import ExtraInlineFact from "../Extra/ExtraInlineFact";
import ExtraQuiz from "../Extra/ExtraQuiz";
import Link from "next/link";
import ReactPlayer from "react-player";
import luongGiacRightAngle from "@/public/Image/luonggiacrightangle.png";
import luongGiacEratosthenes from "@/public/Image/luonggiaceratosthenes.png";
import luongGiacGieng from "@/public/Image/luonggiacgieng.png";
import xayDungThienVanHoc from "@/public/Image/xaydungthienvanhoc.png";
import banDoSaoAiCap from "@/public/Image/bandosaoaicap.png";
import Hipparchus from "@/public/Image/hipparchus.png";
import Ptolemy from "@/public/Image/ptolemy.png";
import Aryabhata from "@/public/Image/aryabhata.png";
import Brahmagupta from "@/public/Image/brahmagupta.png";
import BhaskaraI from "@/public/Image/bhaskarai.png";
import AlKhwarizmi from "@/public/Image/alkhawarizmi.png";
import AlBattani from "@/public/Image/albattani.png";
import ExtraFunFact from "../Extra/ExtraFunFact";
import LeonhardEuler from "@/public/Image/leonhardeuler.png";
import ExtraAloneFact from "../Extra/ExtraAloneFact";
import calcParamterOfEarth from "@/public/Image/calcparameterofearth.png";
import measureMountainHeight from "@/public/Image/measuremountainheight.png";
import measureParameterOfEarth from "@/public/Image/measureparameterofearth.png";
import Dioptra from "@/public/Image/dioptra.png";
import howAncientGreekUseDioptra from "@/public/Image/howancientgreekusedioptra.png";
import howToUseDioptra from "@/public/Image/howtousedioptra.png";
import aPartOfAristarchussBook from "@/public/Image/apartofaristarchussbook.png";
import { BlockMath, InlineMath } from "react-katex";
import HistoricalFigure from "../Extra/HistoricalFigure";
import sTamGiac from "@/public/Image/stamgiac.png";

export default function LuongGiac() {
    return (
        <>
            <div className="h-fit mt-[10px]">
                {timelineStar.ThoiCoDai()}
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
                    <div className={`${generalHeaderClassName} mt-2`}>
                        Đo đạc
                    </div>
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
                                <div className="lgmi: lgmi:row-[2/-1] pt-2 text-center lgmi:px-1 px-5 lgmi:pb-0 pb-5 text-[rgba(255,255,255,0.75)]">
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
                        </ExtraInlineFact>{" "}
                        (bématistes). Nếu các nhà trắc địa bình thường hay các
                        thợ căng dây có nghĩa vụ đo đạc các thửa ruộng và công
                        trình thì các nhà trắc địa bộ hành phải chịu trách nhiệm
                        cho những thứ lớn hơn rất nhiều! Ở Hy Lạp, những người
                        này có nhiệm vụ tính các khoảng cách lớn dựa theo số
                        bước chân của mình. Đôi khi, có những nhiệm vụ buộc họ
                        phải đi rất xa.
                    </div>
                    <ExtraAloneFact buttonContent="Theo bước chân Eratosthenes đi tìm chu vi  của trái đất">
                        Ở Ai Cập cổ đại, thành phố Syene nằm dọc theo sông Nile.
                        Syene nổi tiếng với một cái giếng đặc biệt, có một
                        khoảng khắc mỗi năm, khi ánh sáng mặt trời chạm đến đáy
                        giếng vào buổi trưa ngày 21 tháng 6 (Bạn biết ngày này
                        là ngày gì không? Là ngày hạ chí, nay được thống nhất
                        lại là ngày 22 tháng 6. Nhưng ngày xưa thì ngày hạ chí
                        là ngày 21 tháng 6 đấy). Vào thời điểm chính xác đó, đáy
                        giếng được chiếu sáng hoàn toàn, mà thành giếng không
                        được chiếu sáng, có nghĩa là Mặt trời đang đứng thẳng
                        đứng trên giếng. Eratosthenes nhận ra rằng, vào giữa
                        buổi trưa của ngày đó, đài tưởng niệm Alexandria vẫn đổ
                        bóng xuống mặt đất, có nghĩa là Mặt trời không ở ngay
                        trên nó. Ông đã suy luận rằng điều này là do độ cong của
                        Trái đất, và nhận ra rằng nó có thể được sử dụng để tính
                        chu vi của Trái đất.
                        <br />
                        <br />
                        Từ những nhận định trên của ông, ông kết luận rằng Syene
                        nằm trên chí tuyến Bắc của Trái Đất. Đồng thời, với các
                        phép đo ngày đó, Eratosthenes xác định rằng Alexandria
                        và Syene nằm trên cùng một kinh tuyến, còn khoảng cách
                        giữa hai địa danh này là khoảng 5.000 stadia.
                        <br />
                        <br />
                        Trước khi tiếp tục, cần chú thích rằng một stadia là một
                        đơn vị đo độ dài thời cổ, tương ứng với độ dài của một
                        sân vận động. Điều đáng nói là kích thước các sân vận
                        động thời đó không như nhau mà có sự sai khác nhất định.
                        Tuy nhiên, đa số các nguồn cho rằng Eratosthenes đã lấy
                        stadia theo độ dài của một sân Olympic thời đó, có độ
                        dài 176 mét.
                        <br />
                        <br />
                        Từ những gì đã biết như trên, Eratosthenes làm phép đo
                        bằng cách cắm một chiếc gậy thẳng đứng ở Alexandria vào
                        ngày hạ chí. Vì Mặt Trời không chiếu vuông góc xuống
                        Alexandria nên vào giữa trưa ngày hạ chí, cây gậy vẫn đổ
                        bóng xuống mặt đất. Đo độ dài của bóng gậy và so với độ
                        dài thực tế của gậy, ông xác định được rằng góc tạo bởi
                        chiếc gậy và ánh Mặt Trời là hơn 7 độ một chút (hình
                        minh họa).
                        <div className="my-3 flex justify-center">
                            <Image src={calcParamterOfEarth} alt="" />
                        </div>
                        Phép đo để tính ra góc lệch của tia sáng Mặt Trời theo
                        cách của Eratosthenes. Từ việc xác định được cung 7 độ
                        tương ứng với 5000 stadia, Eratosthenes tính ra gần đúng
                        chu vi của Trái Đất. Bạn có thể thấy rằng kết quả tính
                        này chênh lệch so với thực tế ngày nay được xác nhận
                        khoảng 10%. Sự sai khác này là không tránh khỏi vì trên
                        thực tế thì:
                        <div className={`${generalInstanceClassName}`}>
                            - Khoảng cách giữa Syene và Alexandria đã không được
                            đo thật chính xác với phương pháp thời đó.
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            - Syene không nằm chính xác trên chí tuyến Bắc mà
                            lệch khoảng 55 km về phía Bắc.
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            - Syene và Alexandria không nằm cùng kinh tuyến mà
                            lệch nhau khoảng 3 độ.
                        </div>
                        Mặc dù vậy, với những sai số nhỏ đó, kết quả tính của
                        Eratosthenes đã là một thành tựu đáng chú ý đối với
                        thiên văn học thời đó, và nó là minh chứng cho giá trị
                        của sự sáng tạo, kết hợp một cách chính xác công cụ toán
                        học đơn giản với những quan sát trực tiếp. (Theo{" "}
                        <Link
                            href="https://thienvanvietnam.org/index.php?option=com_content&view=article&id=1589:do-chu-vi-trai-dat-cach-day-hon-2000-nam&catid=28&Itemid=144"
                            target="_blank"
                            className="font-[475] underline"
                        >
                            thienvanvietnam.org
                        </Link>
                        )
                        <br />
                        <br />
                        Bạn có thể xem video sau để hiểu rõ hơn cách tính thời
                        bấy giờ.
                        <div className="max-w-[700px] aspect-video mt-4">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=313icHT2XF8"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </ExtraAloneFact>
                    <ExtraAloneFact buttonContent="Al-Biruni - Đường chân trời và bán kính của Trái đất">
                        Bạn có biết cách nào để tính bán kính Trái đất không? Có
                        nhiều cách, và bây giờ con người đã tìm được càng ngày
                        càng chính xác con số này hơn. Và dĩ nhiên cách đầu
                        tiên, đơn giản nhất đó là ta lấy đáp án ở câu chuyện 1 ở
                        trên (liên kết đến câu hỏi trên) và sử dụng công thức
                        tính chu vi của hình tròn để tìm bán kính. Vậy bạn biết
                        thêm cách nào nữa không? Hãy cùng thử làm với đề toán
                        sau:
                        <br />
                        <br />
                        <div className="flex gap-2 xxlg:flex-col md:flex-row flex-col">
                            <div>
                                a{")"} Tính chiều cao h của một ngọn núi. Biết
                                tại vị trí A nhìn đỉnh núi dưới một góc{" "}
                                <InlineMath math="\alpha" />, tại vị trí B cách
                                A khoảng cách l, nhìn đỉnh núi dưới một góc{" "}
                                <InlineMath math="\beta" />.
                            </div>
                            <div className="min-w-[250px] max-w-[300px] my-2">
                                <Image
                                    src={measureMountainHeight}
                                    alt=""
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                        <div className="flex gap-2 xxlg:flex-col md:flex-row flex-col">
                            <div>
                                b{")"} Bây giờ ta vào câu hỏi chính nào. Để tính
                                bán kính của trái đất, ta cần một ngọn núi thể
                                nhìn thấy đường chân trời. Người đứng quan sát
                                tại đỉnh núi, đo được góc tạo bởi đường song
                                song với phương nằm ngang và đường thẳng nối với
                                đường chân trời có số đo là{" "}
                                <InlineMath math="\varphi" />. Tính bán kính của
                                trái đất.
                            </div>
                            <div className="min-w-[250px] max-w-[300px] my-2">
                                <Image
                                    src={measureParameterOfEarth}
                                    alt=""
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                        Đáp án:
                        <br />a{")"} Áp dụng định lý sin trong tam giác ta được{" "}
                        <InlineMath math="h = \dfrac{l \times \sin \alpha \times \sin \beta}{\sin (\alpha - \beta)}" />
                        .
                        <br />
                        <br />b{")"} Từ hình bên ta được{" "}
                        <InlineMath math="\dfrac{R}{R + h} = \cos \varphi" />,
                        từ đó ta tính được R.
                        <br />
                        <br />
                        <span className="font-[475]">Thông tin thêm</span>:
                        <br />
                        Những nỗ lực đầu tiên để đo lường bán kính Trái Đất bắt
                        đầu từ thời kỳ cổ đại với các nhà khoa học Hy Lạp như
                        Eratosthenes (276-194 TCN) và Ptolemy (100-170 SCN). Đến
                        thời kỳ trung cổ, các nhà khoa học Hồi giáo đã tiếp tục
                        nghiên cứu và cải tiến các phương pháp đo lường bán kính
                        Trái Đất. Như Al-Biruni (973-1048) và Al-Ma
                        {"'"}mun (786-833). Ở đây, chúng tôi xin đề cập đến cách
                        tính của Al-Biruni. Ông đã phát triển một phương pháp
                        mới sử dụng độ cao của các ngọn núi và góc nhìn từ chúng
                        để tính toán bán kính Trái Đất như cách giải ở trên.
                        <div className="max-w-[700px] aspect-video my-4">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=uRBvT5QcO8A&t=297s"
                                width="100%"
                                height="100%"
                            />
                        </div>{" "}
                        Vậy bạn có biết cách tìm vẽ đường thẳng nối với đường
                        chân trời tìm bằng cách nào? Các bạn có thể tìm hiểu
                        thêm một chút về đường chân trời và phương pháp chứng
                        minh trái đất không thể là mặt phẳng trong video
                        <div className="max-w-[700px] aspect-video my-4">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=tejB8pFOYD8"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </ExtraAloneFact>
                </div>
            </div>
            <div className="h-fit mt-[10px]">
                {timelineStar.Khoang(10239, "2000 nam tcn")}
                <div className={`${generalClassName}`}>
                    <div className={`${generalHeaderClassName}`}>
                        Xây dựng thiên văn học
                    </div>
                    <div className={`${generalContentClassName}`}>
                        Từ buổi hồng hoang của lịch sử, con người đã ngắm nhìn
                        và suy ngẫm về bầu trời sao huyền bí, quyến rũ trên đầu.
                        Người xưa quan sát chuyển động lặp đi lặp lại của Mặt
                        Trời và Mặt Trăng trên bầu trời đêm để nhận biết các
                        thời điểm chuyển mùa.
                        <br />
                        Những hiện tượng thiên văn bí ẩn còn được coi là điềm
                        báo cho những gì sẽ xảy ra trong cuộc sống cũng như củng
                        cố tín ngưỡng của con người. Khi việc trồng trọt và chăn
                        nuôi xuất hiện thì quan sát thiên văn trở nên rất quan
                        trọng. Nông dân, mục đồng, thợ săn và giới tăng lữ quan
                        sát thiên văn để biết được thời vụ đánh bắt, sản xuất.
                        Thời gian trôi đi, dần dần con người nhận ra rằng Mặt
                        Trời, Mặt Trăng và những vì sao di chuyển theo một đường
                        nhất định trên trời còn những hành tinh lại không như
                        vậy.
                    </div>
                    <div className="my-4 flex md:justify-normal justify-center">
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
                        <div className="mt-4 flex flex-col md1:w-fit w-full items-center gap-4">
                            <Image src={banDoSaoAiCap} alt="" />
                            <div className="text-[rgba(0,0,0,0.75)]">
                                Một bản đồ sao được người Ai Cập sử dụng khoảng
                                thế kỷ XV TCN
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-fit mt-[10px]">
                {timelineStar.Khoang(90192, "300 nam tcn")}
                <div className={`${generalClassName}`}>
                    <div className={`${generalHeaderClassName}`}>
                        Hy Lạp cổ đại
                    </div>
                    <div className={`${generalContentClassName}`}>
                        Các nhà toán học Hy Lạp, như{" "}
                        <ExtraInlineFact buttonContent="Hipparchus">
                            <HistoricalFigure
                                image={<Image src={Hipparchus} alt="" />}
                                historicalFigureName="Hipparchus"
                            >
                                (khoảng 190 TCN - 120 TCN) là một nhà thiên văn
                                học và toán học nổi tiếng người Hy Lạp, được coi
                                là người sáng lập lý thuyết lượng giác. Ông nổi
                                bật với các đóng góp trong thiên văn học và toán
                                học, đặc biệt là trong việc nghiên cứu chuyển
                                động của các thiên thể.
                            </HistoricalFigure>
                        </ExtraInlineFact>{" "}
                        và{" "}
                        <ExtraInlineFact buttonContent="Ptolemy">
                            <HistoricalFigure
                                image={<Image src={Ptolemy} alt="" />}
                                historicalFigureName="Ptolemy"
                            >
                                (khoảng 100 - 170 CN) tiếp tục công trình của
                                Hipparchus và viết cuốn sách nổi tiếng {'"'}
                                <Link
                                    href="https://archive.org/details/in.ernet.dli.2015.547436/page/n57/mode/2up"
                                    target="_blank"
                                    className="underline font-[475]"
                                >
                                    Almagest
                                </Link>
                                {'"'}, trong đó có các bảng lượng giác để tính
                                toán các khoảng cách và góc trong thiên văn học.
                            </HistoricalFigure>
                        </ExtraInlineFact>{" "}
                        , đã có đóng góp quan trọng trong việc phát triển lý
                        thuyết lượng giác. Hipparchus (khoảng 190 TCN) được coi
                        là người sáng lập ra lượng giác học, ông đã tạo ra bảng
                        giá trị cho các hàm lượng giác cơ bản như sine (sin) và
                        cosine (cos). Hipparchus cũng đã nghiên cứu về các quan
                        hệ góc trong các tam giác vuông và tam giác tròn.
                        <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-[repeat(3,auto)] md:mt-2 mt-5 grid-rows-[repeat(5,auto)] text-[rgba(0,0,0,0.75)] justify-items-center text-center">
                            <div className="md:col-[1/2] md:row-[1/2] px-10">
                                <div className="md:min-w-[200px] min-w-[125px] md:max-w-[250px] max-w-[200px] self-center">
                                    <Image
                                        src={Dioptra}
                                        alt=""
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                            <div className="md:col-[1/2] md:row-[2/3] m-2">
                                <span className="font-[475]">Dioptra</span> -
                                công cụ dùng để quan sát thiên văn và đo đạc địa
                                chất, được phát minh bởi Héron thành Alexandria
                                (Hy Lạp) vào thế kỷ III TCN
                            </div>
                            <div className="min-h-[100px] md:col-[2/-1] md:row-[1/2] self-center flex md:items-center items-end md:px-2 md:mt-0 mt-5">
                                <div className="min-w-[200px] max-w-[400px]">
                                    <Image
                                        src={howToUseDioptra}
                                        alt=""
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                            <div className="md:col-[2/-1] md:row-[2/3] m-2">
                                Cách sử dụng Dioptra để đo góc khi quan sát
                                thiên văn
                            </div>
                            <div className="md:col-[1/-1] md:row-[3/4] flex flex-col justify-center items-center gap-2 md:mt-0 mt-5 md:px-40">
                                <div className="min-w-[300px] max-w-[400px]">
                                    <Image
                                        src={howAncientGreekUseDioptra}
                                        alt=""
                                        className="w-full h-auto"
                                    />
                                </div>
                                <ExtraInlineFact
                                    buttonContent="Đo đạc của người Hy Lạp cổ"
                                    extraBodyClassName="text-start"
                                >
                                    Vậy người Hy Lạp cổ đã dùng cách đo thiên
                                    văn nào để tính ra được khoảng cách từ trái
                                    đất đến các ngôi sao? Hãy cùng xem video để
                                    rõ hơn về cách tính nhé.
                                    <div className="aspect-video max-w-[700px] my-3">
                                        <ReactPlayer
                                            url="https://www.youtube.com/watch?v=A82WzFtmLvI"
                                            width="100%"
                                            height="100%"
                                        />
                                    </div>
                                    Sau khi xem xong video, bạn có phát hiện ra
                                    làm sao để tìm được khoảng cách của vì sao
                                    đến đường kính của quỹ đạo trái đất không?
                                    Hãy dùng định lí sin trong tam giác cân nhé.
                                    Không thì đơn giản hơn, hãy dùng công thức
                                    lượng giác trong tam giác vuông. Quá đơn
                                    giản đúng không nào.
                                    <br />
                                    <br />
                                    Hoặc bạn có thể xem thêm video để càng hiểu
                                    sâu hơn về cách tính khoảng cách này.
                                    <div className="aspect-video max-w-[700px] my-3">
                                        <ReactPlayer
                                            url="https://www.youtube.com/watch?v=QTbuOhn7-Qk"
                                            width="100%"
                                            height="100%"
                                        />
                                    </div>
                                </ExtraInlineFact>
                            </div>
                        </div>
                    </div>
                    <ExtraAloneFact buttonContent="Aristarchus và Những Ước Tính Kinh Ngạc Về Vũ Trụ">
                        <div className="flex xxlg:flex-col md:flex-row flex-col gap-2 md:items-start items-center">
                            Một trong những cuốn sách của Aristarchus còn tồn
                            tại viết về kích thước và khoảng cách của Mặt trời
                            và Mặt trăng. Trong chuyên luận đáng chú ý này,
                            Aristarchus đã thực hiện những nỗ lực sớm nhất để
                            tính toán kích thước và khoảng cách tương đối giữa
                            Mặt trời và Mặt trăng.
                            <div className="xxlg:min-w-[500px] md:min-w-[300px] max-w-[300px] w-full">
                                <Image
                                    src={aPartOfAristarchussBook}
                                    alt=""
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                        <br />
                        Từ lâu người ta đã quan sát thấy Mặt trời và Mặt trăng
                        dường như có cùng kích thước trên bầu trời, và Mặt trời
                        ở xa hơn rất nhiều. Họ đã nhận ra điều này từ nhật thực,
                        xuất hiện do Mặt trăng đi qua phía trước Mặt trời ở một
                        khoảng cách nhất định so với Trái đất. Aristachus đã sử
                        dụng tam giác Pythagoras (Pytago) để ước tính rằng
                        khoảng cách từ Trái Đất đến Mặt trời gấp 18 đến 20 lần
                        khoảng cách đến Mặt trăng. Ông cũng ước tính rằng kích
                        thước của Mặt trăng xấp xỉ một phần ba Trái Đất, dựa
                        trên việc căn thời gian nguyệt thực cẩn thận. Và mặc dù
                        ước tính của ông về khoảng cách tới Mặt trời quá nhỏ (tỷ
                        lệ thực tế là 390) do thiếu kính thiên văn chính xác vào
                        thời điểm đó, tính toán của ông về tỷ lệ kích thước của
                        Trái đất với Mặt trăng lại chính xác đến ngạc nhiên
                        (đường kính Mặt trăng bằng 0,27 lần đường kính Trái
                        Đất).
                        <br />
                        <br />
                        Hãy cùng tìm hiểu thông qua video nhé
                        <div className="aspect-video max-w-[700px] my-3">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=RK6xaey6J00"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </ExtraAloneFact>
                </div>
            </div>
            <div className="h-fit mt-[10px]">
                {timelineStar.TheKy(10357, "5 - 7")}
                <div className={`${generalClassName}`}>
                    <div className={`${generalHeaderClassName}`}>Ấn Độ</div>
                    <div className={`${generalContentClassName}`}>
                        Lượng giác được phát triển mạnh mẽ ở Ấn Độ, đặc biệt là
                        trong các công trình của các nhà toán học như{" "}
                        <ExtraInlineFact buttonContent="Aryabhata">
                            <HistoricalFigure
                                image={<Image src={Aryabhata} alt="" />}
                                historicalFigureName="Aryabhata"
                            >
                                (khoảng 476 - 550 CN) là một nhà toán học và
                                thiên văn học vĩ đại người Ấn Độ, được biết đến
                                là một trong những học giả nổi bật nhất trong
                                lịch sử khoa học Ấn Độ cổ đại. Ông là tác giả
                                của cuốn {'"'}Aryabhatiya{'"'}, một tác phẩm nổi
                                tiếng trong toán học và thiên văn học, chứa đựng
                                nhiều khái niệm quan trọng vẫn có ảnh hưởng lâu
                                dài.
                            </HistoricalFigure>
                        </ExtraInlineFact>
                        ,{" "}
                        <ExtraInlineFact buttonContent="Brahmagupta">
                            <HistoricalFigure
                                historicalFigureName="Brahmagupta"
                                image={<Image src={Brahmagupta} alt="" />}
                            >
                                (khoảng 598 - 668 CN) là một trong những nhà
                                toán học và thiên văn học vĩ đại của Ấn Độ cổ
                                đại, nổi bật với những đóng góp quan trọng trong
                                cả hai lĩnh vực này. Ông là tác giả của cuốn
                                {'"'}Brahmasphutasiddhanta{'"'}, một tác phẩm
                                nổi tiếng mà trong đó, ông đã phát triển và
                                trình bày nhiều lý thuyết toán học mới.
                            </HistoricalFigure>
                        </ExtraInlineFact>
                        , và{" "}
                        <ExtraInlineFact buttonContent="Bhaskara I">
                            <HistoricalFigure
                                historicalFigureName="Bhaskara I"
                                image={<Image src={BhaskaraI} alt="" />}
                            >
                                là một nhà toán học và thiên văn học Ấn Độ, nổi
                                tiếng với những đóng góp trong các lĩnh vực toán
                                học và thiên văn học. Một trong những tác phẩm
                                nổi bật của ông là {'"'}Mahabhaskariya{'"'},
                                trong đó ông đã phát triển các lý thuyết về chu
                                kỳ của các hành tinh và các hiện tượng thiên văn
                                như nhật thực và nguyệt thực. Ông cũng là người
                                đầu tiên giới thiệu các khái niệm về số không
                                vào các phép toán và cải tiến các phương pháp
                                tính toán trước đó.
                            </HistoricalFigure>
                        </ExtraInlineFact>
                        . Aryabhata đã giới thiệu các khái niệm về sine và
                        cosine trong công trình của mình và thậm chí đã sử dụng
                        những khái niệm này để tính toán các hiện tượng thiên
                        văn. Các nhà toán học Ấn Độ đã phát triển bảng sine với
                        độ chính xác cao và bắt đầu sử dụng các phương pháp giải
                        phương trình lượng giác.
                    </div>
                </div>
            </div>
            <div className="h-fit mt-[10px]">
                {timelineStar.TheKy(103814, "8 - 14")}
                <div className={`${generalClassName}`}>
                    <div className={`${generalHeaderClassName}`}>Trung Cổ</div>
                    <div className={`${generalContentClassName}`}>
                        Trong thời kỳ Trung Cổ, các học giả Ả Rập như{" "}
                        <ExtraInlineFact buttonContent="Al-Battani">
                            <HistoricalFigure
                                historicalFigureName="Al-Battani"
                                image={<Image src={AlBattani} alt="" />}
                            >
                                (khoảng 858-929 CN), còn được gọi là
                                Albategnius, là một nhà thiên văn học và toán
                                học vĩ đại người Ả Rập, nổi tiếng với những đóng
                                góp quan trọng trong việc cải tiến các lý thuyết
                                thiên văn cổ điển và phát triển các phương pháp
                                tính toán. Ông sinh ra và làm việc tại vùng đất
                                hiện nay là Syria.
                                <br />
                                <br />
                                Bảng lượng giác: Al-Battani đã phát triển các
                                bảng lượng giác với độ chính xác cao hơn so với
                                các bảng trước đó, bao gồm các giá trị của sine,
                                cosine, và tangent (tương ứng với các khái niệm
                                sau này trong toán học hiện đại). Các bảng lượng
                                giác này là công cụ rất quan trọng trong các
                                phép tính thiên văn học và các nghiên cứu về quỹ
                                đạo các hành tinh.
                                <br /> <br />
                                Phương pháp đo góc: Al-Battani là một trong
                                những người đầu tiên áp dụng các khái niệm về
                                lượng giác vào việc đo góc của Mặt Trăng, Mặt
                                Trời và các hành tinh, đặc biệt trong việc tính
                                toán các hiện tượng thiên văn như nguyệt thực và
                                nhật thực.
                            </HistoricalFigure>
                        </ExtraInlineFact>{" "}
                        và{" "}
                        <ExtraInlineFact buttonContent="Al-Khwarizmi">
                            <HistoricalFigure
                                historicalFigureName="Al-Khwarizmi"
                                image={<Image src={AlKhwarizmi} alt="" />}
                            >
                                (khoảng 780-850 CN) là người có công trong việc
                                dịch các công trình toán học từ tiếng Ả Rập sang
                                tiếng Latinh, giúp truyền bá các kiến thức về
                                lượng giác sang châu Âu.
                            </HistoricalFigure>
                        </ExtraInlineFact>{" "}
                        tiếp tục phát triển lý thuyết lượng giác. Al-Battani đã
                        mở rộng và hoàn thiện bảng lượng giác của Ptolemy và
                        nghiên cứu các mối quan hệ giữa các góc trong tam giác
                        vuông và hình tròn.
                    </div>
                </div>
            </div>
            <div className="h-fit mt-[10px]">
                {timelineStar.TheKy(1031617, "16 - 17")}
                <div className={`${generalClassName}`}>
                    <div className={`${generalContentClassName}`}>
                        Lượng giác bắt đầu phát triển mạnh mẽ ở châu Âu trong
                        thời kỳ Phục Hưng và Cách mạng khoa học. Các nhà toán
                        học như Regiomontanus, Johannes Kepler, và Isaac Newton
                        đã mở rộng lý thuyết lượng giác để áp dụng vào các
                        nghiên cứu thiên văn, hình học, và cơ học.
                        <br />
                        <br />
                        Trong đó, phương pháp của nhà toán học Regiomontanus
                        đánh dấu bước phát triển quan trọng trong việc chuyển
                        lượng giác thành một ngành toán học độc lập, không chỉ
                        phục vụ thiên văn học. Thông qua tác phẩm nổi tiếng{" "}
                        <ExtraInlineFact
                            buttonContent="De
                        Triangulis Omnimodis"
                            line
                        >
                            <div className="mb-4 flex flex-col items-center gap-2">
                                <Image src={sTamGiac} alt="" />
                                Diện tích của tam giác: trích dẫn từ cuốn De
                                Triangulis Omnimodis (1533 edition) của tác giả
                                Regiomontanus.
                            </div>
                            Cuốn sách{" "}
                            <span className="font-[475]">
                                De Triangulis Omnimodis
                            </span>{" "}
                            của Regiomontanus, xuất bản năm 1533, sử dụng các
                            phương pháp lượng giác cổ điển, đặc biệt là dựa vào
                            mối quan hệ giữa các góc và cạnh của tam giác, để
                            tính diện tích tam giác. Phương pháp được sử dụng
                            bao gồm các phương pháp:
                            <div className={`${generalInstanceClassName}`}>
                                <br />
                                <span className="font-[475]">
                                    1. Sử dụng đường vuông góc (Altitude) và
                                    cạnh đáy (Base):
                                </span>
                                <br />
                                <div className={`${generalInstanceClassName}`}>
                                    Diện tích tam giác được tính theo công thức:
                                </div>
                            </div>
                            <BlockMath math="\text{Diện tích} = \dfrac{1}{2} \times \text{Đáy} \times \text{Chiều cao}" />
                            <div className={`${generalInstanceClassName}`}>
                                <div className={`${generalInstanceClassName}`}>
                                    Cuốn sách tập trung vào việc xác định chiều
                                    cao (đường vuông góc từ đỉnh đến cạnh đối
                                    diện) trong các trường hợp:
                                    <div
                                        className={`${generalInstanceClassName}`}
                                    >
                                        Khi đường vuông góc nằm{" "}
                                        <span className="font-[475]">
                                            trong tam giác
                                        </span>
                                        .
                                        <br />
                                        Khi đường vuông góc nằm{" "}
                                        <span className="font-[475]">
                                            ngoài tam giác
                                        </span>
                                        .
                                        <br />
                                        Khi đường vuông góc trùng với cạnh đáy
                                        (tam giác vuông).{" "}
                                    </div>
                                </div>
                                <br />
                                <span className="font-[475]">
                                    2. Dựa vào định lý lượng giác (Law of Sines
                                    và Cosines):
                                </span>

                                <div className={`${generalInstanceClassName}`}>
                                    <span className="font-[475]">
                                        Định lý Sin:
                                    </span>
                                </div>
                            </div>
                            <BlockMath math="\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C} = 2R" />
                            <div className={`${generalInstanceClassName}`}>
                                <div className={`${generalInstanceClassName}`}>
                                    với <InlineMath math="R" /> là bán kính
                                    đường tròn ngoại tiếp tam giác. Định lý này
                                    được sử dụng để tính tỉ lệ giữa các cạnh và
                                    góc, từ đó suy ra chiều cao hoặc diện tích.
                                    <br />
                                    <span className="font-[475]">
                                        Định lý Cos:
                                    </span>
                                </div>
                            </div>
                            <BlockMath math="c^2 = a^2 + b^2 - 2ab\cos C" />
                            <div className={`${generalInstanceClassName}`}>
                                <div className={`${generalInstanceClassName}`}>
                                    Từ định lý này, các cạnh và góc tam giác
                                    được liên hệ để tính diện tích.
                                    <br />
                                    <br />
                                </div>
                                <span className="font-[475]">
                                    3. Sử dụng công thức Heron (Heron{"'"}s
                                    Formula):
                                </span>
                                <div className={`${generalInstanceClassName}`}>
                                    Công thức Heron tính diện tích khi biết độ
                                    dài tất cả các cạnh:
                                </div>
                            </div>
                            <BlockMath math="\text{Diện tích} = \sqrt{p(p-a)(p-b)(p-c)}" />
                            <div className={`${generalInstanceClassName}`}>
                                <div className={`${generalInstanceClassName}`}>
                                    với <InlineMath math="p" /> là nửa chu vi:{" "}
                                    <InlineMath math="p= \frac{a+b+c}{2}" />.
                                    <br />
                                    <br />
                                </div>
                                <span className="font-[475]">
                                    4. Dựa vào góc vuông và hình học phẳng:
                                </span>
                                <div className={`${generalInstanceClassName}`}>
                                    Trong tam giác vuông, diện tích được tính
                                    trực tiếp:
                                </div>
                            </div>
                            <BlockMath math="\text{Diện tích} = \frac{1}{2} \times \text{Cạnh góc vuông 1} \times \text{Cạnh góc vuông 2}" />
                            <div className={`${generalInstanceClassName}`}>
                                <div className={`${generalInstanceClassName}`}>
                                    Trong tam giác không vuông, các phép chiếu
                                    và tam giác phụ được sử dụng để tính chiều
                                    cao và diện tích.
                                    <br />
                                    <br />
                                </div>
                                <span className="font-[475]">
                                    5. Điểm nhấn trong phương pháp của
                                    Regiomontanus:
                                </span>
                                <div className={`${generalInstanceClassName}`}>
                                    Ông sử dụng bảng sin và cos (do các nhà toán
                                    học Ấn Độ và Hồi giáo phát triển) để hỗ trợ
                                    tính toán.
                                    <br />
                                    Phương pháp của ông đánh dấu bước phát triển
                                    quan trọng trong việc chuyển lượng giác
                                    thành một ngành toán học độc lập, không chỉ
                                    phục vụ thiên văn học.
                                </div>
                            </div>
                        </ExtraInlineFact>
                        <br />
                        <br />
                        Một dụng cụ không thể thiếu để phát triển thiên văn học,
                        đó là{" "}
                        <ExtraFunFact
                            buttonContent="kính viễn vọng"
                            ffidx={[0, 2, 0, 0]}
                        />
                        .
                    </div>
                </div>
            </div>
            <div className="h-fit mt-[10px]">
                {timelineStar.TheKy(1031819, "18 - 19")}
                <div className={`${generalClassName}`}>
                    <div className={`${generalContentClassName}`}>
                        Vào thế kỷ 18, các hàm lượng giác được định nghĩa rõ
                        ràng hơn và ứng dụng trong các lĩnh vực khác nhau như
                        phân tích, cơ học, điện học, v.v. Các nhà toán học như{" "}
                        <ExtraInlineFact buttonContent="Leonhard Euler" flip>
                            <HistoricalFigure
                                image={<Image src={LeonhardEuler} alt="" />}
                                historicalFigureName="Leonhard Euler"
                            >
                                (1707-1783) là một trong những nhà toán học và
                                lý thuyết vĩ đại nhất trong lịch sử. Ông là
                                người Thụy Sĩ và có ảnh hưởng sâu rộng đến nhiều
                                lĩnh vực của toán học, từ giải tích đến lý
                                thuyết đồ thị, lý thuyết số, và cơ học lý
                                thuyết. Những đóng góp của Euler rất phong phú
                                và có ảnh hưởng lớn đến sự phát triển của toán
                                học và khoa học kỹ thuật.
                            </HistoricalFigure>
                        </ExtraInlineFact>{" "}
                        đã phát triển các công thức lượng giác quan trọng và
                        định lý lượng giác, đặt nền tảng cho sự phát triển của
                        giải tích toán học. Euler cũng đã đóng góp vào sự phát
                        triển của hàm lượng giác phức, mở rộng khả năng ứng dụng
                        lượng giác trong các lĩnh vực như sóng và dao động.
                    </div>
                </div>
            </div>
            <div className="h-fit mt-[10px]">
                {timelineStar.NgayNay(1)}
                <div className={`${generalClassName}`}>
                    <div className={`${generalContentClassName}`}>
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
}
