import './index.css'

const GameItem = ({details, showRandomImage, imageItem, gameOver}) => {
  const {thumbnailUrl, id} = details
  const onClickShowRandomImage = () => {
    if (imageItem === id) {
      showRandomImage()
    } else {
      gameOver()
    }
  }
  return (
    <li>
      <button
        className="option-button"
        type="submit"
        onClick={onClickShowRandomImage}
      >
        <img className="image-option" alt="thumbnail" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default GameItem
