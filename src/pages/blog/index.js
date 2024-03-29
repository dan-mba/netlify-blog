import {StaticImage} from 'gatsby-plugin-image'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Seo from '../../components/Seo'

export default function BlogIndexPage() {
  return (
    <Layout>
      <div className="hero-box margin-top-0">
        <StaticImage src="../../../static/img/binary.jpg" alt=""
          layout="fullWidth"
          placeholder="none"
          quality="30"
          loading="eager"
          className="hero-img-box"
        />
        <div className="hero-text-box">
          <h1 className="has-text-weight-bold is-size-1">
            Latest Stories
          </h1>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <BlogRoll />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => {
  return (
    <Seo />
  )
}
