/* 1. Функція, яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. */
const getMaxDigit = ( number = prompt('введiть значення') ) => {
	number = number.toString();
	let currentMax = number[0];
	for (let i = 1; i < number.length; i++) {
		if (number[i] > currentMax) currentMax = number[i]
	};
	console.log('f1 worked')
	return currentMax;
}

/* 2. Створити функцію, яка визначає ступінь числа. */

const degreeCounter = ( number = prompt('значення, яке треба множити'), degree = prompt('степiнь') ) => {
	let answer = number;
	for ( let i = 1; i < degree; i++ ) {
		answer *= number;
	}
	console.log('f2 worked')
	return answer
}

/* 3. Функція, яка форматує ім'я, роблячи першу букву великою. */
const namePrettier = ( name = prompt('введiть iм\'я') ) => {
	newName = name[0].toUpperCase() + name.slice(1).toLowerCase();
	console.log('f3 worked')
	return newName;
}

/* 4. Функція, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. */
const salaryCount = ( sal = prompt('ЗП') ) => {
	const incomeTax = 18;
	const militaryTax = 1.5;
	const incomeFee = sal * ( incomeTax / 100 );
	const militaryFee = sal * ( militaryTax / 100 );
	console.log('f4 worked')
	return newSal = sal - (incomeFee + militaryFee);
}

/* 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. */
const getRandomNumber = ( lower = prompt('менше значення'), higher = prompt('бiльше значення') ) => {
	const temp = Math.random() * ( higher - lower ) + lower;
	console.log('f5 worked')
	return Math.ceil(temp);
}

/* 6. Функція, яка рахує скільки разів певна буква повторюється в слові. */
const countLetter = ( letter = prompt('буква'), word = prompt('рядок') ) => {
	let counter = 0;
	for ( let i = 0; i < word.length; i++ ) {
		if ( word[i].toLowerCase() === letter.toLowerCase()) counter++
	};
	console.log('f6 worked')
	return counter;
}

/*7. Функція, яка конвертує долари в гривні та навпаки в 
залежності від наявності символа $ або UAH в рядку.*/


const willGet = (function () {
	let sum = null;
	return {
		getSum: function() {
			return this.sum
		},
		setSum: function(value) {
			this.sum = value
		},
	}
})()

const usdExchange = (function () {
	let usd = null;
	return {
		setUSD: function(value) {
			this.usd = value
		},
	}
})()

const requestURL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'

let sendRequest = (method, url) => {
	return fetch(url).then( response => {
		return response.json()
	})
}

const convertCurrency = async ( ownedMoney = '$100' ) => {
	await sendRequest('GET', requestURL)
		.then(function (data) {
		    usdExchange.setUSD(data[0])
		});
	let tempCurr = null
	if (ownedMoney[0] === '$') {
			let usd = ownedMoney.slice(1)
			tempCurr = usd * usdExchange.usd.buy
			willGet.setSum(tempCurr)
			console.log(`7. For ${ownedMoney} dollars you can get ${tempCurr.toFixed(2)} hryvnas`)
		} else if (ownedMoney.slice(-3) === 'uah') {
			let uah = ownedMoney.slice(0, -3)
			tempCurr = uah / usdExchange.usd.sale
			console.log(`7. For ${ownedMoney} hryvnas you can get ${tempCurr.toFixed(2)} dollars`)
		} else {
			console.log(`Unknown currency`)
		}
}

/* 8. Функція генерації випадкового паролю Довжина встановлюється користувачем або по замовчуванню = 8 символам. */
const createPassword = ( symbolNumber = prompt('How many symbols do you want to have in your password?') ) => {
	let pass = []
	for ( i = 0; i < symbolNumber; i++) {
		pass.push(Math.ceil( (Math.random() * 9) ))
	}
	console.log('im here', symbolNumber)

	console.log('f8 worked')
	return pass.join('')
}

/* 9. Функція, яка видаляє небхiднi букви з речення. */
const deleteLetters = ( letter = prompt('буква'), word = prompt('У словi') ) => {
	let result = word.toLowerCase().split('');
	for ( let i = 0; i < result.length; i++ ) {
		if (result[i] === letter.toLowerCase()) result.splice(i, 1)
	};
	result = result.join('')

	console.log('f9 worked')
	return result;
}

/* 10. Функція, яка перевіряє, чи є слово паліндромом. */
const isPalyndrom = ( str = prompt('Яку фразу треба перевiрити?') ) => {
	let spacelesString = deleteLetters (' ', str)
	let reversedString = spacelesString.split('').reverse().join('')
	const isP = spacelesString === reversedString
	console.log('f10 worked')
	return isP
}

/*11. Функція, яка видаляє з речення букви, які зустрічаються більше 1 разу.*/
const deleteDuplicateLetter = (string = prompt('Ваш рядок')) => {
	let newString = string
	let needToDelete = []
	for ( let i = 0; i < string.length; i++ ) {
		for ( let j = 0; j < string.length; j++) {
			if (string[i] === string[j] && i != j) {
				needToDelete.push(string[i])
			}
		}
	}
	for ( let i = 0; i < string.length; i++ ) {
		for ( let j = 0; j < needToDelete.length; j++ ) {
			if ( needToDelete[j] === newString[i]) {
				newString = deleteLetters( needToDelete[j], newString )
			}
		}
	}
	console.log('f11 worked')
	return newString
}

const varsForTesting = {
	maxDigit: 567321,
	pow: {
		number: 2,
		power: 5,
	},
	name: 'вЛАД',
	salary: 10000,
	random: {
		min: 2,
		max: 5,
	},
	counter: {
		letter: 'а',
		word: 'Асталавiста',
	},
	currency: '$137',
	password: 5,
	deleteing: {
		letter: 'a',
		word: 'ababagalamaga',
	},
	palyndrom: 'Аргентина манит негра',
	duplicates: 'aabcadefb'
}

const f = [
	`Max digit out of ${varsForTesting.maxDigit} is ${getMaxDigit(varsForTesting.maxDigit)}`,
	`${varsForTesting.pow.number} в ступенi ${varsForTesting.pow.power} дорiнює ${degreeCounter(varsForTesting.pow.number, varsForTesting.pow.power)}`,
	`Propper way to write ${varsForTesting.name} is ${namePrettier(varsForTesting.name)}`,
	`Маючи зп ${varsForTesting.salary} ти отримаєш тiльки ${salaryCount(varsForTesting.salary)}`,
	`Довiльне значення вiд ${varsForTesting.random.min} до ${varsForTesting.random.max} може бути, наприклад ${getRandomNumber(varsForTesting.random.min, varsForTesting.random.max)}`,
	`Буква ${varsForTesting.counter.letter} зустрiчається у рядку ${varsForTesting.counter.word} ${countLetter(varsForTesting.counter.letter, varsForTesting.counter.word)} рази`,
	`async func. will be shown at the bottom`,
	`Your new password is ${createPassword(varsForTesting.password)}`,
	`${varsForTesting.deleteing.word} without all the ${varsForTesting.deleteing.letter}'s is just a ${deleteLetters(varsForTesting.deleteing.letter, varsForTesting.deleteing.word)}`,
	`${varsForTesting.palyndrom} - це${ isPalyndrom(varsForTesting.palyndrom) ? '' : ' не'} палiндром`,
	`${varsForTesting.duplicates} without duplicates is ${deleteDuplicateLetter(varsForTesting.duplicates)}`,
]

const loggingResults = () => {
	for ( let i = 0; i < f.length ; i++ ) {
		console.log(`${i+1}. ${f[i]}`)
	}
	convertCurrency(varsForTesting.currency)
}
loggingResults()

const Card = ( title, text, func, id ) => {
	return (`
		<div id=${id} class="col s4">
			<div class="card grey lighten-4">
				<div class="card-content">
					<span class="card-title">${title}</span>
					<p>${text}</p>
				</div>
				<div class="card-action">
					<a class="waves-effect green btn" onclick="func()">button</a>
				</div>
			</div>
		</div>
	`)
}

const root = document.getElementById('root')

const app = () => {
	root.innerHTML = `
		<div class="row">
			${Card('1. Найбільша цифру в числі', f[0], func = getMaxDigit, id = 1)}
			${Card('2. Визначає ступінь числа', f[1], func = degreeCounter, id = 2)}
			${Card('3. Форматування імені', f[2], func = namePrettier, id = 3)}
		</div>
		<div class="row">
			${Card('4. ЗП після податків', f[3], func = salaryCount, id = 4)}
			${Card('5. Число в діапазоні', f[4], func = getRandomNumber, id = 5)}
			${Card('6. Повторення букви', f[5], func = countLetter, id = 6)}
		</div>
		<div class="row">
			${Card('7. Конвертор', `For ${varsForTesting.currency} dollars you can get ${willGet.getSum()} hryvnas`)}
			${Card('8. Випадковий пароль', f[7], func = createPassword, id = 8)}
			${Card('9. Видалення небхiдних букв', f[8], func = deleteLetters, id = 9)}
		</div>
		<div class="row">
			${Card('10. Паліндром чекер', f[9], func = isPalyndrom, id = 10)}
			${Card('11. Видалення дублiкацiй', f[10], func = deleteDuplicateLetter, id = 11)}
		</div>
	`
}
app()
setTimeout(app, 1000)