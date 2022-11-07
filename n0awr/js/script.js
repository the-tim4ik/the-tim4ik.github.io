let slides = document.querySelectorAll('.mySlides');
let btn__next = document.querySelector('.next');
let btn__prev = document.querySelector('.prev');
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
    if (slider.isRun) {
     return false;
    }
    slider.isRun = true;
    clearInterval(timer);
    timer2 = setInterval(next, 10000);
}
btn__next.addEventListener("click", slider);
function slider2() {
    if (slider2.isRun) {
        return false;
    }
    slider2.isRun = true;
    clearInterval(timer2);
    timer3 = setInterval(next, 10000);
}
btn__prev.addEventListener("click", slider2);


let slides2 = document.querySelectorAll('.mySlides2');
let i2 = 0;
slides2[i2].classList.add('block');
let btn__next2 = document.querySelector('.next2');
let btn__prev2 = document.querySelector('.prev2');

function next2() {
    slides2[i2].classList.remove('block');
    i2++;
    if (i2 >= slides2.length) {
        i2 = 0;
    }
    slides2[i2].classList.add('block');
}
btn__next2.addEventListener("click", next2);

function prev2() {
    slides2[i2].classList.remove('block');
    i2--;
    if (i2 < 0) {
        i2 = slides.length - 1;
    }
    slides2[i2].classList.add('block');
}
btn__prev2.addEventListener("click", prev2);

function slider11() {
    if (slider11.isRun) {
     return false;
    }
    slider11.isRun = true;
    clearInterval(timer);
    timer22 = setInterval(next2, 10000);
}
btn__next2.addEventListener("click", slider11);
function slider22() {
    if (slider22.isRun) {
        return false;
    }
    slider22.isRun = true;
    clearInterval(timer22);
    timer3 = setInterval(next2, 10000);
}
btn__prev2.addEventListener("click", slider22);

let timer11 = setInterval(next2, 5000);
let timer22;
let timer33;
function slider11() {
    if (slider11.isRun) {
     return false;
    }
    slider11.isRun = true;
    clearInterval(timer11);
    timer22 = setInterval(next2, 10000);
}
btn__next.addEventListener("click", slider11);
function slider22() {
    if (slider22.isRun) {
        return false;
    }
    slider22.isRun = true;
    clearInterval(timer22);
    timer33 = setInterval(next2, 10000);
}
btn__prev.addEventListener("click", slider22);




let slides3 = document.querySelectorAll('.mySlides3');
let i3 = 0;
slides3[i3].classList.add('block');
let btn__next3 = document.querySelector('.next3');
let btn__prev3 = document.querySelector('.prev3');

function next3() {
    slides3[i3].classList.remove('block');
    i3++;
    if (i3 >= slides3.length) {
        i3 = 0;
    }
    slides3[i3].classList.add('block');
}
btn__next3.addEventListener("click", next3);

function prev3() {
    slides3[i3].classList.remove('block');
    i3--;
    if (i3 < 0) {
        i3 = slides.length - 1;
    }
    slides3[i3].classList.add('block');
}
btn__prev3.addEventListener("click", prev3);

function slider33() {
    if (slider33.isRun) {
     return false;
    }
    slider33.isRun = true;
    clearInterval(timer111);
    timer2 = setInterval(next3, 10000);
}
btn__next2.addEventListener("click", slider33);
function slider333() {
    if (slider333.isRun) {
        return false;
    }
    slider333.isRun = true;
    clearInterval(timer2);
    timer3 = setInterval(next3, 10000);
}
btn__prev2.addEventListener("click", slider333);

function slider111() {
    if (slider111.isRun) {
     return false;
    }
    slider111.isRun = true;
    clearInterval(timer111);
    timer2 = setInterval(next3, 10000);
}
btn__next2.addEventListener("click", slider111);
function slider222() {
    if (slider222.isRun) {
        return false;
    }
    slider222.isRun = true;
    clearInterval(timer2);
    timer3 = setInterval(next3, 10000);
}
btn__prev2.addEventListener("click", slider222);

let timer111 = setInterval(next3, 5000);
let timer222;
let timer333;
function slider111() {
    if (slider111.isRun) {
     return false;
    }
    slider111.isRun = true;
    clearInterval(timer111);
    timer222 = setInterval(next3, 10000);
}
btn__next.addEventListener("click", slider111);
function slider222() {
    if (slider222.isRun) {
        return false;
    }
    slider222.isRun = true;
    clearInterval(timer222);
    timer333 = setInterval(next3, 10000);
}
btn__prev.addEventListener("click", slider222);