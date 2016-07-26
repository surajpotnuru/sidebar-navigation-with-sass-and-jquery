$(document).ready(function () {
    var main = $('.main');
    var sidebar = $('.sidebar');
    var hoverScreen = $('.hover-screen');

    sidebar.height($(window).height());
    main.height($(window).height());
    window.addEventListener("resize", function () {
        sidebar.height($(window).height());
        main.height($(window).height());
    });

    $("#toggleButton").click(function (e) {
        if (main.hasClass('open')) {
            main.removeClass('open')
            sidebar.removeClass('open')
            hoverScreen.hide();

        } else {
            main.addClass('open');
            sidebar.addClass('open');
            hoverScreen.show();
        }
    });

    hoverScreen.click(function(e){
        e.stopPropagation();
        $("#toggleButton").trigger("click");
    });
});