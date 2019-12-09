import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const BlogPostImage = ({ imageInfo }) => {
  let imageStyle = {}
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    imageStyle = {
      ...imageStyle,
      maxWidth: image.childImageSharp.fluid.presentationWidth,
      maxHeight: image.childImageSharp.fluid.presentationHeight,
      margin: "0 auto"
    }
    return (
      <Img
        style={imageStyle}
        fluid={image.childImageSharp.fluid}
        alt={alt} />
    )
  }

  if (!!childImageSharp) {
    imageStyle = {
      ...imageStyle,
      maxWidth: image.childImageSharp.fluid.presentationWidth,
      maxHeight: image.childImageSharp.fluid.presentationHeight,
      margin: "0 auto"
    }
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />

  return null
}

BlogPostImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default BlogPostImage
