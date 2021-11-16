import "../../assets/scss/nav/navbar.scss";
import {useRef, useState} from 'react'

const Navbar = () => {

  const navDropdown = useRef(null)
  const [toggler, setToggler] = useState(true)

  const toggleFunction = () => {
    setToggler(!toggler)
      navDropdown.current.style.display = toggler ? "block": "none";
  }

  return (
    <nav className="navbar-transparent navbar navbar-expand-lg">
      <div className="container">
        <div className="navbar-translate">
          <button onClick={toggleFunction} className="navbar-toggler" id="example-header-6">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </button>
          <a href="#pablo" className="navbar-brand" translate="no">
            Beat Chain
          </a>
        </div>
        <div toggler="#example-header-6" ref={navDropdown} className="collapse navbar-collapse">
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="collapse-brand col-6">
                <a href="#pablo">
                  <span translate="no">beat chain</span>
                </a>
              </div>
              <div className="collapse-close text-right">
                <button onClick={toggleFunction} className="navbar-toggler" id="example-header-6"><i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          <ul className="mx-auto navbar-nav">
            <li className="active nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Connect Wallet
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
          <ul className="nav navbar-right navbar-nav">
            <li className="nav-item">
              <a
                href="https://twitter.com"
                target="_blank"
                className="nav-link"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="nav-link"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="nav-link"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
