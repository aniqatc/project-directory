/* Use Masonry.js to create dynamic layout containing cards of varying heights */
document.addEventListener('DOMContentLoaded', function () {
	const grid = document.querySelector('main');
	const masonry = new Masonry(grid, {
		itemSelector: '.card',
		columnWidth: '.card',
		gutter: 16,
		fitWidth: true,
		stagger: 30,
		isAnimated: true,
	});

	masonry.reloadItems();

	imagesLoaded(grid).on('always', function () {
		masonry.layout();
	});
});
