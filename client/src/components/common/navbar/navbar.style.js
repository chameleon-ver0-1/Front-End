import styled from "styled-components";

/*1 Nav*/
export const NavContainer = styled.div`
  display: flex;

  width: 100vw;
  height: 64px;

  border-bottom: 1px solid var(--white-two);
`;
export const BtnContainer = styled.div`
  flex: 1;

  padding-top: 16px;
  padding-right: 47px;

  display: flex;
  justify-content: flex-end;
`;
export const BtnP = styled.div`
  padding-right: 7px;
`;
export const NavBtn = styled.button`
  font-size: 1rem;
  font-family: NanumSquareB;

  width: 80px;
  height: 33px;

  border: 1px solid var(--white-two);
  border-radius: 16.5px;
  outline: none;

  color: var(--brownish-grey);

  font-size: 13.5px;
`;

/*2 Nav */
export const Row = styled.div`
  display: flex;
`;
export const ClosedBtn = styled.button`
  border: none;

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

  width: 100vw;
  height: 64px;

  border-bottom: 1px solid var(--white-two);
`;

export const NavRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-top: 16px;
  padding-right: 29px;
`;
export const NoticeBtn = styled.button`
  width: 20px;
  height: 28px;
  outline: none;
  padding-right: 32px;
  border: none;

  background: none;
  background-repeat: no-repeat;
  background-size: auto;
`;
export const UserInfoContainer = styled.div`
  padding-right: 30px;

  width: 120px;
`;
export const UserName = styled.div`
  width: 200px;
  color: white;
  font-size: 0.83rem;
  font-family: NanumSquareEB;
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
`;
