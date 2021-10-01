let inp20 = document.querySelector('.inp-20');
let inp21 = document.querySelector('.inp-21');
let inp22 = document.querySelector('.inp-22');
let inp23 = document.querySelector('.inp-23');
let btn20 = document.querySelector('.btn-20');
let p20 = document.querySelector('.p-20');

function task (){
p20.innerHTML = "Шановний(а) " +inp20.value +" " +inp21.value +"," +"ваш вік " +inp22.value +"роки(ів), " +"за родом діяльності ви " +inp23.value;
}
btn20.onclick = task;