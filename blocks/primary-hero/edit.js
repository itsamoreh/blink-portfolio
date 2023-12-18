import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Primary Hero Block
 *
 * @param {Object} props props
 * @return {Object} JSX
 */
const PrimaryHero = (props) => {
	const { attributes, setAttributes } = props;
	const { title, body } = attributes;

	const blockProps = useBlockProps({
		className: 'bp-primary-hero',
	});

	const BUTTON_TEMPLATE = [
		'core/button',
		{
			className: 'is-variation-pill-outline is-style-badge-small',
		},
	];

	const BUTTONS_TEMPLATE = [
		[
			'core/buttons',
			{
				style: {
					spacing: {
						blockGap: '12px',
					},
				},
			},
			Array(3).fill(BUTTON_TEMPLATE),
		],
	];

	return (
		<>
			<div {...blockProps}>
				<div className="bp-primary-hero__content">
					<RichText
						className="bp-primary-hero__title"
						tagName="h1"
						placeholder={__('Title here…', 'bp')}
						value={title}
						onChange={(newTitle) =>
							setAttributes({ title: newTitle })
						}
					/>
					<div className="bp-primary-hero__content-right">
						<RichText
							className="bp-primary-hero__body"
							tagName="p"
							placeholder={__('Body here…', 'bp')}
							value={body}
							onChange={(newBody) =>
								setAttributes({ body: newBody })
							}
						/>
						<InnerBlocks
							template={BUTTONS_TEMPLATE}
							templateLock="all"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default PrimaryHero;
