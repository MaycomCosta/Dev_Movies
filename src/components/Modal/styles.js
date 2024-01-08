import styled from 'styled-components'

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  width: 70%;
  background-color: #000;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  max-width: 1200px;

  iframe {
    border: none;
  }

  .closeButton {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
    color: red;
    padding: 0;
  }
`
