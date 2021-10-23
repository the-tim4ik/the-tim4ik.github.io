let btnHide = document.querySelector('.btn-toggle');
let div = document.querySelector('.d-hide');
btnHide.onclick = function () {
    div.classList.toggle('d-show');
    btnHide.classList.toggle('btn-move');
    btnHide.classList.toggle('fa-times');

    // if (div.classList.contains('d-show')){
    //     image.src = 'картинка';
    // }
    // else{
    //     image.src = 'картинка2';
    // }
}
let btnMore = document.querySelector('.btn-click');
let divBlock = document.querySelector('.div-js');
btnMore.onclick = function () {
    divBlock.classList.toggle('more-inf');
    divBlock.classList.toggle('div-js')
}
