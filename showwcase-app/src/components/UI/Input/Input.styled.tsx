import styled from "styled-components"

interface Props {
  bgColor?: string;
}

const Button = styled.div<Props>`
  margin-top: 12px;
  
  label {
    font-weight: 600;
    font-size: 18px;
    color: #d0d5dd;
    display: block;
    margin-bottom: 8px;
  }

  input {
    font-size: 16px;
    font-weight: 400;
    width: 250px;
    color: #344054;
    background-color: ${(props) => props.bgColor || "#ffffff"};
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    padding: 10px 14px;
  }

  input::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #667085;
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
`

export default Button;