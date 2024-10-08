<?php
/**
 * Media and Text Block Template.
 *
 * @param array    $attributes     The array of attributes for this block.
 * @param string   $content        Rendered block output. ie. <InnerBlocks.Content />.
 * @param WP_Block $block_instance The instance of the WP_Block class that represents the block being rendered.
 *
 * @package bp
 */

// Load values from attributes
$media_id  = $attributes['mediaId'] ?? 0;
$media_url = $attributes['mediaUrl'] ?? '';
$media_alt = $attributes['mediaAlt'] ?? '';
$content   = $attributes['content'] ?? '';

?>
<div <?php echo get_block_wrapper_attributes(['class' => 'bp-media-text']); // phpcs:ignore ?>>
	<div class="bp-media-text__media">
		<?php if ( $media_id ) : ?>
			<?php echo wp_get_attachment_image( $media_id, 'full', false, array( 'alt' => $media_alt ) ); ?>
		<?php elseif ( $media_url ) : ?>
			<img src="<?php echo esc_url( $media_url ); ?>" alt="<?php echo esc_attr( $media_alt ); ?>" />
		<?php endif; ?>
	</div>
	<div class="bp-media-text__content">
		<?php echo wp_kses_post( $content ); ?>
	</div>
</div>
