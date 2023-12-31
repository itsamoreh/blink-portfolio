/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies.
 */
import json from './block.json';
import Edit from './edit';

import './style.css';
import { InnerBlocks } from '@wordpress/block-editor';

const { name } = json;

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(name, {
	edit: Edit,
	/**
	 * This is a dynamic block.
	 */
	save: () => <InnerBlocks.Content />,
});
