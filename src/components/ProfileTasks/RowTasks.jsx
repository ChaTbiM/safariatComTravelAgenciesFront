import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as I } from "../../assets/i.svg";

const RowTasks = (props) => {
  const { data, active } = props;
  const Prog = styled.div`
    #progress {
      border-radius: 13px;
      height: 15px;
      width: 100%;
      background: #c9c9c9;
    }

    #progress:after {
      content: "";
      display: block;
      background: #0b7fab;
      width: ${data["progress"]};
      height: 100%;
      border-radius: 9px;
    }
  `;
  return (
    <tr key={data.id} className="agencx">
      <td className="px-5 py-6 text-left  text-sm">
        <p className="text-gray-900 font-bold whitespace-no-wrap text-18">
          {data["name"]}
        </p>
      </td>
      <td className="px-5 py-6 text-left  text-sm">
        <p className="text-gray-700 whitespace-no-wrap">{data["type"]}</p>
      </td>
      <td className="px-5 py-6 text-left  text-sm">
        <p className="text-gray-700 whitespace-no-wrap">{data["date"]}</p>
      </td>
      <td className="px-5 py-6 text-left  text-sm">
        <p className="text-gray-700 whitespace-no-wrap">{data["supervisor"]}</p>
      </td>
      <td className="px-5 py-6 text-left  text-sm">
        <Prog>
          <div id="progress"></div>
        </Prog>
      </td>
      <td className="px-5 py-6 text-left  text-sm">
        <Container className="flex justify-center items-center">
          <span
            className="w-8 h-8 flex justify-center items-center shadow-md mx-2 cursor-pointer"
            style={{ background: "white" }}
          >
            {" "}
            <I className="icon-tab" />
          </span>
          <span
            className={
              active === "prog"
                ? "w-8 h-8 flex justify-center items-center shadow-md mx-2 cursor-pointer"
                : "hidden"
            }
            style={{ background: "#23D535" }}
          >
            {" "}
            <i className="fas fa-check icon-tab" style={{ color: "white" }}></i>
          </span>
          <span
            className={
              active === "new" || active === "cancel"
                ? "w-8 h-8 flex justify-center items-center shadow-md mx-2 cursor-pointer"
                : "hidden"
            }
            style={{ background: "#FCE06D" }}
          >
            {" "}
            <i className="fas fa-sync icon-tab" style={{ color: "white" }}></i>
          </span>
          <span
            className={
              active === "new" || active === "prog"
                ? "w-8 h-8 flex justify-center items-center shadow-md mx-2 cursor-pointer"
                : "hidden"
            }
            style={{ background: "#DF4A4A" }}
          >
            {" "}
            <i className="fas fa-times icon-tab" style={{ color: "white" }}></i>
          </span>
        </Container>
      </td>
    </tr>
  );
};
export default RowTasks;

const Container = styled.div`
  .icon-tab {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px !important;
  }
  @media (max-width: 1366px) {
    .icon-tab {
      width: 20px !important;
      height: 20px !important;
    }
  }
`;
