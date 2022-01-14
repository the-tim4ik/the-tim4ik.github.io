let btnHide = document.querySelector('.menu__btn');
let div = document.querySelector('.menu__hide');
let body = document.querySelector('.body')
btnHide.onclick = function () {
    div.classList.toggle('menu__show');
    btnHide.classList.toggle('menu__btn__move');
    btnHide.classList.toggle('fa-times');
    body.classList.toggle('body__js');
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