import themeJson from '../../../../theme.json';

wp.domReady(() => {
	const textBlocks = ['core/paragraph'];
	const fontSizes = themeJson.settings.typography.fontSizes;
	const headingFontSizes = fontSizes
		// Filter out font sizes that aren't body sizes
		.filter((item) => item.slug.startsWith('body'))
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
