import styled from "styled-components";
import Modal from "react-modal";
import { useState } from "react";

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 3fr;
  gap: 100px;
`;

const Sidebar = styled.div`
  background-color: grey;
  height: 90vh;
`;

const MainContent = styled.div`
  background-color: grey;
  height: 90vh;
`;
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 100,
  },
};
Modal.setAppElement("body");

const EducationDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeModalState = () => {
    setIsModalOpen((state) => !state);
  };

  return (
    <>
      <div>
        <Flex>
          <div>Education Dashboard</div>
          <button onClick={() => changeModalState()}>Add new Education</button>
        </Flex>
        <Grid>
          <Sidebar>Sidebar</Sidebar>
          <MainContent>Mainbar</MainContent>
        </Grid>
      </div>
      <Modal
        isOpen={isModalOpen}
        style={customStyles}
        onRequestClose={changeModalState}
      >
        <div>
          <div>add new education</div>
        </div>
      </Modal>
    </>
  );
};

export default EducationDashboard;
