'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from "react";
import { Education } from 'src/utils/types';
import { getCurrentMonth, getYears } from "src/utils/functions";

const EducationData = {
  school: '',
  degree: '',
  grade: '',
  description: '',
  startMonthDate: getCurrentMonth(),
  startYearDate: getYears('start')[0],
  endMonthDate: getCurrentMonth(),
  endYearDate: getYears('end')[0],
}

interface ContextProps {
  isModalOpen: boolean,
  setIsModalOpen: Dispatch<SetStateAction<boolean>>,
  menu_class: string,
  setMenuClass: Dispatch<SetStateAction<string>>,
  data: Education,
  setData: Dispatch<SetStateAction<Education>>
};

const GlobalContext = createContext<ContextProps>({
  isModalOpen: false, 
  setIsModalOpen: (): boolean => false,
  menu_class: '',
  setMenuClass: (): string => '',
  data: EducationData,
  setData: (): Education => EducationData
});

interface Props {
  children?: ReactNode
};

export const GlobalContextProvider = ({ children }: Props) => {
  const [menu_class, setMenuClass] = useState("menu")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<Education>(EducationData);
  
  return (
    <GlobalContext.Provider value={{ isModalOpen, setIsModalOpen, menu_class, setMenuClass, data, setData }}>
      {children}
    </GlobalContext.Provider>
  )
};

export const useGlobalContext = () => useContext(GlobalContext);