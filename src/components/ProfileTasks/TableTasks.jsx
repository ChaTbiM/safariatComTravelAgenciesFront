import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import RowTasks from "./RowTasks.jsx";

const TableTasks = (props) => {
  const {} = props;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/tasksProfileNew")
      .then((res) => setData(res.data));
  }, []);
  return (
    <Container>
      <div
        id="example_wrapper"
        className="dataTables_wrapper dt-bootstrap4 bg-white "
      >
        <div className="flex">
          <div className="w-full px-2">
            <table
              style={{ width: "100%" }}
              id="example"
              className="table card table-hover table-striped table-bordered dataTable dtr-inline"
              role="grid"
              aria-describedby="example_info"
            >
              <thead>
                <tr role="row">
                  <th
                    style={{
                      borderTopLeftRadius: "5px",
                    }}
                    className="sorting justify-center items-center whitespace-no-wrap"
                    tabIndex="0"
                    aria-controls="example"
                    rowSpan="1"
                    colSpan="1"
                  >
                    <span className=" xsD:text-9 sD:text-13 mD:text-15 lD:text-18 text-gray-800">
                      Task
                    </span>
                  </th>
                  <th
                    className="sorting justify-center items-center whitespace-no-wrap"
                    tabIndex="0"
                    aria-controls="example"
                    rowSpan="1"
                    colSpan="1"
                  >
                    <span className="xsD:text-9 sD:text-13 mD:text-15 lD:text-18 text-gray-800">
                      Task Type
                    </span>
                  </th>
                  <th
                    className="sorting justify-center items-center whitespace-no-wrap"
                    tabIndex="0"
                    aria-controls="example"
                    rowSpan="1"
                    colSpan="1"
                  >
                    <span className="xsD:text-9 sD:text-13 mD:text-15 lD:text-18 text-gray-800">
                      Date
                    </span>
                  </th>
                  <th
                    className="sorting justify-center items-center whitespace-no-wrap"
                    tabIndex="0"
                    aria-controls="example"
                    rowSpan="1"
                    colSpan="1"
                  >
                    <span className="xsD:text-9 sD:text-13 mD:text-15 lD:text-18 text-gray-800">
                      Supervisor
                    </span>
                  </th>
                  <th
                    className="sorting justify-center items-center whitespace-no-wrap"
                    tabIndex="0"
                    aria-controls="example"
                    rowSpan="1"
                    colSpan="1"
                  >
                    <span className="xsD:text-9 sD:text-13 mD:text-15 lD:text-18 text-gray-800">
                      Progress
                    </span>
                  </th>
                  <th
                    style={{
                      borderTopRightRadius: "5px",
                    }}
                    className="sorting justify-center items-center whitespace-no-wrap"
                    tabIndex="0"
                    aria-controls="example"
                    rowSpan="1"
                    colSpan="1"
                  ></th>
                </tr>
              </thead>
              <tbody>
                {data.map((elm) => (
                  <RowTasks data={elm} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default TableTasks;
const Container = styled.div`
  tbody {
    display: block;
    height: 540px;
    overflow-x: hidden;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none;
    overflow: auto;
  }
  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  span {
    font-size: 14px !important;
    color: white !important;
    font-weight: normal !important;
  }
  th {
    border: none !important;
    padding: 7px !important;
    background-color: #084c61;
    text-align: left !important;
    padding: 0.75rem 1.25rem !important;
  }
  .table {
    margin: 0 !important;
    border: none !important;
  }
  td {
    border: none !important;
  }
  tr:nth-child(even) {
    background: #eaf4f8 !important;
  }
  tr:nth-child(odd) {
    background: white !important;
  }
  p {
    font-size: 14px;
  }
  .agencx {
    padding: 0.35rem 0 !important;
  }

  @media (max-width: 1250px) {
    .agencx td {
      padding: 0.75rem 1.25rem !important;
    }
  }
`;
