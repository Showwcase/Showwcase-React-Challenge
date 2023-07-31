import React from 'react';
import HamburgerStyle from 'src/components/UI/Hambuger/Hamburger.styled';

interface Props {
  onClick: () => void;
  burger_class: string;
}

export default function Hamburger({onClick, burger_class}: Props) {
  return (
    <HamburgerStyle>
      <div className="burger-menu" onClick={onClick}>
        <div className={burger_class} />
        <div className={burger_class} />
        <div className={burger_class} />
      </div>
    </HamburgerStyle>
  )
}