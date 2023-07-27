import styled from "styled-components"

export default styled.div`
  position: relative;
  width: 100%;
  min-height: 36px;
  border: .05em solid #777;
  display: flex;
  align-items: center;
  gap: .5em;
  padding: 10px 14px;
  border-radius: .25em;
  outline: none;
  font-family: 'Arial';
  font-size: 14px;

  &:focus {
    border-color: hsl(200, 100%, 50%);
  }

  .value {
    flex-grow: 1;
    display: flex;
    gap: .5em;
    flex-wrap: wrap;
  }

  .clear-btn {
    background: none;
    color: #777;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    font-size: 1.25em;
  }

  .clear-btn:focus,
  .clear-btn:hover {
    color: #333;
  }

  .divider {
    background-color: #777;
    align-self: stretch;
    width: .05em;
  }

  .caret {
    translate: 0 25%;
    border: .25em solid transparent;
    border-top-color: #777;
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