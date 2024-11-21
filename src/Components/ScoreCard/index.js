import './index.css'

const ScoreCard = ({score, resetGame}) => (
  <div className="score-card">
    <div className="score-details">
      <img
        className="trophy-icon"
        alt="trophy"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
      />
      <div>
        <p className="total-score">YOUR SCORE</p>
        <p className="total-score game-score">{score}</p>
        <button className="play-again" onClick={resetGame} type="button">
          <span>
            <img
              className="reset-icon"
              alt="reset"
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            />
          </span>
          PLAY AGAIN
        </button>
      </div>
    </div>
  </div>
)

export default ScoreCard
