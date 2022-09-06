import PropTypes from 'prop-types'
import {kebabCase} from 'lodash'
import {Link, graphql} from 'gatsby'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => {
  group.sort((a,b) => {
    // Sort descending by count
    if(b.totalCount - a.totalCount !== 0) {
      return b.totalCount - a.totalCount;
    }
    //sort alphabetically
    return a.fieldValue.toLowerCase().localeCompare(b.fieldValue.toLowerCase());
  });
  return (
    <Layout>
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: '6rem' }}
            >
              <h1 className="title is-size-2 is-bold-light">Tags</h1>
              <ul className="taglist">
                {group.map(tag => (
                  <li key={tag.fieldValue}>
                    <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                      {tag.fieldValue} ({tag.totalCount})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

TagsPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default TagsPage

export const Head = ({
  data: {
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  return (
    <Seo title={`Tags | ${title}`}/>
  )
}

Head.propTypes = {
  data: PropTypes.object.isRequired
}

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
