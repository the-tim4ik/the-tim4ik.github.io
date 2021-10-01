let inp13_1 = document.querySelector('.i13');
let inp113_1 = document.querySelector('.i113');
let b13 = document.querySelector('.btn-13');
let rez = document.querySelector('.p-13');

function plus(){
    rez.innerHTML = +inp13_1.value + +inp113_1.value;
}
b13.onclick=plus;

let b14 = document.querySelector('.btn-14');
function minus(){
    rez.innerHTML = inp13_1.value - inp113_1.value ;
}
b14.onclick=minus;

let b15 = document.querySelector('.btn-15');
function mng(){
    rez.innerHTML = inp13_1.value * inp113_1.value;
}
b15.onclick=mng;

let b16 = document.querySelector('.btn-16');
function dln(){
    rez.innerHTML = inp13_1.value / inp113_1.value;
}
b16.onclick=dln;