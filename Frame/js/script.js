let btnHide = document.querySelector('.menu__btn');
let div = document.querySelector('.menu__hide');
let body = document.querySelector('.body')
btnHide.onclick = function () {
    div.classList.toggle('menu__show');
    btnHide.classList.toggle('menu__btn__move');
    btnHide.classList.toggle('fa-times');
    body.classList.toggle('body__js');
}