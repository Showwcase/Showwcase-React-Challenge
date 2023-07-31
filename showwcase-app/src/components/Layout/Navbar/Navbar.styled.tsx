import styled from "styled-components"

export default styled.nav`
  display: flex;
  padding: 20px 40px;
  align-items: center;
  background-color: #060a16;
  gap: 20px;
  position: fixed;
  top: 0;
  width: 100%;

  span {
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;
    font-size: 22px;
  }

  .menu {
    width: 300px;
    height: 100%;
    background-color: #283154;
    position: fixed;
    top: 70px;
    left: 0;
    z-index: 1;
    transform: translateX(-100%);
    &.hidden {
      transition: transform 0.3s linear;
    }
    &.visible {
      display: block;
      transform: translateX(0);
      transition: transform 0.3s linear;
    }
  }

  /** mobile */
  @media only screen and (max-width: 768px) {
    padding: 20px 20px;
  }
`