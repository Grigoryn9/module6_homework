// Задание 1            //! Четное число или нет в виде функции

function funcName() {

    const num = +prompt("Введите число")
    if ((num % 2) == 0) {
        console.log("Число четное")
        } if (isNaN(num)) {
            console.log('Упс, кажется, вы ошиблись')
        } else if ((num % 2) != 0){
            console.log('Число нечетное')
        }
}

funcName()