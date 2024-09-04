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

// Create id attribute allowing for custom "anchor" value.
$id = 'media-text-' . $block_instance->block_type->name;
if (!empty($attributes['anchor'])) {
    $id = $attributes['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$class_name = 'wp-block-bp-media-text';
if (!empty($attributes['className'])) {
    $class_name .= ' ' . $attributes['className'];
}
if (!empty($attributes['align'])) {
    $class_name .= ' align' . $attributes['align'];
}

// Load values from attributes
$media_id = $attributes['mediaId'] ?? 0;
$media_url = $attributes['mediaUrl'] ?? '';
$media_alt = $attributes['mediaAlt'] ?? '';
$content = $attributes['content'] ?? '';

?>
<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($class_name); ?>">
    <div class="media-text__media">
        <?php if ($media_id) : ?>
            <?php echo wp_get_attachment_image($media_id, 'full', false, array('alt' => $media_alt)); ?>
        <?php elseif ($media_url) : ?>
            <img src="<?php echo esc_url($media_url); ?>" alt="<?php echo esc_attr($media_alt); ?>" />
        <?php endif; ?>
    </div>
    <div class="media-text__content">
        <?php echo wp_kses_post($content); ?>
    </div>
</div>
