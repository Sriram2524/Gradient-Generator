// Style your elements here
import styled from 'styled-components'

export const List = styled.li`
  display: flex;
  margin-right: 10px;
`
export const ListButton = styled.button`
  padding: 10px;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  border: none;
  border-radius: 7px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  background-color: white;
`
