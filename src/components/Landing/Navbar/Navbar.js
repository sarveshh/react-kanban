import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink,
} from "./NavbarStyles";
import { BsCalendarCheckFill } from "react-icons/bs";
import { pageData } from "../../../utils/data";

const Navbar = ({ toggle }) => {
  const [scrollnav, setscrollnav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setscrollnav(true);
    } else {
      setscrollnav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollnav={scrollnav.toString()}>
          <NavbarContainer>
            <NavLogo to="/">
              <IconContext.Provider
                value={{
                  style: {
                    width: "30px",
                    height: "30px",
                    marginRight: "15px",
                  },
                }}
              >
                <BsCalendarCheckFill />
              </IconContext.Provider>
              Planner
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              {pageData.map((pageInfo, index) => (
                <NavItem key={index}>
                  <NavLinks
                    to={pageInfo.to}
                    smooth={true.toString()}
                    duration={500}
                    spy={true.toString()}
                    exact="true"
                    offset={-80}
                  >
                    {pageInfo.title}
                  </NavLinks>
                </NavItem>
              ))}
            </NavMenu>
            <NavMenu>
              <NavBtn>
                <>
                  <NavBtnLink to="/signin">Login</NavBtnLink>
                  <NavBtnLink to="/signup">Sign Up</NavBtnLink>
                </>
              </NavBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
