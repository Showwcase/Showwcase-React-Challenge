import styled from "styled-components"

export default styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  justify-content: flex-end;
  background-color: transparent;
  font-family: "Roboto";
  font-size: 14px;
  color: #ffffff;
  text-align: center;

  span {
    font-size: 16px;
  }

  input {
    padding: 12px;
    max-width: 340px;
    width: 100%;
    margin: 0.5em;
    color: #000000;
    background: #ffffff;
    border: none;
    border-radius: 3px;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Mobile */
  @media only screen and (max-width: 768px) {
    gap: 40px;
  }
`