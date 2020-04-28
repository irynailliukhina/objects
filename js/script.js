//1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
//Функция для вывода на экран информации об автомобиле;
//Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
//Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

// let auto = {
//     producer: 'Mazda',
//     model: '6',
//     productionYear: '2002',
//     averageSpeed: "100",

// };

// function info(auto) {
//     console.log(auto);
// };

// info(auto)

// function timeNeeded(auto) {
//     let length = prompt("what way do you have to drive in km?");
//     let time = length / +auto.averageSpeed;
//     // return speed;
//     if ((time / 4) > 1) {
//         time += 1 * (Math.abs(time / 4));
//     }
//     console.log(`You need ${time} hours`);
// }

// timeNeeded(auto)

// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби.

// let first = {
//     numerator: 10,
//     denominator: 2,
// };

// let second = {
//     numerator: 7,
//     denominator: 3,
// }

// function addition(obj1, obj2) {
//     let num1 = +obj1.numerator / +obj1.denominator;
//     let num2 = +obj2.numerator / +obj2.denominator;
//     console.log(num1 + num2);
// };
// addition(first, second);

// function substraction(obj1, obj2) {
//     let num1 = +obj1.numerator / +obj1.denominator;
//     let num2 = +obj2.numerator / +obj2.denominator;
//     console.log(num1 - num2);
// };
// substraction(first, second);

// function multiplication(obj1, obj2) {
//     let num1 = +obj1.numerator / +obj1.denominator;
//     let num2 = +obj2.numerator / +obj2.denominator;
//     console.log(num1 * num2);
// };
// multiplication(first, second);

// function division(obj1, obj2) {
//     let num1 = +obj1.numerator / +obj1.denominator;
//     let num2 = +obj2.numerator / +obj2.denominator;
//     console.log(num1 / num2);
// };
// division(first, second);

// function reduction(obj) {
//     let num = +obj1.numerator / +obj1.denominator;

//     console.log(num.toFixed(2));
// };
// reduction(second);

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
// Функция вывода времени на экран;
// Функция изменения времени на переданное количество секунд;
// Функция изменения времени на переданное количество минут;
// Функция изменения времени на переданное количество часов. 
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, 
// если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

let time = {
    hour: "9",
    min: "3",
    sec: "30",
}

// function show(obj) {
//     for (hour in obj) {
//         let h,
//             m,
//             s;
//         
//             if (h > 23) {
//              h = h % 24;
//         } else if (obj.hour === 0) {
//             h = `00`;
//         } else if (obj.hour < 10) {
//             h = `0${obj.hour}`;
//         } else {
//             h = obj.hour;
//         };
//         if (obj.min > 59 || obj.min < 0) {
//             return console.error("wrong");
//         } else if (obj.min === 0) {
//             m = `00`;
//         } else if (obj.min < 10) {
//             m = `0${obj.min}`;
//         } else {
//             m = obj.min;
//         };
//         if (obj.sec > 59 || obj.sec < 0) {
//             return console.error("wrong");
//         } else if (obj.sec === 0) {
//             s = `00`;
//         } else if (obj.sec < 10) {
//             s = `0${obj.sec}`;
//         } else {
//             s = obj.sec;
//         };
//         return console.log(`${h}:${m}:${s}`);
//     }
// }
// show(time)



// let additionalSec = +prompt("Enter num of seconds");
// function addSec(obj) {
//     for (key in obj) {
//         let h,
//             m,
//             s;
//         h = +obj.hour * 3600;
//         m = +obj.min * 60;
//         s = +obj.sec;
//         let inSec;
//         inSec = h + m + s + additionalSec;

//         let h2 = Math.floor(inSec / 3600);
//         if (h2 < 10) {
//             h2 = `0${h2}`;
//         }else if (h > 23) {
//              h = h % 24;
//         }
//         let m2 = Math.floor((inSec % 3600) / 60);
//         if (m2 < 10) {
//             m2 = `0${m2}`;
//         }
//         let s2 = (inSec % 3600) % 60;
//         if (s2 < 10) {
//             s2 = `0${s2}`;
//         }
//         return console.log(`${h2}:${m2}:${s2}`);
//     }
// }
// addSec(time)

// let additionalMin = +prompt("Enter num of minutes");

// function addMinutes(obj) {
//     for (key in obj) {
//         let m = +obj.min + additionalMin,
//             h = +obj.hour;
//         if (m > 59) {
//             h = h + (Math.floor(m / 60));
//             m = m % 60;
//         }

//         if (h > 23) {
//             h = (h % 23);
//             if (h < 10) {
//                 h = `0${h}`;
//             }
//         } else if (h === 0) {
//             h = `00`;
//         } else if (h < 10) {
//             h = `0${h}`;
//         }
//         return console.log(`${h}:${m}:${+obj.sec}`);
//     }
// }

// addMinutes(time)

// let additionalHours = +prompt("Enter num of hours");
// function addHours(obj) {
//     for (key in obj) {
//         let h,
//             m,
//             s;
//         h = +obj.hour + additionalHours;

//         if (h > 23) {
//             h = (h % 23);
//             if (h < 10) {
//                 h = `0${h}`;
//             }
//         } else if (h === 0) {
//             h = `00`;
//         } else if (h < 10) {
//             h = `0${h}`;
//         }

//         if (obj.min > 59 || obj.min < 0) {
//             return console.error("wrong");
//         } else if (obj.min === 0) {
//             m = `00`;
//         } else if (+obj.min < 10) {
//             m = `0${obj.min}`;
//         } else {
//             m = +obj.min;
//         };

//         if (obj.sec > 59 || obj.sec < 0) {
//             return console.error("wrong");
//         } else if (obj.sec === 0) {
//             s = `00`;
//         } else if (obj.sec < 10) {
//             s = `0${obj.sec}`;
//         } else {
//             s = obj.sec;
//         };
//         return console.log(`${h}:${m}:${s}`);
//     }
// }
// addHours(time)