//import $ from 'jquery';

$(document).ready(function () {

    let fulla = $("#Home").offset().top;
    let fullb = $("#About").offset().top;
    let fullc = $("#Contact").offset().top;

    function scr(index) {
        $(".nav>li").removeClass("active").eq(index).addClass("active")
    }

    $(window).scroll(function () {
        let scrTop = $(window).scrollTop() + fulla ;
        if (scrTop >= fulla && scrTop < fullb) {
            scr(0);
        } else if (scrTop > fullb && scrTop < fullc) {
            scr(1);
        } else {
            scr(2);
        }
    })

    $("a[href^='#']").click(function () {
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top
        }, 700);
    });
});