const pannable = (node) => {
	let x;
	let y;

	const handleMouseDown = ({ clientX, clientY }) => {
		x = clientX;
		y = clientY;

		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);
	};

	const handleMouseMove = ({ clientX, clientY }) => {
		const dx = clientX - x;
		const dy = clientY - y;
		x = clientX;
		y = clientY;

		node.dispatchEvent(
			new CustomEvent('pan', {
				detail: { x, y, dx, dy }
			})
		);
	};

	const handleMouseUp = () => {
		window.removeEventListener('mousemove', handleMouseMove);
		window.removeEventListener('mouseup', handleMouseUp);
	};

	node.addEventListener('mousedown', handleMouseDown);
	console.log('listener added to the node');

	return {
		destroy() {
			node.removeEventListener('mousedown', handleMouseDown);
			console.log('listener removed from the node');
		}
	};
};

export default pannable;
