const applePrice = 15.678;
const fuelPrice = 123.965;
const iceCreamPrice = 90.2345;

let basicPrices = [
	applePrice,
	fuelPrice,
	iceCreamPrice,
];

	const totalFlooredCount = (firstPrise, secondPrice, thirdPrice) => {
		return Math.floor(firstPrise) + Math.floor(secondPrice) + Math.floor(thirdPrice)
	};

	const ceiledTotal = (price, neededRound) => {
		return Math.round(price/neededRound) * neededRound;
	};

	const averageCount = (arr) => {
		let sum = 0;
		for ( let i = 0; i < arr.length; i++) {
			sum += arr[i]
		}
		return +(sum / arr.length).toFixed(2)
	};



	const newPriceCount = () => {
		return +(prices.totalPrice * (1 - prices.discount)).toFixed(2)
	}

	const profitCount = () => {
		return prices.newPrice - prices.totalPrice / 2
	}



let prices = {
	theBiggestOne: Math.max(applePrice, fuelPrice, iceCreamPrice),
	theLowestOne: Math.min(applePrice, fuelPrice, iceCreamPrice),
	totalPrice: applePrice + fuelPrice + iceCreamPrice,
	totalPriceFloor: totalFlooredCount(applePrice, fuelPrice, iceCreamPrice),
	totalPriceRounded: null,
	isEven: false,
	customerMoney: 500,
	customerChange: null,
	average: null,
	discount: Math.random(),
	newPrice: null,
	profit: null,
};

	prices.totalPriceRounded = ceiledTotal(prices.totalPriceFloor, 100);
	prices.isEven = prices.totalPriceFloor % 2 === 0;
	prices.customerChange = (prices.customerMoney || prompt('How much does customer have?')) - prices.totalPrice;
	prices.average = averageCount(basicPrices);
	prices.newPrice = newPriceCount();
	prices.profit = profitCount();

console.log(
`Максимальна ціна: ${prices.theBiggestOne} 
Мінімальна ціна: ${prices.theLowestOne} 
Вартість всіх товарів: ${prices.totalPrice} 
Округлена ціла частина: ${prices.totalPriceFloor}
Сума товарів округлена до сотень: ${prices.totalPriceRounded}
Чи є сума всіх товарів парним числом: ${ prices.isEven ? 'так' : 'ні' }
Решта: ${prices.customerChange}
Середнє значення цін: ${prices.average}
Нова ціна: ${prices.newPrice}
Чисий прибуток: ${prices.profit}
`)

const root = document.getElementById('root');
const app = () => {
    const render = () => {
        root.innerHTML = `
        	Максимальна ціна: ${prices.theBiggestOne} <br />
			Мінімальна ціна: ${prices.theLowestOne} <br />
			Вартість всіх товарів: ${prices.totalPrice} <br />
			Округлена ціла частина: ${prices.totalPriceFloor} <br />
			Сума товарів округлена до сотень: ${prices.totalPriceRounded} <br />
			Чи є сума всіх товарів парним числом: ${ prices.isEven ? 'так' : 'ні' } <br />
			Решта: ${prices.customerChange} <br />
			Середнє значення цін: ${prices.average} <br />
			Нова ціна: ${prices.newPrice} <br />
			Чисий прибуток: ${prices.profit}
		`;
    };
    render();
}
app();