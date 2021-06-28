$(document).ready(function() {
    $("#navigationbar").on({
        mouseenter: function() {
            $(this).css("background-color", "lightskyblue");
        },
        mouseleave: function() {
            $(this).css("background-color", "transparent");
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