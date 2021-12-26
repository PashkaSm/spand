$(document).ready(function () {
    $('.ua').click(function () {
        document.title = 'Заробіток в інтернеті';
        $(".serf").text('Серфінг');
        $(".kran").text('Крани');
        $(".first").text('Спершу створіть обліковий запис на (');
        $(".last").text(', щоб отримувати виплати');
        $(".logo__text").text(document.title);
        $(".logo__text").text(document.title);
        $(".seo_text").text(date.seoua);
        $(".wmzona_text").text(date.wmzonaua);
        $(".Coinpayu_text").text(date.coinpayuua);
        $(".adBTC_text").text(date.adBTCua);
        $(".serf_text").text(date.surfebeua);
    })
    $('.ru').click(function () {
        document.title = 'Заработок в интернете';
        $(".serf").text('Серфинг');
        $(".kran").text('Краны');
        $(".first").text('Сначала создайте аккаунт на (');
        $(".last").text(', чтобы получать выплаты');
        $(".logo__text").text(document.title);
        $(".seo_text").text(date.seoru);
        $(".wmzona_text").text(date.wmzonaru);
        $(".Coinpayu_text").text(date.coinpayurus);
        $(".adBTC_text").text(date.adBTCru);
        $(".serf_text").text(date.surfeberu);
    })
})