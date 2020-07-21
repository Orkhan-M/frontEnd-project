$(document).ready(function() {

    $(document).on("click", ".card-header1", function() {
        if ($(this).next()[0] != $(".active1")[0]) {
            $(".active1").slideUp("slow", function() {
                $(this).removeClass("active1")
            });
            $(this).next().slideDown("slow", function() {
                $(this).addClass("active1")
            })
        } else {
            $(".active1").slideUp("slow", function() {
                $(this).removeClass("active1")
            });
        }
    })

    $(document).on("click", ".card-header2", function() {
        if ($(this).next()[0] != $(".active2")[0]) {
            $(".active2").slideUp("slow", function() {
                $(this).removeClass("active2")
            });
            $(this).next().slideDown("slow", function() {
                $(this).addClass("active2")
            })
        } else {
            $(".active2").slideUp("slow", function() {
                $(this).removeClass("active2")
            });
        }
    })

    $(document).on("click", ".card-header3", function() {
        if ($(this).next()[0] != $(".active3")[0]) {
            $(".active3").slideUp("slow", function() {
                $(this).removeClass("active3")
            });
            $(this).next().slideDown("slow", function() {
                $(this).addClass("active3")
            })
        } else {
            $(".active3").slideUp("slow", function() {
                $(this).removeClass("active3")
            });
        }
    })

    $(document).on("click", ".card-header4", function() {
        if ($(this).next()[0] != $(".active4")[0]) {
            $(".active4").slideUp("slow", function() {
                $(this).removeClass("active4")
            });
            $(this).next().slideDown("slow", function() {
                $(this).addClass("active4")
            })
        } else {
            $(".active4").slideUp("slow", function() {
                $(this).removeClass("active4")
            });
        }
    })
})