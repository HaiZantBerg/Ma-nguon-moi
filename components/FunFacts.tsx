"use client";

import React, { useState } from "react";
import { Chakra_Petch } from "next/font/google";
import FlipCard from "./FlipCard";
import depressedAristotle from "@/Image/aristotlecantdopoetic.png";
import Image from "next/image";

const chakraPetch = Chakra_Petch({ weight: "700", subsets: ["vietnamese"] });

const imageWidthHeight = 150;

const images = [
    [
        <div />,
        <div />,
        <div />,
        <div />,
        <div />,
        <Image
            width={imageWidthHeight}
            height={imageWidthHeight}
            src={depressedAristotle}
            alt=""
        />,
    ],
    [<div />, <div />, <div />, <div />, <div />],
    [<div />, <div />, <div />],
    [<div />, <div />, <div />, <div />],
    [<div />, <div />, <div />, <div />, <div />],
];

const storyList = [
    [
        "Trường học của người đi bộ",
        "Bữa ăn vui vẻ của triết gia",
        "Câu hỏi hóc búa và câu trả lời bất ngờ",
        "Aristotle và những cuộc đối thoại với vợ",
        "Sự giễu cợt của Plato",
        "Làm thơ không thành công",
    ],
    [
        "William of Ockham: Lưỡi dao và sự đơn giản",
        "William of Ockham: Lời từ chối hài hước với giáo hoàng",
        "Peter Abelard: Triết gia và câu chuyện tình yêu tai tiếng",
        "Peter Abelard: “Bị xử phạt” bởi chính trí tuệ của mình",
        "William of Ockham: Lời khuyên đơn giản trong cuộc sống",
    ],
    [
        "Một cuộc tranh luận về thời tiết và… toán học",
        "Logic và… bánh mì",
        "Cuộc sống gia đình với tư duy logic",
    ],
    [
        "Frege và việc “thất bại vĩ đại”",
        "Frege và cách giảng dạy quá chi tiết",
        "Frege và những cuộc trò chuyện về cuộc sống",
        "Frege và toán học trong siêu thị",
    ],
    [
        "Hilbert và chuyện về những sinh viên kém",
        "Châm biếm về sự hiểu biết trong toán học",
        "Câu chuyện về khả năng học hỏi của Hilbert",
        "Hilbert và câu chuyện về cái chết của hình học",
        "Hilbert và câu hỏi trong buổi bảo vệ luận án tiến sĩ",
    ],
];

const historyFiqureName = [
    "Aristotle",
    "William of Ockham và Peter Abelard",
    "George Boole",
    "Frege",
    "Hilbert",
];

const storyContent = [
    [
        `Một trong những giai thoại nổi tiếng nhất về Aristotle là cách ông giảng dạy độc đáo. 
        Khác với những triết gia khác ngồi trong phòng giảng bài, Aristotle có thói quen vừa đi 
        dạo vừa giảng giải cho học trò của mình. Ông thường dẫn học trò đi qua các khu vườn, giảng bài về triết học, 
        khoa học, và các chủ đề học thuật khác trong lúc cả nhóm cùng đi bộ. Vì thói quen giảng dạy này, trường học của ông tại 
        Lyceum được gọi là “Peripatetic School” – tức là “Trường học của những người đi bộ.”
        //
        Có một câu chuyện vui kể rằng, một ngày nọ, khi một học trò mới tham gia lớp học và không quen với cách dạy này, 
        cậu ta cố gắng ghi chép trong khi đi bộ theo Aristotle. Sau một thời gian dài cố gắng ghi chép mọi thứ, 
        cậu ta bối rối và hỏi: “Thưa thầy, chúng ta sẽ dừng lại để tôi viết bài chứ?” Aristotle nhìn học trò mới với nụ cười: 
        “Hãy để suy nghĩ của em chạy nhanh hơn bước chân của em, rồi em sẽ không cần phải dừng lại.”
        `,
        `Aristotle cũng là một người rất thực tế và đôi khi thích nói đùa về những vấn đề liên quan đến cuộc sống hàng ngày. 
        Có một câu chuyện kể rằng, Aristotle thường tổ chức những bữa tiệc nhỏ với các học trò và đồng nghiệp triết học. 
        Trong một buổi tiệc, một học trò hỏi Aristotle một cách nghiêm túc: “Thưa thầy, tại sao chúng ta phải ăn uống nếu như 
        trí óc mới là thứ quan trọng nhất?”
        //
        Aristotle cười và đáp lại: “Vì nếu chúng ta không ăn, thì đến khi não bộ của em thực sự hoạt động tốt, 
        cơ thể của em sẽ không còn đủ sức để suy nghĩ nữa.” Câu trả lời của Aristotle vừa hài hước vừa thực tế, 
        thể hiện sự tinh tế trong cách ông cân bằng giữa tri thức và nhu cầu cuộc sống.
        `,
        `Một lần khác, một học trò cố tình đặt cho Aristotle một câu hỏi hóc búa để thử thách trí thông minh của ông. 
        Học trò này hỏi: “Thưa thầy, làm thế nào để chúng ta có thể chắc chắn rằng điều chúng ta làm là đúng, 
        chứ không phải là sai?”
        //
        Aristotle, thay vì đưa ra một câu trả lời lý thuyết dài dòng, chỉ đơn giản cười và nói: “Hãy cứ thử sai lầm vài lần, 
        và em sẽ học được điều đúng từ đó!” Câu trả lời này vừa châm biếm vừa mang tính giáo dục, nhấn mạnh tầm quan trọng của 
        việc học từ những sai lầm và trải nghiệm.
        `,
        `Một câu chuyện khác mang tính đời thường nhưng cũng khá hài hước là về cuộc sống gia đình của Aristotle. 
        Theo sử sách ghi lại, Aristotle và vợ ông, Pythias, có mối quan hệ khá thú vị. Dù ông là một triết gia vĩ đại với 
        trí tuệ siêu phàm, nhưng trong cuộc sống gia đình, đôi khi Aristotle lại gặp khó khăn khi đối diện với vợ.
        //
        Có lần, vợ ông than phiền rằng ông luôn dành quá nhiều thời gian cho việc nghiên cứu và giảng dạy, 
        không quan tâm nhiều đến việc nhà. Aristotle, với tư duy triết học của mình, trả lời: 
        “Suy nghĩ về những điều lớn lao của vũ trụ đôi khi quan trọng hơn là việc phải chọn xem chúng ta sẽ ăn gì tối nay.” 
        Dĩ nhiên, câu trả lời này không khiến Pythias hài lòng, và từ đó, Aristotle học được rằng triết lý 
        cuộc sống đôi khi không thể giải quyết mọi vấn đề gia đình.
        `,
        `Còn có một câu chuyện vui liên quan đến thời trẻ của Aristotle khi ông là học trò tại Học viện của Plato. 
        Plato, thầy của Aristotle, luôn ca ngợi tư tưởng của mình về “thế giới ý niệm” – 
        cho rằng mọi sự vật trong thế giới thực chỉ là bản sao không hoàn hảo của các ý niệm lý tưởng. 
        Tuy nhiên, Aristotle lại không hoàn toàn đồng ý với quan điểm này.
        //
        Một lần, để phản đối quan điểm của Plato, Aristotle đã đùa rằng: “Nếu thế giới ý niệm hoàn hảo đến thế, 
        thì tại sao chúng ta không thể nhìn thấy một con ngựa lý tưởng hoặc một cái bánh lý tưởng ngoài đời thực?” 
        Câu nói đùa này thể hiện cách tiếp cận thực tế của Aristotle và cũng cho thấy ông không ngại thách thức thầy mình, 
        ngay cả khi nó mang tính hài hước.
        `,
        `Dù nổi tiếng với tư duy logic và triết học, Aristotle cũng có những lúc muốn thử sức với nghệ thuật. 
        Có lần, ông thử làm thơ – một hoạt động được cho là cao quý trong thời kỳ của ông. Nhưng đáng tiếc, 
        các tác phẩm thơ của Aristotle không thành công và thậm chí bị nhiều người chê cười. 
        Khi một người bạn hỏi tại sao ông lại thất bại trong lĩnh vực này, Aristotle chỉ cười và nói: 
        “Có lẽ vì tôi đã dành quá nhiều thời gian cho lý trí và quá ít thời gian cho cảm xúc.”
        //
        Những câu chuyện này không chỉ là những giai thoại vui vẻ về Aristotle mà còn mang đến một góc nhìn khác về con người ông – 
        không chỉ là một triết gia uyên bác mà còn là một người có tính cách thú vị, hài hước và đôi khi rất đời thường. 
        Dù là trong những khoảnh khắc giảng dạy hay cuộc sống cá nhân, Aristotle vẫn giữ được sự tinh tế và tư duy sâu sắc, 
        nhưng không bao giờ thiếu đi một chút hài hước khiến ông trở thành một hình mẫu vừa tôn kính vừa gần gũi.
        `,
    ],
    [
        `William of Ockham nổi tiếng với nguyên lý “Ockham’s Razor” (Lưỡi dao của Ockham), 
        một nguyên lý cho rằng các giải thích đơn giản thường là chính xác nhất, và chúng ta không nên nhân lên các giả 
        thiết nếu không cần thiết. Tuy nhiên, có một câu chuyện vui kể rằng, sự đơn giản của ông đôi khi còn khiến các đồng 
        nghiệp bất ngờ.
        //
        Có một lần, một đồng nghiệp đến hỏi Ockham về một vấn đề thần học phức tạp, hy vọng sẽ có một cuộc thảo luận dài dòng 
        và sâu sắc. Nhưng Ockham chỉ đơn giản trả lời: “Câu trả lời là ‘không’.” Người đồng nghiệp thất vọng hỏi: 
        “Tại sao lại không? Có rất nhiều điều cần phải xem xét!” Ockham chỉ mỉm cười và nói: “Vì giải thích dài không cần thiết 
        khi sự thật chỉ đơn giản là ‘không’.”
        //
        Câu trả lời ngắn gọn của Ockham phản ánh chính nguyên tắc nổi tiếng của ông về sự đơn giản, nhưng nó cũng khiến người khác 
        phải cười vì cách ông cắt ngắn những cuộc tranh luận phức tạp chỉ bằng một vài từ.
        `,
        `William of Ockham không ngại lên tiếng chống lại Giáo hoàng John XXII trong những tranh luận về thần học và quyền lực 
        của Giáo hội. Một lần, khi Ockham bị triệu tập đến trước Giáo hoàng để trả lời về những quan điểm của mình, ông đã nói 
        một câu bất hủ: “Nếu Giáo hoàng sai, tôi không ngại nói ra điều đó.” Dù câu này có vẻ nghiêm túc, nhưng nó thể hiện một 
        sự hài hước sắc bén trong việc đối đầu với một trong những người quyền lực nhất của thời đại.
        //
        Câu chuyện kể rằng khi Giáo hoàng hỏi Ockham tại sao ông lại dám chống lại quyền lực Giáo hội, Ockham chỉ trả lời một cách 
        bình thản: “Con chỉ đang làm điều đơn giản nhất, như lưỡi dao của chính mình đã dạy con.”
        `,
        `Peter Abelard, ngoài vai trò là một triết gia lỗi lạc, còn được nhớ đến nhiều qua mối tình đầy sóng gió với Héloïse, 
        một học trò xuất sắc của ông. Câu chuyện tình yêu này gây ra nhiều tai tiếng trong thời gian đó, nhưng cũng có những tình 
        tiết hài hước trong mối quan hệ của họ.
        //    
        Một lần, trong lúc đang giảng bài, Abelard bị Héloïse phản bác lại một luận điểm triết học. Héloïse thông minh đến mức có 
        thể tranh luận và thậm chí còn đưa ra những câu hỏi mà chính Abelard cũng gặp khó khăn để trả lời. Để không mất mặt trước 
        các học trò khác, Abelard đã cố gắng đưa ra một câu trả lời phức tạp nhằm đánh lạc hướng, nhưng Héloïse nhanh chóng nhận 
        ra và mỉm cười hỏi: “Thưa thầy, triết học có liên quan gì đến việc né tránh câu hỏi?”
        //
        Câu hỏi này khiến cả lớp bật cười và Abelard cũng không khỏi cười trừ. Mối quan hệ giữa hai người từ đây không chỉ nổi 
        tiếng vì sự lãng mạn mà còn vì những khoảnh khắc tranh luận trí tuệ đầy hài hước giữa họ.
        `,
        `Abelard nổi tiếng là một trong những trí thức sắc bén nhất thời đại, nhưng chính sự kiêu ngạo về kiến thức của mình đã 
        khiến ông rơi vào nhiều tình huống dở khóc dở cười. Trong một buổi tranh luận, khi Abelard liên tục đưa ra các lý lẽ phức 
        tạp và tỏ ra thắng thế, một nhà thần học khác đã đứng lên và nói: “Thưa thầy Abelard, lý lẽ của thầy quá cao siêu, 
        tôi chẳng hiểu nổi một từ nào!”
        //    
        Thay vì cảm thấy bị xúc phạm, Abelard chỉ cười và nói: “Có lẽ đó là vì tôi đang nói chuyện với chính bản thân mình!” 
        Câu nói này không chỉ làm dịu tình hình mà còn khiến tất cả mọi người bật cười, thừa nhận rằng Abelard đôi khi quá lý 
        thuyết và khó hiểu, ngay cả với những người thông thái khác.
        `,
        `Ngoài nguyên lý triết học, William of Ockham cũng áp dụng sự đơn giản vào cuộc sống hàng ngày. Có một câu chuyện kể rằng, 
        trong một lần đi dạo với một nhóm học trò, Ockham được hỏi làm thế nào để sống một cuộc sống có ý nghĩa. Các học trò mong 
        chờ một câu trả lời phức tạp với nhiều triết lý sâu xa. Nhưng Ockham chỉ cười và nói: “Hãy sống đơn giản và bớt lo lắng về 
        những điều không cần thiết.”
        //    
        Câu trả lời của Ockham làm các học trò ngạc nhiên, nhưng rồi họ nhận ra rằng, ông chỉ đang áp dụng nguyên tắc “Lưỡi dao 
        của Ockham” vào cả cuộc sống thường nhật, khuyên mọi người đừng phức tạp hóa mọi vấn đề.
        `,
    ],
    [
        `Boole là người rất tận tụy với công việc, thậm chí đôi khi ông còn áp dụng tư duy logic của mình vào những tình huống 
        đời thường. Một câu chuyện kể rằng, một ngày nọ, khi thời tiết đột ngột trở nên rất xấu, vợ của Boole khuyên ông không 
        nên ra ngoài vì mưa gió. Nhưng Boole, với tinh thần khoa học và toán học, khẳng định rằng: “Một chút mưa không thể gây 
        hại cho người có lý trí.”
        //
        Kết quả là Boole đi bộ trong mưa suốt vài giờ, và ông bị cảm nặng. Điều này khiến vợ ông bối rối, và bà đã cố gắng chữa 
        trị cho ông theo cách mà bà nghĩ phù hợp với tư duy logic của Boole: bà đắp chăn ướt lên người ông, cho rằng nếu ông bị 
        cảm vì nước mưa, thì nước cũng sẽ chữa khỏi cho ông! Câu chuyện này cho thấy cách Boole và gia đình ông áp dụng sự hài 
        hước, dù đôi khi hơi quá đà, vào cuộc sống thường nhật.
        `,
        `Một câu chuyện vui khác kể về sự nghiêm túc của Boole khi áp dụng tư duy logic vào cuộc sống hàng ngày. Một lần, 
        khi ông và một người bạn ngồi xuống ăn sáng, người bạn của Boole hỏi: “Anh có thể sử dụng logic để giải thích tại sao 
        chúng ta ăn bánh mì không?”
        //    
        Boole đáp lại: “Chắc chắn rồi. Logic cho tôi biết rằng nếu tôi không ăn, tôi sẽ cảm thấy đói. Nếu tôi đói, 
        tôi sẽ không thể làm việc hiệu quả. Nếu tôi không làm việc hiệu quả, tôi sẽ không thể nghiên cứu logic. Vì vậy, 
        logic khẳng định tôi phải ăn bánh mì để tiếp tục suy nghĩ về logic.”
        //
        Câu trả lời của Boole khiến người bạn bật cười, bởi nó cho thấy ông có thể đưa logic vào bất cứ vấn đề gì, kể cả trong 
        những tình huống đời thường nhất.
        `,
        `Boole có cuộc sống gia đình khá thú vị. Vợ ông, Mary Everest Boole, cũng là một người rất thông minh và có những phương 
        pháp dạy toán học khác lạ. Nhưng một trong những điểm hài hước là Mary từng than phiền rằng cuộc sống với một nhà logic 
        học như Boole đôi khi giống như sống trong một bài toán!
        //    
        Có lần, Mary hỏi Boole về việc nuôi dạy con cái, mong rằng ông sẽ có những lời khuyên thực tế. Boole lại bắt đầu giải thích 
        bằng một chuỗi các suy luận logic phức tạp, mà Mary phải ngắt lời: “George, chúng ta chỉ đang nói về bữa ăn tối của lũ trẻ 
        thôi mà, không phải một bài toán đại số!”
        //
        Những câu chuyện hài hước về George Boole không chỉ giúp chúng ta thấy được tính cách thú vị của ông, mà còn cho thấy cách 
        ông sống với niềm đam mê toán học và logic trong từng khoảnh khắc của cuộc đời. Dù có đôi khi Boole bị cuốn vào những suy 
        luận phức tạp, nhưng điều đó chỉ làm tăng thêm sự đáng yêu và thú vị của một trong những người đã đặt nền móng cho khoa học 
        máy tính hiện đại.
        `,
    ],
    [
        `Một trong những câu chuyện hài hước nhất về Frege liên quan đến cuốn sách “Grundgesetze der Arithmetik” 
        (Các định luật cơ bản của số học) của ông. Frege dành nhiều năm để viết cuốn sách này, với mục tiêu xây dựng nền tảng 
        logic cho số học. Tuy nhiên, ngay sau khi Frege xuất bản cuốn sách, nhà logic học Bertrand Russell đã phát hiện ra một 
        nghịch lý (được gọi là Nghịch lý Russell), làm lung lay toàn bộ hệ thống của Frege.
        //    
        Câu chuyện kể rằng, khi Frege nhận được bức thư từ Russell giải thích về nghịch lý, Frege đã vô cùng bất ngờ. Thay vì tức 
        giận hay thất vọng, ông chỉ bình tĩnh ngồi xuống và viết thêm một phụ lục vào cuốn sách, thừa nhận rằng phát hiện của 
        Russell đã phá vỡ nền tảng lý thuyết của mình. Frege viết trong phần mở đầu của phụ lục với sự thẳng thắn và một chút tự 
        trào: “Một sự sụp đổ đã xảy ra trong tòa nhà logic của tôi.”
        //
        Mặc dù đây là một cú sốc lớn cho công việc của Frege, nhưng cách ông phản ứng với sự bình thản và đôi chút hài hước đã 
        khiến nhiều người nể phục. Frege không đổ lỗi cho ai, mà chỉ nhận thức được rằng, đôi khi, ngay cả những lý thuyết vĩ đại 
        nhất cũng có thể bị phá vỡ bởi một chi tiết nhỏ.
        `,
        `Frege nổi tiếng là một người tỉ mỉ và cẩn thận, đôi khi quá mức đến mức khiến học trò của ông phải bật cười. 
        Một lần, khi Frege giảng dạy về logic và ký hiệu học, ông dành cả giờ để giải thích một dấu ngoặc đơn trong một công 
        thức logic phức tạp. Một học trò bối rối hỏi: “Thưa thầy, tại sao dấu ngoặc này lại quan trọng đến vậy?” Frege trả lời 
        rất nghiêm túc: “Nếu không có nó, toàn bộ công trình sẽ sụp đổ!”
        //
        Lời nói của Frege khiến cả lớp bật cười vì sự chi tiết đến mức tưởng như thái quá, nhưng sau đó các học trò nhận ra 
        rằng ông hoàn toàn đúng. Điều này không chỉ là một trò đùa, mà còn là một bài học về sự cẩn trọng trong logic và toán học.
        `,
        `Dù nổi tiếng là một nhà tư tưởng logic học, Frege lại không giỏi trong việc đối thoại về những chủ đề đời thường. 
        Một lần, trong một buổi tiệc, Frege ngồi cạnh một người bạn không phải là triết gia hay nhà toán học. Người bạn hỏi 
        Frege một câu hỏi rất đơn giản: “Anh nghĩ gì về thời tiết hôm nay?”
        //    
        Frege suy nghĩ một lúc lâu, rồi trả lời: “Tôi không thể đưa ra một câu trả lời logic về điều này, vì các thông tin về 
        thời tiết hôm nay chưa đủ đầy đủ để xác minh.” Câu trả lời của Frege khiến cả bàn tiệc bật cười, bởi ngay cả khi nói về 
        những điều bình thường nhất, ông cũng không thể thoát khỏi thói quen phân tích logic quá mức của mình.
        `,
        `Có một câu chuyện vui kể rằng Frege, trong một lần đi mua sắm, đã đứng rất lâu trước một kệ hàng, cố gắng quyết định 
        giữa hai loại bánh mì. Ông tính toán chi li giá cả và giá trị dinh dưỡng của từng loại bánh, rồi phân tích xem loại nào 
        là lựa chọn hợp lý hơn dựa trên một chuỗi các lý luận logic phức tạp.
        //    
        Cuối cùng, sau khi đứng phân vân gần cả giờ đồng hồ, ông không thể đưa ra quyết định và rời khỏi siêu thị mà không mua 
        gì cả. Một người bạn biết chuyện đã đùa rằng: “Frege có thể giải quyết những vấn đề logic phức tạp của thế giới, 
        nhưng lại không thể chọn được một chiếc bánh mì!”
        `,
    ],
    [
        `David Hilbert là một giáo sư nổi tiếng tại Đại học Göttingen, và một câu chuyện vui kể về quan điểm của ông đối 
        với những sinh viên không có năng khiếu toán học. Có lần, một sinh viên từ bỏ toán học để theo học môn thơ ca. 
        Khi nghe tin này, một người bạn của Hilbert nói: “Thật đáng tiếc cho cậu ấy. Cậu ta sẽ chẳng làm được gì nhiều trong 
        thơ ca đâu”. Hilbert chỉ mỉm cười và nói: “Ồ, đừng lo. Anh biết đấy, đối với thơ ca, nó chẳng sao cả nếu có ai đó kém cỏi. 
        Nhưng nếu một người kém cỏi trong toán học, cả thế giới sẽ phải chịu đựng.”
        //    
        Câu nói này vừa thể hiện sự hài hước, vừa ngụ ý về tầm quan trọng của toán học trong việc phát triển khoa học và công nghệ.
        `,
        `Hilbert có một câu nói nổi tiếng trong giới học thuật, nhằm châm biếm những người không hiểu rõ toán học mà lại muốn 
        từ bỏ nó. Trong một buổi thảo luận về vấn đề toán học và nghiên cứu tại trường, Hilbert được hỏi về lý do tại sao nhiều 
        sinh viên không muốn học toán. Ông đã trả lời đầy hài hước: “Chúng ta sẽ chẳng bao giờ phải lo lắng về việc sinh viên 
        bỏ toán học đâu. Những người kém nhất rồi sẽ bỏ cuộc và sẽ theo học các môn khác, chẳng hạn như triết học.”
        //    
        Câu nói này vừa là một lời châm biếm nhẹ nhàng vừa phản ánh niềm tin của Hilbert rằng toán học là một môn khoa học đòi 
        hỏi sự hiểu biết sâu sắc, không phải ai cũng có thể dễ dàng theo đuổi.
        `,
        `Có một câu chuyện vui kể về khả năng tiếp thu kiến thức của Hilbert. Khi Hilbert còn trẻ, một số đồng nghiệp đã cười 
        nhạo ông vì không thể hiểu ngay một bài toán phức tạp. Hilbert chỉ mỉm cười và nói: “Vâng, tôi có thể là một người chậm 
        chạp khi học hỏi điều mới. Nhưng một khi tôi đã hiểu được nó, tôi sẽ không bao giờ quên.”
        //    
        Điều này thể hiện sự kiên trì và tự tin của Hilbert trong quá trình nghiên cứu khoa học, và nó đã trở thành một trong những 
        đặc điểm giúp ông thành công vượt bậc trong sự nghiệp toán học của mình.
        `,
        `Hilbert luôn có một thái độ hài hước và tự tin khi nói về toán học. Một câu chuyện kể lại rằng, khi nghe tin một nhà 
        toán học trẻ nhận định rằng hình học sẽ sớm “chết” như một lĩnh vực nghiên cứu do sự phát triển của các ngành khoa học 
        khác, Hilbert liền tuyên bố: “Đừng lo lắng. Ngay cả khi hình học chết đi, chúng tôi sẽ đặt nó vào một ngôi mộ trang trọng, 
        và tôi sẽ đọc bài điếu văn cho nó.”
        //    
        Thật ra, hình học không chỉ không “chết” mà còn phát triển mạnh mẽ hơn nhờ những nghiên cứu của Hilbert và các nhà toán 
        học khác. Câu nói này vừa thể hiện tính cách hài hước của Hilbert vừa là sự tự tin về tầm quan trọng của toán học.
        `,
        `Một câu chuyện nổi tiếng khác về David Hilbert liên quan đến một buổi bảo vệ luận án tiến sĩ. Trong buổi bảo vệ luận 
        án của một nghiên cứu sinh, sau khi nghe phần trình bày phức tạp của sinh viên, Hilbert chỉ đặt một câu hỏi duy nhất: 
        “Vậy làm thế nào để nấu súp từ ý tưởng của anh?”
        //    
        Mọi người trong phòng bật cười, vì Hilbert đã dùng sự hài hước của mình để nhẹ nhàng chỉ ra rằng bài trình bày của sinh 
        viên quá lý thuyết và không có tính ứng dụng thực tiễn. Dù là một nhà toán học thuần túy, Hilbert vẫn đánh giá cao sự 
        kết nối giữa lý thuyết và thực hành.
        `,
    ],
];

const FFHeader = () => {
    return (
        <div
            className={`${chakraPetch.className} md:pt-6 pt-2 md:text-[40px] text-[35px] leading-[42.5px] flex text-nowrap`}
        >
            <div className="w-[40px] aspect-square mr-3">
                <svg
                    viewBox="0 0 49.7 44.55"
                    className="w-[40px] aspect-square"
                >
                    <path
                        d="M209,355.28c0-3.48,6.39-2.29,10.13-7.15,4.15-5.4,5.79-15.28,8.3-15.28s4,9.1,8.3,14.85c3.66,4.9,10.46,4.67,10.46,7.58s-6.85,3-11,8.2-4.12,13.86-7.62,13.92-4-9.48-8.23-14.59C215.31,357.86,209,358.76,209,355.28Z"
                        transform="translate(-196.54 -332.85)"
                        fill="url(#gradient7)"
                    />
                    <path
                        d="M202.76,340.16c0-1.05,1.93-.69,3.07-2.17s1.75-4.63,2.51-4.63,1.21,2.76,2.52,4.5c1.11,1.49,3.17,1.42,3.17,2.3s-2.08.92-3.33,2.49-1.25,4.19-2.31,4.22-1.2-2.88-2.49-4.43S202.76,341.21,202.76,340.16Z"
                        transform="translate(-196.54 -332.85)"
                        fill="url(#gradient7)"
                    />
                    <path
                        d="M196.54,366c0-1.51,2.77-1,4.39-3.1,1.8-2.35,2.51-6.63,3.6-6.63s1.73,3.95,3.6,6.44c1.59,2.13,4.54,2,4.54,3.29s-3,1.32-4.76,3.56-1.79,6-3.31,6-1.72-4.12-3.57-6.33S196.54,367.54,196.54,366Z"
                        transform="translate(-196.54 -332.85)"
                        fill="url(#gradient7)"
                    />
                </svg>
            </div>
            Fun facts
            <div className="w-[64px] aspect-square">
                <svg
                    className="w-[64px] aspect-square -translate-x-6 -translate-y-7"
                    viewBox="0 0 100 100"
                >
                    <defs>
                        <linearGradient
                            x1="0%"
                            x2="100%"
                            y1="0%"
                            y2="0%"
                            id="gradient6"
                        >
                            <stop offset="0%" stopColor="#2e5bff" />
                            <stop offset="100%" stopColor="#75cfff" />
                        </linearGradient>
                        <linearGradient
                            x1="100%"
                            x2="0%"
                            y1="0%"
                            y2="0%"
                            id="gradient7"
                        >
                            <stop offset="0%" stopColor="#2e5bff" />
                            <stop offset="100%" stopColor="#75cfff" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M12.811 45.999a2 2 0 0 0 2-2V16.494a2 2 0 0 0-4 0v27.505a2 2 0 0 0 2 2zM52.774 55.067c.487 0 .976-.177 1.36-.534l29.54-27.427a2 2 0 0 0-2.721-2.932l-29.54 27.427a2 2 0 0 0 1.361 3.466zM92.022 90.517H59.124a2 2 0 0 0 0 4h32.898a2 2 0 0 0 0-4zM81.742 63.364l-23.603 7.051a2 2 0 0 0 1.144 3.833l23.603-7.051a2 2 0 0 0-1.144-3.833zM33.656 45.887a1.996 1.996 0 0 0 2.547-1.231l7.933-22.78a2 2 0 0 0-3.777-1.315l-7.933 22.78a2 2 0 0 0 1.23 2.546z"
                        fill="url(#gradient6)"
                    ></path>
                    <path
                        d="M9.811 42.499a1.5 1.5 0 0 0 1.5-1.5V13.493c-.034-1.972-2.967-1.971-3 0v27.505a1.5 1.5 0 0 0 1.5 1.5zM49.774 51.567a1.5 1.5 0 0 0 1.021-.401l29.54-27.427c1.414-1.352-.563-3.522-2.041-2.198l-29.54 27.427c-1.006.869-.29 2.649 1.021 2.599zM54.624 89.517a1.5 1.5 0 0 0 1.5 1.5h32.898c1.972-.034 1.971-2.967 0-3H56.124a1.5 1.5 0 0 0-1.5 1.5zM56.142 70.769l23.603-7.051c1.873-.593 1.045-3.407-.859-2.874l-23.602 7.051c-1.881.596-1.033 3.412.859 2.874zM30.821 42.415a1.503 1.503 0 0 0 1.91-.923l7.933-22.78a1.502 1.502 0 0 0-2.834-.987l-7.933 22.78a1.502 1.502 0 0 0 .924 1.91z"
                        fill="#000000"
                    ></path>
                </svg>
            </div>
            <div className="md:-translate-x-6 -translate-x-9 w-[40px] aspect-square ml-3">
                <svg
                    viewBox="0 0 49.7 44.55"
                    className="w-[40px] aspect-square"
                >
                    <path
                        d="M209,355.28c0-3.48,6.39-2.29,10.13-7.15,4.15-5.4,5.79-15.28,8.3-15.28s4,9.1,8.3,14.85c3.66,4.9,10.46,4.67,10.46,7.58s-6.85,3-11,8.2-4.12,13.86-7.62,13.92-4-9.48-8.23-14.59C215.31,357.86,209,358.76,209,355.28Z"
                        transform="translate(-196.54 -332.85)"
                        fill="url(#gradient6)"
                    />
                    <path
                        d="M202.76,340.16c0-1.05,1.93-.69,3.07-2.17s1.75-4.63,2.51-4.63,1.21,2.76,2.52,4.5c1.11,1.49,3.17,1.42,3.17,2.3s-2.08.92-3.33,2.49-1.25,4.19-2.31,4.22-1.2-2.88-2.49-4.43S202.76,341.21,202.76,340.16Z"
                        transform="translate(-196.54 -332.85)"
                        fill="url(#gradient6)"
                    />
                    <path
                        d="M196.54,366c0-1.51,2.77-1,4.39-3.1,1.8-2.35,2.51-6.63,3.6-6.63s1.73,3.95,3.6,6.44c1.59,2.13,4.54,2,4.54,3.29s-3,1.32-4.76,3.56-1.79,6-3.31,6-1.72-4.12-3.57-6.33S196.54,367.54,196.54,366Z"
                        transform="translate(-196.54 -332.85)"
                        fill="url(#gradient6)"
                    />
                </svg>
            </div>
        </div>
    );
};

const FunFact1 = () => {
    const [openFlipCard, setOpenFlipCard] = useState<[number, number]>([
        -1, -1,
    ]);

    const triggerCloseCard = () => {
        setOpenFlipCard([-1, -1]);
    };

    return (
        <div className="*:md:pl-4 *:pl-2 lgmi:pt-0 md:pt-12 pt-2">
            <FFHeader />
            <div className="md:overflow-y-auto h-[calc(100vh-190px)] md:ml-7 flex flex-col">
                {storyList.map((section, idx) => (
                    <div key={idx} className="mb-5">
                        <span className="font-semibold text-2xl">
                            {historyFiqureName[idx]}
                        </span>
                        <div className="md:ml-7 flex flex-wrap mt-5">
                            {section.map((title, idxs) => (
                                <React.Fragment key={idxs}>
                                    <svg
                                        viewBox="-160 -180 320 360"
                                        className="md:h-[180px] h-[150px] md:mr-5 mr-[14px] md:mb-5 mb-[14px] cursor-pointer"
                                        style={{
                                            aspectRatio: 8 / 9,
                                        }}
                                        onClick={() => {
                                            setOpenFlipCard([idx, idxs]);
                                        }}
                                    >
                                        <path
                                            d="M-120 -177.5 L120 -177.5 L157.5 -140 L157.5 130 L120 167.5 L-120 167.5 L-157.5 130 L-157.5 -140 Z"
                                            strokeWidth="5"
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            className="stroke-black"
                                            fill="white"
                                        />
                                        <foreignObject
                                            x="-160"
                                            y="-180"
                                            width="320"
                                            height="360"
                                        >
                                            <div className="flex justify-center">
                                                {images[idx][idxs]}
                                            </div>
                                        </foreignObject>
                                        <foreignObject
                                            x="-160"
                                            y="-20"
                                            width="320"
                                            height="360"
                                        >
                                            <div className="text-[30px] leading-[37.5px] w-full absolute left-0 top-0 font-semibold px-[11px] text-center">
                                                {idxs + 1}.
                                                <br />
                                                {title}
                                            </div>
                                        </foreignObject>
                                    </svg>
                                    {openFlipCard[0] === idx &&
                                        openFlipCard[1] === idxs && (
                                            <FlipCard
                                                title={title}
                                                idxs={idxs}
                                                triggerCloseCard={
                                                    triggerCloseCard
                                                }
                                            >
                                                {storyContent[idx][idxs]
                                                    .split("//")
                                                    .map((text, idx) => (
                                                        <p
                                                            key={idx}
                                                            className="mb-5"
                                                        >
                                                            {text}
                                                        </p>
                                                    ))}
                                            </FlipCard>
                                        )}
                                </React.Fragment>
                            ))}
                        </div>
                        <hr className="mr-10" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const FunFact = [[<FunFact1 />], [], []];
