let header = document.querySelector(".header");

window.addEventListener("scroll" , function () {
    header.classList.toggle("shadow" , window.scrollY > 120);
});

let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".nav");

menuIcon.onclick = function () {
    menuIcon.classList.toggle("bx-x");
    navBar.classList.toggle("active");
};

window.onscroll = function () {
    menuIcon.classList.remove("bx-x");
    navBar.classList.remove("active");
}