import PropTypes from 'prop-types'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
//import './all.sass'


const TemplateWrapper = ({ children }) => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default TemplateWrapper
