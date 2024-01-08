import styled, { css } from 'styled-components'

export const ButtonCss = css`
  border: 3px solid #ffffff;
  background: transparent;
  color: #ffffff;
  border-radius: 30px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  padding: 10px 20px;

  &:hover {
    color: #ff0000;
    background: #ffffff;
  }
`

export const ButtonWhite = styled.button`
  ${ButtonCss}
`

export const ButtonRed = styled.button`
  ${ButtonCss}
  background: #ff0000;
  border: 4px solid transparent;
  box-shadow: 0px 0px 7px 8px rgb(255 0 0 /30%);

  &:hover {
    box-shadow: 0px 0px 7px 16px rgb(255 0 0 /30%);
    background: #ff0000;
    color: #ffffff;
  }
`
