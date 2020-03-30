import React, { useState, useEffect } from "react";
import "./FinanceTable.css";
import { ReactComponent as Dots } from "../GeneralAnalyDashbord/images/ellipsis.svg";
import Img from "../GeneralAnalyDashbord/images/NoPath - Copie (16)@3x.png";
import axios from "axios";
import { ReactComponent as ArrowLeft } from "../../assets/left-arrow.svg";
import { ReactComponent as ArrowRight } from "../../assets/right-arrow.svg";
import { ReactComponent as ArrowDown } from "../../assets/downArrow.svg";

const InputSalary = props => {
  const { element } = props;
  const [inputSalary, setInputSalary] = useState(element.salary);
  useEffect(() => {});
  return (
    <td className="text-center">
      <input
        type="text"
        className="text-center px-2 sD:text-12 mD:text-16 lD:text-16"
        value={inputSalary}
        onChange={e => setInputSalary(e.currentTarget.value)}
      />
    </td>
  );
};

const Status = props => {
  const { element } = props;
  return (
    <td className="text-center">
      <div className="flex justify-center items-center">
        <div className="flex justfiy-center flex-row text-center items-center">
          <div
            className="hover-t w-2 h-2 x rounded-full flex text-center px-1 sD:text-12 mD:text-16 lD:text-16 rounded-full"
            style={{
              backgroundColor:
                element["status"][0] === "n" || element["status"][0] === "N"
                  ? "rgb(245, 60, 86)"
                  : "#2DCE98"
            }}
          ></div>
          <span className=" text-center px-2 sD:text-12 mD:text-16 lD:text-16">
            {element["status"]}
          </span>
        </div>
      </div>
    </td>
  );
};

const StatusDropdown = props => {
  const { element } = props;
  const [status, setStatus] = useState(element["status"]);
  const [isDropdown, setIsDropdown] = useState(false);
  const handleStatusChange = () => {
    setIsDropdown(prevState => !prevState);
  };
  const handleStatusEvent = e => {
    let key = e.currentTarget.attributes["data-id"].nodeValue;
    axios.put("http://localhost:3000/employees/" + key, {
      id: key,
      name: element.name,
      paying_day: element.paying_day,
      status: e.currentTarget.attributes["data-status"].nodeValue,
      salary: element.salary,
      departement: element.departement
    });
    setStatus(e.currentTarget.attributes["data-status"].nodeValue);
    setIsDropdown(prevState => !prevState);
  };
  return (
    <td key={element["id"]} className="odd relative py-2 px-2">
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
    </td>
  );
};

const FinanceTable = () => {
  const [data, setData] = useState([]);
  const [rowNumberMin, setRowNumberMin] = useState(0);
  const [rowNumberMax, setRowNumberMax] = useState(5);
  const [isMax, setIsMax] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isMin, setIsMin] = useState(true);
  const [maxLength, setMaxLength] = useState(null);

  useEffect(() => {
    if (!rowNumberMin) {
      setRowNumberMin(0);
    }
    axios
      .get("http://localhost:3000/employees")
      .then(res => {
        if (!maxLength) setMaxLength(res.data.length);
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
          setData(res.data.slice(rowNumberMin, rowNumberMax));
        }
      })
      .catch(err => {
        alert("error fetching data");
      });
  }, [rowNumberMin, rowNumberMax]);

  const handleRowChange = e => {
    if (e.currentTarget.attributes["data-go"].nodeValue === "true") {
      if (rowNumberMax < maxLength) {
        setRowNumberMin(rowNumberMax);
        setRowNumberMax(prevState => prevState + 5);
      }
    } else {
      if (rowNumberMin > 0) {
        setRowNumberMax(rowNumberMin);
        setRowNumberMin(prevState => prevState - 5);
      }
    }
  };
  const handleUpdate = e => {
    setIsUpdate(prevState => !prevState);
    if (e.currentTarget.attributes["data-done"].nodeValue === "true") {
      setRowNumberMin(null);
    }
  };
  return (
    <>
      <div className="flex items-center h-16 border-none py-2 bg-white card px-6">
        <div className="flex items-center whitespace-no-wrap text-21">
          Employee payment status
        </div>
        <div className="flex ml-auto justify-between items-center">
          <div className="flex mr-6">
            <ArrowLeft
              data-go={false}
              className={
                isMin
                  ? "cursor-pointer bg-arrow w-8 h-8 px-1"
                  : "cursor-pointer  w-8 h-8 px-1"
              }
              onClick={handleRowChange}
            />
            <ArrowRight
              onClick={handleRowChange}
              data-go={true}
              className={
                isMax
                  ? "cursor-pointer bg-arrow w-8 h-8 px-1"
                  : "cursor-pointer  w-8 h-8 px-1"
              }
            />
          </div>
          <p
            className={
              isUpdate
                ? "agency_choice_time_btn text-18 py-2 shadow-lg border-none cursor-pointer hover-title dif"
                : "agency_choice_time_btn text-18 py-2 shadow-lg border-none cursor-pointer hover-title dif"
            }
            onClick={handleUpdate}
            data-done={isUpdate}
          >
            {isUpdate ? "Done" : "Update"}
          </p>
        </div>
      </div>
      <div
        id="example_wrapper"
        className="dataTables_wrapper dt-bootstrap4 bg-white"
      >
        <div className="flex">
          <div className="w-full px-2">
            <table
              style={{ width: "100%" }}
              id="example"
              className="table table-hover table-striped table-bordered dataTable dtr-inline"
              role="grid"
              aria-describedby="example_info"
            >
              <thead>
                <tr role="row">
                  <th
                    className="sorting justify-center items-center whitespace-no-wrap"
                    tabIndex="0"
                    aria-controls="example"
                    rowSpan="1"
                    colSpan="1"
                    style={{ width: "388.2px" }}
                  >
                    <span className=" xsD:text-9 sD:text-13 mD:text-15 lD:text-18 text-gray-800">
                      Employee
                    </span>
                  </th>
                  <th
                    className="sorting justify-center items-center whitespace-no-wrap"
                    tabIndex="0"
                    aria-controls="example"
                    rowSpan="1"
                    colSpan="1"
                    style={{ width: "100px" }}
                  >
                    <span className="xsD:text-9 sD:text-13 mD:text-15 lD:text-18 text-gray-800">
                      Paying day
                    </span>
                  </th>
                  <th
                    className="sorting justify-center items-center whitespace-no-wrap"
                    tabIndex="0"
                    aria-controls="example"
                    rowSpan="1"
                    colSpan="1"
                    style={{ width: "100px" }}
                  >
                    <span className="xsD:text-9 sD:text-13 mD:text-15 lD:text-18 text-gray-800">
                      Status
                    </span>
                  </th>
                  <th
                    className="sorting justify-center items-center whitespace-no-wrap"
                    tabIndex="0"
                    aria-controls="example"
                    rowSpan="1"
                    colSpan="1"
                    style={{ width: "50px" }}
                  >
                    <span className="xsD:text-9 sD:text-13 mD:text-15 lD:text-18 text-gray-800">
                      Salary
                    </span>
                  </th>
                  <th
                    className="sorting justify-center items-center whitespace-no-wrap"
                    tabIndex="0"
                    aria-controls="example"
                    rowSpan="1"
                    colSpan="1"
                    style={{ width: "50px" }}
                  >
                    <span className="xsD:text-9 sD:text-13 mD:text-15 lD:text-18 text-gray-800">
                      Departement
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map(element => (
                  <tr key={element["id"]} role="row" className="odd">
                    <td tabIndex="0" className="sorting_1">
                      <div className="justify-center items-center flex">
                        <div className="flex p-0 responsive-rate flex-row lg:justify-center items-center sm:flex sm:justify-end sm:flex sm:justify-end">
                          <img src={Img} alt="img" width="40" />
                          <p className="text-center px-2 sD:text-12 mD:text-16 lD:text-16 px-2">
                            {element["name"]}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <span className="text-center px-2 sD:text-12 mD:text-16 lD:text-16">
                        {element["paying_day"]}
                      </span>
                    </td>
                    {isUpdate ? (
                      <StatusDropdown key={element.id} element={element} />
                    ) : (
                      <Status key={element.id} element={element} />
                    )}
                    {!isUpdate ? (
                      <td className="text-center">
                        <span className="text-center px-2 sD:text-12 mD:text-16 lD:text-16">
                          ${element["salary"]}
                        </span>
                      </td>
                    ) : (
                      <InputSalary element={element} />
                    )}

                    <td className="text-center">
                      <span className="text-center px-2 sD:text-12 mD:text-16 lD:text-16">
                        {element["departement"]}
                      </span>
                    </td>
                    <td className="text-center ">
                      <div className="flex justify-center items-center">
                        <Dots
                          className="px-2 text-center px-2 sD:text-12 mD:text-16 lD:text-16 w-10 h-10 responsive-icons rot"
                          fill="#707070"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinanceTable;
