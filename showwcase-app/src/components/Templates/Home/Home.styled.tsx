import styled from "styled-components"

interface Props {
  inputColor?: string;
}

export default styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 20px;
  align-items: center;
  justify-content: flex-end;
  background-color: transparent;
  font-family: "Roboto";
  font-size: 14px;
  color: #ffffff;

  span {
    font-size: 16px;
  }

  input {
    padding: 12px;
    max-width: 340px;
    width: 100%;
    margin: 0.5em;
    color: #000000;
    /* color: ${(props) => props.inputColor || "#000000"}; */
    background: #ffffff;
    border: none;
    border-radius: 3px;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 12px; */
  }
`