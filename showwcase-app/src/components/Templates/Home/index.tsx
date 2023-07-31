import HomeStyle from 'src/components/Templates/Home/Home.styled';
import Input from 'src/components/UI/Input';
import Button from 'src/components/UI/Button';
import React, { useState } from "react";
import { useLocalStorage } from 'src/hooks/useLocalStorage';
import { useRouter } from 'next/router';

export default function HomeTemplate() {
  const Router = useRouter();

  const [name, setName] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [nameLocalStorage, setNamelocalStorage] = useLocalStorage('name', '');

  const handleOnChange = (e:any) => {
    setName(e.target.value);
  }

  const handleSubmit = () => {
    if (name) {
      setNamelocalStorage(name);
      setName("");
      setError(false);
      Router.push('/education');
    } else {
      setError(true);
    }
  }

  return (
    <HomeStyle>
      <p>Hi There! Welcome to your education showcase.</p>

      <div className='input-group'>
        <span>Type your name and click "Enter" below to begin!</span>
        <Input
          type="text"
          placeholder="Your name"
          name="name"
          value={name}
          onChange={(e) => handleOnChange(e)}
          error={error}
        />
        <Button
          type="submit"
          onClick={handleSubmit}
        >
          Enter
        </Button>
      </div>
    </HomeStyle>
  )
}
