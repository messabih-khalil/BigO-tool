<nav>
	<div class="container nav-items">
		<div class="navbar">
			<div class="logo">
				<i class="ri-cpu-line" />
				<span>BigO Tool</span>
			</div>
			<!-- navigation -->
			<ul>
				<li>
					<a href="/codeanalyzer">
						<i class="ri-code-s-slash-line" />
						<span>Code Analyzer</span>
					</a>
				</li>
			</ul>
		</div>

	</div>
</nav>

<style>
	nav {
		background-color: #12151c;
	}
	.nav-items {
		color: white;
		padding: 22px 0;
		font-size: 20px;
		font-weight: 700;
		display: flex;
		align-items: center;
		/* justify-content: space-between; */
		justify-content: space-between;
	}

	.navbar {
		display: flex;
	}

	.ri-book-read-line {
		color: yellow;
		display: none;
	}
	ul {
		list-style: none;
		display: flex;
		align-items: center;
		margin-left: 2rem;
	}

	a {
		color: whitesmoke;
		text-decoration: none;
		font-weight: 500;
		font-size: 18px;
		display: flex;
		align-items: center;
		margin-right: 1rem;
	}

	a:hover {
		color: rgb(43, 226, 171);
	}

	a i {
		font-size: 20px;
		margin-right: 0.5rem;
	}

	.logo {
		display: flex;
		align-items: center;
		justify-content: start;
	}

	.logo i {
		margin-right: 1rem;
	}


</style>
