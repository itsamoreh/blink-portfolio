<?php
/**
 * All of the parameters passed to the function where this file is being required are accessible in this scope:
 *
 * @param array    $attributes     The array of attributes for this block.
 * @param string   $content        Rendered block output. ie. <InnerBlocks.Content />.
 * @param WP_Block $block_instance The instance of the WP_Block class that represents the block being rendered.
 *
 * @package bp
 */

?>
<section <?php echo get_block_wrapper_attributes(['class' => 'bp-primary-hero']); // phpcs:ignore ?>>
	<div class="bp-primary-hero__content">
		<h2 class="bp-primary-hero__title">
			<?php echo wp_kses_post($attributes['title']); ?>
		</h2>
		<div class="bp-primary-hero__content-right">
			<p class="bp-primary-hero__body">
				<?php echo wp_kses_post($attributes['body']); ?>
			</p>
			<?php echo $content ?>
		</div>
		<div class="bp-primary-hero__image-grid">
		<?php
  			foreach ( $attributes['images'] as $image_id ) {
				echo '<div class="bp-primary-hero__image">';
				echo wp_get_attachment_image( $image_id, 'full' );
				echo '</div>';
			}
  		?>
		</div>
	</div>
</section>
