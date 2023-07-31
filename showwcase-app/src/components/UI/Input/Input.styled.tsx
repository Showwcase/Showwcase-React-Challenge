import styled from "styled-components"

export default styled.div`
  margin-top: 12px;
  font-size: 14px;
  position: relative;
  
  label {
    font-family: "Arial";
    font-weight: 600;
    color: #d0d5dd;
    display: block;
    margin-bottom: 8px;
  }

  input {
    font-weight: 400;
    width: 100%;
    min-width: 250px;
    color: #344054;
    color: #ffffff;
    background-color: transparent;
    border: 1px solid #2d2e2f;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 6px;
    padding: 10px 14px;
  }

  input::placeholder {
    font-weight: 400;
    color: #6f7990;
  }

  /* Input field focus */
  input:focus {
    outline: none;
  }

  .error {
    color: #db4437;
    font-size: 14px;
    font-weight: 400;
    margin-left: 12px;
    margin-top: 4px;
  }

  .loader {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .options {
    position: absolute;
    margin: 0;
    padding: 0;
    list-style: none;
    display: none;
    max-height: 15em;
    overflow-y: auto;
    border: .05em solid #777;
    border-radius: .25em;
    width: 100%;
    left: 0;
    top: calc(100% + .25em);
    background-color: #171718;
    z-index: 100;
  }

  .options.show {
    display: block;
  }

  .option {
    padding: 10px 14px;
    cursor: pointer;
  }

  .option.selected {
    background-color: #2c3766;
  }

  .option.highlighted {
    background-color: #455698;
    color: white
  }

  .option-badge {
    display: flex;
    align-items: center;
    border: .05em solid #777;
    border-radius: .25em;
    padding: .15em .25em;
    gap: .25em;
    cursor: pointer;
    background: none;
    outline: none;
  }

  .option-badge:hover,
  .option-badge:focus {
    background-color: hsl(0, 100%, 90%);
    border-color: hsl(0, 100%, 50%);
  }

  .option-badge:hover > .remove-btn,
  .option-badge:focus > .remove-btn{
    color: hsl(0, 100%, 50%);
  }

  .option-badge > .remove-btn {
    font-size: 1.25em;
    color: #777;
  }
`