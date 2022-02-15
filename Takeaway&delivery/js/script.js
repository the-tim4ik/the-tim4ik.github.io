let menu = document.querySelector('.menu');
let btnHide = document.querySelector('.menu-burger__btn');
let div = document.querySelector('.menu__hide');
let divClose = document.querySelector('.menu__close');
let body = document.querySelector('.body');
let btn1 = document.querySelector('#one');
let btn2 = document.querySelector('#two');
let btn3 = document.querySelector('#three');
let Burgers = document.querySelector('#Burgers');
let Sides = document.querySelector('#Sides');
let Drinks = document.querySelector('#Drinks');

btnHide.onclick = function () {
    div.classList.toggle('menu__show');
    body.classList.toggle('body__js');
    btnHide.classList.toggle('fa-times');
    divClose.classList.toggle('menu__close-on');
}

divClose.onclick = function(){
    div.classList.remove('menu__show');
    body.classList.remove('body__js');
    btnHide.classList.remove('fa-times');
    divClose.classList.remove('menu__close-on');
}

btn1.onclick = function(){
    Burgers.classList.add('row-active');
    Sides.classList.remove('row-active');
    Drinks.classList.remove('row-active');
    btn1.classList.add('food__choise-active');
    btn2.classList.remove('food__choise-active');
    btn3.classList.remove('food__choise-active');
}

btn2.onclick = function(){
    Burgers.classList.remove('row-active');
    Sides.classList.add('row-active');
    Drinks.classList.remove('row-active');
    btn1.classList.remove('food__choise-active');
    btn2.classList.add('food__choise-active');
    btn3.classList.remove('food__choise-active');
}

btn3.onclick = function(){
    Burgers.classList.remove('row-active');
    Sides.classList.remove('row-active');
    Drinks.classList.add('row-active');
    btn1.classList.remove('food__choise-active');
    btn2.classList.remove('food__choise-active');
    btn3.classList.add('food__choise-active');
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