/*-----1-----*/
const getRandomArray = (length, min, max) => {
  const tempArr = [];
  for (let i = 0; i < length; i++) {
    tempArr.push(Math.round(Math.random() * (max - min) + min));
  }
  return tempArr;
};

/*-----2-----*/
const getModa = (...numbers) => {
  const tempArr = new Array(numbers.length).fill(0);
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] == numbers[j]) tempArr[i]++;
    }
  }
  let max = Math.max(...tempArr);
  let maxIndex = tempArr.findIndex((el) => {
    if (el == max) return true;
  });
  return numbers[maxIndex];
};

/*-----3-----*/
const getAverage = (...numbers) => {
  let sum = 0;
  let floatCount = 0;
  numbers.map((el) => {
    Number.isInteger(el) ? (sum += el) : floatCount++;
  });
  return sum / (numbers.length - floatCount);
};

/*-----4-----*/
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

/*-----6-----*/
const countPositiveNumbers = (...numbers) => {
  let tempArr = numbers.filter((el) => {
    return el > 0;
  });
  return tempArr.length;
};

/*-----7-----*/
const getDividedByFive = (...numbers) => {
  let tempArr = numbers.filter((el) => {
    return !(el % 5);
  });
  return tempArr;
};

/*-----8-----*/
const replaceBadWords = (string) => {
  const badWords = [
    ['fuck', '****'],
    ['shit', '****'],
  ];
  let newString = string;
  let tempString = '';
  for (let i = 0; i < badWords.length; ) {
    tempString = newString.replace(badWords[i][0], badWords[i][1]);
    newString !== tempString ? (newString = tempString) : i++;
  }
  return newString;
};

/*-----9-----*/
const divideByThree = (word) => {
  word = word.split(' ').join('').toLowerCase();
  const tempArr = [];
  for (let i = 0; i < word.length; i += 3) {
    let currentPart = word.slice(i, i + 3);
    tempArr.push(currentPart);
  }
  return tempArr;
};

/*-----10-----*/

// It doesnot work but I want to leave it here for future tries

// const generateCombinations = (word) => {
//   const last = () => {
//     let result = [];
//     for (let i = 0; i < word.length; i++) {
//       let word1 = word;
//       let beg = word.slice(i, i + 1);
//       let end0 = word1
//         .split('')
//         .splice(i + 1, i + 2)
//         .join('');
//       let end1 = end0.split('').reverse().join('');
//       result.push([beg + end0], [beg + end1]);
//       console.log(end0);
//     }
//     return result;
//   };
//   return last();
// };

console.group('1. random array');
console.log(getRandomArray(10, -5, 3));
console.groupEnd();
console.group('2. find moda');
console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.groupEnd();
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
console.group('8. bad words replacer');
console.log(replaceBadWords("Are you fucking kidding? It's bullshit! fuckfuckshit"));
console.groupEnd(8);
console.group('9. divide string by syllables');
console.log(divideByThree('CoMm AnDe R'));
console.groupEnd();
