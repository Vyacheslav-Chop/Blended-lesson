// 1. Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// const number = Number(prompt("Введіть число"));
// if (number === 10) {
//   alert("Вірно");
// } else {
//   alert("Невірно");
// }

// function checkNumber() {
//   alert(Number(prompt("Введіть число")) === 10 ? "Вірно" : "Невірно");
// }

// 2. У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// function checkQuarter() {
//   const min = Math.floor(Math.random() * (59 - 0) + 0);
//   let quarter;

//   if (min >= 0 && min < 15) {
//     quarter = 'першу';
//   } else if (min >= 15 && min < 30) {
//     quarter = 'другу';
//   } else if (min >= 30 && min < 45) {
//     quarter = 'третю';
//   } else {
//     quarter = 'четверту';
//   }

//   alert(`${min} входить в ${quarter} чверть.`);
// }

// checkQuarter();

// 3. Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// function checkSeason() {
//   const num = Number(prompt("Введіть значення від 1 до 4 включно"));
//   let season;

//   switch (num) {
//     case 1:
//       season = "зима";
//       break;
//     case 2:
//       season = "весна";
//       break;
//     case 3:
//       season = "літо";
//       break;
//     case 4:
//       season = "осінь";
//       break;
//     default:
//       season = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
//   }

//   console.log(season);
// }

// checkSeason();

// function getNumbers(min, max) {
//   let sum = 0;

//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }

// console.log(getNumbers(1, 10));

// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sum(2, 5);

// function multiply() {
//   let total = 1;

//   for (const arg of arguments) {
//     total *= arg;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// 4. Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples>

// function convertMinutesToTime() {
//   const input = prompt('Введіть кількість хвилин');
//   const minutesTotal = Number(res.trim());
//   const hours = String(Math.floor(minutesTotal / 60)).padStart(2, '0');
//   const minutes = String(minutesTotal % 60).padStart(2, '0');
//   return `${hours}:${minutes}`;

// }


// console.log(convertMinutesToTime());

// 5. Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

function promptUserLogin() {
  const login = prompt('Введіть логін');
  if (login.trim().toLowerCase() === "адмін") {
    const password = prompt("Введіть пароль");

    if (password === 'Я головний') {
      alert("Добрий день!");
    } else if (password === null || password === '') {
      alert('Скасовано');
    } else {
      alert('Невірний пароль!');
    }  
    return;
  }  
  
  if (login === null || login === '') {
    alert('Скасовано');
    return;
  }
  
  alert('Я вас не знаю');
}
promptUserLogin();
