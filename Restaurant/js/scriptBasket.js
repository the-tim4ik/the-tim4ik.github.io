let btnHide = document.querySelector('.menu__btn');
let div = document.querySelector('.menu__hide');
let divClose = document.querySelector('.menu__close');
let body = document.querySelector('body');
let popup = document.querySelector('.popup');
let popupArea = document.querySelector('.popup__area');
let popupClose = document.querySelector('.popup__close');
let popupBooking = document.querySelectorAll('.booking__popup');
let popupBtn = document.querySelector('.popup__btn');
let number = document.querySelector('#number');
let popupCopy = document.querySelector('.fa-clone');
let copy = document.querySelector('#copy');
let popupError = document.querySelector('.popup__NoError');

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