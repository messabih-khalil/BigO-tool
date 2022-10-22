
export class EquationTester {
	constructor(equation) {
		this.equation = equation;
	}

	equationSpliter() {
		const myArray = this.equation.split('+');
		return myArray;
	}

	// check the higher of n^number
	higherOfn() {
		// higher n power number

		let finder = this.equation.match(/n\^\d+/gi);

		let listOfnumbers = [];
		for (let f in finder) {
			parseInt(listOfnumbers.push(finder[f].match(/\d+/g)));
		}

		let higher = 0;
		// get the higher order number
		for (let num in listOfnumbers) {
			if (listOfnumbers[num] >= higher) {
				higher = listOfnumbers[num];
			}
		}

		return `O(n^${parseInt(higher)})`;
	}
	// higher order checker

	higherOrder() {
		// fact search
		if (this.equation.search(/fact/i) != -1) {
			return 'O(n!)';
		}

		// 2 power n search

		if (this.equation.search(/2\^n/i) != -1) {
			return 'O(2^n)';
		}
		// n power 
		if (this.equation.search(/n\^/i) != -1) {
			return this.higherOfn();
		}

		// n log()

		if (this.equation.search(/n\*log/i) != -1 || this.equation.search(/log.n.\*n/i) != -1) {
			return 'O(n*log(n))';
		}

		// n
		if (this.equation.search(/n\*\d+/i) != -1 || this.equation.search(/\d+\*n/i) != -1) {
			return 'O(n)';
		}
		// log n
		if (this.equation.search(/\+?log.n.\+?/i) != -1) {
			return 'O(log(n))';
		}

		if (this.equation.search(/\+?\d+\+?/i) != -1) {
			return 'O(1)';
		}

		// n power number

		return 'Your equation is not correct';
	}
}