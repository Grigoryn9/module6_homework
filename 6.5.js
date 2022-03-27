//!  6.5

// Задание 3      //! В функции число как аргумент и возвращает функцию, которая принимает число как аргумент и выводит сумму


function sumNumber(num1) {
    return function(num2) {
        return num1 + num2
    }
}

console.log(sumNumber(1)(2), sumNumber(5)(12))
