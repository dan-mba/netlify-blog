import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  subtitle,
  mainpitch,
  description,
}) => (
  <div>
    <div className="full-width-image margin-top-0">
      <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt=""
        style={{
          height: '100%',
          width: '100%',
          overflow: 'hidden',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          height: '100%',
          width: '100%',
          gap: '1.5rem',
          lineHeight: '1',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          zIndex: 10
        }}
      >
        <h1
          className="has-text-weight-bold has-text-centered is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold has-text-centered is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
        >
          {subtitle}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content centerh">
                <div className="content">
                  <div>
                    <h1 className="title is-size-1">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h4 className="subtitle">{mainpitch.description}</h4>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h5>{description}</h5>
                  </div>
                </div>
                <div>
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest Blog Posts
                  </h3>
                  <BlogRoll count="4" />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      More Posts
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
}
