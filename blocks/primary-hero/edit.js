import { __ } from '@wordpress/i18n';
import {
	RichText,
	useBlockProps,
	InnerBlocks,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import AttachmentImage from '../_components/AttachmentImage';

/**
 * Primary Hero Block
 *
 * @param {Object} props props
 * @return {Object} JSX
 */
const PrimaryHero = (props) => {
	const { attributes, setAttributes } = props;
	const { title, body, images } = attributes;

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

					<div className="bp-primary-hero__image-grid">
						{images.map((image, index) => (
							<div className="bp-primary-hero__image" key={index}>
								<MediaUploadCheck>
									<MediaUpload
										allowedTypes={['image']}
										value={image}
										onSelect={(newImage) => {
											const newImages = [...images];
											newImages[index] = newImage.id;
											setAttributes({
												images: newImages,
											});
										}}
										render={({ open }) => (
											<div className="bp-primary-hero__media-button-wrapper">
												<Button onClick={open}>
													Select or replace image
												</Button>
											</div>
										)}
									/>
								</MediaUploadCheck>
								{images[index] && (
									<AttachmentImage
										imageId={images[index]}
										size="full"
									/>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default PrimaryHero;
