let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button');
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');




// console.log(box);

// console.log(btn);
// console.log(btn[4]);

// console.log(circle[2]);

// console.log(heart[1]);

// console.log(oneHeart);

box.style.backgroundColor = 'blue';

btn[1].style.borderRadius = '20px';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';


// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'black';

// }

// heart.forEach(function(item, i, heart_massive) {
//         item.style.backgroundColor = 'seagreen';

// });

// чтобы автоматизировать изменение стилей какого-либо элемента, можно пойти двумя способами:
// - создать цикл классический;
// - использовать метод перебора массива forEach

let div = document.createElement('div');
// создали элемент на лету

div.classList.add('black');
// присвоили ему класс

wrapper.appendChild(div);
// интегрировали элемент в конец родителя wrapper

// document.body.appendChild(div);
// интегрировали новый блок в конец содержимого body




// text = document.createTextNode('произвольный текст');
// создали текстовый узел
// console.log(div);
// console.log(text);

document.body.insertBefore(div, circle[0]);
// вставили черный квадрат перед первым кругом