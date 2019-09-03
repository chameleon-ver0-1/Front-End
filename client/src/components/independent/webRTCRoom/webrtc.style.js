import styled from "styled-components";

//////////////////////////////////////
/*WebRTCRoom*/
//////////////////////////////////////
const MainView = styled.div`
  transition: margin-left 0.5s;
  width: 0;
`;
const SideBar = styled.div`
  height: calc(100% - 48px);
  width: 0;
  position: fixed;
  z-index: 0;
  top: 56px;
  right: 0;
  background-color: var(--white-four);
  overflow-x: hidden;
  transition: 0.5s;
`;
const VideoBaseContainer = styled.div`
  width: 100vw;
  display: flex;
  background: #424c53;
`;

const SecondBox = styled.div`
  width: calc(100vw - 64px);
  height: calc(100vh - 56px);
  background: #424c53;
`;
const ToggleBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 19px;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  width: calc(100vw - 64px);
`;
const ToggleDiv = styled.div`
  width: calc((100vw - 64px) / 2);
  display: flex;
  justify-content: flex-end;
  padding-right: 25px;
`;

//////////////////////////////////////
/*VideoNav*/
const UpperNav = styled.div`
  width: calc((100vw - 64px) / 2);
  height: 56px;
  background: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ConferenceTitle = styled.div`
  margin-left: 26px;
  font-size: 22px;
  color: white;

  overflow: hidden;
`;
const UserCount = styled.div`
  margin-left: 20px;
`;

const RoundDiv = styled.div`
  background: #2e373e;
  height: 28px;
  border: 1px solid #2e373e;
  border-radius: 13.5px;
  box-shadow: 1.9px 2.3px 7px black 0.2;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavP = styled.div`
  font-size: 16.5px;
`;

//////////////////////////////////////
/*VideoMenubar */
//////////////////////////////////////
const Logo = styled.div`
  width: 64px;
  height: 62px;
  background: #2e373e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8px;
`;

const LeftNav = styled.div`
  width: 64px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #2e373e;
`;
const ButtonItem = styled.button`
  width: 63px;
  height: 55px;

  border: none;
  background: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HomeItem = styled.button`
  width: 63px;
  height: 55px;

  border: none;
  background: var(--greenish-teal);
  opacity: 0.5;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;
`;

//////////////////////////////////////
/*VideoItem */
//////////////////////////////////////
const VideoFrame = styled.div`
  padding-left: 50px;
  padding-top: 19px;
  padding-right: 50px;

  height: 100%;
`;
const EmotionStatus = styled.div`
  position: fixed;
  top: 80%;
  width: 50%;
  text-align: center;
  display: inline-block;

  color: white;
  font-size: 15px;
  opacity: 0.4;
  border-radius: 45px;
`;
const VideosContainer = styled.div`
  display: flex;
  height: 100%;

  flex-wrap: wrap;
`;

//////////////////////////////////////
/*TopicDrawerBar*/
//////////////////////////////////////
const TopicItem = styled.div`
  font-size: 12px;
  height: 31px;
  padding-left: 13px;
  padding-top: 5px;
  color: #424c53;
  display: flex;
  flex-direction: row;
`;
const TopicButton = styled.button`
  display: block;
  margin-left: 100px;
  margin-top: 0px;
  width: 16px;
  height: 16px;
  background: none;
  border: none;
`;
const DrawerContainer = styled.div`
  background: var(--white-four);
  width: 252px;
  height: calc(100%-48px);
`;

//////////////////////////////////////
/*InviteDialog */
//////////////////////////////////////
const InviteContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Pointer = styled.div`
  width: 5px;
  height: 5px;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #ffffff;
  border-left: 10px solid transparent;
  margin-top: 40px;
  margin-left: -18px;
`;
const InviteList = styled.div`
  width: 205px;
  height: 305px;
  list-style-type: none;
  margin-top: 8px;
  top: 55px;
  right: -30px;
  background-color: #ffffff;
  font-weight: bold;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
const DivideLine = styled.div`
  width: 100%;
  height: 3px;
  background: var(--white-two);
  margin-top: 7px;
`;
const UserText = styled.div`
  font-size: 11px;
  color: var(--brownish-grey);
  margin-left: 10px;
`;
const UserContainer = styled.div`
  height: 43px;
  width: 100%;
  display: flex;
  padding-left: 11px;
`;
const CopyContainer = styled.div`
  width: 183px;
  height: 27px;
  border-radius: 5px;
  border: 1px solid #b0b0b0;
  background: var(--white-four);
  margin-left: 11px;
  display: flex;
  flex-direction: row;
`;
const CopyItem = styled.input`
  width: 150px;
  height: 23px;
  background: var(--white-four);
  border: none;
  background: none;
  margin-left: 11px;
  color: var(--brownish-grey);
  font-size: 9px;
`;
const ShowInviteButton = styled.div`
  width: 100%;
  color: var(--greenish-teal);
  font-size: 9px;
  background: none;
  border: none;
  outline: none;
  margin: 0px;
  padding: 0px;
  text-align: center;
`;
const CopyButton = styled.button`
  color: var(--greenish-teal);
  background: none;
  border: none;
  font-size: 9px;
`;

export {
  MainView,
  SideBar,
  VideoBaseContainer,
  SecondBox,
  ToggleBtn,
  Row,
  ToggleDiv
};
export { UpperNav, ConferenceTitle, UserCount, RoundDiv, NavP };

export {
  InviteContainer,
  UserContainer,
  UserText,
  DivideLine,
  Pointer,
  InviteList,
  ShowInviteButton,
  CopyContainer,
  CopyItem,
  CopyButton
};
export { Logo, LeftNav, ButtonItem, HomeItem };
export { TopicItem, TopicButton, DrawerContainer };
export { VideoFrame, EmotionStatus, VideosContainer };
