import styled from "styled-components"

export default styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    height: 30px;
    display: flex;
    justify-content: flex-start;
    
    .burger-menu {
      height: 100%;
      width: 2em;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      cursor: pointer;
    }
    
    .burger-bar {
      width: 2em;
      height: 0.3em;
      background-color: rgb(0, 162, 255);
      border-radius: 0.5em;
    }
    
    /* clicked */
    .burger-bar.clicked:nth-child(1){
      transform: rotate(45deg) translate(0.55em, 0.55em);
      transition: ease-out 0.5s;
    }
    
    .burger-bar.clicked:nth-child(2){
      transform: scale(0.1);
      transition: ease-out 0.5s;
    }
    
    .burger-bar.clicked:nth-child(3){
      transform: rotate(135deg) translate(-0.55em, 0.55em);
      transition: ease-out 0.5s;
    }
    
    /* unclicked */
    .burger-bar.unclicked {
      transform: rotate(0) translate(0);
      transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
    }
  }
`