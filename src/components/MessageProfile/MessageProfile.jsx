import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as MailOpen } from "../../assets/mail_open.svg";
import { ReactComponent as ArrowDown } from "../../assets/arrow_down.svg";
import { ReactComponent as ArrowLeft } from "../../assets/left-arrow.svg";
import { ReactComponent as ArrowRight } from "../../assets/right-arrow.svg";
import User from "../../assets/user.jpg";
import RowMessage from "../RowMessage/RowMessage.jsx";
const MessageProfile = () => {
  return (
    <Container>
      <div className="flex flex-col bg-white">
        <div className="flex pt-4 px-8 items-center">
          <h1
            style={{
              color: "#fdb810",
            }}
          >
            Messages
          </h1>
        </div>
        <div className="flex px-8 py-4">
          <div className="w-1/4 pr-4">
            <div className="flex flex-col">
              <div className="button-edit flex flex-col justify-between items-center ">
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
                      <p>icon</p>
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
                      <i class="fas fa-trash"></i>
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
              <div className="flex button-edit flex-col my-6">
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
                  <input type="checkbox" />
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
                    class="fas fa-redo-alt px-2 flex items-center"
                    style={{
                      fontSize: "20px",
                    }}
                  ></i>
                  <i
                    class="fas fa-trash px-2 flex items-center"
                    style={{
                      fontSize: "20px",
                    }}
                  ></i>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="agency-search-bar">
                  <input className="text-18" type="text" placeholder="Search" />
                  <div className="glass-icon">
                    <div className=" glass-icon-c">
                      <span className="glass-icon__circle"></span>
                      <span className="glass-icon__stick"></span>
                    </div>
                  </div>
                </div>
              </div>

              <p>1-100 of 100</p>
              <div className="flex justify-between">
                <ArrowLeft className="w-6 h-6" />
                <ArrowRight className="w-6 h-6" />
              </div>
              <i
                class="fas fa-cog"
                style={{
                  fontSize: "20px",
                }}
              ></i>
            </div>
            <RowMessage />
            <RowMessage />
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
  h1 {
    font-size: 20px;
    color: #3e3e3e;
  }

  .fas {
    font-size: 16px;
    color: #4c4c4c;
  }
  p {
    font-size: 12px;
    color: #3e3e3e;
  }
  h2 {
    font-size: 14px;
    color: rgb(8, 76, 97);
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
