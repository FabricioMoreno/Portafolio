import React, { useState } from "react";
import { MenuLabel, NavBackground,Icon, Navigation,List,ItemLink } from "../styledComponents/HamburgerMenu";

const Navbar = () => {
    const [click,setClick] = useState(false)
    const handleClick = ()=>setClick(prev=>!prev)
  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>
      <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink  smooth to="/#1">
              Home
              
            </ItemLink>
          </li>
          <li>
            <ItemLink  smooth to="/#2">
              Sobre mí
              
            </ItemLink>
          </li>
          <li>
            <ItemLink  smooth to="/#3">
              Habilidades
              
            </ItemLink>
          </li>
          <li>
            <ItemLink  smooth to="/#4">
              Proyectos
              
            </ItemLink>
          </li>
          <li>
            <ItemLink  smooth to="/#5">
              Contacto
              
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </>
  );
};
{
  /* <HamburgerMenu>
        <ul>
          <li>
            <HashLink smooth to="/#1">
              elem1
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#2">
              elem3
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#3">
              elem3
            </HashLink>
          </li>
        </ul>
      </HamburgerMenu> */
}

export default Navbar;
