import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as StarNon } from "../../assets/star_nonact.svg";
import Person from "../../assets/user.jpg";

const RowMessage = () => {
  const [isStarred, setIsStarred] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleStar = () => {
    setIsStarred((prevState) => !prevState);
  };
  const handleCheck = () => {
    setIsChecked((prevState) => !prevState);
  };
  return (
    <Container>
      <div
        className="flex justify-between items-center p-4 m-4"
        style={{
          background: isChecked ? "#084C61" : "white",
          borderRadius: "5px",
        }}
      >
        {" "}
        <div className="flex  items-center">
          <div className="flex  items-center">
            <span className="-mt-3">
              <label class="container">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onClick={handleCheck}
                />
                <span class="checkmark"></span>
              </label>
            </span>
            {!isStarred ? (
              <span onClick={handleStar}>
                <StarNon
                  style={{
                    fill: isChecked ? "white" : "black",
                  }}
                  className="w-6 h-6 ml-6 cursor-pointer"
                />
              </span>
            ) : (
              <span onClick={handleStar}>
                <Star className="w-6 h-6 ml-6 cursor-pointer" />
              </span>
            )}

            <div className="flex items-center pl-4">
              <span className="ml-8">
                <img
                  src={Person}
                  alt="img"
                  className="w-10 h-10"
                  style={{
                    borderRadius: "50%",
                  }}
                />
              </span>
              <p
                className="ml-2"
                style={{
                  color: isChecked ? "white" : "black",
                }}
              >
                Bill neal
              </p>
            </div>
          </div>
        </div>
        <p
          style={{
            color: isChecked ? "white" : "black",
          }}
        >
          Dit streken dan talrijk ver taiping vrouwen met
        </p>
        <div className="flex justify-between items-center">
          <i
            class="fas fa-paperclip"
            style={{
              color: isChecked ? "white" : "black",
            }}
          ></i>
          <p
            style={{
              color: isChecked ? "white" : "black",
            }}
            className="pl-4"
          >
            03:11 AM
          </p>
        </div>
      </div>
    </Container>
  );
};
export default RowMessage;

const Container = styled.div`
  p {
    font-size: 12px;
  }
`;
