import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function TagRoute({data, pageContext}) {
  const posts = data.allMarkdownRemark.edges
  const postLinks = posts.map(post => (
    <li key={post.node.fields.slug}>
      <Link to={post.node.fields.slug}>
        <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
      </Link>
    </li>
  ))
  const tag = pageContext.tag
  const totalCount = data.allMarkdownRemark.totalCount
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with “${tag}”`
  return (
    <Layout>
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: '6rem' }}
            >
              <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
              <ul className="taglist">{postLinks}</ul>
              <p>
                <Link to="/tags/">Browse all tags</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

TagRoute.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export const Head = ({data, pageContext}) => {
  const tag = pageContext.tag
  const title = data.site.siteMetadata.title

  return (
    <Seo title={`${tag} | ${title}`}/>
  )
}

Head.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
