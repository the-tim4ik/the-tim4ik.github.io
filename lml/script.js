let btnMore = document.querySelector('.btn-click');
let divBlock = document.querySelector('.div-js');
btnMore.onclick = function () {
    divBlock.classList.toggle('more-inf');
    divBlock.classList.toggle('div-js')
}