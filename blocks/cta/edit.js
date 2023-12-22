import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	RichText,
	useBlockProps,
	InnerBlocks,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

/**
 * bp/cta Gutenberg block
 *
 * @param {Object} props props
 * @return {Object} JSX
 */
const Edit = (props) => {
	const { attributes, setAttributes } = props;
	const { title, subtitle, maxContentWidth } = attributes;

	const blockProps = useBlockProps({
		className: 'bp-cta',
	});

	const BUTTON_TEMPLATE = [
		'core/button',
		{
			className: 'is-variation-pill-outline-light is-style-pill-medium',
		},
	];

	const BUTTONS_TEMPLATE = [
		[
			'core/buttons',
			{
				layout: {
					type: 'flex',
					justifyContent: 'center',
				},
			},
			Array(1).fill(BUTTON_TEMPLATE),
		],
	];

	return (
		<>
			<div {...blockProps}>
				<div
					className="bp-cta__content"
					style={{ maxWidth: maxContentWidth }}
				>
					<RichText
						tagName="p"
						className="bp-cta__subtitle"
						placeholder={__('Subtitle here…', 'bp')}
						value={subtitle}
						onChange={(newSubTitle) =>
							setAttributes({ subtitle: newSubTitle })
						}
					/>
					<RichText
						tagName="h2"
						className="bp-cta__title"
						placeholder={__('Title here…', 'bp')}
						value={title}
						onChange={(newTitle) =>
							setAttributes({ title: newTitle })
						}
					/>
					<InnerBlocks template={BUTTONS_TEMPLATE} />
				</div>
			</div>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						help="Choose the maximum content width."
						initialPosition={684}
						label="Max Content Width"
						max={1232}
						min={684}
						onChange={(newMaxContentWidth) => {
							setAttributes({
								maxContentWidth: newMaxContentWidth,
							});
						}}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Edit;
