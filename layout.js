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

	const cards = document.querySelectorAll('.card');
	cards.forEach((card, index) => {
		card.style.animationDelay = `${index * 50 + 200}ms`;

		card.addEventListener(
			'animationend',
			() => {
				card.style.animation = 'none';
				card.style.opacity = '1';
				masonry.layout();
			},
			{ once: true }
		);
	});
});
