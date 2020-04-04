import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as UserIcon } from "../../assets/user.svg";
import { ReactComponent as Messages } from "../../assets/message.svg";
import { ReactComponent as Tasks } from "../../assets/tasks.svg";
import { ReactComponent as Bags } from "../../assets//bag.svg";

const JobEmployee = () => {
  return (
    <Container>
      <div className="flex flex-col bg-white">
        <div className="flex justify-between pt-4 px-8 items-center">
          <h1
            style={{
              color: "#fdb810",
            }}
          >
            Job Informations
          </h1>
          <button className="py-2 px-8 button-edit button-hover">Edit</button>
        </div>
        <div className="flex py-8 justify-between px-8">
          <div className="flex w-5/12 flex-col">
            <div className="flex p-4 my-4 justify-between button-edit">
              <p>Developer</p>
              <p className="hovered-text">Job position</p>
            </div>
            <div className="flex p-4 my-4 justify-between button-edit">
              <p>28 october 1955</p>
              <p className="hovered-text">date of recruitment</p>
            </div>
            <div className="flex p-4 my-4 justify-between button-edit">
              <p>Support & CRM</p>
              <p className="hovered-text">Dapartement</p>
            </div>
            <div className="flex w-2/3 p-4 my-4 justify-between button-edit">
              <p
                className="underline"
                style={{
                  color: "#365CA8",
                }}
              >
                BillGates-CV.pdf
              </p>
              <p className="hovered-text">CV</p>
            </div>
            <div className="flex p-4 my-4 justify-between button-edit">
              <p>+213 (0) 741 52 86 90</p>
              <p className="hovered-text">Work phone</p>
            </div>
            <div className="flex p-4 my-4 justify-between button-edit">
              <p>120056748</p>
              <p className="hovered-text">Employee ID</p>
            </div>
            <div className="flex p-4 my-4 justify-between button-edit">
              <p>Supervisor name</p>
              <p className="hovered-text">Supervisor</p>
            </div>
          </div>
          <div className="flex w-5/12 flex-col">
            <div className="flex p-4 my-4 flex-col button-edit">
              <div className="ml-auto mb-4">
                <p className="hovered-text">Overview</p>
              </div>
              <p>
                Dit streken dan talrijk ver taiping vrouwen met. Noodige der aan
                rug leiding element schepen ontzegd trekken. Ton locomobiel be
                scheiden interesten millioenen afwachting weggevoerd mee. Moet
                rook en ad acre twee. Ieder ad naast er diepe china erbij en
                assam nu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default JobEmployee;
const Container = styled.div`
  .button-edit {
    border-radius: 5px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    cursor: pointer;
  }
  .hovered-text {
    color: #707070;
  }
  h1 {
    font-size: 20px;
    color: #3e3e3e;
  }
  p {
    font-size: 16px;
    color: #3e3e3e;
  }
  h2 {
    font-size: 18px;
    color: rgb(8, 76, 97);
  }
  .button-hover:hover {
    background: #414141;
    color: white;
  }
`;
