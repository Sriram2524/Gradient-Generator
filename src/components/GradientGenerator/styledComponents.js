// Style your elements here
import styled from 'styled-components'

export const Background = styled.div`
  background-image: linear-gradient(${props => props.gradientColor});
  height: 100vh;
  width: 100%;
  padding: 35px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  color: white;
  font-family: roboto;
  text-align: center;
  font-weight: bold;
  font-size: 35px;
`
export const ChooseDi = styled.p`
  color: #ffffff79;
  font-size: 15px;
  font-family: roboto;
`
export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const TotalInput = styled.div`
  display: flex;
  flex-direction: row;
`
export const InputContrainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`
export const Color = styled.p`
  color: white;
`
export const Input = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
export const Button = styled.button`
  color: #1e293b;
  background-color: #00c9b7;
  padding: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 15px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
`
