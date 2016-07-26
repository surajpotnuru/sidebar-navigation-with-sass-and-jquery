$(document).ready(function () {

    var mode = "push";
    // var mode = "overlay";
    //Available modes :  push & overlay

    var hoverScreenFlag = true;
    // var hoverScreenFlag = false;
    //Change it to false to remove black overlay on screen while sidebar is open
    
    function setMode(m){
        mode = m;
    }
    function setHSFlag(hs){
        hoverScreenFlag = hs;
    }

    var sidebarWidth = "200px";

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
        if (sidebar.hasClass('open')) {
            if(mode == "push"){
                main.removeClass('open');
            }
            sidebar.removeClass('open');
            if(hoverScreenFlag){
                hoverScreen.hide();
            }

        } else {
            if(mode == "push"){
                main.addClass('open');
            }
            sidebar.addClass('open');
            if(hoverScreenFlag){
                hoverScreen.show();
            }
        }
    });

    if (hoverScreenFlag && mode == "push") {
        hoverScreen.click(function (e) {
            e.stopPropagation();
            $("#toggleButton").trigger("click");
        });
    }
    if(hoverScreenFlag && mode == "overlay"){
        hoverScreen.css("left",sidebarWidth);
        hoverScreen.click(function (e) {
            e.stopPropagation();
            $("#toggleButton").trigger("click");
        });
    }
});