import styled from "styled-components"

export default styled.div`
  margin-top: 12px;
  font-size: 14px;
  
  label {
    font-family: "Arial";
    font-weight: 600;
    color: #d0d5dd;
    display: block;
    margin-bottom: 8px;
  }

  textarea {
    font-family: "Arial";
    font-weight: 400;
    width: 100%;
    min-width: 250px;
    min-height: 100px;
    color: #344054;
    color: #ffffff;
    background-color: transparent;
    border: 1px solid #2d2e2f;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 6px;
    padding: 10px 14px;
  }

  textarea::placeholder {
    font-weight: 400;
    color: #6f7990;
  }

  /* Input field focus */
  textarea:focus {
    outline: none;
  }

  .error {
    color: #db4437;
    font-size: 14px;
    font-weight: 400;
    margin-left: 12px;
    margin-top: 4px;
  }
`