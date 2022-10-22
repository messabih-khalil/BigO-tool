<script>
	import 'remixicon/fonts/remixicon.css';
	import Navbar from '../../components/navbar.svelte';
</script>

<div>
	<Navbar />

	<div class="content">
		<!-- coming soon -->
		<div class="coming-box">
			<div class="waviy">
				<span style="--i:1">C</span>
				<span style="--i:2">o</span>
				<span style="--i:3">m</span>
				<span style="--i:4">i</span>
				<span style="--i:5">n</span>
				<span style="--i:6">g</span>
				<span style="--i:7" />
				<span style="--i:7" />
				<span style="--i:7" />
				<span style="--i:8">S</span>
				<span style="--i:8">o</span>
				<span style="--i:8">o</span>
				<span style="--i:8">n</span>
				<span style="--i:8">.</span>
				<span style="--i:8">.</span>
				<span style="--i:8">.</span>
			</div>
			<span
				><span class="uni-span">Code Analyzer</span> is a tool calculating the Big O complexity of a
				set of code just from text parsing is, for the most part, infeasible. In this implementation
				I was able to dumb it down to work with basic for-loops for most C-based languages, with the
				intent being that university students could use the tool to get a basic understanding of Big
				O Notation.
			</span>
		</div>
	</div>
</div>

<style>
	.content {
		color: white;
		width: 100%;
		height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.content .coming-box {
		width: 50%;
		text-align: center;
		background-color: #12151c;
		padding: 4rem;
		display: flex;
		align-items: center;
		flex-direction: column;
		border-radius: 20px;
		border-radius: 38px;
		box-shadow: 26px 26px 52px #12151c00, -26px -26px 52px #12151c00;
	}
	span {
		font-size: 24px;
	}
	.uni-span {
		color: rgb(41, 199, 238);
		font-weight: 700;
	}
	.waviy {
		position: relative;
	}
	.waviy span {
		position: relative;
		display: inline-block;
		font-size: 40px;
		color: rgb(41, 199, 238);
		animation: flip 2s infinite;
		animation-delay: calc(0.2s * var(--i));
		font-weight: 700;
	}
	@keyframes flip {
		0%,
		80% {
			transform: rotateY(360deg);
		}
	}

	@media only screen and (max-width: 1024px) {
		.content .coming-box{
			width: 80%;
		}
	}
	@media only screen and (max-width: 700px) {
		.content .coming-box{
			width: 90%;
		}
	}
</style>
