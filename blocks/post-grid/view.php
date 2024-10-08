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

// Load values and assign defaults.
$number_of_posts     = $attributes['numberOfPosts'] ?? 12;
$post_grid_post_type = $attributes['postType'] ?? 'post';

// WP_Query arguments
$args = array(
	'post_type'      => $post_grid_post_type,
	'posts_per_page' => $number_of_posts,
);

// The Query
$query = new WP_Query( $args );

// The Loop
if ( $query->have_posts() ) : ?>
    <div <?php echo get_block_wrapper_attributes(['class' => 'bp-post-grid']); // phpcs:ignore ?>>
		<div class="bp-post-grid__inner">
			<?php
			while ( $query->have_posts() ) :
				$query->the_post();
				?>
				<article class="bp-post-grid__item">
					<?php if ( has_post_thumbnail() ) : ?>
						<div class="bp-post-grid__item-image">
							<?php the_post_thumbnail( 'medium' ); ?>
						</div>
					<?php endif; ?>
					<div class="bp-post-grid__item-content">
						<h3 class="bp-post-grid__item-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
						<div class="bp-post-grid__item-date"><?php echo get_the_date(); ?></div>
					</div>
				</article>
			<?php endwhile; ?>
		</div>
	</div>
	<?php
endif;

// Restore original Post Data
wp_reset_postdata();
