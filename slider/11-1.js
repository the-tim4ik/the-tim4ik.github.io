let slides = document.querySelectorAll('.mySlides');
let btn__next = document.querySelector('.next');
let btn__prev = document.querySelector('.prev');
// let btnSlides1 = document.querySelectorAll('.js__1');
// let btnSlides2 = document.querySelectorAll('.js__2');
// let btnSlides3 = document.querySelectorAll('.js__3');
// let btnSlides4 = document.querySelectorAll('.js__4');
// let btnSlides5 = document.querySelectorAll('.js__5');
let i = 0;
slides[i].classList.add('block');

function next() {
    slides[i].classList.remove('block');
    i++;
    if (i >= slides.length) {
        i = 0;
    }
    slides[i].classList.add('block');

}
btn__next.addEventListener("click", next);

function prev() {
    slides[i].classList.remove('block');
    i--;
    if (i < 0) {
        i = slides.length - 1;
    }
    slides[i].classList.add('block');
}
btn__prev.addEventListener("click", prev);

let timer = setInterval(next, 5000);
let timer2;
let timer3;
function slider() {
    clearInterval(timer);
    timer2 = setInterval(next, 10000);
}
btn__next.addEventListener("click", slider);
function slider2() {
    clearInterval(timer2);
    timer3 = setInterval(next, 10000);
}
btn__prev.addEventListener("click", slider2);