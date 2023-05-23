import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const addTheme = isDarkTheme ? 'dark-body' : ''
      const addHeadingCss = isDarkTheme
        ? 'dark-them-heading'
        : 'light-them-heading'
      const addParaCss = isDarkTheme ? 'light-para' : 'dark-para'

      return (
        <div className={`home-body ${addTheme}`}>
          <NavBar />
          <div className="home-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="not-found-image"
              alt="not found"
            />
            <h1 className={`heading ${addHeadingCss}`}>Lost Your Way?</h1>
            <p className={`not-found-para ${addParaCss}`}>
              We cannot seem to find the page
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
