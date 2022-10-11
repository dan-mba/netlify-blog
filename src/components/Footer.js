import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import logo from '../img/danlogo.png'

export default function Footer() {
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered">
        <img
          src={logo}
          alt="Dan"
          style={{ height: '2.5rem'}}
        />
      </div>
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div className="columns">
            <div className="column is-one-quarter">
              <section className="menu menu-list">
                <Link className="navbar-item has-text-centered" to="/">
                  Home
                </Link>
              </section>
            </div>
            <div className="column is-one-quarter">
              <section className="menu menu-list">
                <Link className="navbar-item has-text-centered" to="/about">
                  About
                </Link>
              </section>
            </div>
            <div className="column is-one-quarter">
              <section className="menu menu-list">
                <Link className="navbar-item has-text-centered" to="/blog">
                  Latest Stories
                </Link>
              </section>
            </div>
            <div className="column is-one-quarter social">
              <a title="linkedin"
                href="https://www.linkedin.com/in/danburkhardt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a title="github"
                href="https://github.com/dan-mba"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

