import styled from "styled-components"

const ModalStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 800px;
  min-height: 100px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  background-color: #171718;
  border-radius: 6px;

  h3 {
    font-family: "Arial";
    padding: 0 20px 20px 20px;
    border-bottom: 1px solid #202021;
  }

  .modal-wrapper {
    display: flex;
    flex-direction: column;
  }

  .modal-body {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-height: 400px;
    overflow: auto;
    padding: 20px;
  }

  .modal-footer {
    border-top: 1px solid #202021;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`

const OverlayStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3500;
  background: rgb(37 37 37 / 75%);;
`

export { ModalStyle, OverlayStyle}