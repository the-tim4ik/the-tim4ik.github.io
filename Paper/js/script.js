let btnHide = document.querySelector('.menu-burger__btn');
let div = document.querySelector('.menu__hide');
let body = document.querySelector('.body');
btnHide.onclick = function () {
    div.classList.toggle('menu__show');
    body.classList.toggle('body__js');
}