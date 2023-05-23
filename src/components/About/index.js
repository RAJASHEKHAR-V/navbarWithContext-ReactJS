import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const addTheme = isDarkTheme ? 'about-dark-body' : ''
      const addAboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const addHeadingCss = isDarkTheme
        ? 'about-dark-them-heading'
        : 'about-light-them-heading'

      return (
        <div className={`about-body ${addTheme}`}>
          <NavBar />
          <div className="about-card">
            <img src={addAboutImage} className="about-image" alt="about" />
            <h1 className={`about-heading ${addHeadingCss}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
