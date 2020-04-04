import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard.jsx";
import HeaderPage from "../../components/HeaderPage/HeaderPage.jsx";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo.jsx";
import { ReactComponent as UserIcon } from "../../assets/user.svg";
import { ReactComponent as Messages } from "../../assets/message.svg";
import { ReactComponent as Tasks } from "../../assets/tasks.svg";
import { ReactComponent as Bags } from "../../assets//bag.svg";
import styled from "styled-components";

const ProfileEmployee = () => {
  return (
    <Container>
      <HeaderPage isBad title="Employee Profile" buttons={[]} />
      <div className="flex px-10 justify-between items-start">
        <div className="w-1/4 mx-2 bg-white">
          <ProfileCard id={0} />
        </div>
        <div className="w-3/4 mx-2 h-64 relative card">
          <div
            style={{
              transform: "translate(0, -100%)",
              borderTopRightRadius: "50%",
              borderTopLeftRadius: "50%",
              width: "90px",
              height: "60px",
            }}
            className="absolute flex justify-center items-center bg-white"
          >
            <UserIcon className="active-svg" />
          </div>
          <div
            style={{
              transform: "translate(100px, -100%)",
              borderTopRightRadius: "50%",
              borderTopLeftRadius: "50%",
              width: "90px",
              height: "60px",
            }}
            className="absolute flex justify-center items-center bg-white"
          >
            <Bags />
          </div>
          <div
            style={{
              transform: "translate(200px, -100%)",
              borderTopRightRadius: "50%",
              borderTopLeftRadius: "50%",
              width: "90px",
              height: "60px",
            }}
            className="absolute flex justify-center items-center bg-white"
          >
            <Tasks />
          </div>
          <div
            style={{
              transform: "translate(300px, -100%)",
              borderTopRightRadius: "50%",
              borderTopLeftRadius: "50%",
              width: "90px",
              height: "60px",
            }}
            className="absolute flex justify-center items-center bg-white"
          >
            <Messages />
          </div>
          <PersonalInfo />
        </div>
      </div>
    </Container>
  );
};
export default ProfileEmployee;

const Container = styled.div`
  svg {
    width: 30px;
    height: 30px;
    fill: #4c4c4c;
  }
  .active-svg {
    fill: #fdb810 !important;
  }
`;
