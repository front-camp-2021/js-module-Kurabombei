export const debounce = (fn, delay = 0) => {
  // Вся задача зводиться до наставлення та обнулення timeout
  let timeout;
  return function () {
    // Створили функцію,яку будемо викликати після таймауту, яка викликатиме fn
    // з вказаним контекстом, та переданими аргументами.
    let fnCall = () => {
      fn.apply(this, arguments);
    };

    // Якщо вже є проводиться затримка з timeout, то ми її обнулюємо
    clearTimeout(timeout);

    // Запускаємо нову затримку, та закидаємо timeoutID з setTimeout в змінну timeout
    timeout = setTimeout(fnCall, delay);
  }
}


