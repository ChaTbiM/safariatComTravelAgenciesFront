import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Hr from "../../assets/business-and-finance.png";
import Finance from "../../assets/compass.png";
import Crm from "../../assets/crm.png";
import TravelM from "../../assets/plus.png";
import Person from "../../assets/person.png";
import Logout from "../../assets/logout.png";
import Analytics from "../../assets/report.png";
import styled from "styled-components";

const Sidebar = props => {
  const items = [
    {
      title: "Analytics and Statistics",
      href: "/admin/tours",
      isClicked: false,
      icon: Analytics,
      options: [
        {
          key: 516312315320,
          name: "Tours booking & products",
          scrollchor: "/admin/tours"
        },
        {
          key: 45444754201,

          name: "Users interactions",
          scrollchor: "/admin/users"
        }
      ]
    },
    {
      title: "HR management",
      href: "/admin/employees",
      isClicked: false,
      icon: Hr,
      options: [
        {
          key: 516312312010112015320,

          name: "Employees managements ",
          scrollchor: "/admin/employees"
        },
        {
          key: 516312315101121211320,

          name: "Tasks managements",
          scrollchor: "/admin/tasks"
        }
      ]
    },
    {
      title: "Travel & product management",
      href: "/admin/tmanagement",
      isClicked: false,
      icon: TravelM,
      options: [
        {
          key: 111211121211212,

          name: "Tours managements ",
          scrollchor: "/admin/tmanagement"
        },
        {
          key: 2501,

          name: "products managements",
          scrollchor: "/admin/pmanagement"
        }
      ]
    },
    {
      title: "Travel CRM",
      href: "/admin/crm",
      isClicked: false,
      icon: Crm,
      options: [
        {
          key: 12354,
          name: "External orders",
          scrollchor: "/admin/crm"
        },
        {
          key: 125354,
          name: "Add billing order",
          scrollchor: "/admin/Billing"
        }
      ]
    },
    {
      title: "Finance management",
      href: "/admin/finance",
      isClicked: false,
      icon: Finance,
      options: [
        {
          key: 12354,
          name: "Finance management",
          scrollchor: "/admin/finance"
        },
        {
          key: 125354,
          name: "Change plan",
          scrollchor: "/admin/finance"
        }
      ]
    }
  ];

  const [activeItem, setActiveItem] = useState(props.active);
  const [itemClicked, setItemClicked] = useState("");

  const handleActiveItem = e => {
    if (e.currentTarget.id !== activeItem && props.toggle)
      setActiveItem(e.currentTarget.id);
    if (!props.toggle && itemClicked === e.currentTarget.id) setItemClicked("");
    else if (!props.toggle) setItemClicked(e.currentTarget.id);
  };

  const handleActiveFromDown = newActive => {
    if (newActive !== activeItem) setActiveItem(newActive);
  };
  return (
    <Container>
      <aside
        style={{
          backgroundColor: "#084C61",
          zIndex: 40
        }}
        className={
          props.toggle
            ? "agency_aside toggled flex flex-col justify-between h-full"
            : "agency_aside flex flex-col justify-between  h-full"
        }
      >
        <div className="flex justify-start h-16 items-center ml-2 py-6">
          <span>
            <img
              className="rounded-full border border-white"
              src={Person}
              alt="person"
              style={{ width: "50px", height: "50px" }}
            />
          </span>
          <div
            className={
              props.toggle
                ? "flex flex-col agency_profile_sidebar toggled ml-2"
                : "flex flex-col agency_profile_sidebar ml-2"
            }
          >
            <p className="text-16 text-white"> Oussama Bengoudifa</p>
            <span className="text-12 text-gray-600">CEO of travel agency</span>
          </div>
        </div>
        <ul>
          {items.map(item => (
            <li
              key={item.title}
              id={item.title}
              className={
                props.toggle
                  ? activeItem === item.title
                    ? "flex justify-center activeItem my-8 items-center"
                    : "flex justify-center items-center my-8 ml-1"
                  : "flex flex-col justify-center my-8 "
              }
              onClick={handleActiveItem}
            >
              <Link
                className={
                  props.toggle
                    ? activeItem === item.title
                      ? "flex justify-center items-center"
                      : "flex justify-center items-center "
                    : activeItem === item.title
                    ? "flex justify-start items-center  activeItem p-2"
                    : "flex items-center justify-start ml-2"
                }
                to={!props.toggle ? "#" : item.href}
              >
                <span>
                  <img src={item.icon} alt="icon" />
                </span>
                <p
                  className={
                    props.toggle
                      ? "agency_profile_sidebar ml-1 toggled"
                      : "agency_profile_sidebar flex justify-center items-center ml-4"
                  }
                >
                  {item.title}
                </p>
              </Link>
              <ul
                className={
                  props.toggle
                    ? "hidden"
                    : itemClicked === item.title
                    ? "flex flex-col h-auto justify-start m-0 treeview-menu "
                    : "h-0 "
                }
              >
                {item.options.map(opt => (
                  <li
                    key={opt.key + "545421"}
                    className={
                      itemClicked === item.title
                        ? "flex hovy cursor-pointer"
                        : "hidden"
                    }
                    onClick={() => handleActiveFromDown(item.title)}
                  >
                    <Link className="py-1 ml-8" to={opt.scrollchor}>
                      <div className="flex items-center">
                        <div
                          className="mr-2 relative w-3 h-3 flex justify-center items-center text-center rounded-full"
                          style={{
                            backgroundColor: "black"
                          }}
                        >
                          <div className="absolute w-1 h-1 rounded-full bg-transparent"></div>
                        </div>
                        <span className="text-white ">{opt.name}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center mx-4 border-top pt-6 mb-4">
          <span>
            {" "}
            <img
              className="logout-btn"
              src={Logout}
              alt="logout"
              style={{ width: "40px", height: "40px" }}
            />
          </span>
          <p
            className={
              props.toggle
                ? "agency_profile_sidebar toggled"
                : "agency_profile_sidebar ml-4"
            }
          >
            Logout
          </p>
        </div>
      </aside>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  p,
  a {
    font-size: 14px !important;
  }
  h1 {
    font-size: 16px !important;
  }
  span {
    font-size: 12px !important;
  }
`;
