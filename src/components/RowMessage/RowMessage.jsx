import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as StarNon } from "../../assets/star_nonact.svg";
import Person from "../../assets/user.jpg";
import axios from "axios";

const RowMessage = (props) => {
  const [isStarred, setIsStarred] = useState(props.data.isStarred);
  const [isChecked, setIsChecked] = useState(props.isFull);
  const [visible, setVisible] = useState(true);
  const [data, setData] = useState(props.data);
  useEffect(() => {
    setIsChecked(props.isFull);
    if (isChecked && props.delete) {
      axios.delete("http://localhost:3000/messages/" + props.id).then(() => {
        setVisible(false);
      });
      props.setDeleteItem();
    }
  }, [props.isFull, props.delete, props.update]);
  const handleStar = () => {
    setIsStarred((prevState) => !prevState);
    axios
      .put("http://localhost:3000/messages/" + props.id, {
        ...data,
        isStarred: !isStarred,
      })
      .then((res) => console.log(res));
  };
  const handleCheck = () => {
    setIsChecked((prevState) => !prevState);
  };
  return (
    <>
      {data["name"].toLowerCase().includes(props.filter.toLowerCase()) &&
      visible ? (
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
                    {data.name}
                  </p>
                </div>
              </div>
            </div>
            <p
              style={{
                color: isChecked ? "white" : "black",
              }}
            >
              {data.description}
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
                {data.time}
              </p>
            </div>
          </div>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};
export default RowMessage;

const Container = styled.div`
  p {
    font-size: 12px;
  }
`;
