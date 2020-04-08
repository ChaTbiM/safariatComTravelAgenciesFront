import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as I } from "../../assets/i.svg";

const RowTasks = (props) => {
  const { data } = props;
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
        <p className="text-gray-700 whitespace-no-wrap">
          <div className="flex justify-between items-center">
            <span
              className="w-8 h-8 flex justify-center items-center shadow-md"
              style={{ background: "white" }}
            >
              {" "}
              <I />
            </span>
            <span
              className="w-8 h-8 flex justify-center items-center shadow-md"
              style={{ background: "#FCE06D" }}
            >
              {" "}
              <i className="fas fa-sync" style={{ color: "white" }}></i>
            </span>
            <span
              className="w-8 h-8 flex justify-center items-center shadow-md"
              style={{ background: "#DF4A4A" }}
            >
              {" "}
              <i class="fas fa-times" style={{ color: "white" }}></i>
            </span>
          </div>
        </p>
      </td>
    </tr>
  );
};
export default RowTasks;
