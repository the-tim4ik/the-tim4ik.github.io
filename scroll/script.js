function myAnimScroll(element, showClass) {
    let elementHeight = element.offsetHeight; //визначаємо висоту елементу
    //offsetHeight, getBoundingClientRect(), scrollY - вбудовані функції
    // scrollY - скільки пікселів прокручено - вбудован змінна в js

    //позиція елементу відносно верху
    let temp = element.getBoundingClientRect(); //постійно змінюється
    let elementPosition = temp.top + scrollY; //завжди стабільне

    let koef = 4; //запускатимемо анімацію на 1/4 блоку
    let startAnim = window.innerHeight - elementHeight / koef; // віднімаємо від висоти вікна 1/4 висоти елементу
    if (elementHeight > window.innerHeight) { //якщо елемент вищий ніж вікно
        startAnim = window.innerHeight - window.innerHeight / koef; // віднімаємо від висоти вікна 1/4 висоти елементу
    }

    if ((scrollY > elementPosition - startAnim) && scrollY < (elementPosition + elementHeight)) {
        //додаємо клас що має показати наш елемент
        element.classList.add(showClass)
    }
    else {
        if (!element.classList.contains('anim__no-again')) {
            //видаляємо клас що показує елемент
            element.classList.remove(showClass)
        }
    }
}

let animElement = document.querySelectorAll('.anim__hide-left');
for (let elements of animElement) {
    window.addEventListener('scroll', function () {
        myAnimScroll(elements, 'anim__show-left');
    })
    myAnimScroll(elements, 'anim__show-left');
}

let animElement2 = document.querySelectorAll('.anim__hide-right');
for (let elements of animElement2) {
    window.addEventListener('scroll', function () {
        myAnimScroll(elements, 'anim__show-right');
    })
    myAnimScroll(elements, 'anim__show-right');
}