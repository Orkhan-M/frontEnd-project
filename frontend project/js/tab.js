let menus = document.querySelectorAll(".menu div");
let contents = document.querySelectorAll(".content div");

for (const menu of menus) {
    menu.addEventListener("click", function() {
        let active = document.querySelector(".active")
        this.classList.add("active");
        active.classList.remove("active");
        let index = this.getAttribute("data-index");

        contents.forEach(content => {
            if (content.getAttribute("data-index") == index) {
                content.classList.remove("d-none")
            } else {
                content.classList.add("d-none")
            }
        })
    })
}
let menus2 = document.querySelectorAll(".menu2 div");
let contents2 = document.querySelectorAll(".content2 div");
for (const menu of menus2) {
    menu.addEventListener("click", function() {
        let active2 = document.querySelector(".active2")
        this.classList.add("active2");
        active2.classList.remove("active2");
        let z = this.getAttribute("data-z");

        contents2.forEach(contents2 => {
            if (contents2.getAttribute("data-z") == z) {
                contents2.classList.remove("d-none")
            } else {
                contents2.classList.add("d-none")
            }
        })
    })
}

let menus3 = document.querySelectorAll(".menu3 div");
let contents3 = document.querySelectorAll(".content3 div");
for (const menu of menus3) {
    menu.addEventListener("click", function() {
        let active3 = document.querySelector(".active3")
        this.classList.add("active3");
        active3.classList.remove("active3");
        let z = this.getAttribute("data-z");

        contents3.forEach(contents3 => {
            if (contents3.getAttribute("data-z") == z) {
                contents3.classList.remove("d-none")
            } else {
                contents3.classList.add("d-none")
            }
        })
    })
}

let menus4 = document.querySelectorAll(".menu4 div");
let contents4 = document.querySelectorAll(".content4 div");
for (const menu of menus4) {
    menu.addEventListener("click", function() {
        let active4 = document.querySelector(".active4")
        this.classList.add("active4");
        active4.classList.remove("active4");
        let z = this.getAttribute("data-z");

        contents4.forEach(contents4 => {
            if (contents4.getAttribute("data-z") == z) {
                contents4.classList.remove("d-none")
            } else {
                contents4.classList.add("d-none")
            }
        })
    })
}