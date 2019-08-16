import styled from "styled-components";
import { NavLink } from "react-router-dom";

//////////////////////////////////////
/*1 Nav*/
//////////////////////////////////////
export const NavContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--white-two);
`;
export const BtnContainer = styled.div`
  flex: 1;
  padding-right: 47px;
  display: flex;
  justify-content: flex-end;
`;
export const BtnP = styled.div`
  padding-right: 7px;
`;
export const NavBtn = styled(NavLink)`
  font-size: 1rem;
  font-family: NanumSquareB;
  cursor: pointer;
  width: 80px;
  height: 33px;

  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--white-two);
  border-radius: 16.5px;
  outline: none;

  color: var(--brownish-grey);

  font-size: 13.5px;

  &:hover {
    border: 1px solid var(--greenish-teal);
    color: var(--greenish-teal);
  }
`;

//////////////////////////////////////
/*2 Nav */
//////////////////////////////////////
export const Row = styled.div`
  display: flex;
`;
export const ClosedBtn = styled.button`
  border: none;
  cursor: pointer;
  background: none;
  outline: none;
`;
export const AlertTitle = styled.div`
  font-size: 12px;
  font-family: NanumSquareEB;
  color: var(--greenish-teal);
`;
export const AlertContent = styled.div`
  font-size: 12px;
  color: var(--brownish-grey);
`;
export const LogoContainer = styled.div`
  height: 64px;
  width: 200px;
  display: flex;
  padding-left: 31px;
  align-items: center;
`;

export const Nav2Container = styled.div`
  display: flex;
  background: var(--greenish-teal);
  width: 100%;
  height: 64px;
  border-bottom: 1px solid var(--white-two);
`;

export const NavRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 29px;
`;
export const NoticeBtn = styled.button`
  width: 20px;
  height: 28px;
  cursor: pointer;
  margin-right: 26px;
  outline: none;
  border: none;

  background: none;
  background-repeat: no-repeat;
  background-size: auto;
`;
export const UserInfoContainer = styled.div`
  width: 150px;
  margin-right: 22px;
  height: 100%;
`;
export const UserName = styled.div`
  color: white;
  font-size: 16.5px
  font-family: NanumSquareEB;

  height:100%;
  display:flex;
  align-items:center;
`;

export const UserDepartment = styled.div`
  color: white;
  font-size: 0.6rem;
  font-family: NanumSquareB;
`;
export const MoreInfo = styled.button`
  width: 17px;
  height: 37px;

  border: none;
  background: none;

  cursor: pointer;
  outline: none;
`;

export const HomeNav = styled.div`
  padding-top: 17px;
  padding-left: 171px;
  display: flex;
  align-items: center;
  height: 6.64%;
`;

export const NavItem = styled.div`
  font-size: 13.5px;
  color: var(--brownish-grey);
  font-family: NanumSquareB;
  margin-right: 49px;

  &:hover {
    color: var(--greenish-teal);
  }
`;

export const NavClickItem = styled.div`
  font-size: 13.5px;
  color: var(--greenish-teal);
  font-family: NanumSquareB;
  margin-right: 49px;
`;
export const AuthBox = styled.div`
  margin-left: 57px;
  display: flex;
`;
