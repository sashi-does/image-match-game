import './index.css'

const Navbar = ({timer, score}) => (
  <nav className="navbar">
    <div>
      <img
        className="logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
      />
    </div>
    <ul className="score-section">
      <li className="score">
        <p>
          Score: <span className="score-timer">{score}</span>
        </p>
      </li>
      <li className="timer-section">
        <img
          className="timer-logo"
          alt="timer"
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
        />
        <p className="score-timer">{timer} sec</p>
      </li>
    </ul>
  </nav>
)

export default Navbar
