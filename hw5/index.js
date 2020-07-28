/*-1-*/
const getRandomArray = (length, min, max) => {
  const tempArr = [];
  for (let i = 0; i < length; i++) {
    tempArr.push(Math.round(Math.random() * (max - min) + min));
  }
  return tempArr;
};

/*2 Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. 
НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2*/

/*---3---*/
const getAverage = (...numbers) => {
  let sum = 0;
  let floatCount = 0;
  numbers.map((el) => {
    Number.isInteger(el) ? (sum += el) : floatCount++;
  });
  return sum / (numbers.length - floatCount);
};

/*----4----*/
const getMedian = (...numbers) => {
  numbers.sort((a, b) => a - b);
  let index = Math.floor(numbers.length / 2);
  if (numbers.length % 2) {
    return numbers[index];
  } else {
    return (numbers[index] + numbers[index - 1]) / 2;
  }
};

/*-----5-----*/
const filterEvenNumbers = (...numbers) => {
  let tempArr = numbers.filter((el) => {
    return el % 2;
  });
  return tempArr;
};

/*------6------*/
const countPositiveNumbers = (...numbers) => {
  let tempArr = numbers.filter((el) => {
    return el > 0;
  });
  return tempArr.length;
};

/*-------7-------*/
const getDividedByFive = (...numbers) => {
  let tempArr = numbers.filter((el) => {
    return !(el % 5);
  });
  return tempArr;
};

/*
Створіть функцію replaceBadWords(string) – яка 
1) розіб'є фразу на слова, 
2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова 
за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. 
Передбачте можливість розширювати список цих слів у майбутньому.
Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" 
Приклад: replaceBadWords("Holy shit!") -> "Holy ****!" Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"
*/

/*---------9---------*/
const divideByThree = (word) => {
  word = word.split(' ').join('').toLowerCase();
  const tempArr = [];
  for (let i = 0; i < word.length; i += 3) {
    let currentPart = word.slice(i, i + 3);
    tempArr.push(currentPart);
  }
  return tempArr;
};

/*
Створіть функцію generateCombinations(word), яка видасть всі можливі 
перестановки(унікальні, без повторень) букв в слові. 
Для тестів не передавайте слова в яких більше 10 букв. 
Краще взагалі обмежити работу функції 10 буквами. 
Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"] 
Приклад: generateCombinations("ol") -> ["ol", "lo"]
*/

console.group('1. random array');
console.log(getRandomArray(10, -5, 3));
console.groupEnd();
console.group('2');
console.log(2);
console.groupEnd(2);
console.group('3. return average');
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 1.2, 3.6));
console.groupEnd();
console.group('4. shows median');
console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.groupEnd();
console.group('5. filters even numbers');
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));
console.groupEnd();
console.group('6. counts positive numbers');
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));
console.groupEnd();
console.group('7. looks for numbers coud be divided by 5');
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 56, 3, 2));
console.groupEnd();
console.group('8');
console.log(8);
console.groupEnd(8);
console.group('9. divide string by syllables');
console.log(divideByThree('CoMm AnDe R'));
console.groupEnd();
console.group('10');
console.log(10);
console.groupEnd(10);
