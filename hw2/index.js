const numberSetter = strToShow => {
	let i = null
	while ( !i ) {
		i = +prompt(strToShow)
		Number.isInteger (i / 1) ? '' : i = null
	}
	return i
}

const counter = () => {
	let res = 0;
	for ( let i = LOWER; i <= HIGHER; i++ ) {
		if ( SKIP_EVEN && i % 2 == 0 ) continue;
		res += i
	}
	return res
}

const LOWER = numberSetter( "Від якого числа небхідно складати?" )
let HIGHER = numberSetter( "До якого числа небхідно складати?" )
const SKIP_EVEN = confirm( "Чи потрібно пропускати парні числа?" )

const root = document.getElementById('root');
const app = () => {
    root.innerHTML = `
    	<h3>Сума  всiх ${SKIP_EVEN ? 'непарних' : ''} 
    	чисел від ${LOWER} до ${HIGHER} 
    	дорівнює ${counter()}. </h3>
	`;
}

const render = () => {
	while ( HIGHER <= LOWER) {
		HIGHER = numberSetter( `Число, до якого необхiдно рахувати має бути бiльше ${LOWER}. Змiнiть своє число:` )
	}
	console.log( counter() )
	app();
}
render();