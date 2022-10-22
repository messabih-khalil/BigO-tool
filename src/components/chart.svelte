<script>
	export const renderChart = (resultGen, bigOresult) => {
		let data = {
			labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
			datasets: [
				{
					label: bigOresult,
					data: [],
					borderColor: 'rgba(75, 192, 192, 1)',
					fill: false
				}
			]
		};
		const ctx = document.getElementById('myChart');
		Chart.pluginService.register({
			beforeInit: function (chart) {
				let data = chart.config.data;
				// empty list

				data.datasets[0].data = [];

				for (let i in resultGen) {
					data.datasets[0].data.push(resultGen[i]);
				}
			}
		});
		new Chart(ctx, {
			type: 'line',
			data: data,
			options: {
				maintainAspectRatio: false,
				elements: {
					point: {
						radius: 0
					}
				},
				scales: {
					yAxes: [
						{
							scaleLabel: {
								display: true,
								labelString: 'CPU OPERTAION'
							}
						}
					],
					xAxes: [
						{
							scaleLabel: {
								display: true,
								labelString: 'Input size (Number of elements)'
							},
							scaleFontSize: 40
						}
					]
				}
			}
		});
	};
</script>

<div class="charts">
	<div class="chart-items">
		{#key renderChart}
			<canvas id="myChart" />
		{/key}
	</div>
</div>

<style>
	.charts {
		width: 100%;
		height: 100%;
		background-color: #12151c;
		border-radius: 20px;
	}
	.chart-items {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		position: relative;
		resize: both;
	}

	.chart-items canvas {
		width: 100%;
		height: 100%;
	}
</style>
