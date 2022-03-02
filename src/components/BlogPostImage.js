import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'

const BlogPostImage = ({ imageInfo }) => {
  let imageStyle = {}
  const { alt = '', childImageSharp, image, imgStyle } = imageInfo
  if (imgStyle) imageStyle = imgStyle

  if (image && image.childImageSharp) {
    imageStyle = {
      ...imageStyle,
      margin: "0 auto"
    }
    return (
      <GatsbyImage
        style={imageStyle}
        image={image.childImageSharp.gatsbyImageData}
        alt={alt} />
    )
  }

  if (childImageSharp) {
    imageStyle = {
      ...imageStyle,
      margin: "0 auto"
    }
    return <GatsbyImage style={imageStyle} image={childImageSharp.gatsbyImageData} alt={alt} />
  }

  if (image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />

  return null
}

BlogPostImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    imgStyle: PropTypes.object,
  }).isRequired,
}

export default BlogPostImage
