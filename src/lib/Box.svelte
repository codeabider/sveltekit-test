<script>
	import pannable from '../actions/pannable.js';
	let boxPosition = { x: 0, y: 0 };
	let boxPosition1 = { x: 0, y: 0 };
</script>

<style>
	.box-container {
		background: #a3e9ee;
		height: 100vh;
		position: relative;
	}
	.box {
		background: #e46f6f;
		border-radius: 4px;
		border: 1px solid gray;
		color: #fff;
		cursor: move;
		height: 50px;
		left: calc(50% - 25px);
		position: absolute;
		top: calc(50% - 25px);
		width: 50px;
	}
</style>

<section class="box-container">
	<div
		class="box"
		use:pannable
		on:pan={({ detail }) => {
			console.log({ detail });
			const { x, y, dx, dy } = detail;
			boxPosition = { x: boxPosition.x + dx, y: boxPosition.y + dy };
		}}
		style="transform: translate({boxPosition.x}px, {boxPosition.y}px)" />
	<div
		class="box"
		use:pannable
		on:pan={({ detail }) => {
			console.log({ detail });
			const { x, y, dx, dy } = detail;
			boxPosition1 = { x: boxPosition1.x + dx, y: boxPosition1.y + dy };
		}}
		style="transform: translate({boxPosition1.x}px, {boxPosition1.y}px)" />
</section>