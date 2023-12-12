wp.domReady(() => {
	wp.blocks.registerBlockStyle('core/button', {
		name: 'default-light',
		label: 'Default Light',
	});

	wp.blocks.registerBlockStyle('core/button', {
		name: 'outline',
		label: 'Outline',
	});

	wp.blocks.registerBlockStyle('core/button', {
		name: 'outline-light',
		label: 'Outline Light',
	});
});
