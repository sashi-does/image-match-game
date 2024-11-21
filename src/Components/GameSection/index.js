import {Component} from 'react'
import GameItem from '../GameItem'
import TabItem from '../TabItem'
import './index.css'

class GameSection extends Component {
  render() {
    const {
      gameOver,
      changeActiveTab,
      showRandomImage,
      activeImage,
      activeTab,
      imagesList,
      tabsList,
    } = this.props

    const filteredResults = imagesList.filter(
      eachImage => eachImage.category === activeTab,
    )

    return (
      <div>
        <div className="game-section">
          <div className="display-frame">
            <img
              alt="match"
              className="thumbnail"
              src={imagesList[activeImage].imageUrl}
            />
          </div>

          <ul className="tabs-list">
            {tabsList.map(eachTab => (
              <TabItem
                activeTab={activeTab}
                changeActiveTab={changeActiveTab}
                key={eachTab.tabId}
                details={eachTab}
              />
            ))}
          </ul>
          <div className="options-section">
            <ul className="options-list">
              {filteredResults.map(eachImage => (
                <GameItem
                  gameOver={gameOver}
                  showRandomImage={showRandomImage}
                  imageItem={imagesList[activeImage].id}
                  key={eachImage.id}
                  details={eachImage}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GameSection
