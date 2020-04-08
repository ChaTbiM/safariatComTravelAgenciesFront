import React, { useState } from "react";
import styled from "styled-components";
import TableTasks from "./TableTasks.jsx";

const ProfileTasks = (props) => {
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
          <div className="px-6 py-2">
            {" "}
            <h2 className="underline active-text cursor-pointer"> New Tasks</h2>
          </div>
          <div className="px-6 py-2">
            {" "}
            <h2 className=" cursor-pointer">In Progress</h2>
          </div>
          <div className="px-6 py-2">
            {" "}
            <h2 className=" cursor-pointer">Finished</h2>
          </div>
          <div className="px-6 py-2">
            {" "}
            <h2 className=" cursor-pointer">Canceled</h2>
          </div>
        </div>
        <div className="mx-8 my-5  relative xyd">
          <TableTasks className="absolute" />
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
