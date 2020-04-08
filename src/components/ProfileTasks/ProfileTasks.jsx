import React, { useState } from "react";
import styled from "styled-components";
import TableTasks from "./TableTasks.jsx";

const ProfileTasks = (
  props,
  {
    items = [
      {
        id: 0,
        name: "New Tasks",
        isActive: "new",
      },
      {
        id: 1,
        name: "In Progress",
        isActive: "prog",
      },
      {
        id: 2,
        name: "Finished",
        isActive: "finish",
      },
      {
        id: 3,
        name: "Canceled",
        isActive: "cancel",
      },
    ],
  }
) => {
  const [active, setActive] = useState("new");
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
            <div key={elm.id} className="px-6 py-2">
              {" "}
              <h2
                id={elm.id}
                className={
                  elm.isActive === active
                    ? "underline active-text cursor-pointer"
                    : "cursor-pointer"
                }
                onClick={handleActive}
              >
                {" "}
                {elm.name}
              </h2>
            </div>
          ))}
        </div>
        <div className="mx-8 my-5  relative xyd">
          <TableTasks active={active} className="absolute" />
        </div>
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
