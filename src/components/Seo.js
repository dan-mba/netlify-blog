import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby'
import useSiteMetadata from './SiteMetadata'

const Seo = ({children, title, description}) => {
  const { title: metaTitle, description: metaDescription } = useSiteMetadata()
  return (
    <>
        <title>{title ? title : metaTitle}</title>
        <meta name="description" content={description ? description :  metaDescription} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        { /*
        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        */ }
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title ? title : metaTitle} />
        <meta property="og:url" content="/" />
        {/*
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
        */}
        {children ? children : null}
      </>
  );
}

Seo.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string
}

export default Seo