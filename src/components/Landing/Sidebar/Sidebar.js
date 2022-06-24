import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";
import { pageData } from "../../../utils/data";

const Sidebar = ({ isopen, toggle }) => {
  return (
    <SidebarContainer isopen={isopen.toString()} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {pageData.map((pageInfo, index) => (
            <SidebarLink to={pageInfo.to} onClick={toggle} key={index}>
              {pageInfo.title}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign in</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
