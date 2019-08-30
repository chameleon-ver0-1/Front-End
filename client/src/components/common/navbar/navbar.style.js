import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

//////////////////////////////////////
/*1 Nav*/
//////////////////////////////////////
const NavContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--white-two);
`;
const BtnContainer = styled.div`
  flex: 1;
  padding-right: 47px;
  display: flex;
  justify-content: flex-end;
`;
const BtnP = styled.div`
  padding-right: 7px;
`;
const NavBtn = styled(NavLink)`
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
const Row = styled.div`
  display: flex;
`;
const ClosedBtn = styled.button`
  border: none;
  cursor: pointer;
  background: none;
  outline: none;
`;
const AlertTitle = styled.div`
  font-size: 12px;
  font-family: NanumSquareEB;
  color: var(--greenish-teal);

  width: 200px;
`;
const AlertContent = styled.div`
  font-size: 12px;
  color: var(--brownish-grey);

  width: 200px;
`;
const LogoContainer = styled.div`
  height: 64px;
  width: 200px;
  display: flex;
  padding-left: 31px;
  align-items: center;
`;

const Nav2Container = styled.div`
  display: flex;
  background: var(--greenish-teal);
  width: 100%;
  height: 64px;
  border-bottom: 1px solid var(--white-two);
`;

const NavRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 29px;
`;
const NoticeBtn = styled.button`
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
const UserInfoContainer = styled.div`
  width: 150px;
  margin-right: 22px;
  height: 100%;
`;
const UserName = styled.div`
  color: white;
  font-size: 16.5px
  font-family: NanumSquareEB;

  height:100%;
  display:flex;
  align-items:center;
`;

const UserDepartment = styled.div`
  color: white;
  font-size: 0.6rem;
  font-family: NanumSquareB;
`;
const MoreInfo = styled.button`
  width: 17px;
  height: 37px;

  border: none;
  background: none;

  cursor: pointer;
  outline: none;
`;

const HomeNav = styled.div`
  padding-top: 17px;
  padding-left: 171px;
  display: flex;
  align-items: center;
  height: 6.64%;
`;

const NavItem = styled.div`
  font-size: 13.5px;
  color: var(--brownish-grey);
  font-family: NanumSquareB;
  margin-right: 49px;

  &:hover {
    color: var(--greenish-teal);
  }
`;

const NavClickItem = styled.div`
  font-size: 13.5px;
  color: var(--greenish-teal);
  font-family: NanumSquareB;
  margin-right: 49px;
`;
const AuthBox = styled.div`
  margin-left: 57px;
  display: flex;
`;

const MoveBtn = styled(Link)`
  font-size: 20px;
  font-family: NanumSquareEB;
  color: var(--greenish-teal);

  margin-left: 10px;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  height: 100%;
  display: flex;
  align-items: center;

  &:hover {
    color: red;
  }
`;

export {
  NavContainer,
  BtnContainer,
  BtnP,
  NavBtn,
  Row,
  ClosedBtn,
  AlertTitle,
  AlertContent,
  LogoContainer,
  Nav2Container,
  NavRight,
  NoticeBtn,
  UserInfoContainer,
  UserName,
  UserDepartment,
  MoreInfo,
  HomeNav,
  NavItem,
  NavClickItem,
  AuthBox,
  MoveBtn
};
