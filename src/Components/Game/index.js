import {Component} from 'react'
import GameSection from '../GameSection'
import ScoreCard from '../ScoreCard'
import Navbar from '../Navbar'
import './index.css'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'FRUIT',
      timer: 60,
      activeImage: 0,
      score: 0,
      isGameOver: false,
    }
  }

  componentDidMount() {
    this.countDown()
  }

  resetGame = () => {
    this.setState({timer: 60, score: 0, isGameOver: false})
    this.countDown()
  }

  gameOver = () => {
    this.setState({isGameOver: true})
    clearInterval(this.intervalId)
  }

  showRandomImage = () => {
    this.setState(prevState => ({
      score: prevState.score + 1,
      activeImage: Math.floor(Math.random() * 30),
    }))
  }

  countDown = () => {
    this.intervalId = setInterval(() => {
      this.setState(prevState => {
        const {timer} = this.state
        if (timer === 1) {
          this.setState({isGameOver: true})
          clearInterval(this.intervalId)
        }
        return {
          timer: prevState.timer - 1,
        }
      })
    }, 1000)
  }

  changeActiveTab = tabId => {
    this.setState({activeTab: tabId})
  }

  changeScore = () => {
    this.setState(prevState => ({
      score: prevState.score + 1,
    }))
  }

  render() {
    const {timer, score, activeImage, activeTab, isGameOver} = this.state
    const {imagesList, tabsList} = this.props
    return (
      <div className="game">
        <Navbar timer={timer} score={score} />
        {isGameOver !== true ? (
          <GameSection
            gameOver={this.gameOver}
            showRandomImage={this.showRandomImage}
            changeActiveTab={this.changeActiveTab}
            activeTab={activeTab}
            activeImage={activeImage}
            imagesList={imagesList}
            tabsList={tabsList}
            timer={timer}
            score={score}
          />
        ) : (
          <ScoreCard resetGame={this.resetGame} score={score} />
        )}
      </div>
    )
  }
}

export default Game
