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
<section <?php echo get_block_wrapper_attributes(['class' => 'bp-cta']); // phpcs:ignore ?>>
	<div class="bp-cta__content" style="max-width: <?php echo esc_attr($attributes['maxContentWidth'] . 'px') ?>">
		<p class="bp-cta__subtitle">
            <?php echo wp_kses_post( $attributes['subtitle'] ?? '' ); ?>
        </p>
		<h2 class="bp-cta__title">
			<?php echo wp_kses_post( $attributes['title'] ); ?>
		</h2>
		<?php echo $content ?>
	</div>
</section>
