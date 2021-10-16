let inp1 = document.querySelector('.inp-1');
let inp2 = document.querySelector('.inp-2');
let inp3 = document.querySelector('.inp-3');
let inp4 = document.querySelector('.inp-4');
let inp5 = document.querySelector('.inp-5');
let inp6 = document.querySelector('.inp-6');
let inp7 = document.querySelector('.inp-7');
let inp8 = document.querySelector('.inp-8');
let inp9 = document.querySelector('.inp-9');
let inp10 = document.querySelector('.inp-10');
let inp11 = document.querySelector('.inp-11');
let inp12 = document.querySelector('.inp-12');
let inp13 = document.querySelector('.inp-13');
let btnfinal = document.querySelector('.btn-final');
// let btnfinal2 = document.querySelector('.btn-final');
let p1 = document.querySelector('.p-1');
let p2 = document.querySelector('.p-2');
let p3 = document.querySelector('.p-3');
// let pError = document.querySelector('.p-error');
// function error(){
//     if (inp1.value && inp2.value && inp3.value && inp4.value && inp5.value && inp6.value && inp7.value && inp8.value && inp9.value && inp10.value  && inp11.value && inp12.value && inp13.value == ""){
//         pError.innerHTML = `Ничего не забыл?`
//     }
// }
// btnfinal2.onclick = error;
function list(){
    p1.innerHTML = `Привет Дедушка мороз,меня зовут ${inp1.value} и мне ${inp2.value} лет. Сейчас ${inp3.value} часов и я пишу это письмо. У меня нет друзей, а еще меня обижают дома.`;
    if (inp6.value == "да") {
        p2.innerHTML = `У меня есть питомец, его зовут ${inp7.value}.`;
    }
    else if (inp6.value == "нет"){
        p2.innerHTML = `У меня нет домашнего питомца,поэтому мне не с кем играть.`;
    }
    else{
        p2.innerHTML = `Я не ответил на 6-ой вопрос да или нет,потому что я не умею читать))`
    }
    p3.innerHTML = `Я очень хочу ${inp4.value}, но моя мама ${inp5.value} мне не разрешает и я очень надеюсь что ты подаришь мне это. Мой папа приходит домой злым,поэтому он называет меня ${inp13.value}. Он просит меня приготовить ему ${inp8.value},но у меня никогда не получается и он злится еще больше. Сейчас я в ${inp9.value} и тут ужасно холодно. Тут очень странные люди,они все время кричат "${inp10.value}". Дедушка мороз,я знаю что ты ${inp11.value} и я очень хочу чтобы ты помог мне. Я очень надеюсь что ты не ${inp12.value} как моя мама. Пожалуйста,помоги мне(`;
}
btnfinal.onclick = list;
