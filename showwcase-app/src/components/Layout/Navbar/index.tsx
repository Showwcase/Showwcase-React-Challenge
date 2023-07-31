import Style from 'src/components/Layout/Navbar/Navbar.styled';
import Hambuger from 'src/components/UI/Hambuger';
import React, { useState } from 'react';
import { useRouter } from "next/router";
import { useGlobalContext } from 'src/context/store';

export default function Navbar() {
  const router = useRouter();
  const isEducationPage = router.route === '/education';

  const {menu_class, setMenuClass} = useGlobalContext();
  
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    } else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <>
      <Style>
        { isEducationPage &&
          <Hambuger 
            onClick={updateMenu} 
            burger_class={burger_class}
          />
        }
        
        <span>SHOWWCASE</span>
      </Style>
    </>
  )
}