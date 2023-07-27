'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from "react";
import { Education } from 'src/utils/types';
import { getCurrentMonth, getYears } from "src/utils/functions";

const EducationData = {
  school: '',
  degree: '',
  fieldStudy: '',
  grade: '',
  description: '',
  startMonthDate: getCurrentMonth(),
  startYearDate: getYears('before')[0],
  endMonthDate: getCurrentMonth(),
  endYearDate: getYears('after')[0],
}

interface ContextProps {
  isModalOpen: boolean,
  setIsModalOpen: Dispatch<SetStateAction<boolean>>,
  data: Education,
  setData: Dispatch<SetStateAction<Education>>
};

const GlobalContext = createContext<ContextProps>({
  isModalOpen: false, 
  setIsModalOpen: (): boolean => false,
  data: EducationData,
  setData: (): Education => EducationData
});

interface Props {
  children?: ReactNode
};

export const GlobalContextProvider = ({ children }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<Education>(EducationData);
  
  return (
    <GlobalContext.Provider value={{ isModalOpen, setIsModalOpen, data, setData }}>
      {children}
    </GlobalContext.Provider>
  )
};

export const useGlobalContext = () => useContext(GlobalContext);