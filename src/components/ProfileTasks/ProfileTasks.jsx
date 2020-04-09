import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ProfileTasks = (
  props,
  {
    items = [
      {
        id: 0,
        name: "New Tasks",
        isActive: "/admin/profileTasks/new",
        active: "new",
      },
      {
        id: 1,
        name: "In Progress",
        isActive: "/admin/profileTasks/prog",
        active: "prog",
      },
      {
        id: 2,
        name: "Finished",
        isActive: "/admin/profileTasks/finish",
        active: "finish",
      },
      {
        id: 3,
        name: "Canceled",
        isActive: "/admin/profileTasks/cancel",
        active: "cancel",
      },
    ],
  }
) => {
  const [active, setActive] = useState(props.active);
  const handleActive = (e) => {
    const id = e.currentTarget.id;
    setActive(items.filter((e) => e.id == id)[0].isActive);
  };
  return (
    <Container>
      <div className="flex flex-col bg-white">
        <div className="flex justify-between pt-4 px-8 items-center">
          <h1
            style={{
              color: "#fdb810",
            }}
          >
            To-Do Tasks
          </h1>
        </div>
        <div className="flex items-center mx-24 my-4">
          {items.map((elm) => (
            <div key={elm.id} className="px-6 py-2" onClick={handleActive}>
              {" "}
              <Link
                to={elm.isActive}
                id={elm.id}
                className={
                  elm.active === props.active
                    ? "underline active-text cursor-pointer"
                    : "cursor-pointer"
                }
              >
                {" "}
                {elm.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="mx-8 my-5  relative xyd">{props.childContent}</div>
      </div>
    </Container>
  );
};
export default ProfileTasks;
const Container = styled.div`
  h1 {
    font-size: 20px;
    color: #3e3e3e;
  }
  .active-text {
    color: #084c61;
  }
  a {
    font-size: 14px;
  }
  h2 {
    font-size: 14px;
    color: #6a6a6a;
  }
  .fas {
    font-size: 16px;
    color: #4c4c4c;
  }
  p {
    font-size: 12px !important;
    color: #3e3e3e;
  }
  .agency_crm_tr {
    padding: 2rem 0 !important;
  }

  @media (max-width: 1100px) {
    .xyd {
      margin: auto 1rem !important;
    }
  }
`;
