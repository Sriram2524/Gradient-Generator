import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  Background,
  Heading,
  ChooseDi,
  UnorderedList,
  TotalInput,
  InputContrainer,
  Color,
  Input,
  Button,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    activeVaiue: gradientDirectionsList[0].value,
    gradientColor: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  clickDirection = value => {
    this.setState({activeVaiue: value})
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  onClickButton = () => {
    const {activeVaiue, firstColor, secondColor} = this.state
    this.setState({
      gradientColor: `to ${activeVaiue},${firstColor},${secondColor}`,
    })
  }

  render() {
    const {firstColor, activeVaiue, secondColor, gradientColor} = this.state

    return (
      <Background data-testid="gradientGenerator" gradientColor={gradientColor}>
        <Heading>Generate a CSS Color Gradient</Heading>
        <ChooseDi>Choose Direction</ChooseDi>
        <UnorderedList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              clickDirection={this.clickDirection}
              eachItem={each}
              key={each.directionId}
              isActive={activeVaiue === each.value}
            />
          ))}
        </UnorderedList>
        <ChooseDi>Pick the colors</ChooseDi>
        <TotalInput>
          <InputContrainer>
            <Color>{firstColor}</Color>
            <Input
              value={firstColor}
              onChange={this.onChangeFirstColor}
              type="color"
            />
          </InputContrainer>
          <InputContrainer>
            <Color>{secondColor}</Color>
            <Input
              value={secondColor}
              onChange={this.onChangeSecondColor}
              type="color"
            />
          </InputContrainer>
        </TotalInput>
        <Button onClick={this.onClickButton} type="button">
          Generate
        </Button>
      </Background>
    )
  }
}
export default GradientGenerator
