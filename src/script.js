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


// function learnJS (lang, callback) {
//     console.log ("я учу  " + lang);
//     callback ();
// }

// learnJS ("JavaScript", function() {
//     console.log ('i have learned the third lesson');
// });
// это был пример вызова функции, как аргумента от другой функции

// function learnJS (lang, callback) {
//     console.log ("я учу  " + lang);
//     callback ();  
// };

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



// let arr  = [ 1, 2, 3, 4, 5];
// arr.forEach(function(item, i, mass) {
//     console.log(i + ": " + item + " (array: " + mass + ")");

});
// это способ перебора массивов

let mass = [ 1, 3, 7, 5, 1];
for (let key in mass) {
    console.log (key);
}
// использовали цикл с оператором in как для объекта. в консоль вывели ключи какждого элемента массива. н-ер, для элемента 7 ключ = порядковый номер = 2

// let mass = [ 1, 3, 7, 5, 1];
// for (let key of mass) {
//     console.log (key);
// }
// это самый новый способ перебора элементов в массиве


