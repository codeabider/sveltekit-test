<script>
	import '../app.css';
</script>

<style lang="scss" global>
	main,
	h1 {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 4rem auto;
		max-width: 800px;
	}
	p {
		max-width: 800px;
		margin: 2rem auto;
		line-height: 1.35;
	}
</style>

<header>
	<nav>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
		</ul>
	</nav>
</header>
<slot />
<footer>This is app footer</footer>