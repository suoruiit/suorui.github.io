$(document).ready(function () {
    $(".radioChange").click(function () {
        var imgObj = $(this).attr("src");
        //点亮
        if (imgObj.indexOf("_C.png") == -1) {
            $(".radioChange").each(function () {
                var src1 = $(this).attr("src");
                if (src1.indexOf("_C.png") != -1) {
                    var src2 = src1.substring(0, src1.indexOf("_C.png")) + ".png";
                    $(this).attr("src", src2);
                }
            });
            var src = imgObj.substring(0, imgObj.indexOf(".png")) + "_C.png";
        }
        //点灭
        else {
            var src = imgObj.substring(0, imgObj.indexOf("_C.png")) + ".png";
        }
        $(this).attr("src", src);
    });

    $(".radioChange1").click(function () {
        var imgObj = $(this).attr("src");
        //点亮
        if (imgObj.indexOf("_C.png") == -1) {
            $(".radioChange1").each(function () {
                var src1 = $(this).attr("src");
                if (src1.indexOf("_C.png") != -1) {
                    var src2 = src1.substring(0, src1.indexOf("_C.png")) + ".png";
                    $(this).attr("src", src2);
                }
            });
            var src = imgObj.substring(0, imgObj.indexOf(".png")) + "_C.png";
        }
        //点灭
        else {
            var src = imgObj.substring(0, imgObj.indexOf("_C.png")) + ".png";
        }
        $(this).attr("src", src);
    });

    $(".radioChange2").click(function () {
        var imgObj = $(this).attr("src");
        //点亮
        if (imgObj.indexOf("_C.png") == -1) {
            $(".radioChange2").each(function () {
                var src1 = $(this).attr("src");
                if (src1.indexOf("_C.png") != -1) {
                    var src2 = src1.substring(0, src1.indexOf("_C.png")) + ".png";
                    $(this).attr("src", src2);
                }
            });
            var src = imgObj.substring(0, imgObj.indexOf(".png")) + "_C.png";
        }
        //点灭
        else {
            var src = imgObj.substring(0, imgObj.indexOf("_C.png")) + ".png";
        }
        $(this).attr("src", src);
    });
    $("#other-1").click(function () {
            $(".group").css("display", "none");
            $(".group2").css("display", "block");
        }
    );
    $("#other-2").click(function () {
            $(".group2").css("display", "none");
            $(".group").css("display", "block");
        }
    );
    $("#other-3").click(function () {
            $(".group3").css("display", "none");
            $(".group5").css("display", "none");
            $(".group4").css("display", "block");
        }
    );
    $("#other-4").click(function () {
            $(".group3").css("display", "none");
            $(".group4").css("display", "none");
            $(".group5").css("display", "block");
        }
    );
    $("#other-5").click(function () {
            $(".group4").css("display", "none");
            $(".group5").css("display", "none");
            $(".group3").css("display", "block");
        }
    );

    $(".checkboxChange").click(function () {
        var imgObj = $(this).attr("src");
        //点亮
        if (imgObj.indexOf("_C.png") == -1) {
            var src1 = $(this).attr("src");
            if (src1.indexOf("_C.png") != -1) {
                var src2 = src1.substring(0, src1.indexOf("_C.png")) + ".png";
                $(this).attr("src", src2);
            }
            var src = imgObj.substring(0, imgObj.indexOf(".png")) + "_C.png";
        }
        //点灭
        else {
            var src = imgObj.substring(0, imgObj.indexOf("_C.png")) + ".png";
        }
        $(this).attr("src", src);
    });
})

(function ($) {
    'use strict';

    $(function () {
        var $fullText = $('.admin-fullText');
        $('#admin-fullscreen').on('click', function () {
            $.AMUI.fullscreen.toggle();
        });

        $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function () {
            $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
        });
    });
})(jQuery);
