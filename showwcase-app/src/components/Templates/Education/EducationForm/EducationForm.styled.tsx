import styled from "styled-components"

export default styled.div`
  font-family: "Roboto";
  font-size: 14px;
  color: #ffffff;

  label {
    font-family: "Arial";
    font-weight: 600;
    color: #d0d5dd;
    display: block;
    margin-bottom: 8px;
  }

  .modal-content {
    background: red;
    display: none !important;
  }
  
  .modal-body {
    width: 100%;
  }

  .dropdown-wrapper {
    display: flex;
    gap: 20px;
  }

  .dropdown-box {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    width: 100%;
    .dropdown-content {
      display: flex;
      gap: 10px;
    }
  }

  /** mobile */
  @media only screen and (max-width: 768px) {
    .dropdown-wrapper {
      display: block;
    }
  }
`