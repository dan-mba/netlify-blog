import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import Content from '../components/Content'
import BlogPostImage from '../components/BlogPostImage'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  featuredimage
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section blog-post">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            {featuredimage ? (
              <div className="featured-image">
                <BlogPostImage
                  imageInfo={{
                    image: featuredimage,
                    imgStyle: {maxWidth: '1000px'},
                    alt: `featured image for post ${title}`
                  }}
                />
              </div>
            ) : null}
            <h3>{description}</h3>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <div className="tags">
                  {tags.map(tag => (
                    <span key={tag + `tag`} className="tag">
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  tags: PropTypes.array,
  title: PropTypes.string,
  featuredimage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}
