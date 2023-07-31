import Modal from 'src/components/UI/Modal';
import Button from 'src/components/UI/Button';
import EducationStyle from 'src/components/Templates/Education/Education.styled';
import EducationProfile from 'src/components/Templates/Education/EducationProfile';
import EducationForm from 'src/components/Templates/Education/EducationForm';
import { useEffect, useState } from 'react';
import { useGlobalContext } from 'src/context/store';
import { useLocalStorage } from 'src/hooks/useLocalStorage';

export default function EducationTemplate() {
  const [name, setName] = useState<string>('');
  const [nameLocalStorage, setNamelocalStorage] = useLocalStorage('name', '');
  const { isModalOpen, setIsModalOpen } = useGlobalContext();

  useEffect(() => {
    if (nameLocalStorage) {
      setName(nameLocalStorage);
    }
  }, [nameLocalStorage])

  return (
    <EducationStyle>
      <p>Welcome to {name}'s education page.</p>
      <Button
        type="button"
        onClick={() => setIsModalOpen(true)}
      >
        Add New Education
      </Button>

      <EducationProfile />
      
      <Modal 
        isOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
        label="Add New Education"
      >
        <EducationForm />
      </Modal>
    </EducationStyle>
  )
}
