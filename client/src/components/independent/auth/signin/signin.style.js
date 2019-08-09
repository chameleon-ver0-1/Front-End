import styled from "styled-components";

export const SignInContainer = styled.div`
  margin: 60px auto;
  display: flex;
`;
export const SignInHeader = styled.div`
  font-size: 30px;
  font-family: NanumSquareB;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;
export const LoginContainer = styled.div`
  margin: auto;
`;
export const InputGroup = styled.div`
  margin-bottom: 22px;
`;
export const Label = styled.div`
  font-size: 14px;
  margin-left: 11px;
  font-family: NanumSquareB;
  color: var(--brownish-grey);
`;

export const LoginInput = styled.input`
  border: none;
  width: 300px;
  height: 30px;
  font-size: 12px;
  outline: none;
`;
export const InputBorder = styled.div`
  margin-top: 9px;
  width: 313px;
  height: 39px;

  border-radius: 18.8px;
  border: solid 1px var(--pinkish-grey);
  padding-left: 15px;
  align-items: center;

  display: flex;
  align-items: center;
`;

export const Checks = styled.div`
  margin-top: 8px;
  width: 313px;
  height: 12px;
  display: flex;
  justify-content: center;
`;

export const Check = styled.div`
  font-size: 12px;
  color: var(--brownish-grey);
  width: 120px;
  margin-left: 7px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const ImgBtnContainer = styled.div`
  width: 153px;
  height: 40px;
  border: solid 1px var(--greenish-teal);
  border-radius: 18.8px;
  color: var(--greenish-teal);
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 18px;
  height: 18px;
`;

export const OtherLoginBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  height: 40px;
  margin-left: 13px;
  font-size: 14px;
  font-family: NanumSquareB;

  cursor: pointer;
`;
export const ForgetBtn = styled.button`
  margin: auto;
  border: none;
  outline: none;
  background: none;
  color: var(--brownish-grey);
  margin-top: 29px;
  display: flex;
  justify-content: center;
  font-size: 14px;
`;
export const LoginLinkContainer = styled.div`
  font-size: 16px;
  background-color: var(--greenish-teal);
  color: white;

  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 330px;
  height: 41px;

  border-radius: 18.8px;

  margin-top: 28px;
  margin-bottom: 10px;
`;
export const OriginLoginBtn = styled.button`
  font-size: 16px;
  font-family: NanumSquareB;

  color: white;
  background: none;
  border: none;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  width: 314px;
  height: px;
`;
export const WarnId = styled.div`
  font-size: 11px;
  color: var(--greenish-teal);
  margin-left: 140px;
  display: none;
`;
export const WarnPassword = styled.div`
  font-size: 11px;
  color: var(--greenish-teal);
  margin-left: 117px;
  display: none;
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
`;
