import styled from "styled-components";
import Modal from "react-modal";
import { useState } from "react";
import EducationModal from "../components/Modal";
import * as dayjs from "dayjs";
dayjs().format();

interface Education {
  name: string;
  university: string;
  achivements: [string];
  startDate: Date;
  endDate: Date;
}

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 3fr;
  gap: 100px;
`;

const Sidebar = styled.div`
  background-color: #eeeeee;
  height: 90vh;
  border-radius: 10px;
`;

const MainContent = styled.div`
  background-color: #eeeeee;
  height: 90vh;
  border-radius: 10px;
`;

Modal.setAppElement("body");

const EducationDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [educationList, setEducationList] = useState([
    {
      name: "btech",
      university: "Model Engineering College",
      achivements: ["Winner of i3", "Placement Cell co-ordinater"],
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      name: "diploma",
      university: "SSM Engineering College",
      achivements: ["Winner of i3", "Placement Cell co-ordinater"],
      startDate: new Date(),
      endDate: new Date(),
    },
  ]);

  const [selectedEducation, setSelectedEducation] = useState<Education>();

  const changeModalState = () => {
    setIsModalOpen((state) => !state);
  };

  const onSelectedEducationChange = (item: any) => {
    setSelectedEducation(item);
  };

  const ModalSubmit = (value) => {};

  return (
    <>
      <div className="bg-gray-100">
        <Flex>
          <div className="text-2xl">Education Dashboard</div>
          <button
            className="bg-blue-500 p-2 text-white rounded-md"
            onClick={() => changeModalState()}
          >
            Add new Education
          </button>
        </Flex>
        <Grid>
          <Sidebar>
            <div className="flex flex-col items-center ">
              <div className="text-blue-500 py-2 font-bold">Your Education</div>
              {educationList.map((item) => {
                return (
                  <div
                    className="p-2 cursor-pointer capitalize"
                    key={item.name}
                  >
                    <div onClick={() => onSelectedEducationChange(item)}>
                      {item.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </Sidebar>
          <MainContent>
            <div className="p-4">
              {selectedEducation && (
                <div className="px-2 space-y-2">
                  <div className="text-lg font-bold capitalize space-x-2">
                    <span>{selectedEducation.name}</span> -
                    <span>{selectedEducation.university}</span>
                  </div>
                  <div className="space-x-1 text-sm font-semibold">
                    <span>
                      {dayjs(selectedEducation.startDate).format("DD/MM/YYYY")}
                    </span>
                    <span>-</span>
                    <span>
                      {dayjs(selectedEducation.endDate).format("DD/MM/YYYY")}
                    </span>
                  </div>
                  <div className="pl-1">
                    <div className="capitalize font-semibold">achievements</div>
                    <ul className="pl-4">
                      {selectedEducation.achivements.map((item) => {
                        return (
                          <li className="italic">
                            <span>&#8226;</span> {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </MainContent>
        </Grid>
      </div>
      <EducationModal
        changeModalState={changeModalState}
        isModalOpen={isModalOpen}
      />
    </>
  );
};

export default EducationDashboard;
