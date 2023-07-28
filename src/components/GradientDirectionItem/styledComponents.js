// Style your elements here
import styled from 'styled-components'

export const ButtonDirection = styled.button`
  height: 30px;
  width: 60px;
  border-width: 0px;
  font-family: 'Roboto';
  color: #1e293b;
  margin-right: 10px;
  border-radius: 4px;
  background-color: ${props => (props.isActive ? '#ededed' : '#ffffff79')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
