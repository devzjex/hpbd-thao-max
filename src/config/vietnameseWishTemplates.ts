/**
 * Vietnamese copy for the swipeable wish deck.
 *
 * Keyed by the `id` of each entry in WISH_TEMPLATES so tone, icon and
 * relationship stay owned by the English source of truth — only the text swaps.
 */
export const VIETNAMESE_WISH_TEXTS: Record<string, string> = {
    // PARTNER
    p1: 'Chúc mừng sinh nhật người bạn đời xinh đẹp của anh, {name}. Mỗi ngày bên em đều như một giấc mơ có thật.',
    p2: '{name} à, tình cảm anh dành cho em cứ sâu đậm thêm theo từng năm. Chúc mừng sinh nhật cả thế giới của anh.',
    p3: 'Gửi {name}, ngôi sao sáng nhất trên bầu trời của anh. Mong ngày sinh nhật của em rực rỡ như thứ ánh sáng em mang đến cho đời anh.',
    p4: 'Chúc mừng sinh nhật {name}! Anh thương em còn hơn cả pizza, mà em biết đó là nhiều lắm rồi.',
    p5: '{name} thêm một tuổi rồi đó, nhưng ít nhất em vẫn còn anh làm phần thưởng! Chúc mừng sinh nhật.',
    p6: 'Chúc {name} một ngày sinh nhật thật hạnh phúc. Cảm ơn em vì đã là điểm tựa và cũng là chuyến phiêu lưu đẹp nhất của anh.',
    p7: 'Anh may mắn biết bao khi được gọi em là của anh. Chúc mừng sinh nhật {name}, tình yêu không có điểm dừng của anh.',
    p8: '{name} à, nếu anh gom hết sao trời tặng em thì vẫn chưa sáng bằng thứ ánh sáng em cho anh. Chúc mừng sinh nhật.',
    p9: 'Chúc mừng sinh nhật {name} — người chuyên cuỗm chăn của anh. Thôi thì tối nay nhường em hết chăn vậy.',

    // FRIEND
    fr1: 'Chúc mừng sinh nhật {name}! Quẩy thôi, quẩy như thể đây là công việc và mình đang cần thăng chức gấp.',
    fr2: '{name} là người duy nhất mà tôi chịu chia đồ ăn vặt đó. Chúc sinh nhật thật đã!',
    fr3: 'Gửi người bạn tuyệt vời {name}, cảm ơn vì đã luôn ở đó lúc vui cũng như lúc khó. Chúc mừng sinh nhật!',
    fr4: 'Bạn thân thật sự là thứ hiếm có nhất trên đời. Vui vì lại được mừng thêm một tuổi của {name}.',
    fr5: 'Chúc mừng sinh nhật {name}! Thật ra tôi tới vì bánh kem thôi, nhưng {ban} cũng ngầu phết.',
    fr6: 'Mừng {name} nhé! {Ban} gần như là chuyên gia tâm lý không công của tôi, và tôi biết ơn điều đó lắm.',
    fr7: 'Cuộc sống dễ thở hơn nhiều khi có {name} trong đó. Chúc {ban} một sinh nhật tuyệt như chính {ban} vậy.',
    fr8: 'Làm bạn lâu tới mức tôi không nhớ nổi ai mới là đứa rủ rê đứa nào nữa. Chúc mừng sinh nhật {name}!',

    // FAMILY
    fa1: 'Chúc mừng sinh nhật {name}. Cả nhà thật may mắn khi có sự ấm áp và niềm vui của {ban} trong cuộc sống này.',
    fa2: 'Gửi {name} — vừa là gốc rễ giữ cả nhà vững vàng, vừa là nhánh cây giúp chúng ta vươn tới bầu trời.',
    fa3: 'Chúc mừng sinh nhật {name}! Nhà mình có hơi lộn xộn thật, nhưng ít nhất là lộn xộn cùng nhau.',
    fa4: 'Thêm một tuổi rồi {name} ơi, nhưng thật lòng mà nói, {ban} vẫn là người được cưng nhất.',
    fa5: '{name} à, hôm nay gửi {ban} tất cả thương mến. Cảm ơn vì đã luôn làm những buổi họp mặt gia đình trở nên đặc biệt.',
    fa6: 'Mong năm nay mang đến cho {name} nhiều niềm vui như những kỷ niệm chúng ta có với nhau. Chúc mừng sinh nhật.',
    fa7: 'Chúc {name} một sinh nhật thật vui. {Ban} có ý nghĩa rất lớn với tất cả chúng tôi.',
    fa8: '{name} ơi, chúc mừng sinh nhật! Định tặng quà xịn lắm, nhưng được làm người nhà của tôi cũng là một món quà rồi.',

    // SIBLING
    si1: 'Chúc mừng sinh nhật {name}! Với tư cách là đứa em/anh chị mà {ban} cưng nhất, không có chi vì lời chúc tuyệt vời này.',
    si2: '{name} à, mẹ lúc nào cũng thương {ban} hơn, nhưng tôi vẫn ngầu hơn. Chúc sinh nhật vui vẻ!',
    si3: 'Gửi người anh chị em tuyệt vời của tôi, {name}. Có cãi nhau thật, nhưng thiếu {ban} là tôi lạc lối luôn.',
    si4: 'Chung một quá khứ, đan xen một tương lai. Chúc mừng sinh nhật người bạn đầu đời của tôi, {name}.',
    si5: 'Chúc mừng sinh nhật {name}! Nhớ nhé, tôi biết hết bí mật của {ban} và tôi không ngại dùng đâu.',
    si6: '{name} à, tôi cười vì {ban} là anh chị em của tôi. Tôi cười to hơn vì {ban} chẳng làm gì được chuyện đó!',
    si7: 'Chúc mừng sinh nhật {name}. Lớn lên cùng {ban} là chuyến phiêu lưu đẹp nhất đời tôi.',
    si8: 'Gửi {name}, người vừa là ruột thịt vừa là bạn thân. Chúc một tuổi mới thật rực rỡ.',

    // BROTHER
    br1: 'Chúc mừng sinh nhật {name}! Yên tâm, tôi sẽ không kể cho ai nghe {ban} "trẻ trâu" cỡ nào đâu.',
    br2: 'Gửi anh/em trai {name}, cảm ơn vì đã luôn đứng sau lưng tôi. Chúc một sinh nhật tuyệt nhất.',
    br3: '{name} có thể lớn tuổi hơn, nhưng tôi vẫn là đứa dễ thương hơn. Chúc mừng sinh nhật!',
    br4: 'Anh em là người bạn mà cuộc đời tặng sẵn. Chúc mừng sinh nhật người đồng hành thật lòng nhất của tôi, {name}.',
    br5: 'Chúc mừng sinh nhật {name}! Mừng bằng cách làm chuyện gì đó mà mẹ chắc chắn sẽ không duyệt nhé.',
    br6: '{name} à, tôi tự hào về con người {ban} đang trở thành. Chúc một sinh nhật thật tuyệt vời.',
    br7: 'Chúc mừng sinh nhật anh/em trai {name}. Hôm nay ráng đừng làm bể món gì nhé.',
    br8: 'Gửi người anh em tuyệt nhất thế giới, {name}. Sự tử tế của {ban} truyền cảm hứng cho tôi mỗi ngày.',

    // SISTER
    sr1: 'Chúc mừng sinh nhật chị/em gái xinh đẹp của tôi, {name}. {Ban} bước vào đâu là chỗ đó sáng lên.',
    sr2: '{name} vừa là chị em, vừa là người tâm sự, vừa là người tôi hay mượn đồ. Chúc mừng sinh nhật!',
    sr3: 'Như một đóa hoa vẫn nở giữa gian khó, {ban} khiến tôi nể phục, {name}. Chúc mừng sinh nhật.',
    sr4: 'Chúc mừng sinh nhật {name}! Cảm ơn vì đã thử hết mấy trò dại trước để tôi còn biết đường tránh.',
    sr5: 'Gửi {name}, cuộc sống của tôi tốt hơn rất nhiều vì có {ban}. Chúc một ngày thật kỳ diệu.',
    sr6: 'Chúc mừng sinh nhật {name}! Tôi hứa sẽ không kể mẹ nghe chuyện hồi đó của hai đứa mình.',
    sr7: '{Ban} không chỉ là chị em, {name} ạ, {ban} còn là bạn thân của tôi. Chúc mừng sinh nhật.',
    sr8: '{name} ơi, chúc sinh nhật của {ban} rực rỡ và "náo loạn" đúng chất {ban}!',

    // FATHER
    d1: 'Chúc mừng sinh nhật bố, {name}. Cảm ơn bố vì đã là người hùng, là kim chỉ nam và là hậu phương lớn nhất của con.',
    d2: 'Gửi bố {name}, sự từng trải của bố là chiếc la bàn đã dẫn con đi qua bao giông bão.',
    d3: 'Chúc mừng sinh nhật {name}! Bố trông chẳng già đi ngày nào so với... đúng tuổi của bố!',
    d4: '{name} ơi, chúc ngày sinh nhật của bố đầy những câu đùa nhạt và những giấc ngủ trưa dài.',
    d5: 'Bố ơi, {name}, mọi thứ con có hôm nay đều nhờ niềm tin bố dành cho con. Chúc bố sinh nhật thật vui.',
    d6: 'Như một cây cổ thụ vững chãi, bố là bóng mát và là sức mạnh của cả nhà. Chúc mừng sinh nhật, {name}.',
    d7: 'Chúc mừng sinh nhật người đã dạy con mọi thứ, {name}. À, gần như mọi thứ.',
    d8: 'Với thế giới bố chỉ là một người, nhưng với con bố là cả thế giới, {name}. Chúc mừng sinh nhật.',

    // MOTHER
    m1: 'Chúc mừng sinh nhật mẹ, {name}. Tình thương của mẹ là nhịp đập của cả gia đình này. Cảm ơn mẹ vì tất cả.',
    m2: 'Gửi mẹ {name}, sự dịu dàng và kiên nhẫn vô tận của mẹ là điều kỳ diệu mỗi ngày. Chúc mẹ một sinh nhật thật đẹp.',
    m3: '{name} ơi, hôm nay mẹ xứng đáng miếng bánh to nhất. Chủ yếu là vì đã chịu đựng được con!',
    m4: 'Chúc mừng sinh nhật {name}! Con là thành tựu lớn nhất của mẹ đó, nên là không có chi nhé.',
    m5: 'Mẹ ơi, {name}, mẹ là ngôi nhà đầu tiên và cũng là chốn bình yên mãi mãi của con. Chúc mừng sinh nhật.',
    m6: 'Tình thương của mẹ là ánh bình minh làm sáng mọi buổi sớm. Chúc mừng sinh nhật, {name}.',
    m7: 'Chúc mừng sinh nhật người phụ nữ biết chính xác mọi thứ trong nhà này nằm ở đâu, {name}!',
    m8: '{name} ơi, không ai giống mẹ cả. Con mong sinh nhật của mẹ đặc biệt như chính mẹ vậy.',

    // GRANDFATHER
    gf1: 'Chúc mừng sinh nhật ông, {name}. Những câu chuyện và bài học của ông là kho báu con thích nhất.',
    gf2: 'Gửi ông {name}, một cuộc đời sống trọn vẹn là một tác phẩm, và của ông là tác phẩm kinh điển.',
    gf3: 'Chúc mừng sinh nhật {name}! Hôm nay ông đừng nghịch nhiều quá nha.',
    gf4: '{name} là người duy nhất được phép cho con ăn kẹo trước bữa cơm đó. Chúc mừng sinh nhật ông!',
    gf5: 'Ông {name} ơi, ông có một tấm lòng vàng. Chúc ông sinh nhật thật hạnh phúc.',
    gf6: 'Di sản của ông được viết bằng tình thương của cả gia đình. Chúc mừng sinh nhật, {name}.',
    gf7: 'Gửi {name}, cảm ơn ông vì luôn có một đôi tai chịu nghe và một cái ôm thật ấm. Chúc mừng sinh nhật.',
    gf8: 'Chúc mừng sinh nhật {name}! Những gì ông quên còn nhiều hơn những gì con biết.',

    // GRANDMOTHER
    gm1: 'Chúc mừng sinh nhật bà, {name}. Sự dịu dàng và tình thương bao la của bà là tất cả với con.',
    gm2: 'Gửi bà {name}, đôi tay bà đã dệt nên cả gia đình này bằng những sợi chỉ của yêu thương.',
    gm3: '{name} ơi, cảm ơn bà vì hay dúi tiền cho con lúc không ai để ý. Chúc mừng sinh nhật!',
    gm4: 'Chúc mừng sinh nhật {name}! Món bà nấu là lý do duy nhất con hay về thăm. Đùa thôi... chắc vậy.',
    gm5: 'Bà {name} ơi, bà là ánh sáng của cả nhà. Chúc bà một ngày ngập tràn niềm vui.',
    gm6: 'Thời gian như dừng lại trong vòng tay ấm áp của bà. Chúc mừng sinh nhật, {name}.',
    gm7: 'Gửi {name} thương yêu, cảm ơn bà vì đã cưng chiều và thương con vô điều kiện. Chúc mừng sinh nhật.',
    gm8: 'Chúc mừng sinh nhật {name}! Bà cứ rạng rỡ và cứ "chỉ huy" cả nhà như vậy nhé.',

    // UNCLE
    un1: 'Chúc mừng sinh nhật {name}! Cảm ơn chú vì đã luôn ủng hộ và là một người chú tuyệt vời.',
    un2: 'Gửi {name}, ông chú vui tính luôn cho con phá luật một chút. Chúc mừng sinh nhật!',
    un3: 'Chúc mừng sinh nhật {name}! Mong chú đừng bao giờ "già" đi nhé.',
    un4: 'Chú {name} ơi, con luôn mong tới ngày được gặp chú. Chúc chú một sinh nhật tuyệt nhất.',
    un5: 'Một sự hiện diện vững vàng và một ngọn đèn dẫn lối. Chúc mừng sinh nhật người chú tuyệt vời của con, {name}.',
    un6: 'Chúc mừng sinh nhật {name}! Chú giống như một người bố nhưng ngầu hơn và ít luật lệ hơn nhiều.',
    un7: 'Gửi {name}, mong sinh nhật của chú đầy niềm vui như những gì chú vẫn mang tới cho mọi người.',
    un8: 'Chúc mừng sinh nhật {name}! Hôm nay chú đừng làm cả nhà quê quá nha.',

    // AUNT
    au1: 'Chúc mừng sinh nhật {name}. Cô luôn như người mẹ thứ hai của con, và con thương cô nhiều lắm.',
    au2: 'Gửi cô {name} rực rỡ, mừng người sành điệu nhất nhà mình!',
    au3: 'Chúc mừng sinh nhật {name}! Cảm ơn cô vì luôn có những "tin sốt dẻo" hay nhất.',
    au4: 'Cô {name} ơi, sự tử tế và hào phóng của cô truyền cảm hứng cho con mỗi ngày. Chúc cô một sinh nhật thật đẹp.',
    au5: 'Như một viên ngọc quý, năng lượng của cô làm sáng cả gia đình. Chúc mừng sinh nhật, {name}.',
    au6: 'Chúc mừng sinh nhật {name}! Đi mua sắm thôi và hôm nay coi như calo không tồn tại nhé.',
    au7: 'Gửi người cô tuyệt vời {name}, chúc cô một ngày ngọt ngào và đáng yêu như chính cô.',
    au8: 'Chúc mừng sinh nhật {name}! Cô cứ toả sáng và cứ "lầy" như vậy nhé.',

    // COUSIN
    co1: 'Chúc mừng sinh nhật {name}! Mình là anh em họ do máu mủ, nhưng làm bạn là do tự chọn.',
    co2: 'Gửi {name}, người duy nhất thật sự hiểu nhà mình "dị" cỡ nào. Chúc mừng sinh nhật!',
    co3: 'Chúc mừng sinh nhật người anh em họ tuyệt vời, {name}. Biết ơn vì tất cả kỷ niệm thời thơ ấu.',
    co4: 'Những nhánh cây trên cùng một thân, mọc về những hướng khác nhau nhưng chung một gốc rễ. Chúc mừng sinh nhật, {name}.',
    co5: 'Chúc mừng sinh nhật {name}! Hôm nay quậy một chút đi, cho giống ngày xưa.',
    co6: '{name} ơi, chúc {ban} một sinh nhật đầy ắp những điều {ban} thích nhất.',
    co7: 'Chúc mừng sinh nhật {name}! Cảm ơn vì đã làm mấy buổi họp họ hàng bớt chán.',
    co8: 'Gửi {name}, một người anh em họ mà thật ra là bạn tri kỷ cả đời. Chúc mừng sinh nhật thật vui.',

    // SON
    so1: 'Chúc mừng sinh nhật {name}. Nhìn con trưởng thành như hôm nay là niềm vui lớn nhất của bố mẹ.',
    so2: 'Gửi con trai {name}, con là ánh nắng ban mai xua đi những đêm tối nhất của bố mẹ. Chúc mừng sinh nhật.',
    so3: 'Chúc mừng sinh nhật {name}! Con cao hơn bố mẹ rồi đó, nhưng vẫn bị phạt như thường nhé.',
    so4: '{name} à, cái ví của bố mẹ ghét con lắm, nhưng trái tim thì thương con vô cùng. Chúc mừng sinh nhật con trai!',
    so5: '{name} thương yêu, bố mẹ tự hào về con vô cùng. Chúc con một sinh nhật thật tuyệt vời.',
    so6: 'Mong đường con đi luôn có sao trời soi lối và trái tim con luôn đầy can đảm, {name}. Chúc mừng sinh nhật.',
    so7: 'Chúc mừng sinh nhật {name}! Đừng quên ai là người dạy con cầm cái thìa nhé.',
    so8: 'Gửi cậu con trai tuyệt vời của bố mẹ, {name}. Thế giới này đẹp hơn vì có con. Chúc mừng sinh nhật.',

    // DAUGHTER
    da1: 'Chúc mừng sinh nhật {name}. Con là món quà quý giá nhất mà bố mẹ từng nhận được.',
    da2: 'Gửi con gái {name}, con là một tác phẩm của sự dịu dàng và ngọn lửa. Cứ toả sáng theo cách của con nhé.',
    da3: 'Chúc mừng sinh nhật {name}! Bố mẹ thương con cả trong cái giai đoạn dở dở ương ương hồi cấp ba nữa.',
    da4: '{name} à, con lấy mất trái tim, giấc ngủ và gần hết sự tỉnh táo của bố mẹ. Mà bố mẹ chẳng đổi lấy gì đâu. Chúc mừng sinh nhật!',
    da5: '{name} ngọt ngào của bố mẹ, bố mẹ tự hào sâu sắc về người phụ nữ con đang trở thành. Chúc con sinh nhật thật vui.',
    da6: 'Mong con luôn nhảy theo nhịp của trái tim mình, {name}. Chúc mừng sinh nhật.',
    da7: 'Chúc mừng sinh nhật {name}! Đừng lớn nhanh quá, bố mẹ chưa kịp quen đâu.',
    da8: 'Gửi cô con gái yêu, {name}. Con làm mỗi ngày đều sáng hơn. Chúc mừng sinh nhật.',

    // GUARDIAN
    gu1: 'Chúc mừng sinh nhật {name}. Cảm ơn vì đã bước vào, đã đứng ra và đã thương con hết lòng.',
    gu2: 'Gửi {name}, chốn bình yên và cũng là thành trì của con. Tình thương ấy đã tạo nên cả thế giới của con. Chúc mừng sinh nhật.',
    gu3: 'Chúc mừng sinh nhật {name}! Cảm ơn vì đã nuôi con lớn mà vẫn sống sót qua quá trình đó.',
    gu4: '{name} à, gia đình không phải lúc nào cũng là máu mủ; đó là người có mặt khi mình cần. Cảm ơn vì đã luôn có mặt. Chúc mừng sinh nhật.',
    gu5: 'Một ngôi sao dẫn đường giữa đêm tối. Chúc mừng sinh nhật, {name}.',
    gu6: 'Chúc mừng sinh nhật {name}! Con lớn lên ổn áp thế này thì chắc chắn là nhờ ai đó đã làm đúng.',
    gu7: 'Gửi {name}, sự kiên nhẫn và quan tâm không ngừng của người có ý nghĩa rất lớn với con. Chúc một sinh nhật thật tuyệt.',
    gu8: 'Chúc mừng sinh nhật {name}! Con hứa rồi sẽ có ngày thôi thử thách sự kiên nhẫn của người.',

    // COLLEAGUE
    cl1: 'Chúc mừng sinh nhật {name}! Giả vờ làm việc trong lúc ăn bánh sinh nhật của {ban} nào.',
    cl2: 'Gửi một người đồng nghiệp tuyệt vời, {name}. Chúc {ban} một tuổi mới thật nhiều thành công và hạnh phúc.',
    cl3: 'Chúc mừng sinh nhật {name}! Mong hôm nay hộp thư của {ban} trống trơn và ly cà phê thì thật đậm.',
    cl4: '{name} à, làm việc cùng {ban} thật sự rất dễ chịu. Chúc {ban} một sinh nhật tuyệt nhất!',
    cl5: 'Mong năm mới mang tới cho {name} những chân trời mới và những chiến thắng đáng nhớ. Chúc mừng sinh nhật.',
    cl6: 'Chúc mừng sinh nhật {name}! Yên tâm, hôm nay tôi sẽ không đặt cuộc họp nào cho {ban} đâu.',
    cl7: 'Gửi {name}, lý do duy nhất giúp tôi sống sót qua mỗi thứ Hai. Chúc mừng sinh nhật!',
    cl8: 'Chúc mừng sinh nhật {name}! Mừng thêm một năm phối hợp ăn ý và cùng nhau về đích.',

    // MENTOR
    me1: 'Chúc mừng sinh nhật {name}. Sự dẫn dắt của {ban} đã thay đổi rất nhiều trong công việc và cuộc sống của tôi.',
    me2: 'Gửi {name}, ngọn hải đăng soi đường cho những người đi sau. Chúc {ban} một sinh nhật thật đẹp.',
    me3: 'Chúc mừng sinh nhật {name}! Cảm ơn vì đã chịu đựng cả tá câu hỏi của tôi.',
    me4: '{name} à, tôi biết ơn sự kiên nhẫn và niềm tin {ban} dành cho tôi. Chúc một sinh nhật thật tuyệt vời.',
    me5: 'Người dẫn dắt giỏi là người trồng cây mà không mong được ngồi dưới bóng mát ấy. Chúc mừng sinh nhật, {name}.',
    me6: 'Chúc mừng sinh nhật {name}! Hôm nay tôi hứa sẽ nghe lời khuyên của {ban} thật đó.',
    me7: 'Gửi một người dẫn dắt đặc biệt, {name}. Chúc {ban} tất cả niềm vui và thành công mà {ban} xứng đáng.',
    me8: 'Chúc mừng sinh nhật {name}! Chúc ngày của {ban} sâu sắc và chất lượng như những lời khuyên {ban} hay cho.',
};
