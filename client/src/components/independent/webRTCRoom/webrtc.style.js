import styled from "styled-components";

//////////////////////////////////////
/*WebRTCRoom*/
//////////////////////////////////////
export const MainView = styled.div`
  transition: margin-left 0.5s;
  width: 0;
`;
export const SideBar = styled.div`
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
export const VideoBaseContainer = styled.div`
  width: 100vw;
  display: flex;
  background: var(--brownish-grey);
`;

export const SecondBox = styled.div`
  width: calc(100vw - 64px);
  height: calc(100vh - 56px);
  background: var(--brownish-grey);
`;
export const ToggleBtn = styled.div`
  width: 30px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  width: calc(100vw - 64px);
`;
export const ToggleDiv = styled.div`
  width: calc((100vw - 64px) / 2);
  display: flex;
  justify-content: flex-end;
  padding-right: 25px;
`;

//////////////////////////////////////
/*VideoNav*/
//////////////////////////////////////
export const UpperNav = styled.div`
  width: calc((100vw - 64px) / 2);
  height: 56px;
  background: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ConferenceTitle = styled.div`
  margin-left: 26px;
  font-size: 22px;
  color: white;

  overflow: hidden;
`;
export const UserCount = styled.div`
  margin-left: 20px;
`;
export const CountText = styled.button`
  color: var(--greenish-teal);
  font-size: 22px;
  height: 100%;
  display: flex;

  margin-left: 8px;
  align-items: center;
  overflow: auto;
  border: none;
  background: none;
  outline: none;
`;
export const Timer = styled.div`
  background: var(--greenish-teal);
  width: 65px;
  height: 26px;

  margin-left: 14px;

  border-radius: 11.5px;
  color: white;
  font-size: 15px;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

//////////////////////////////////////
/*VideoMenubar */
//////////////////////////////////////
export const Logo = styled.div`
  width: 64px;
  height: 62px;
  background: #555555;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8px;
`;

export const LeftNav = styled.div`
  width: 64px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #555555;
`;
export const ButtonItem = styled.button`
  width: 63px;
  height: 55px;

  border: none;
  background: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HomeItem = styled.button`
  width: 63px;
  height: 55px;

  border: none;
  background: var(--greenish-teal);
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;
`;

//////////////////////////////////////
/*VideoItem */
//////////////////////////////////////
export const VideoFrame = styled.div`
  padding-left: 50px;
  padding-top: 19px;
  padding-right: 50px;

  height: 90%;
`;
export const EmotionStatus = styled.div`
  position: fixed;
  top: 80%;
  width: 50%;
  text-align: center;
  display: inline-block;
  background: black;
  color: white;
  font-size: 15px;
  opacity: 0.4;
  border-radius: 45px;
`;
export const VideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

//////////////////////////////////////
/*TopicDrawerBar*/
//////////////////////////////////////
export const TopicItem = styled.div`
  font-size: 12px;
  height: 31px;
  padding-left: 13px;
  padding-top: 5px;
  color: var(--brownish-grey);
  display: flex;
  flex-direction: row;
`;
export const TopicButton = styled.button`
  display: block;
  margin-left: 100px;
  margin-top: 0px;
  width: 16px;
  height: 16px;
  background: none;
  border: none;
`;
export const DrawerContainer = styled.div`
  background: var(--white-four);
  width: 252px;
  height: calc(100%-48px);
`;

//////////////////////////////////////
/*InviteDialog */
//////////////////////////////////////
export const InviteContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Pointer = styled.div`
  width: 5px;
  height: 5px;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #ffffff;
  border-left: 10px solid transparent;
  margin-top: 40px;
  margin-left: -18px;
`;
export const InviteList = styled.div`
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
export const DivideLine = styled.div`
  width: 100%;
  height: 3px;
  background: var(--white-two);
  margin-top: 7px;
`;
export const UserText = styled.div`
  font-size: 11px;
  color: var(--brownish-grey);
  margin-left: 10px;
`;
export const UserContainer = styled.div`
  height: 43px;
  width: 100%;
  display: flex;
  padding-left: 11px;
`;
export const CopyContainer = styled.div`
  width: 183px;
  height: 27px;
  border-radius: 5px;
  border: 1px solid #b0b0b0;
  background: var(--white-four);
  margin-left: 11px;
  display: flex;
  flex-direction: row;
`;
export const CopyItem = styled.input`
  width: 150px;
  height: 23px;
  background: var(--white-four);
  border: none;
  background: none;
  margin-left: 11px;
  color: var(--brownish-grey);
  font-size: 9px;
`;
export const ShowInviteButton = styled.div`
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
export const CopyButton = styled.button`
  color: var(--greenish-teal);
  background: none;
  border: none;
  font-size: 9px;
`;

