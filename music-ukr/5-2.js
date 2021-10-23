let bodyColor = document.querySelector('.inp-1');
let txt = document.querySelector('.d-black');
bodyColor.onclick = function () {
    document.body.classList.toggle('dark');
}

let btnHide = document.querySelector('.btn-toggle');
let div = document.querySelector('.d-hide');
let p = document.querySelector('.first');
btnHide.onclick = function () {
    div.classList.toggle('d-show');
    btnHide.classList.toggle('btn-move');
    btnHide.classList.toggle('fa-times');
    btnHide.classList.toggle('btn-toggle-p');
    p.classList.toggle('p-padding');
    txt.classList.toggle('black');
    // if (div.classList.contains('d-show')){
    //     image.src = 'картинка';
    // }
    // else{
    //     image.src = 'картинка2';
    // }
}