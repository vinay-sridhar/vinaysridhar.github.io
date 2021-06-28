$(document).ready(function() {
    $("#navigationbar").on({
        mouseenter: function() {
            $(this).css({
                "background": "rgb(9,227,225)",
                "background": "linear-gradient(90deg, rgba(9,227,225,1) 0%, rgba(230,255,255,1) 87%)"
            });
        },
        mouseleave: function() {
            $(this).css("background", "transparent");
        }
    })
    $(".my-navitem-class").on({
        mouseenter: function() {
            $(this).css("background-color", "white");
        },
        mouseleave: function() {
            if ($(this).hasClass("active")) {
                $(this).css("background-color", "white");
            } else {
                $(this).css("background-color", "transparent");
            }
        }
    })
})