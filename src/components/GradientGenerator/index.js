import {Component} from 'react'
import {
  GradientGeneratorDiv,
  Heading,
  Para,
  DirectionContainer,
  InsertColorSelect,
  GenerateButton,
  FirstColorContainer,
  ColorSelectContainer,
  ColorCodeDisplay,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    firstColorCode: '#8ae323',
    secondColorCode: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onChangeDirection = value => {
    this.setState({direction: value})
  }

  onChangeFirstCode = event => {
    this.setState({firstColorCode: event.target.value})
  }

  onChangeSecondCode = event => {
    this.setState({secondColorCode: event.target.value})
  }

  onSubmitGenerate = () => {
    const {direction, firstColorCode, secondColorCode} = this.state
    this.setState({
      gradientValue: `to ${direction},${firstColorCode},${secondColorCode}`,
    })
  }

  render() {
    const {
      firstColorCode,
      secondColorCode,
      gradientValue,
      direction,
    } = this.state

    return (
      <GradientGeneratorDiv
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <DirectionContainer>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              details={eachItem}
              onChangeDirection={this.onChangeDirection}
              isActive={direction === eachItem.value}
            />
          ))}
        </DirectionContainer>
        <Para>Pick the Colors</Para>
        <ColorSelectContainer>
          <FirstColorContainer>
            <ColorCodeDisplay>{firstColorCode}</ColorCodeDisplay>
            <InsertColorSelect
              value={firstColorCode}
              type="color"
              onChange={this.onChangeFirstCode}
            />
          </FirstColorContainer>
          <FirstColorContainer>
            <ColorCodeDisplay>{secondColorCode}</ColorCodeDisplay>
            <InsertColorSelect
              value={secondColorCode}
              type="color"
              onChange={this.onChangeSecondCode}
            />
          </FirstColorContainer>
        </ColorSelectContainer>
        <GenerateButton onClick={this.onSubmitGenerate}>
          Generate
        </GenerateButton>
      </GradientGeneratorDiv>
    )
  }
}

export default GradientGenerator
