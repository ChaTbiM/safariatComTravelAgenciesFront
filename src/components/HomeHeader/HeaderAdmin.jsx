import React, { useState } from "react";
import "./HeaderAdmin.css";
import Notification from "./images/notifications.svg";
import Logo from "./images/logoForWeb.png";
import SearchBar from "../SearchBar/SearchBar.jsx";
import NotificationBox from "../NotificationsBox/NotificationsBox.jsx";
import styled from "styled-components";

const HeaderAdmin = props => {
  const [show, setShow] = useState(false);
  const [navL, setNavL] = useState(false);
  const [homeDropdown, setHomeDropdon] = useState(false);
  const showNotifications = () => {
    setShow(!show);
  };
  const handleLogo = () => {
    setNavL(!navL);
    props.clickToggle();
  };
  const handleClick = () => {
    setHomeDropdon(prevState => !prevState);
  };

  return (
    <Container>
      <div className="main_header_admin ">
        <nav
          className={navL ? "navbar_header_admin" : "navbar_header_admin res"}
        >
          <div className="flex items-center nav-h">
            <a className="w-3/5" href="#" onClick={handleLogo}>
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div className="partLeft">
            <SearchBar />
            <div className="middlePart">
              <div className="buttons_nav flex">
                <div className="agency_item-nav py-6 relative cursor-pointer">
                  <a
                    href="#"
                    onClick={handleClick}
                    className="text-18 active"
                    name="Home"
                  >
                    Home
                  </a>
                </div>
                <div className="agency_item-nav py-6 relative cursor-pointer">
                  <a
                    href="#"
                    onClick={handleClick}
                    className="text-18 "
                    name="Create"
                  >
                    Create+
                  </a>
                  <div className="dropdown-nav hidden bg-white mt-6 py-2 w-56 absolute rounded-lg shadow-xl ">
                    <div className="flex items-center py-2 px-4">
                      <div
                        className="relative mr-2 w-3 h-3 flex justify-center items-center text-center rounded-full"
                        style={{
                          backgroundColor: "#FFB808"
                        }}
                      >
                        <div className="absolute w-1 h-1 rounded-full bg-transparent"></div>
                      </div>
                      <a
                        href="#"
                        className="block text-14 text-drp text-gray-800  m-0 "
                      >
                        Create new Tour
                      </a>
                    </div>
                    <div className="flex items-center py-2 px-4">
                      <div
                        className="relative mr-2 w-3 h-3 flex justify-center items-center text-center rounded-full"
                        style={{
                          backgroundColor: "#FFB808"
                        }}
                      >
                        <div className="absolute w-1 h-1 rounded-full bg-transparent"></div>
                      </div>
                      <a
                        href="#"
                        className="block text-14 text-drp text-gray-800  m-0 "
                      >
                        Create new message
                      </a>
                    </div>
                    <div className="flex items-center py-2 px-4">
                      <div
                        className="relative mr-2 w-3 h-3 flex justify-center items-center text-center rounded-full"
                        style={{
                          backgroundColor: "#FFB808"
                        }}
                      >
                        <div className="absolute w-1 h-1 rounded-full bg-transparent"></div>
                      </div>
                      <a
                        href="#"
                        className="block text-14 text-drp text-gray-800  m-0 "
                      >
                        Create new Product
                      </a>
                    </div>
                    <div className="flex items-center py-2 px-4">
                      <div
                        className="relative mr-2 w-3 h-3 flex justify-center items-center text-center rounded-full"
                        style={{
                          backgroundColor: "#FFB808"
                        }}
                      >
                        <div className="absolute w-1 h-1 rounded-full bg-transparent"></div>
                      </div>
                      <a
                        href="#"
                        className="block text-14 text-drp text-gray-800  m-0 "
                      >
                        Create new Article
                      </a>
                    </div>
                    <div className="flex items-center py-2 px-4">
                      <div
                        className="relative mr-2 w-3 h-3 flex justify-center items-center text-center rounded-full"
                        style={{
                          backgroundColor: "#FFB808"
                        }}
                      >
                        <div className="absolute w-1 h-1 rounded-full bg-transparent"></div>
                      </div>
                      <a
                        href="#"
                        className="block text-14 text-drp text-gray-800  m-0 "
                      >
                        Create new billing
                      </a>
                    </div>
                  </div>
                </div>
                <div className="agency_item-nav py-6 relative cursor-pointer">
                  <a
                    href="#"
                    onClick={handleClick}
                    className="text-18 "
                    name="Services"
                  >
                    Sevices
                  </a>
                  <div className="dropdown-nav hidden bg-white mt-6 py-2 w-56 absolute rounded-lg shadow-xl ">
                    <div className="flex items-center py-2 px-4">
                      <div
                        className="relative mr-2 w-3 h-3 flex justify-center items-center text-center rounded-full"
                        style={{
                          backgroundColor: "#FFB808"
                        }}
                      >
                        <div className="absolute w-1 h-1 rounded-full bg-transparent"></div>
                      </div>
                      <a
                        href="#"
                        className="block text-14 text-drp text-gray-800  m-0 "
                      >
                        Registrations services
                      </a>
                    </div>
                    <div className="flex items-center py-2 px-4">
                      <div
                        className="relative mr-2 w-3 h-3 flex justify-center items-center text-center rounded-full"
                        style={{
                          backgroundColor: "#FFB808"
                        }}
                      >
                        <div className="absolute w-1 h-1 rounded-full bg-transparent"></div>
                      </div>
                      <a
                        href="#"
                        className="block text-14 text-drp text-gray-800  m-0 "
                      >
                        Publicity services
                      </a>
                    </div>
                  </div>
                </div>
                <div className="agency_item-nav py-6 relative cursor-pointer">
                  <a
                    href="#"
                    onClick={handleClick}
                    className="text-18 "
                    name="Services"
                  >
                    Support
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-auto flex flex-row justify-center items-center">
            <div className="flex flex-col relative items-end">
              <p
                className="mx-4 lD:h-12 lD:w-12 cursor-pointer xsD:w-12 xsD:h-12 sD:w-12 sD:h-12 mD:w-16 mD:h-16 "
                onClick={showNotifications}
              >
                <img src={Notification} alt="notification" />
              </p>
              <div
                className={
                  show
                    ? "notification-box flex mx-6"
                    : "notification-box hidden mx-6"
                }
              >
                <NotificationBox />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </Container>
  );
};

export default HeaderAdmin;

const Container = styled.div`
  a,
  input {
    font-size: 16px !important;
  }
`;
