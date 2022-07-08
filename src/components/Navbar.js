import { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import logo from '../img/danlogo.png'

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState('');

  useEffect(() => {
    // set the class in state for the navbar accordingly
    active ? setNavBarActiveClass('is-active')
      : setNavBarActiveClass('');
  }, [active]);

  const toggleHamburger = () => {
    // toggle the active boolean in the state
    setActive(!active);
    // after state has been updated,
  }
  
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" id="logo" className="navbar-item" title="Logo">
            <img src={logo} alt="Dan" />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            aria-hidden="true"
            role="presentation"
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${navBarActiveClass}`}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
