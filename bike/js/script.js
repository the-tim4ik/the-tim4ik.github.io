let btnHide = document.querySelector('.menu__btn');
let div = document.querySelector('.menu__hide');
let divStyle = document.querySelector('.menu__hide__style');
let divClick = document.querySelector('.menu__click');
btnHide.onclick = function () {
    div.classList.toggle('menu__show');
    btnHide.classList.toggle('menu__btn__move');
    btnHide.classList.toggle('fa-times');
    divClick.classList.toggle('menu__click__bg');
}
divClick.onclick = function () {
    div.classList.remove('menu__show');
    btnHide.classList.remove('menu__btn__move');
    btnHide.classList.remove('fa-times');
    divClick.classList.remove('menu__click__bg');
}