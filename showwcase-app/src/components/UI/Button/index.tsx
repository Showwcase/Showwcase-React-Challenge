import React from 'react';
import ButtonStyle from 'src/components/UI/Button/Button.styled';

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset';
  onClick: () => void;
}

export default function Button({children, type, disabled, onClick}: Props) {
  return (
    <ButtonStyle 
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  )
}
