import React, { useState } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard.jsx";
import HeaderPage from "../../components/HeaderPage/HeaderPage.jsx";
import { ReactComponent as UserIcon } from "../../assets/user.svg";
import { ReactComponent as Messages } from "../../assets/inbox.svg";
import { ReactComponent as Tasks } from "../../assets/tasks.svg";
import { ReactComponent as Bags } from "../../assets//bag.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProfileEmployee = (props) => {
  const isTask = props.isActive === "task";
  const items = [
    {
      href: "/admin/profileEmployee",
      transform: "0px",
      icon: <UserIcon />,
      isActive: props.isActive === "profile",
    },
    {
      href: "/admin/jobEmployee",
      transform: "100px",
      icon: <Bags />,
      isActive: props.isActive === "job",
    },
    {
      href: "/admin/profileTasks/new",
      transform: "200px",
      icon: <Tasks />,
      isActive: props.isActive === "task",
    },
    {
      href: "/admin/messages",
      transform: "300px",
      icon: <Messages />,
      isActive: props.isActive === "messages",
    },
  ];
  return (
    <Container>
      <HeaderPage isBad title="Employee Profile" buttons={[]} />
      <div
        className={
          isTask
            ? "flex px-10 justify-between items-start tyu"
            : "flex px-10 justify-between items-start"
        }
      >
        <div className="w-1/4 mx-2 bg-white">
          <ProfileCard id={0} />
        </div>

        <div className="w-3/4 mx-2 h-64 relative card bg-white">
          {items.map((element) => (
            <Link to={element.href}>
              <div
                style={{
                  transform: `translate(${element.transform}, -100%)`,
                  borderTopRightRadius: "5px",
                  borderTopLeftRadius: "5px",
                  width: "90px",
                  height: "60px",
                }}
                className="absolute cursor-pointer flex justify-center items-center bg-white"
              >
                <div className={element.isActive ? "active-icon" : ""}>
                  {element.icon}
                </div>
              </div>
            </Link>
          ))}

          {props.childContent}
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
  .active-icon svg {
    fill: #fdb810 !important;
  }
  @media (max-width: 1100px) {
    .tyu {
      padding: 0.25rem !important;
    }
  }
`;
