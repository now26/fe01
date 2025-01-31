import styled from "@emotion/styled";
import Sidebar_logout from "./SideBar/SideBar_logout";
import Sidebar_login from "./SideBar/SideBar_login";
import type React from "react"; // Import React

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f3f4f6;
`;

const MainContainer = styled.main`
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #f3f4f6;
`;

const isLogin = false;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContainer>
      {isLogin ? <Sidebar_login /> : <Sidebar_logout />}
      <MainContainer>{children}</MainContainer>
    </LayoutContainer>
  );
}
