window.addEventListener('load', function () {
    let loader = document.querySelector('.preloader');
    setTimeout(function () {
        loader.style.opacity = 0;
    }, 1000)
    setTimeout(function () {
        document.body.classList.add('body__js');
    }, 1200)
    setTimeout(function () {
        loader.style.display = 'none';
    }, 1800)
});

let btnHide = document.querySelector('.menu__btn');
let div = document.querySelector('.menu__hide');
let divClose = document.querySelector('.menu__close');

btnHide.onclick = function () {
    div.classList.toggle('menu__show');
    btnHide.classList.toggle('menu__active');
    document.body.classList.toggle('body__js');
    divClose.classList.toggle('menu__close-on');
}
divClose.onclick = function () {
    div.classList.remove('menu__show');
    btnHide.classList.remove('menu__active');
    document.body.classList.add('body__js');
    divClose.classList.remove('menu__close-on');
}