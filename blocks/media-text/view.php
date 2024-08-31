<?php
/**
 * Media and Text Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during backend preview render.
 * @param   int $post_id The post ID the block is rendering content against.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'media-text-' . $block['id'];
if (!empty($block['anchor'])) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'wp-block-custom-blocks-media-text';
if (!empty($block['className'])) {
    $className .= ' ' . $block['className'];
}
if (!empty($block['align'])) {
    $className .= ' align' . $block['align'];
}

// Load values and assign defaults.
$media_url = get_field('media_url') ?: '';
$media_alt = get_field('media_alt') ?: '';
$content = get_field('content') ?: '';

?>
<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
    <div class="media-text__media">
        <?php if ($media_url) : ?>
            <img src="<?php echo esc_url($media_url); ?>" alt="<?php echo esc_attr($media_alt); ?>" />
        <?php endif; ?>
    </div>
    <div class="media-text__content">
        <?php echo wp_kses_post($content); ?>
    </div>
</div>
