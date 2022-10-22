import '../assets/js/nerdamer.core.js';

export function itterationCalculator(equation, numberOfItems) {
	let e = nerdamer(equation, { n: numberOfItems }).evaluate();
	return e.text();
}