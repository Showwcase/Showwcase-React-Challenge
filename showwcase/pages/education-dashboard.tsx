import styled from "styled-components";
import Modal from "react-modal";
import { useState } from "react";
import EducationModal from "../components/Modal";
import * as dayjs from "dayjs";
import CustomButton from "../components/Button";
dayjs().format();

interface Education {
  degree: string;
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
      degree: "btech",
      university: "Model Engineering College",
      achivements: ["Winner of i3", "Placement Cell co-ordinater"],
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      degree: "diploma",
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

  const ModalSubmit = (value) => {
    console.debug("educationModal", value);
    setEducationList((state) => {
      let educationList = [...state];
      educationList.unshift(value);
      console.debug("new", educationList);
      return educationList;
    });
    changeModalState();
  };

  return (
    <>
      <div className="bg-gray-100">
        <Flex>
          <div className="text-2xl">Education Dashboard</div>
          <CustomButton
            label=" Add new Education"
            onClick={() => changeModalState()}
          />
        </Flex>
        <Grid>
          <Sidebar>
            <div className="flex flex-col items-center ">
              <div className="py-2 font-bold text-blue-500">Your Education</div>
              {educationList.map((item) => {
                return (
                  <div
                    className="p-2 capitalize cursor-pointer"
                    key={item.degree}
                  >
                    <div onClick={() => onSelectedEducationChange(item)}>
                      {item.degree}
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
                  <div className="space-x-2 text-lg font-bold capitalize">
                    <span>{selectedEducation.degree}</span> -
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
                    <div className="font-semibold capitalize">achievements</div>
                    <ul className="pl-4">
                      {selectedEducation.achivements.length !== 0 ? (
                        <>
                          {selectedEducation.achivements.map((item, index) => {
                            return (
                              <li className="italic" key={index}>
                                <span>&#8226;</span> {item}
                              </li>
                            );
                          })}
                        </>
                      ) : (
                        <div>No achivements</div>
                      )}
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
        onModalSubmit={ModalSubmit}
      />
    </>
  );
};

export default EducationDashboard;
