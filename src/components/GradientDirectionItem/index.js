import {List, ListButton} from './styledComponents'
// Write your code here
const GradientDirectionItem = props => {
  const {eachItem, isActive, clickDirection} = props
  const {value, displayText} = eachItem
  const onClickDirection = () => {
    clickDirection(value)
  }
  return (
    <List>
      <ListButton isActive={isActive} onClick={onClickDirection}>
        {displayText}
      </ListButton>
    </List>
  )
}
export default GradientDirectionItem
