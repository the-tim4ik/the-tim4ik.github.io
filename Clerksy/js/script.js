let btnHide = document.querySelector('.menu__btn');
let div = document.querySelector('.menu__hide');
let divStyle = document.querySelector('.menu__hide__style');
btnHide.onclick = function () {
    div.classList.toggle('menu__show');
    btnHide.classList.toggle('menu__btn__move');
    btnHide.classList.toggle('fa-times');
    divStyle.classList.toggle('menu__hide__style__bg');
}
let divClick = document.querySelector('.menu__click');
divClick.onclick = function () {
    div.classList.remove('menu__show');
    btnHide.classList.remove('menu__btn__move');
    btnHide.classList.remove('fa-times');
    divStyle.classList.remove('menu__hide__style__bg');
}