//!  6.4

// Задание 2         //! Определяет, простое число или нет

function numDefine(num) {
    if (!Number.isInteger(num) || num < 2 || num > 1000) 
        return "Данные не верны"
        
    let funcNum = Math.sqrt(num)

    for (let i = 2; i <= funcNum; i++)
        if (num % i === 0) return "Не простое число"    
    return "Простое число"
}

console.log(numDefine(7))
console.log(numDefine(69))
console.log(numDefine(1001))