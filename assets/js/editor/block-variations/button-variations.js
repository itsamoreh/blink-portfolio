wp.domReady(() => {
	wp.blocks.registerBlockVariation('core/button', {
		title: 'Pill',
		name: 'rounded',
		attributes: { style: { border: { radius: '38px' } } },
		scope: ['transform'],
	});

	wp.blocks.registerBlockVariation('core/button', {
		title: 'Rounded',
		name: 'soft-square',
		attributes: { style: { border: { radius: '6px' } } },
		scope: ['transform'],
	});

	wp.blocks.registerBlockVariation('core/button', {
		title: 'Sharp',
		name: 'square',
		attributes: { style: { border: { radius: '0' } } },
		scope: ['transform'],
	});

	wp.blocks.registerBlockVariation('core/button', {
		title: 'Size XL',
		name: 'extra-large',
		attributes: { style: { typography: { fontSize: '26px' } } },
		scope: ['transform'],
	});

	wp.blocks.registerBlockVariation('core/button', {
		title: 'Size Large',
		name: 'large',
		attributes: { style: { typography: { fontSize: '20px' } } },
		scope: ['transform'],
	});

	wp.blocks.registerBlockVariation('core/button', {
		title: 'Size Default',
		name: 'deafult',
		attributes: { style: { typography: { fontSize: '18px' } } },
		scope: ['transform'],
	});

	wp.blocks.registerBlockVariation('core/button', {
		title: 'Size Small',
		name: 'small',
		attributes: { style: { typography: { fontSize: '16px' } } },
		scope: ['transform'],
	});

	wp.blocks.registerBlockVariation('core/button', {
		title: 'Size XS',
		name: 'extra-small',
		attributes: { style: { typography: { fontSize: '14px' } } },
		scope: ['transform'],
	});
});
