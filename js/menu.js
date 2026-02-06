const header = document.querySelector("header");
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');


window.addEventListener("scroll", function(){
    header.classList.toggle('sticky', window.scrollY > 0);
});

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
});