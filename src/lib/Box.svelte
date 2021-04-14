<script>
	import pannable from '../actions/pannable.js';

	let boxes = [
		{
			color: '000000',
			panning: false,
			scale: 1,
			x: 0,
			y: 0
		}
	];

	const handlePanStart = index => {
		const updatedBox = {
			...boxes[index],
			panning: true,
			scale: 1.2
		};

		boxes = getUpdateBoxes(updatedBox, index);
	};

	const handlePan = ({ dx, dy }, index) => {
		const { x, y } = boxes[index];
		const updatedBox = {
			...boxes[index],
			x: x + dx,
			y: y + dy
		};

		boxes = getUpdateBoxes(updatedBox, index);
	};

	const handlePanEnd = index => {
		const updatedBox = {
			...boxes[index],
			panning: false,
			scale: 1
		};

		boxes = getUpdateBoxes(updatedBox, index);
	};

	const getRandomColor = () => Math.floor(Math.random() * 16777215).toString(16);

	const getUpdateBoxes = (updatedBox, index) =>
		boxes.map((item, idx) => {
			if (idx === index) return updatedBox;

			return item;
		});

	const addBox = () => {
		boxes = [
			...boxes,
			{
				x: 0,
				y: 0,
				color: getRandomColor()
			}
		];
	};

	const removeBox = index => {
		boxes = boxes.filter((_, idx) => idx !== index);
	};
</script>

<style lang="scss">
	.box-container {
		background: #a3e9ee;
		height: 100vh;
		position: relative;
	}

	.box {
		background: var(--bg-color);
		border-radius: 4px;
		border: 1px solid gray;
		color: #fff;
		cursor: move;
		height: 50px;
		left: calc(50% - 25px);
		position: absolute;
		top: calc(50% - 25px);
		width: 50px;

		&.panning {
			opacity: 0.7;
		}

		.remove {
			position: absolute;
			background: red;
			border: 1px solid white;
			top: -5px;
			height: 20px;
			width: 20px;
			border-radius: 50%;
			color: white;
			left: -5px;
			cursor: pointer;
		}

		.index {
			position: absolute;
			top: 30%;
			left: 40%;
		}
	}
</style>

<section class="box-container">
	<button on:click={addBox}>+ Add Box</button>

	{#each boxes as { color, panning, scale, x, y }, i}
		<div
			class="box"
			class:panning
			use:pannable
			on:panstart={() => handlePanStart(i)}
			on:pan={({ detail }) => handlePan(detail, i)}
			on:panend={() => handlePanEnd(i)}
			style="transform: translate({x}px,{y}px) scale({scale}); --bg-color: #{color}">
			<span class="remove" on:click={() => removeBox(i)} />
			<span class="index">{i}</span>
		</div>
	{/each}
</section>
