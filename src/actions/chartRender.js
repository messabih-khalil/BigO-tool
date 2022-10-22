// import Chart from 'chart.js';
import '../assets/js/nerdamer.core.js';

let equationText = '';

const findeEquation = (equation) => {
	if (equation == 'O(1)') {
		equationText = 'n/n';
	} else if (equation == 'O(log(n))') {
		equationText = 'log(n)';
	} else if (equation == 'O(n)') {
		equationText = 'n';
	} else if (equation.search(/n\^/i) != -1) {
		let power = equation.match(/n\^\d+/gi);
		equationText = power[0];
	} else if (equation == 'O(n*log(n))') {
		equationText = 'n*log(n)';
	} else if (equation == 'O(2^n)') {
		equationText = '2^n';
	} else if (equation == 'O(n!)') {
		equationText = 'fact(n)';
	}
};

const calculator = () => {
	let calculateData = [];
	for (let i = 1; i <= 5; i++) {
		let e = nerdamer(equationText, { n: i }).evaluate();
		calculateData.push(parseFloat(e.text()));
	}
	return calculateData;
};

export const generateaxisData = (notation) => {
	findeEquation(notation);

	return calculator();
};