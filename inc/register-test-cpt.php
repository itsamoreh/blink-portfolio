<?php
/**
 * This file registers the Test Page CPT and contains related hooks.
 * On publish these posts will automatically be set to private.
 *
 * If you don't want this CPT anymore ou can clean up test posts from
 * the database by running the following WP-CLI command:
 * wp post delete $(wp post list --post_type=bp_test --format=ids)
 *
 * Once you've cleaned up the test posts you can remove this flie.
 *
 */

 namespace bp;

/**
 * Register the custom post type for Theme Test Pages.
 *
 * @author Amor Kumar <contact@amorkumar.com>
 *
 * @return void
 */
function register_test_page_cpt() {
    $labels = array(
        'name'               => 'Test Pages',
        'singular_name'      => 'Test Page',
        'menu_name'          => 'Test Pages',
        'add_new'            => 'Add New Test Page',
        'add_new_item'       => 'Add New Test Page',
        'edit_item'          => 'Edit Page',
        'new_item'           => 'New Page',
        'view_item'          => 'View Page',
		'parent_item_colon'  => 'Parent Test Page:',
        'search_items'       => 'Search Test Pages',
        'not_found'          => 'No test pages found',
        'not_found_in_trash' => 'No test pages found in trash'
    );

	$args = array(
        'labels'       => $labels,
        'public'       => true,
        'has_archive'  => false,
		'hierarchical' => true,
		'with_front'   => true,
		'rewrite'      => array('slug' => 'test'),
		'show_in_rest' => true,
        'supports'     => array('title', 'editor', 'excerpt', 'page-attributes'),
		'menu_icon'    => 'dashicons-hammer',
		'menu_position' => 99,
    );

    register_post_type('bp_test', $args);
}
add_action('init', __NAMESPACE__ . '\\register_test_page_cpt');

/**
 * Sets the post status to "private" for the custom post type "bp_test" when transitioning to the "publish" status.
 *
 * @see https://wordpress.stackexchange.com/a/118976
 *
 * @param string   $new_status The new post status.
 * @param string   $old_status The previous post status.
 * @param WP_Post  $post       The post object being transitioned.
 * @return void
 */
function test_post_set_private( $new_status, $old_status, $post ) {
    if ( $post->post_type === 'bp_test' && $new_status === 'publish' && $old_status  !== $new_status ) {
        $post->post_status = 'private';
        wp_update_post( $post );
    }
}
add_action( 'transition_post_status', __NAMESPACE__ . '\\test_post_set_private', 10, 3 );
