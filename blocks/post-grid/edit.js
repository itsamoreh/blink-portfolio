import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { format, dateI18n } from '@wordpress/date';

export default function Edit({ attributes, setAttributes }) {
  const { numberOfPosts, postType } = attributes;

  const posts = useSelect((select) => {
    return select('core').getEntityRecords('postType', postType, {
      per_page: numberOfPosts,
      _embed: true,
    });
  }, [numberOfPosts, postType]);

  const postTypes = useSelect((select) => {
    const { getPostTypes } = select('core');
    return getPostTypes({ per_page: -1 }) || [];
  }, []);

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__('Post Grid Settings', 'bp')}>
          <RangeControl
            label={__('Number of posts', 'bp')}
            value={numberOfPosts}
            onChange={(value) => setAttributes({ numberOfPosts: value })}
            min={1}
            max={12}
          />
          <SelectControl
            label={__('Post Type', 'bp')}
            value={postType}
            options={postTypes.map((type) => ({
              label: type.name,
              value: type.slug,
            }))}
            onChange={(value) => setAttributes({ postType: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div className="post-grid">
        {posts?.map((post) => (
          <div key={post.id} className="post-grid__item">
            <div className="post-grid__image">
              {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                <img
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt={post.title.rendered}
                />
              )}
            </div>
            <div className="post-grid__content">
              <div className="post-grid__date">
                {dateI18n(format('F j, Y'), post.date)}
              </div>
              <h3 className="post-grid__title">{post.title.rendered}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
