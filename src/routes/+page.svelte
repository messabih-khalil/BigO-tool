<script>
	// import compenants
	import Navbar from '../components/navbar.svelte';
	import Chart from '../components/chart.svelte';
	import Table from '../components/table.svelte';
	// import library
	import 'remixicon/fonts/remixicon.css';
	import { EquationTester } from '../actions/equationTester';
	import { itterationCalculator } from '../actions/iterationCalcultor';

	import { generateaxisData } from '../actions/chartRender';

	// biding with chart componants

	let renderChart;

	// variables

	let inputEquation;
	let inputSize;
	let inputEquationValidator;
	let inputSizeValidator;

	// rseult

	let bigOresult = '';
	let calculatorResult = '';

	const bigoCheck = () => {
		if (inputEquation == undefined) {
			inputEquationValidator = false;
		} else if (inputSize == undefined) {
			inputSizeValidator = false;
		} else {
			let result = new EquationTester(inputEquation.toLowerCase());
			bigOresult = result.higherOrder();
			// calculate number of itterations
			if (bigOresult == 'O(1)') {
				calculatorResult = inputEquation;
			}
			// return the result of cpu operation
			calculatorResult = itterationCalculator(inputEquation, inputSize);
			// generate data chart

			let resultGen = generateaxisData(bigOresult);

			// call child chart drawer
			if (bigOresult != 'Your equation is not correct') {
				renderChart(resultGen, bigOresult);
			}
		}
	};
</script>

<Navbar />
<div class="container timefinder">
	<!-- body -->

	<div class="time-finder">
		<!-- left box -->

		<div class="input-and-chart">
			<div class="inputs">
				<div class="input equation-input">
					<p class="title">
						Your equation <span class="notice-hint">
							(Please write your final simplified equation to work fine)
						</span>
					</p>
					<div class="input-body {inputEquationValidator == false ? 'error' : ''}">
						<!-- icon -->
						<i class="ri-functions" />
						<!-- input -->
						<input type="text" placeholder="n^2+log(n)+5*n+25" bind:value={inputEquation} />
					</div>
				</div>
				<div class="input size-input">
					<p class="title">Input size <span class="notice-hint">(number of elements)</span></p>
					<div class="input-body {inputSizeValidator == false ? 'error' : ''}">
						<!-- icon -->
						<i class="ri-keyboard-box-line" />
						<!-- input -->
						<input type="number" placeholder="200 elements" bind:value={inputSize} />
					</div>
				</div>
			</div>

			<!-- submit button -->

			<button class="run-button" on:click={bigoCheck}>
				<i class="ri-play-line" />
				<span> Start </span>
			</button>

			<!-- result -->
			<div class="big-o-result">
				<p class="title result">
					The big O notation is => <span class="bigo-result"> {bigOresult} </span>
				</p>
				<p class="title result">
					The number of operations is => <span class="bigo-result"> {calculatorResult} </span>
				</p>
			</div>
			<!-- chart box -->
			<div class="chart-box">
				<Chart bind:renderChart />
			</div>
		</div>
		<!-- right box -->
		<Table />
	</div>
</div>

<style>
	@import '../assets/css/style.css';
</style>
