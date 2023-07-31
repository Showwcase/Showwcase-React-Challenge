import styled from "styled-components"

export default styled.div`
  display: flex;
  gap: 40px;
  padding: 20px 0;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-family: "Roboto";
  font-size: 14px;
  color: #ffffff;
  height: 100%;
  width: 100%;

  .side-panel {
    width: 30%;
    height: 500px;
    align-self: flex-start;
    background-color: #161b2e;
    border-radius: 12px;
    padding: 0 20px;
    font-size: 18px;
    overflow-y: auto;

    ul {
      list-style: none;
      li {
        margin: 26px 0;
        cursor: pointer;
        &.active {
          color: #7ecdd9;
        }
        &:hover {
          color: #5a5e6f;
        }
      }
    }
  }

  .menu {
    display: none;
  }

  .education-detail {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-self: flex-start;
    background-color: #161b2e;
    padding: 26px 20px;
    border-radius: 12px;
    font-size: 18px;

    pre {
      font-family: "Roboto";
      font-size: 18px;
      white-space: pre-wrap;
    }
  }

  .empty-data {
    font-size: 22px;
    margin-top: 60px;
  }

  /** mobile */
  @media only screen and (max-width: 768px) {
    gap: 0;
    .menu {
      display: block;
      width: 300px;
      height: 100%;
      position: fixed;
      top: 70px;
      left: 0;
      background-color: #283154;
      z-index: 2;
      transform: translateX(-100%);
      &.hidden {
        transition: transform 0.3s linear;
      }
      &.visible {
        transform: translateX(0);
        transition: transform 0.3s linear;
      }

      align-self: flex-start;
      background-color: #161b2e;
      padding: 0 20px;
      font-size: 18px;

      ul {
        font-size: 16px;
        list-style: none;
        li {
          margin: 20px 0;
          cursor: pointer;
          &.active {
            color: #7ecdd9;
          }
        }
      }
    }
    .side-panel {
      display: none;
    }
    .education-detail {
      gap: 10px;
      padding: 20px;
      h3 {
        font-size: 18px;
      }
      pre {
        font-size: 16px;
      }
    }
    .empty-data {
      font-size: 16px;
    }
  }
`