// Write your code here
import {ButtonDirection} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, onChangeDirection, isActive} = props
  const {directionId, displayText, value} = details

  const onClickPassDirection = () => {
    onChangeDirection(value)
  }

  return (
    <>
      <li>
        <ButtonDirection
          type="button"
          onClick={onClickPassDirection}
          isActive={isActive}
        >
          {displayText}
        </ButtonDirection>
      </li>
    </>
  )
}

export default GradientDirectionItem
