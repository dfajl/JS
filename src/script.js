'use strict';

                                                        //  УСЛОВИЯ

// if (2*4 == 9) {
//     console.log ("Правильный ответ")
// } else {
//     console.log ("идиот")
// }



// if (num < 49) {
//     console.log("Неверно!")
// } else if (num > 100) {
//     console.log("Много!")
// } else { 
//     console.log("Верно")  
// };




// (num == 50) ? console.log("Верно") : console.log ("Неверно!");






// let num = 50; 
// switch (num) {
//     case num < 49:
//         console.log("Неверно!");
//         break;  
//     case num > 100:
//         console.log("Много!");
//         break;
//     case num > 80: 
//         console.log("Все еще много!");  
//         break;
//     case 60:                 /* так записывается проверка на соответствие числу. т.е без знака равенства */    
//         console.log("Наконец-то!");
//         break;
//     default: /* запись опциональная. в случае, если все условия не сработают */
//         console.log("Что-то пошло не так!");
//         break;
// }




                                                /* ЦИКЛЫ */

// let num = 50;                                                                                             
// while (num < 55) {
//     console.log(num++);  
// }


// let num = 50; 
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);
// в данном цикле мы сначала делаем, а потом проверяем




    

// for (let i=1; i < 8; i++ ) {
//     if (i==6) {
//         continue
//     }
//     console.log (i)
// }   




                                            // ФУНКЦИИ

 

// let numb = 7 
                                          
// function showFirstMessage(text) {
//     alert(text);
//     numb = 90;
     
// }

// showFirstMessage('hello');

// console.log(numb);







// // внутри функции находится локальная переменная, так как ее не будет видно вне пределов функции

// // showFirstMessage ('hello world');



// // showFirstMessage () - вызов функции

// // showFirstMessage - имя функции. записываем негласно так: глагол+то, над чем действие
// // text - аргумент функции
// // замыкание функции - это функция со всеми внешними переменными, которые ей доступны



// console.log(calc (3, 4));
// console.log(calc (6, 4));
// console.log(calc (9, 4));


// function calc (a,b) {
//     return (a+b);
// }



// function retVar () {
//     let num=50;
//     return num;
// }

// let number = retVar();
// console.log(number);


                                            // Call back function


// function first () {
//     // какие-либо действия
//     setTimeout ( function () {
//         console.log(1);
//     }, 500);
    
// }

// function second () {
//    console.log(2);
// }

// first ();
// second ();


function learnJS (lang, callback) {
    console.log ("я учу  " + lang);
    callback ();
}

learnJS ("JavaScript", function() {
    console.log ('i have learned the third lesson');
});
// это был пример вызова функции, как аргумента от другой функции

function learnJS (lang, callback) {
    console.log ("я учу  " + lang);
    callback ();  
};

// function done () {
//     console.log(1);
// };


// learnJS ("JavaScript", done);



                                                //   Объекты

// let options = {
//     width: 1024,
//     height: 1023,
//     name: 'test'
// };

// console.log (options.height); 
// вывел значение свойства height из объекта

// options.bool = false;
// добавил свойство bool со знчением false в объект

// options.colors = {
//     color1: 'red',
//     color2: 'white',
//     color3: 'green'
// };
// добавил  объект colors в имеющийся объект options

// delete options.name;
// удалили выбранное значение из объекта

// console.log(options);

// for (let key in options) {
//     console.log ('propery ' + key + ' has a value ' + options[key]);
// }
// с помощью задания такого цикла и переменной в нем "key" мы выводим все свойства из объекта по очереди

// console.log (Object.keys(options).length);


                                                //  Массивы



// let arr  = [ 1, 2, 3, 4, 5];

// arr.pop();  
// удалил элемент с конца массива 


// arr.push ("5");
// добавил элемент в конец массива

// arr.shift ();
// удалил первый элемент  массива

// arr.unshift ("1");
// добавил первый элемент  массива

// let arr  = [ 1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++ ) {
//     console.log(arr[i]);
// };


// let arr  = [ 1, 2, 3, 4, 5];
// arr [99] = 99;
// console.log(arr.length);
// console.log (arr);



let arr  = [ 1, 2, 3, 4, 5];
arr.forEach(function(item, i, mass) {
    console.log(i + ": " + item + " (array: " + mass + ")");

});
// это способ перебора массивов

let mass = [ 1, 3, 7, 5, 1];
for (let key in mass) {
    console.log (key);
}
// использовали цикл с оператором in как для объекта. в консоль вывели ключи какждого элемента массива. н-ер, для элемента 7 ключ = порядковый номер = 2

let mass = [ 1, 3, 7, 5, 1];
for (let key of mass) {
    console.log (key);
}
// это самый новый способ перебора элементов в массиве

// let answer = prompt('', ''),
//     arr = [];

// arr = answer.split(',');
// console.log(arr);    
// ввели через промпт набор данных. а с помощью arr = answer.split(','); записали вмассив


// let arr = ['jgkfjgk', 'mfgkfjk', 'fg;rgoprp[]'],
//     i = arr.join(', ');

//     console.log(i);   

//     из массива вывели в переменную все элементы через запятую



// let arr = ['jgkfjgk', 'mfgkfjk', 'fg;rgoprp[]'],
//     i = arr.sort();

//     console.log(arr);  
//      отсортировали содержимое массива по алфавиту 

// let arr = [1, 25, 18, 54, 6 ],
//     i = arr.sort(compareNum);

//     function compareNum (a,b) {
//         return a-b;
//     };
    

//     console.log(arr);  
//     отсортировали элементы по возрастанию

//                                         Объектно-ориентированное программирование

let soldier = {
    health:400,
    armour:250,
    heigh:180
};

let john = {
    health: 76
}

gohn.__proto__ = soldier;

console.log(john);
console.log (john.armour);

                                            // Задачи на понимание основ JavaScript



console.log([] + false - null + true); 
// ответ NaN
// пустой массив - это строка. Если к строке прибавить что-то, то получим строку. Затем из строки вычитаем что-то - это не математическая операция, и если к  NaN прибавить true, то получим NaN

// console.log(typeof(NaN));  number

let y = 1; let x = y = 2; console.log(x);
// ответ 2
// сначала читай код справа налево. т.е. предыдущее значение y = 1 заменяется выражением y = 2. Как будто код записан как обычно. в столбик

console.log([] + 1 + 2); 
// ответ "12"
// к пустому массиву = строке добавляем число, получаем строку, т.е."1" и к ней прибавляем  число 2, то получаем строку "12"

console.log('1'[0]);
// ответ 1
// строку мы можем разбить на отдельные сымволы. и вывысти из нее какой-либо через квадратные скобки. у массива точно так же

console.log(1 && 2 && null && 0 && undefined);
// ответ null
//  "оператор -И- запинается на лжи". т.е. его задача вывести ложь и прекратить код

console.log (2 || 0 );
// выводит только правду
// 2

console.log (0 || 2 );
// выводит только правду
// 2

console.log (3 || 2 ); 
// просто выводит первую правду
// 3

console.log (0 || null);
// null
// так как тут две лжи, то он просто выводит последнюю ложь в паре




console.log(null && 2 );
//выводит ложь
//null

console.log(2 && null );
//выводит ложь
//null

console.log(0 && null );
//выводит первую ложь
//0

console.log(2 && 6 );
//6
// так как тут две правды, то он просто выводит последнюю правду в паре

console.log(null || 2 && 3 || 4);
//3

a = [1, 2, 3]; 
b = [1, 2, 3];
// ответ: между собой эти два массива не равны! это разные массивы

console.log(+'Infinity');
console.log(typeof(+'Infinity'));

console.log('ёжик' > 'яблоко');
// ответ: true. это задача на знание Unicode. здесь идет посимвольное сравнение. в юникоде буква ё стоит после буквы я. поэтому выражение верно.

console.log(0 || '' || 2 || undefined || true || false);
// 2
// т.е. наш оператор "спотыкается" на первой правде. а это 2