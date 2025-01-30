import styled from '@emotion/styled'

export const Button = styled.button`
  label: Button;
  padding: 6px 12px;
  background-color: lightgreen;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid black;
  color: black;
  margin:0 9px;
  &:hover {
    color: hotpink;
  }
`

export const ButtonContainer = styled.div`
label: ButtonContainer;
display: flex;
justify-content:center;
align-items: center;
margin:25px;
`