import { useState } from "react";

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return {
    isModalOpen,
    modalToggle
  };
}