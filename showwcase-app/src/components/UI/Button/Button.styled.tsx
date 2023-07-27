import styled from "styled-components"

export default styled.button`
  display: flex;
  color: #000000;
  background-color: #9dbaed;
  font-size: 1em;
  margin: 1em;
  padding: 0.8em 2.25em;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: #9ba1a7;
  }
`