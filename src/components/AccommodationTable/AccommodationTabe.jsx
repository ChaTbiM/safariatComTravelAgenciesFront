import React, { useState, useEffect } from "react";

import axios from "axios";
import { ReactComponent as ArrowLeft } from "../../assets/left-arrow.svg";
import { ReactComponent as ArrowRight } from "../../assets/right-arrow.svg";
import RowTable from "../RowTable/RowTable";

const AccommodationTable = () => {
  const [data, setData] = useState([]);
  const [rowNumberMin, setRowNumberMin] = useState(0);
  const [rowNumberMax, setRowNumberMax] = useState(5);
  const [isMax, setIsMax] = useState(false);
  const [isMin, setIsMin] = useState(true);
  const [maxLength, setMaxLength] = useState(null);

  useEffect(() => {
    if (!rowNumberMin) {
      setRowNumberMin(0);
    }
    axios
      .get("http://localhost:3000/employees")
      .then((res) => {
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
      .catch((err) => {
        alert("error fetching data");
      });
  }, [rowNumberMin, rowNumberMax]);

  const handleRowChange = (e) => {
    if (e.currentTarget.attributes["data-go"].nodeValue === "true") {
      if (rowNumberMax < maxLength) {
        setRowNumberMin(rowNumberMax);
        setRowNumberMax((prevState) => prevState + 5);
      }
    } else {
      if (rowNumberMin > 0) {
        setRowNumberMax(rowNumberMin);
        setRowNumberMin((prevState) => prevState - 5);
      }
    }
  };
  const sudo = () => {
    //get request new data

    axios
      .get("http://localhost:3000/employees")
      .then((res) => {
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
      .catch((err) => {
        alert("error fetching data");
      });
  };

  return (
    <>
      <div className="flex items-center h-16 border-none py-2 bg-white card px-6">
        <div className="flex items-center whitespace-no-wrap text-21">
          Transportation Costs
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
          <button
            className="px-6 py-2"
            style={{
              background: "white",
              borderRadius: "5px",
              border: "2px solid #FFCC4E",
              color: "#FFCC4E",
            }}
          >
            Add
          </button>
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
                      Tour
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
                      tour id
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
                      hotel
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
                      resarvation date
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
                      cost
                    </span>
                  </th>
                  <th
                    className="sorting justify-center items-center whitespace-no-wrap"
                    tabIndex="0"
                    aria-controls="example"
                    rowSpan="1"
                    colSpan="1"
                    style={{ width: "35px" }}
                  ></th>
                </tr>
              </thead>
              <tbody>
                {data.map((element) => (
                  <RowTable sudo={sudo} key={element.id} data={element} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccommodationTable;
