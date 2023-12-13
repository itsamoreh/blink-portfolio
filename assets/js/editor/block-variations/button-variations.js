wp.domReady(() => {
	wp.blocks.registerBlockVariation('core/button', {
		title: 'Pill',
		name: 'pill',
		attributes: {
			className: 'is-variation-pill',
			style: { border: { radius: '38px' } },
		},
		scope: ['transform'],
	});

	wp.blocks.registerBlockVariation('core/button', {
		title: 'Pill Light',
		name: 'pill-light',
		attributes: {
			className: 'is-variation-pill-light',
			textColor: 'black-700',
			backgroundColor: 'white',
			style: {
				border: { radius: '38px' },
			},
		},
		scope: ['transform'],
	});

	wp.blocks.registerBlockVariation('core/button', {
		title: 'Pill Outline',
		name: 'pill-outline',
		attributes: {
			className: 'is-variation-pill-outline',
			style: { border: { radius: '38px' } },
		},
		scope: ['transform'],
	});

	wp.blocks.registerBlockVariation('core/button', {
		title: 'Pill Outline Light',
		name: 'pill-outline-light',
		attributes: {
			className: 'is-variation-pill-outline-light',
			style: { border: { radius: '38px' } },
		},
		scope: ['transform'],
	});

	wp.blocks.registerBlockVariation('core/button', {
		title: 'Rounded',
		name: 'rounded',
		attributes: {
			className: 'is-variation-rounded',
			style: { border: { radius: '6px' } },
		},
		scope: ['transform'],
	});

	wp.blocks.registerBlockVariation('core/button', {
		title: 'Rounded Light',
		name: 'rounded-light',
		attributes: {
			className: 'is-variation-rounded-light',
			textColor: 'black-700',
			backgroundColor: 'white',
			style: {
				border: { radius: '6px' },
			},
		},
		scope: ['transform'],
	});

	wp.blocks.registerBlockVariation('core/button', {
		title: 'Rounded Outline',
		name: 'rounded-outline',
		attributes: {
			className: 'is-variation-rounded-outline',
			style: { border: { radius: '6px' } },
		},
		scope: ['transform'],
	});

	wp.blocks.registerBlockVariation('core/button', {
		title: 'Rounded Outline Light',
		name: 'rounded-outline-light',
		attributes: {
			className: 'is-variation-rounded-outline-light',
			style: { border: { radius: '6px' } },
		},
		scope: ['transform'],
	});

	wp.blocks.registerBlockVariation('core/button', {
		title: 'Sharp',
		name: 'sharp',
		attributes: {
			className: 'is-variation-sharp',
			style: { border: { radius: '0' } },
		},
		scope: ['transform'],
	});

	wp.blocks.registerBlockVariation('core/button', {
		title: 'Sharp Light',
		name: 'sharp-light',
		attributes: {
			className: 'is-variation-sharp-light',
			textColor: 'black-700',
			backgroundColor: 'white',
			style: {
				border: { radius: '0' },
			},
		},
		scope: ['transform'],
	});

	wp.blocks.registerBlockVariation('core/button', {
		title: 'Sharp Outline',
		name: 'sharp-outline',
		attributes: {
			className: 'is-variation-sharp-outline',
			style: { border: { radius: '0' } },
		},
		scope: ['transform'],
	});

	wp.blocks.registerBlockVariation('core/button', {
		title: 'Sharp Outline Light',
		name: 'sharp-outline-light',
		attributes: {
			className: 'is-variation-sharp-outline-light',
			style: { border: { radius: '0' } },
		},
		scope: ['transform'],
	});
});
