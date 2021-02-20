let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button');
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper'),
	wrap = document.querySelector('.wrap'),
	link = document.querySelector('.ref');




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


div.innerHTML = 'i was here';
// добавил текст в созданный блок

div.innerHTML = '<h6> good bye </h6>';
// добавил тег в созданный блок

div.textContent = 'hello world';
// вставили именно текст. т.е. обезопасили страницу от вредоносных элементов, скриптов и т.п.

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

document.body.removeChild(circle[1]);
// удалили второй круг 

// wrapper.removeChild(heart[0]);
// удалили сердце, вложенное во wrapper

document.body.replaceChild(btn[1], circle [1]);

                                                //  ОБРАБОТЧИКИ СОБЫТИЙ


let buttonClick = document.getElementsByTagName('button');

buttonClick [1].onclick = function () {
    alert('you have clicked on the second btn');
};

buttonClick [1].onclick = function () {
    alert('you have clicked on the second btn one more time');
};

// в данном случае я задал обработчик события "клик" чере функцию. но и этим способом пользоваться не стоит, т.к.:
// 1 - к одному элементу может быть применена только одна функция. если зададим еще одну, то она перезапишет старую

// 2 - нет возможности удалить  событие после его отработки


buttonClick [2].addEventListener('click', function() {
    alert('you have clicked on the second btn');
});

buttonClick [2].addEventListener('click', function() {
    alert('you have clicked on the second btn one more time');
});

buttonClick [3].addEventListener('mouseenter', function() {
    alert('you have focused on the fourth btn');
});

wrap.addEventListener('click', function(event) {
	console.log('произошло событие: ' + event.type + ' на элементе ' + event.target);
});

box.addEventListener('click', function(event) {
    // console.log(event);
    // let target = event.target;
    // target.style.display = 'none';
    console.log('произошло событие: ' + event.type + ' на элементе ' + event.target);
});
// вывел в консоль сообщение о том, какое событие и на каком элементе произошло
// удалил элемент с id = box со страницы

// Обрати внимание на "всплытие событий". Т.е. я взял и поместил мой box в обертку wrap. этой обертке я задал обработчик события. при нажатии на box, отрабатывает его обработчик, а затем обработчик для wrap. и такая иерархия происходит даже тогда, когда команда на вложенный элемент прописана ниже, но выполняется в первую очередь она.

link.addEventListener('click', function(event){
	event.preventDefault(); 
    // этот метод отменяет стандартное поведение браузера
	console.log('произошло событие: ' + event.type + ' на элементе ' + event.target);
});

heart.forEach(function(item){
	item.addEventListener('mouseleave', function(){
		console.log('мышь покинула объект');
	})

});
// с помощью метода перебора массива forEach, каждому элементу массива был присвоем обработчик события 'mouseleave'