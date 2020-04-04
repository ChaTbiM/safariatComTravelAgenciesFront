import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const PersonalInfo = (props) => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/0")
      .then((res) => setProfile(res.data));
  }, []);
  return (
    <Container>
      <div className="flex flex-col bg-white">
        <div className="flex justify-between pt-4 px-8 items-center">
          <h1
            style={{
              color: "#fdb810",
            }}
          >
            Personal Informations
          </h1>
          <button className="py-2 px-8 button-edit button-hover">Edit</button>
        </div>
        <div className="flex py-8 justify-between px-8">
          <div className="flex w-5/12 flex-col">
            <h2>About Employee</h2>
            <div className="flex p-4 my-4 justify-between button-edit">
              <p>{profile.name}</p>
              <p className="hovered-text">Name</p>
            </div>
            <div className="flex p-4 my-4 justify-between button-edit">
              <p>{profile.birthday}</p>
              <p className="hovered-text">Birthday</p>
            </div>
            <div className="flex my-4 justify-between">
              <div className="flex w-1/2 p-4 mr-6 justify-between button-edit">
                <p>{profile.gender}</p>
                <p className="hovered-text">Gender</p>
              </div>
              <div className="flex w-1/2 p-4 justify-between button-edit">
                <p>{profile.relashionship}</p>
                <p className="hovered-text">Relashionship</p>
              </div>
            </div>
            <div className="flex p-4 my-4 justify-between button-edit">
              <p>{profile.adr}</p>
              <p className="hovered-text">Address</p>
            </div>
            <div className="flex my-4 justify-between">
              <div className="flex w-1/2 p-4 mr-6 justify-between button-edit">
                <p>{profile.state}</p>
                <p className="hovered-text">State</p>
              </div>
              <div className="flex w-1/2 p-4 justify-between button-edit">
                <p>{profile.country}</p>
                <p className="hovered-text">Country</p>
              </div>
            </div>
            <h2 className="mt-4">Contact informations</h2>
            <div className="flex p-4 my-4 justify-between button-edit">
              <p>{profile.email}</p>
              <p className="hovered-text">Email</p>
            </div>
            <div className="flex p-4 my-4 justify-between button-edit">
              <p>{profile.phone}</p>
              <p className="hovered-text">Phone</p>
            </div>
          </div>
          <div className="flex w-5/12 flex-col">
            <h2>Account informations</h2>
            <div className="flex p-4 my-4 justify-between button-edit">
              <p>{profile.username}</p>
              <p className="hovered-text">Username</p>
            </div>
            <div className="flex p-4 my-4 justify-between items-center button-edit">
              <p>*************</p>
              <p className="hovered-text">Password</p>
            </div>
            <h2 className="mt-4">Additional informations</h2>
            <div className="flex p-4 my-4 justify-between button-edit">
              <p>{profile.facebook}</p>
              <p className="hovered-text">Facebook link</p>
            </div>
            <div className="flex p-4 my-4 justify-between button-edit">
              <p>{profile.google}</p>
              <p className="hovered-text">Google link</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default PersonalInfo;

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
