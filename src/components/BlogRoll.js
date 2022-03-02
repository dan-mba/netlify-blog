import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data, count } = this.props
    let { edges: posts } = data.allMarkdownRemark

    if(count && parseInt(count, 10) < posts.length) {
      posts = posts.slice(0,parseInt(count,10))
    }

    return (
      <div className="blog-roll columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-12" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <div className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <div className="is-size-6">
                      {post.frontmatter.date}
                    </div>
                  </div>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                </p>
                <Link className="button" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  count: PropTypes.string,
}

const BlogRollQuery = ({count}) => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    gatsbyImageData(
                      width: 460,
                      layout: CONSTRAINED,
                      placeholder: NONE,
                      quality: 60
                    )
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <BlogRoll data={data} count={count} />}
  />
)

BlogRollQuery.propTypes = {
  count: PropTypes.string
}

export default BlogRollQuery
