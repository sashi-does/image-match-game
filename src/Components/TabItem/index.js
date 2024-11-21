import './index.css'

const TabItem = ({details, changeActiveTab, activeTab}) => {
  const {tabId, displayText} = details
  const onClickActiveTab = () => {
    changeActiveTab(tabId)
  }
  let isActiveOrNot = 'tab-item'
  if (tabId === activeTab) isActiveOrNot = 'tab-item active-tab'
  return (
    <li>
      <button
        onClick={onClickActiveTab}
        className={isActiveOrNot}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
