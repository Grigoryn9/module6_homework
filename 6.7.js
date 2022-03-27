//!  6.7

// Задание 4        //!  Принимает 2 числа и каждую сек выводить от первого до последнего


function numbers(from, to) {
    const timerId = setInterval(function() {
        console.log(from)
        if (from === to) {
            clearInterval(timerId)
        }
        from++
    }, 1000)
}

numbers(7, 10)