import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-2">
                <section className="menu menu-list">
                  <Link to="/" className="navbar-item">
                    Home
                  </Link>
                </section>
              </div>
              <div className="column is-2">
                <section className="menu menu-list">
                  <Link className="navbar-item" to="/about">
                    About
                  </Link>
                </section>
              </div>
              <div className="column is-2">
                <section className="menu menu-list">
                  <Link className="navbar-item" to="/blog">
                    Latest Stories
                  </Link>
                </section>
              </div>
              <div className="column is-2">
                <section className="menu menu-list">
                  <Link className="navbar-item" to="/contact">
                    Contact
                  </Link>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="linkedin"
                  href="https://linkedink.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a title="github"
                  href="https://github.com"
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
}

export default Footer
