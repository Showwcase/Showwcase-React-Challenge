import styled from "styled-components"

export default styled.div`
  display: flex;
  gap: 40px;
  padding: 20px 0;
  align-items: center;
  justify-content: flex-end;
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

    ul {
      list-style: none;
      li {
        margin: 34px 0;
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

  .education-detail {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-self: flex-start;
    background-color: #161b2e;
    padding: 32px 20px;
    border-radius: 12px;
    font-size: 18px;

    ul {
      margin: 0 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      li {
        padding-left: 8px;
      }
    }
  }
`