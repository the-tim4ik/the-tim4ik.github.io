let btn1 = document.querySelector('.btn__1');
let p1 = document.querySelectorAll('.text');
btn1.onclick = function () {
    for (let i = 0; i < p1.length; i++)
        p1[i].classList.toggle('text__css');
}


let cardBtn = document.querySelectorAll('.card__btn');
let cardItem = document.querySelectorAll('.card__item');
for (let i = 0; i < cardItem.length; i++) {
    cardBtn[i].onclick = function () {
        cardItem[i].classList.toggle('card__item__show');
    }
    cardItem[i].onclick = function () {
        cardItem[i].classList.remove('card__item__show');
    }

    // cardBtn[i].onclick = () => {
    //     cardItem[i].classList.toggle('card__item__show');
    // }
}



let block = document.querySelectorAll('.block');
for (let i = 0; i < block.length; i++) {
    block[i].onclick = function () {
        let r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
        let g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
        let b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
        block[i].style.backgroundColor = `rgb(${r} , ${g} , ${b})`;
    }

}

let btnTest = document.querySelector('.btn__test');
let p = document.querySelector('.p__test');
let Test = document.querySelectorAll('.inp__test');
btnTest.onclick = function () {
    for (let i = 0; i < Test.length; i++){
        if (Test[i].checked && Test[i].value == 'Осінь'){
            p.innerHTML = 'Відповідь правильна';
            break;
        }
        else{
            p.innerHTML = 'Відповідь не правильна';
        }
    }
}