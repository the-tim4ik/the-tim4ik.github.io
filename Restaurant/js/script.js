let btnHide = document.querySelector('.menu__btn');
let div = document.querySelector('.menu__hide');
let divClose = document.querySelector('.menu__close');
let body = document.querySelector('body');
let popup = document.querySelector('.popup');
let popupArea = document.querySelector('.popup__area');
let popupClose = document.querySelector('.popup__close');
let slides = document.querySelectorAll('.reviews__slider');
let sliderBtn = document.querySelectorAll('.reviews__col');
let popupInp = document.querySelectorAll('.popup__input');
let popupBooking = document.querySelectorAll('.booking__popup');
let popupBtn = document.querySelector('.popup__btn');
let number = document.querySelector('#number');
let popupCopy = document.querySelector('.fa-clone');
let copy = document.querySelector('#copy');
let popupError = document.querySelector('.popup__NoError');
let i = 0;

function next() {
    slides[i].classList.remove('block');
    i++;
    if (i >= slides.length) {
        i = 0;
    }
    slides[i].classList.add('block');
}
let timer = setInterval(next, 5000);

// sliderBtn.onclick = function () {

// }

for (let j = 0; j < popupBooking.length; j++) {
    popupBooking[j].onclick = function () {
        popup.classList.add('popup__active');
    }
}
popupArea.onclick = function () {
    popup.classList.remove('popup__active');
}
popupClose.onclick = function () {
    popup.classList.remove('popup__active');
}
function remove() {
    number.classList.remove('popup__on');
    copy.classList.remove('popup__on');
}
popupBtn.onclick = function () {
    // if (popupInp.value == '') {
    //     popupError.classList.add('popup__error');
    // }
    // else {
    //     popupError.classList.remove('popup__error');
    //     number.classList.add('popup__on');
    //     setTimeout(remove, 3000);
    // }
    number.classList.add('popup__on');
    setTimeout(remove, 3000);
}
popupCopy.onclick = function () {
    copy.classList.add('popup__on');
    setTimeout(remove, 3000);
    navigator.clipboard.writeText('+999-888-76-54');
}

btnHide.onclick = function () {
    div.classList.toggle('menu__show');
    btnHide.classList.toggle('menu__active');
    body.classList.toggle('body__js');
    divClose.classList.toggle('menu__close-on');
}

divClose.onclick = function () {
    div.classList.remove('menu__show');
    btnHide.classList.remove('menu__active');
    body.classList.remove('body__js');
    divClose.classList.remove('menu__close-on');
}

window.addEventListener('load', function () {
    let loader = document.querySelector('.preloader');
    setTimeout(function () {
        loader.style.opacity = 0;
    }, 1000)
    setTimeout(function () {
        loader.style.display = 'none';
    }, 1800)
})


function myAnimScroll(element, showClass) {
    let elementHeight = element.offsetHeight;

    let temp = element.getBoundingClientRect();
    let elementPosition = temp.top + scrollY;

    let koef = 4;
    let startAnim = window.innerHeight - elementHeight / koef;
    if (elementHeight > window.innerHeight) {
        startAnim = window.innerHeight - window.innerHeight / koef;
    }

    if ((scrollY > elementPosition - startAnim) && scrollY < (elementPosition + elementHeight)) {

        element.classList.add(showClass)
    }
    else {
        if (!element.classList.contains('anim__no-again')) {

            element.classList.remove(showClass)
        }
    }
}

let animElement = document.querySelectorAll('.anim__hide-left');
for (let elements of animElement) {
    window.addEventListener('scroll', function () {
        myAnimScroll(elements, 'anim__show-left');
    })
    myAnimScroll(elements, 'anim__show-left');
}

let animElement2 = document.querySelectorAll('.anim__hide-right');
for (let elements of animElement2) {
    window.addEventListener('scroll', function () {
        myAnimScroll(elements, 'anim__show-right');
    })
    myAnimScroll(elements, 'anim__show-right');
}

let animElement4 = document.querySelectorAll('.anim__hide-puls');
for (let elements of animElement4) {
    window.addEventListener('scroll', function () {
        myAnimScroll(elements, 'anim__show-puls');
    })
    myAnimScroll(elements, 'anim__show-puls');
}