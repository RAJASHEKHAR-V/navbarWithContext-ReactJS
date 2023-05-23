import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const addTheme = isDarkTheme ? 'dark-body' : ''
      const addHomeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const addHeadingCss = isDarkTheme
        ? 'home-dark-them-heading'
        : 'home-light-them-heading'

      return (
        <div className={`home-body ${addTheme}`}>
          <NavBar />
          <div className="home-card">
            <img src={addHomeImage} className="home-image" alt="home" />
            <h1 className={`home-heading ${addHeadingCss}`}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
