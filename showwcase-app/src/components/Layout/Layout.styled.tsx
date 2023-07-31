import styled from "styled-components"

export default styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 40px;
    margin-top: 60px;

    /* font style */
    font-family: 'Arial';
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #ffffff;
  }

  .main::before {
    background: var(--secondary-glow);
    border-radius: 50%;
    width: 480px;
    height: 360px;
    margin-left: -400px;
  }

  .main::after {
    background: var(--primary-glow);
    width: 240px;
    height: 180px;
  }

  .main::before,
  .main::after {
    content: '';
    left: 50%;
    top: 30%;
    position: absolute;
    filter: blur(45px);
    transform: translateZ(0);
    z-index: -1;
  }

  /* Mobile */
  @media only screen and (max-width: 768px) {
    .main {
      padding: 60px 20px 20px;
    }

    .main::before,
    .main::after {
      left: unset;
    }
  }
`