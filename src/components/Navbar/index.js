import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickOfMode = () => {
        toggleTheme()
      }
      const addLogoThemeSrc = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const addNavCardCSS = isDarkTheme ? 'nav-grey' : 'nav-light'
      const addNavItemCss = isDarkTheme ? 'dark-nav-item' : 'light-nav-item'
      const addThemeSrc = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <nav className={`nav-card ${addNavCardCSS}`}>
          <img src={addLogoThemeSrc} className="web-theme" alt="website logo" />
          <ul className="nav-item-card">
            <Link to="/" className={`link-nav ${addNavItemCss}`}>
              <li>Home</li>
            </Link>
            <Link to="/about" className={`link-nav ${addNavItemCss}`}>
              <li>About</li>
            </Link>
          </ul>
          <div>
            <button
              className="theme-button"
              type="button"
              data-testid="theme"
              onClick={onClickOfMode}
            >
              <img src={addThemeSrc} className="theme-image" alt="theme" />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default NavBar
