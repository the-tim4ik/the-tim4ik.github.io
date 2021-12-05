let btnHide = document.querySelector('.menu__btn');
let div = document.querySelector('.menu__hide');
btnHide.onclick = function () {
    div.classList.toggle('menu__show');
    btnHide.classList.toggle('menu__btn__move');
    btnHide.classList.toggle('fa-times');
}