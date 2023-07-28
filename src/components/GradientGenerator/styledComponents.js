// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  padding-top: 10px;
  padding-bottom: 10px;
`
export const DirectionContainer = styled.ul`
  display: flex;
  list-style-type: none;
`
export const InsertColorSelect = styled.input`
  height: 40px;
  width: 80px;
  border-width: 0px;
  margin-right: 30px;
  background-color: transparent;
  opacity: 0.5;
`
export const GenerateButton = styled.button`
  border-width: 0px;
  background-color: #00c9b7;
  font-family: 'Roboto';
  color: #1e293b;
  margin-top: 20px;
  padding: 10px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
`
export const FirstColorContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ColorSelectContainer = styled.div`
  display: flex;
`
export const ColorCodeDisplay = styled.p`
  color: #ededed;
  font-weight: 500;
  padding-bottom: 10px;
`
