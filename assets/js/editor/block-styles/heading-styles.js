import themeJson from '../../../../theme.json';

wp.domReady(() => {
	const textBlocks = ['core/heading'];
	const fontSizes = themeJson.settings.typography.fontSizes;
	const headingFontSizes = fontSizes
		// Filter out font sizes that aren't heading sizes
		.filter(
			(item) => item.slug.startsWith('h') || item.slug.startsWith('d')
		)
		// Sort by size from largest to smallest
		.sort((a, b) => parseFloat(b.size) - parseFloat(a.size));

	textBlocks.forEach((block) => {
		headingFontSizes.forEach((headingFontSize) => {
			wp.blocks.registerBlockStyle(block, {
				label: headingFontSize.name,
				name: headingFontSize.slug,
			});
		});
	});
});
