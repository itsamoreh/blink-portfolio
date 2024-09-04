<?php
/**
 * Post Grid Block Template.
 *
 * @param array    $attributes     The array of attributes for this block.
 * @param string   $content        Rendered block output. ie. <InnerBlocks.Content />.
 * @param WP_Block $block_instance The instance of the WP_Block class that represents the block being rendered.
 *
 * @package bp
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'post-grid-' . $block_instance->block_type->name;
if (!empty($attributes['anchor'])) {
    $id = $attributes['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$class_name = 'wp-block-bp-post-grid';
if (!empty($attributes['className'])) {
    $class_name .= ' ' . $attributes['className'];
}
if (!empty($attributes['align'])) {
    $class_name .= ' align' . $attributes['align'];
}

// Load values and assign defaults.
$number_of_posts = $attributes['numberOfPosts'] ?? 12;
$post_type = $attributes['postType'] ?? 'post';

// WP_Query arguments
$args = array(
    'post_type'      => $post_type,
    'posts_per_page' => $number_of_posts,
);

// The Query
$query = new WP_Query($args);

// The Loop
if ($query->have_posts()) : ?>
    <div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($class_name); ?>">
        <div class="post-grid">
            <?php while ($query->have_posts()) : $query->the_post(); ?>
                <article class="post-grid-item">
                    <?php if (has_post_thumbnail()) : ?>
                        <div class="post-grid-item-image">
                            <?php the_post_thumbnail('medium'); ?>
                        </div>
                    <?php endif; ?>
                    <div class="post-grid-item-content">
                        <h3 class="post-grid-item-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                        <div class="post-grid-item-date"><?php echo get_the_date(); ?></div>
                    </div>
                </article>
            <?php endwhile; ?>
        </div>
    </div>
<?php
endif;

// Restore original Post Data
wp_reset_postdata();
