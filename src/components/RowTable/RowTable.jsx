import React, { useState, useEffect } from "react";
import Img from "../GeneralAnalyDashbord/images/NoPath - Copie (16)@3x.png";
import { ReactComponent as ArrowDown } from "../../assets/downArrow.svg";
import { ReactComponent as Dots } from "../GeneralAnalyDashbord/images/ellipsis.svg";
import axios from "axios";
import CurrencyInput from "react-currency-input";

const TreeDots = props => {
  const { id, dotClicked } = props;
  const [isDotDropdown, setIsDotDropdown] = useState(false);
  const [isDot, setIsDot] = useState(true);

  const handleUpdate = () => {
    setIsDotDropdown(prevState => !prevState);
    setIsDot(prevState => !prevState);
    dotClicked();
  };
  const handleDotDropdown = () => {
    setIsDotDropdown(prevState => !prevState);
  };
  const handleCheck = () => {
    //when user click the check icon
    dotClicked();
    setIsDot(prevState => !prevState);
  };
  return (
    <>
      {isDot ? (
        <td className="text-center flex justify-center items-center">
          <div className="check-hover dot">
            <Dots
              onClick={handleDotDropdown}
              className="px-2  cursor-pointer text-center px-2 sD:text-12 mD:text-16 lD:text-16 w-10 h-10 responsive-icons rot"
              fill="#707070"
            />
            <div
              style={{
                display: isDotDropdown ? "block" : "none"
              }}
              className={
                isDotDropdown
                  ? "dropdown-nav bg-white mt-2 w-40 absolute rounded-lg shadow-xl z-50"
                  : "dropdown-nav  bg-white mt-2 w-40 absolute rounded-lg shadow-xl z-50"
              }
            >
              <div className="flex items-center py-2 px-4">
                <p
                  className="block text-16 text-gray-700 hover:text-black m-0 cursor-pointer"
                  onClick={handleUpdate}
                >
                  Update
                </p>
              </div>
              <div className="flex items-center py-2 px-4">
                <p className="block text-16 text-gray-700 hover:text-black  m-0 cursor-pointer">
                  Send message
                </p>
              </div>
              <div className="flex items-center py-2 px-4">
                <p className="block text-16 text-gray-700 hover:text-black m-0 cursor-pointer">
                  Check profile
                </p>
              </div>
            </div>
          </div>
        </td>
      ) : (
        <td className="flex justify-center">
          <div
            className="bg-white check-hover flex justify-center items-center w-12 h-12 cursor-pointer"
            style={{
              borderRadius: "50%"
            }}
            onClick={handleCheck}
          >
            <i
              className="fas fa-check"
              style={{
                fontSize: "25px"
              }}
            ></i>
          </div>
        </td>
      )}
    </>
  );
};
const StatusDropdown = props => {
  const { element, setUpdate, update, isDot, sudo } = props;
  const [status, setStatus] = useState("");
  const [isDropdown, setIsDropdown] = useState(false);

  useEffect(() => {
    setStatus(element.status);
  }, []);
  const handleStatusChange = () => {
    setIsDropdown(prevState => !prevState);
  };
  const handleStatusEvent = e => {
    let key = e.currentTarget.attributes["data-id"].nodeValue;
    setStatus(e.currentTarget.attributes["data-status"].nodeValue);
    setIsDropdown(prevState => !prevState);
    //put request to backend
  };

  return (
    <td key={element["id"]} className="odd relative py-2 px-2">
      <div className={isDot ? "hidden" : "block"}>
        <div
          className="bg-white  flex justify-between items-center px-4 py-2 text-gray-800 border-none cursor-pointer rounded-lg shadow-md"
          onClick={handleStatusChange}
        >
          <span>{status}</span>
          <ArrowDown className="cursor-pointer w-4 h-4 " />
        </div>
        <div
          className={
            isDropdown
              ? "flex absolute bot-ok bg-red left-0 w-full px-2 rounded-lg text-gray-800"
              : "hidden"
          }
        >
          <ul className="flex flex-col h-full w-full relative flex-col shadow-lg ">
            <li
              data-id={element["id"]}
              className="dropdownStatus"
              data-status="Not yet"
              onClick={handleStatusEvent}
            >
              <div className="hover-t w-2 h-2 x rounded-full flex text-center px-1 sD:text-12 mD:text-16 lD:text-16 rounded-full"></div>
              <span className="ml-2 hover-tt text-center sD:text-12 mD:text-16 lD:text-16">
                Not yet
              </span>
            </li>
            <li
              data-id={element["id"]}
              className="dropdownStatus rounded-b-lg"
              onClick={handleStatusEvent}
              data-status="Paid out"
            >
              <div
                style={{
                  backgroundColor: "#2dce98"
                }}
                className=" w-2 h-2  rounded-full flex text-center px-1 sD:text-12 mD:text-16 lD:text-16 rounded-full"
              ></div>
              <span className="ml-2 hover-tt ok text-center sD:text-12 mD:text-16 lD:text-16">
                Paid out
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className={isDot ? "flex justify-center items-center" : "hidden"}>
        <div className="flex justfiy-center flex-row text-center items-center">
          <div className="hover-t w-2 h-2 x rounded-full flex text-center px-1 sD:text-12 mD:text-16 lD:text-16 rounded-full"></div>
          <span className=" text-center px-2 sD:text-12 mD:text-16 lD:text-16">
            {status}
          </span>
        </div>
      </div>
    </td>
  );
};

const Span = props => {
  const { element, sudo, isDot, update, setUpdate } = props;
  const [data, setData] = useState(0);
  useEffect(() => {
    setData(element.salary);
  }, []);
  const handleElement = (e, i) => {
    setData(i);
  };
  // console.log(data);
  if (!update) {
    //put request for refreshing data changed
    axios
      .put("http://localhost:3000/employees/" + element.id, {
        id: element.id,
        name: element.name,
        paying_day: element.paying_day,
        status: element.status,
        salary: data,
        departement: element.departement
      })
      .then(res => {
        console.log(res);
        setUpdate(prevState => !prevState);
        sudo();
      });
  }
  return (
    <td className="text-center">
      <span
        className={
          isDot ? "text-center px-2 sD:text-12 mD:text-16 lD:text-16" : "hidden"
        }
      >
        $ {data}
      </span>
      <div className={isDot ? "hidden" : "block px-4"}>
        <CurrencyInput
          prefix="$"
          value={data}
          className="bg-white flex w-32 justify-between items-center px-2 py-2 text-gray-800 border-none  rounded-lg shadow-md"
          onChange={handleElement}
        />
      </div>
    </td>
  );
};

const RowTable = props => {
  const { data, sudo } = props;
  const [isDot, setIsDot] = useState(true);
  const [update, setUpdate] = useState(true);
  const [element, setElement] = useState([]);

  useEffect(() => {
    setElement(data);
  }, [data]);

  const dotClicked = () => {
    //for data show or data update
    setIsDot(prevState => {
      if (!prevState) {
        setUpdate(false);
      } else {
        setUpdate(true);
      }
      return !prevState;
    });
  };

  return (
    <>
      <tr key={element.id} role="row" className="odd">
        <td tabIndex="0" className="sorting_1">
          <div className="justify-center items-center flex">
            <div className="flex p-0 responsive-rate flex-row lg:justify-center items-center sm:flex sm:justify-end sm:flex sm:justify-end">
              <img src={Img} alt="img" width="40" />
              <p className="text-center px-2 sD:text-12 mD:text-16 lD:text-16 px-2">
                {element.name}
              </p>
            </div>
          </div>
        </td>
        <td className="text-center">
          <span className="text-center px-2 sD:text-12 mD:text-16 lD:text-16">
            paying_day
          </span>
        </td>
        <StatusDropdown
          isDot={isDot}
          setUpdate={setUpdate}
          update={update}
          element={element}
          sudo={sudo}
        />

        <Span
          isDot={isDot}
          sudo={sudo}
          setUpdate={setUpdate}
          update={update}
          element={element}
        />

        <td className="text-center">
          <span className="text-center px-2 sD:text-12 mD:text-16 lD:text-16">
            {element.departement}
          </span>
        </td>
        <TreeDots dotClicked={dotClicked} />
      </tr>
    </>
  );
};
export default RowTable;
