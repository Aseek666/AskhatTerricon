// 1) Заполнить массив рандомными числами и на его основе вычленить только четные элементы

let numbers = [];

for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 100) + 1);
}

let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Исходный массив: ", numbers);
console.log("Массив четных элементов: ", evenNumbers);

// 2) Создать функцию, которая в зависимости от текущего времени определяет сейчас день или ночь

function getTimeOfDay() {
  let time = new Date();
  let hours = time.getHours();
  if (hours >= 6 && hours < 18) {
    return "день";
  } else {
    return "ночь";
  }
}

let timeOfDay = getTimeOfDay();
console.log("Сейчас " + timeOfDay);

// 3) Создать функцию, которая проверяет правильность введенного номера

function validatePhoneNumber(phoneNumber) {
  let cleaned = phoneNumber.replace(/\D/g, '');

  if (cleaned.length === 10 && /^[0-9]+$/.test(cleaned)) {
    return true;
  } else {
    return false;
  }
}

// 4) Создать функцию, которая заменяет целевое слово на другое

function replaceWordInString(originalString, targetWord, newWord) {
  let regex = new RegExp(targetWord, 'g');
  let newString = originalString.replace(regex, newWord);
  
  return newString;
}

// Пример использования функции
let originalString = "Lomer Ipsum is simply dummy text of the printing and typesetting industry.";
let targetWord = "Lomer";
let newWord = "Lorem";
let newString = replaceWordInString(originalString, targetWord, newWord);
console.log(newString);