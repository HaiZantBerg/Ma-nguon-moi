import React from "react";
import "katex/dist/katex.min.css";
import {
    generalClassName,
    generalContentClassName,
    timelineStar,
    // generalInstanceClassName,
} from "../static/lessonsStatic";

export default function LuongGiac() {
    return (
        <>
            <div className="col-[1/-1] row-[1/-1] bg-[#000000] md:w-[1.5px] w-[0.1px] relative md:left-[13.9px] left-[9.6px]" />
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
                    <div className="font-semibold md1:text-[1.25rem] md1:leading-[1.325rem] text-base my-2">
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
                        <br />
                        Groma - Công cụ khảo sát đất đai, được phát minh vào thế
                        kỷ thứ II - TK I TCN bởi Ai Cập, và phổ biến tại Hy Lạp,
                        La Mã.
                        <br />
                        <span className="font-[475]">
                            Cách sử dụng groma trong khảo sát địa chính:
                        </span>{" "}
                        khi những cơn lũ từ sông Nile ập đến và gây nên các đợt
                        ngập úng thường kỳ, họ sẽ được gọi đến để tái xác định
                        ranh giới các mảnh đất ven sông. Dựa vào các thông tin
                        thu thập từ thực địa, họ đóng cọc, chăng sợi dây thừng
                        dài qua những thửa ruộng, rồi thực hiện các phép tính
                        giúp tìm lại viền đất đã bị dòng nước xóa sổ. Khi xây
                        một tòa nhà, họ cũng chính là những người đầu tiên phải
                        xắn tay để đo nền và đánh dấu chính xác vị trí công
                        trình dựa theo sơ đồ của kiến trúc sư. Và khi xây dựng
                        một ngôi đền hay một công trình tưởng niệm quan trọng,
                        đôi lúc các Pharaoh sẽ là người làm nghi thức căng sợi
                        dây đầu tiên. Cần phải nói rằng dây thừng là một công cụ
                        hình học đa nang. Các nhà trắc địa sử dụng nó như một
                        cây thước, cũng là compa và kiêm luôn chức năng làm êke.
                    </div>
                </div>
            </div>
        </>
    );
}
