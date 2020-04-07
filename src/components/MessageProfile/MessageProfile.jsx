import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as MailOpen } from "../../assets/mail_open.svg";
import { ReactComponent as ArrowDown } from "../../assets/arrow_down.svg";
import { ReactComponent as ArrowLeft } from "../../assets/left-arrow.svg";
import { ReactComponent as ArrowRight } from "../../assets/right-arrow.svg";
import { ReactComponent as SentMail } from "../../assets/sent mail.svg";

import User from "../../assets/user.jpg";
import RowMessage from "../RowMessage/RowMessage.jsx";
import axios from "axios";

const MessageProfile = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [dataMessages, setDataMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [deleteItem, setDeleteItem] = useState(false);
  const [rowNumberMin, setRowNumberMin] = useState(0);
  const [rowNumberMax, setRowNumberMax] = useState(6);
  const [isMax, setIsMax] = useState(false);
  const [isMin, setIsMin] = useState(true);
  const [maxLength, setMaxLength] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(null);

  const handleUpdate = () => {
    setIsLoaded(false);
    axios.get("http://localhost:3000/messages").then((res) => {
      setDataMessages(res.data.slice(rowNumberMin, rowNumberMax));
      setIsLoaded(true);
    });
  };

  const handleDelete = () => {
    setDeleteItem((prevState) => !prevState);
  };

  const handleInputValue = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const handleCheckBox = () => {
    setIsChecked((prevState) => !prevState);
  };
  const handleRowChange = (e) => {
    if (e.currentTarget.attributes["data-go"].nodeValue === "true") {
      if (rowNumberMax < maxLength) {
        setRowNumberMin(rowNumberMax);
        setRowNumberMax((prevState) => prevState + 6);
        setMin((prevState) => prevState + 1);
      }
    } else {
      if (rowNumberMin > 0) {
        setRowNumberMax(rowNumberMin);
        setRowNumberMin((prevState) => prevState - 6);
        setMin((prevState) => prevState - 1);
      }
    }
  };
  useEffect(() => {
    if (!rowNumberMin) {
      setRowNumberMin(0);
    }
    axios
      .get("http://localhost:3000/messages")
      .then((res) => {
        if (!maxLength) {
          setMaxLength(res.data.length);
          if (res.data.length % 6 !== 0) {
            setMax(Math.floor(res.data.length / 6) + 1);
          } else {
            setMax(Math.floor(res.data.length) / 6);
          }
        }
        if (rowNumberMin === 0) {
          setIsMin(true);
        } else {
          if (isMin == true) {
            setIsMin(false);
          }
        }
        if (maxLength) {
          if (rowNumberMax >= maxLength) {
            setIsMax(true);
          } else {
            if (isMax == true) {
              setIsMax(false);
            }
          }
        }

        if (res.data.slice(rowNumberMin, rowNumberMax).length > 0) {
          setDataMessages(res.data.slice(rowNumberMin, rowNumberMax));
          setIsLoaded(true);
        }
      })
      .catch((err) => {
        alert("error fetching data");
      });
  }, [rowNumberMin, rowNumberMax]);
  return (
    <Container>
      <div className="flex flex-col bg-white">
        <div className="flex py-4 px-8 items-center">
          <h1
            style={{
              color: "#fdb810",
            }}
          >
            Messages
          </h1>
        </div>
        <div className="flex px-8 py-0">
          <div className="w-1/4 pr-4">
            <div className="flex flex-col">
              <div className="button-edit cursor-default flex flex-col justify-between items-center ">
                <ul className="w-full my-6">
                  <li className="flex justify-between px-4 py-4">
                    <div className="flex items-center">
                      <i class="fas fa-inbox"></i>
                      <h2 className="ml-2">Inbox</h2>
                    </div>
                    <h2
                      className="px-2 py-1"
                      style={{
                        borderRadius: "5px",
                        background: "#084C61",
                        color: "white",
                      }}
                    >
                      4
                    </h2>
                  </li>
                  <li className="flex justify-between px-4 py-4">
                    <div className="flex justify-center items-center">
                      <MailOpen
                        style={{
                          width: "15px",
                        }}
                      />
                      <h2 className="ml-2">Draft</h2>
                    </div>
                    <h2
                      className="px-2 py-1"
                      style={{
                        borderRadius: "5px",
                        background: "#084C61",
                        color: "white",
                      }}
                    >
                      1
                    </h2>
                  </li>
                  <li className="flex justify-between px-4 py-4">
                    <div className="flex items-center">
                      <SentMail className="w-5 h-5" />
                      <h2 className="ml-2">Sent Mail</h2>
                    </div>
                    {/* <h2
                      className="px-2 py-1"
                      style={{
                        borderRadius: "5px",
                        background: "#084C61",
                        color: "white",
                      }}
                    >
                      4
                    </h2> */}
                  </li>
                  <li className="flex justify-between px-4 py-4">
                    <div className="flex items-center">
                      <i class="fas fa-trash "></i>
                      <h2 className="ml-2">Trash</h2>
                    </div>
                    <h2
                      className="px-2 py-1"
                      style={{
                        borderRadius: "5px",
                        background: "#084C61",
                        color: "white",
                      }}
                    >
                      21
                    </h2>
                  </li>
                </ul>
                <button
                  style={{
                    borderRadius: "5px",
                    background: "#084C61",
                    color: "white",
                  }}
                  className="px-4 py-2 my-8"
                >
                  New Message
                </button>
              </div>
              <div className="flex button-edit flex-col mt-6">
                <div className="px-4 py-6">
                  <h2>Online users</h2>
                  <ul className="w-full scroll-div my-6">
                    <li className="flex py-4">
                      <div className="flex items-center">
                        <img
                          src={User}
                          className="w-8 h-8"
                          style={{
                            borderRadius: "50%",
                          }}
                          alt="user"
                        />
                        <span
                          className="w-2 ml-2 h-2"
                          style={{
                            borderRadius: "50%",
                            background: "#19A70F",
                          }}
                        ></span>
                        <h2 className="ml-2">Louis james</h2>
                      </div>
                    </li>
                    <li className="flex py-4">
                      <div className="flex items-center">
                        <img
                          src={User}
                          className="w-8 h-8"
                          style={{
                            borderRadius: "50%",
                          }}
                          alt="user"
                        />
                        <span
                          className="w-2 ml-2 h-2"
                          style={{
                            borderRadius: "50%",
                            background: "#19A70F",
                          }}
                        ></span>
                        <h2 className="ml-2">Louis james</h2>
                      </div>
                    </li>
                    <li className="flex py-4">
                      <div className="flex items-center">
                        <img
                          src={User}
                          className="w-8 h-8"
                          style={{
                            borderRadius: "50%",
                          }}
                          alt="user"
                        />
                        <span
                          className="w-2 ml-2 h-2"
                          style={{
                            borderRadius: "50%",
                            background: "#19A70F",
                          }}
                        ></span>
                        <h2 className="ml-2">Louis james</h2>
                      </div>
                    </li>
                    <li className="flex py-4">
                      <div className="flex items-center">
                        <img
                          src={User}
                          className="w-8 h-8"
                          style={{
                            borderRadius: "50%",
                          }}
                          alt="user"
                        />
                        <span
                          className="w-2 ml-2 h-2"
                          style={{
                            borderRadius: "50%",
                            background: "#19A70F",
                          }}
                        ></span>
                        <h2 className="ml-2">Louis james</h2>
                      </div>
                    </li>
                    <li className="flex py-4">
                      <div className="flex items-center">
                        <img
                          src={User}
                          className="w-8 h-8"
                          style={{
                            borderRadius: "50%",
                          }}
                          alt="user"
                        />
                        <span
                          className="w-2 ml-2 h-2"
                          style={{
                            borderRadius: "50%",
                            background: "#19A70F",
                          }}
                        ></span>
                        <h2 className="ml-2">Louis james</h2>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full button-edit cursor-default">
            <div
              className="flex justify-between px-4 py-4 shadow-md items-center"
              style={{
                borderRadius: "5px",
              }}
            >
              <div className="flex justify-between">
                <label class="container">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onClick={handleCheckBox}
                  />
                  <span class="checkmark mt-1"></span>
                </label>
                <span>
                  <ArrowDown
                    style={{
                      fill: "#4C4C4C",
                      width: "16px",
                    }}
                  />
                </span>
                <div className="flex justify-between ml-8">
                  <i
                    className="fas fa-redo-alt px-2 flex items-center cursor-pointer"
                    onClick={handleUpdate}
                    style={{
                      fontSize: "20px",
                    }}
                  ></i>
                  <i
                    className="fas fa-trash px-2 flex cursor-pointer items-center"
                    onClick={handleDelete}
                    style={{
                      fontSize: "20px",
                    }}
                  ></i>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="agency-search-bar">
                  <input
                    className="text-18"
                    type="text"
                    placeholder="Search"
                    value={inputValue}
                    onChange={handleInputValue}
                  />
                  <div className="glass-icon">
                    <div className=" glass-icon-c">
                      <span className="glass-icon__circle"></span>
                      <span className="glass-icon__stick"></span>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                {min} of {max}
              </p>
              <div className="flex justify-between">
                <ArrowLeft
                  className={
                    isMin
                      ? "cursor-pointer bg-arrow w-8 h-8 px-1"
                      : "cursor-pointer  w-8 h-8 px-1"
                  }
                  data-go={false}
                  onClick={handleRowChange}
                />
                <ArrowRight
                  data-go={true}
                  className={
                    isMax
                      ? "cursor-pointer bg-arrow w-8 h-8 px-1"
                      : "cursor-pointer  w-8 h-8 px-1"
                  }
                  onClick={handleRowChange}
                />
              </div>
              <i
                class="fas fa-cog"
                style={{
                  fontSize: "20px",
                }}
              ></i>
            </div>
            <div
              className={
                isLoaded
                  ? "flex flex-col"
                  : "flex justify-center text-center h-full"
              }
            >
              {isLoaded ? (
                dataMessages.map((elm) => (
                  <RowMessage
                    setDeleteItem={setDeleteItem}
                    delete={deleteItem}
                    filter={inputValue}
                    isFull={isChecked}
                    id={elm.id}
                    data={elm}
                  />
                ))
              ) : (
                <div className="slider-spinner flex justify-center items-center">
                  <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default MessageProfile;
const Container = styled.div`
  .button-edit {
    border-radius: 5px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    cursor: pointer;
  }
  .scroll-div {
    overflow: scroll;
    overflow-x: hidden;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none;
    max-height: 180px;
  }
  .hovered-text {
    color: #707070;
  }
  .sentMail {
    background-image: url("../../assets/sent mail.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20px;
  }
  h1 {
    font-size: 20px;
    color: #3e3e3e;
  }

  .fas {
    font-size: 16px;
    color: #4c4c4c;
  }
  p {
    font-size: 12px !important;
    color: #3e3e3e;
  }

  input {
    font-size: 12px !important;
  }
  h2 {
    font-size: 14px;
    color: rgb(8, 76, 97);
  }
  .bg-arrow {
    fill: #7f858a91;
  }
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: white;
    border-radius: 4px;
    border: 2px solid #303030;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    border: 2px solid #fdb810;
    color: white;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #fdb810;
    color: white;
    border: 2px solid #fdb810 !important;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 7px;
    top: 4px;
    width: 7px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .glass-icon {
    height: 2rem;
    width: 2rem;
    position: relative;
    cursor: pointer;
  }
  .agency-input {
    background: #fff;
    color: #a7a7a7;
    width: 13vw;
  }
  .agency-search-bar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    padding: 1.1rem 1.1rem !important;
    border-radius: 5px;
    color: #a7a7a7;
    margin: 0 auto;
    cursor: text;
    height: 35px;
    -webkit-box-shadow: 0px 0px 20px -9px #999;
    -moz-box-shadow: 0px 0px 20px -9px #999;
    box-shadow: 0px 0px 20px -9px #999;
  }

  .glass-icon {
    height: 1.5rem;
    width: 1.5rem;
    position: relative;
    margin-right: 5px;
  }
  .glass-icon .glass-icon-c {
    height: 100%;
    width: 55%;
    position: absolute;
    left: 50%;
    transform-origin: center center;
    transform: translateX(-50%) rotate(-45deg);
    transition: transform 0.7s cubic-bezier(0.31, -0.84, 0.64, 1.76);
  }

  .glass-icon .glass-icon__circle {
    height: 55%;
    width: 100%;
    background: #a7a7a7;
    border-radius: 100%;
    display: block;
    position: relative;
    transition: all 0.7s cubic-bezier(0.31, -0.84, 0.64, 1.76);
  }
  .glass-icon .glass-icon__circle::after {
    background: #fff;
    height: 64%;
    width: 64%;
    position: absolute;
    left: 18%;
    top: 18%;
    display: block;
    content: "";
    border-radius: 100%;
    transition: all 0.7s cubic-bezier(0.31, -0.84, 0.64, 1.76);
  }
  .glass-icon .glass-icon__stick {
    width: 0.25rem;
    height: 55%;
    display: block;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    position: absolute;
    bottom: 0;
    left: calc(50% - 0.1433333333rem);
    background: #a7a7a7;
  }
`;
