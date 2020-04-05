import React, { useState, useEffect } from "react";
import axios from "axios";
import Person from "../../assets/user.jpg";
import UserIcon from "../../assets/iconfinder_ic_location_history_48px_352519.png";
import Bag from "../../assets/iconfinder_ic_work_48px_352228.png";
import Location from "../../assets/iconfinder_ic_location_on_48px_352521.png";
import styled from "styled-components";

const ProfileCard = (props) => {
  const { id } = props;
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/profileEmployee/" + id)
      .then((res) => setEmployee(res.data));
  }, []);
  return (
    <Container>
      <div className="card">
        <div className="flex flex-col px-4 py-2">
          <div className="flex flex-col my-4 justify-between items-center">
            <div className="items-center text-center border-b border-gray-900">
              <div className="relative">
                <img
                  style={{
                    borderRadius: "50%",
                    width: "130px",
                    height: "130px",
                    verticalAlign: "bottom",
                  }}
                  src={Person}
                  alt="person"
                />
                <div
                  style={{
                    borderRadius: "50%",
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                    transform: "translate(50%,50%)",
                    zIndex: 5,
                  }}
                  className="w-8 h-8 text-center bg-white"
                >
                  {" "}
                  <div
                    style={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "50%",
                    }}
                    className="cursor-pointer shadow-md flex justify-center items-center bg-white"
                  >
                    {" "}
                    <i
                      className="fas fa-pen "
                      style={{
                        color: "#707070",
                      }}
                    ></i>
                  </div>
                </div>
              </div>
              <h1 className="my-8">{employee["fullname"]}</h1>
            </div>
          </div>
          <div className="my-8 flex justify-between">
            <div className="flex flex-col justify-between items-start">
              <div className="flex my-4">
                <img
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                  src={Bag}
                  alt="bg"
                />
                <p className="ml-2">Job position</p>
              </div>
              <div className="flex my-4">
                <img
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                  src={Location}
                  alt="bg"
                />
                <p className="ml-2">From</p>
              </div>
              <div className="flex my-4">
                <img
                  src={UserIcon}
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                  alt="bg"
                />
                <p className="ml-2">Employee Since</p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-start">
              <div className="flex my-4">
                <span className="ml-2">{employee["job"]}</span>
              </div>
              <div className="flex my-4">
                <span className="ml-2">{employee["from"]}</span>
              </div>
              <div className="flex my-4">
                <span className="ml-2">{employee["since"]}</span>
              </div>
            </div>
          </div>
          <div className="my-8 flex flex-col">
            <div className="flex justify-between">
              <p>Biography</p>
              <i
                className="fas fa-pen cursor-pointer"
                style={{
                  color: "#707070",
                }}
              />
            </div>
            <div className="my-4">
              <p className="text-gray-700">
                Dit streken dan talrijk ver taiping vrouwen met. Noodige der aan
                rug leiding element schepen ontzegd trekken. Ton locomobiel
                bescheiden interesten millioenen afwachting weggevoerd mee. Moet
                rook en ad acre twee. Ieder ad naast er die pe china erbij en
                assam nu
              </p>
            </div>
          </div>
          <div className="my-4 flex row justify-between items-center">
            <div className="flex">
              <p className="bg-black flex items-center justify-center text-center w-5 h-5">
                <i
                  class="fab fa-google"
                  style={{
                    color: "white",
                  }}
                ></i>
              </p>
              <a
                href={employee["google"]}
                className="underline ml-1 cursor-pointer"
              >
                Google
              </a>
            </div>
            <div className="flex">
              <span className="bg-black flex items-center justify-center text-center w-5 h-5">
                <i
                  class="fab fa-facebook-f"
                  style={{
                    color: "white",
                  }}
                ></i>
              </span>
              <a
                href={employee["instagram"]}
                className="underline ml-1 cursor-pointer"
              >
                Facebook
              </a>
            </div>
            <div className="flex">
              <p className="bg-black flex items-center justify-center text-center w-5 h-5">
                <i
                  class="fab fa-instagram"
                  style={{
                    color: "white",
                  }}
                ></i>
              </p>
              <a
                href={employee["instagram"]}
                className="underline ml-1 cursor-pointer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ProfileCard;

const Container = styled.div`
  p,
  span {
    font-size: 12px;
  }
  a {
    font-size: 14px;
  }
  h1 {
    font-size: 16px;
  }
  .row {
    flex-direction: row;
  }
  .fas {
    font-size: 12px !important;
  }
  @media (max-width: 1300px) {
    .row {
      flex-direction: column !important;
      align-items: flex-start !important;
    }
  }
`;
