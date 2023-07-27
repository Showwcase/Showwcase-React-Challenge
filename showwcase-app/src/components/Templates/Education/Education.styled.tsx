import styled from "styled-components"

export default styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  background-color: transparent;
  font-family: "Roboto";
  font-size: 14px;
  color: #ffffff;
  height: 100%;
  width: 100%;

  span {
    font-size: 16px;
  }

  .modal-content {
    background: red;
    display: none !important;
  }
`