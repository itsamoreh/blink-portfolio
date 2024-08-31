import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { mediaId, mediaUrl, mediaAlt, content } = attributes;

	const onSelectMedia = (media) => {
		setAttributes({
			mediaId: media.id,
			mediaUrl: media.url,
			mediaAlt: media.alt,
		});
	};

	const onRemoveMedia = () => {
		setAttributes({
			mediaId: undefined,
			mediaUrl: '',
			mediaAlt: '',
		});
	};

	return (
		<div {...useBlockProps()}>
			<div className="media-text__media">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={onSelectMedia}
						allowedTypes={['image']}
						value={mediaId}
						render={({ open }) => (
							<Button
								className={
									mediaId
										? 'image-button'
										: 'button button-large'
								}
								onClick={open}
							>
								{!mediaId ? (
									__('Upload Image', 'bp')
								) : (
									<img src={mediaUrl} alt={mediaAlt} />
								)}
							</Button>
						)}
					/>
				</MediaUploadCheck>
				{mediaId && (
					<Button onClick={onRemoveMedia} isLink isDestructive>
						{__('Remove image', 'bp')}
					</Button>
				)}
			</div>
			<div className="media-text__content">
				<RichText
					tagName="p"
					value={content}
					onChange={(newContent) =>
						setAttributes({ content: newContent })
					}
					placeholder={__(
						'Enter your content here…',
						'custom-blocks'
					)}
				/>
			</div>
		</div>
	);
}
