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

let leasonDiv = document.querySelectorAll('.leason__col');
let leasonNo = document.querySelectorAll('#leason__no');
let leasonTrue = document.querySelector('#leason__true');
let wellNo = document.getElementById('well__no');
let wellDiv = document.querySelector('.well__app');
for (let i = 0; i < leasonDiv.length; i++) {
    leasonDiv[i].onclick = function () {
        for (let i = 0; i < leasonDiv.length; i++){
            if (!leasonDiv[i].classList.contains('.leason__active')){
                leasonDiv[i].classList.remove('leason__active');
                
            }
        }
        leasonDiv[i].classList.add('leason__active');
    }
    for (let i = 0; i < leasonNo.length; i++) {
        leasonNo[i].onclick = function () {
            wellNo.classList.add('well__none');
            wellDiv.classList.add('well__app-block');
            // wellDiv.style.display = 'none';
        }
    }
    // if (leasonDiv.classList.contains('leason__active')) {
    //     leasonDiv.classList.remove('leason__active');
    // }
}
leasonTrue.onclick = function(){
    wellNo.classList.remove('well__none');
    wellDiv.classList.remove('well__app-block');
}