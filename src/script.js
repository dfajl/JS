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

 

let numb = 7 
                                          
function showFirstMessage(text) {
    alert(text);
    numb = 90;
     
}

showFirstMessage('hello');

console.log(numb);






// внутри функции находится локальная переменная, так как ее не будет видно вне пределов функции

// showFirstMessage ('hello world');



// showFirstMessage () - вызов функции

// showFirstMessage - имя функции. записываем негласно так: глагол+то, над чем действие
// text - аргумент функции
// замыкание функции - это функция со всеми внешними переменными, которые ей доступны



console.log(calc (3, 4));
console.log(calc (6, 4));
console.log(calc (9, 4));


function calc (a,b) {
    return (a+b);
}



function retVar () {
    let num=50;
    return num;
}

let number = retVar();
console.log(number);