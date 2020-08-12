$(document).ready(function () {
    $('.kinhnghiem').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: 500
        },'slow')
    });
    $('.kinang').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: 800
        },'slow')
    });
    $('.muctieu').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: 1200
        },'slow')
    });
});