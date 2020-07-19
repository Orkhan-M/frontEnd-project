$(document).ready(function() {

    let rightBtn = document.querySelector(".right");
    let leftBtn = document.querySelector(".left");

    rightBtn.addEventListener("click", function() {
        let active = document.querySelector(".active");
        active.classList.remove("active");
        if (active.nextElementSibling != null) {
            active.nextElementSibling.classList.add("active");
        } else {
            active.parentNode.firstElementChild.classList.add("active");
        }

    })

    $(document).on("click", ".right", function() {
        console.log($((".active")[0]).next())
        $(".active")[0].removeClass("active");
        if ($(".active")[0].next() != null) {
            $(".active")[0].next().addClass("active");
        } else {
            $(".active")[0].prevAll()[0].addClass("active")
        }
    })

    leftBtn.addEventListener("click", function() {
        let active = document.querySelector(".active");
        active.classList.remove("active");
        if (active.previousElementSibling != null) {
            active.previousElementSibling.classList.add("active");
        } else {
            active.parentNode.lastElementChild.classList.add("active");
        }

    })


})