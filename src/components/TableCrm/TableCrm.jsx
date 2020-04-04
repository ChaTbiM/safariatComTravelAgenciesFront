import React, { useState, useEffect } from "react";
import FilterDropdown from "../FilterDropdown/FilterDropdown.jsx";
import StyledSearchBox from "../StyledSearchbox/StyledSearchBox.jsx";
import "./TableCrm.css";
import { ReactComponent as Info } from "../GeneralAnalyDashbord/images/information.svg";
import Edit from "../../assets/edit.png";
import Delete from "../../assets/delete.png";
import Axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TableCrm = props => {
  const [orderType, setOrderType] = useState("internal");
  const [dataTable, setDataTable] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [sortBySearch, setSortBySearch] = useState("");
  //const [sortedData, setSortedData] = useState([]);
  const handleChangeSearch = e => {
    setSortBySearch(e.currentTarget.value);
  };
  const compareDates = (d1, d2) => {
    var parts = d1.split("/");
    var d1 = Number(parts[2] + parts[1] + parts[0]);
    parts = d2.split("/");
    var d2 = Number(parts[2] + parts[1] + parts[0]);
    return d1 <= d2;
  };
  const sortignData = (type, data) => {
    let newData = Array();
    let isDate = false;
    newData.push(data[0]);
    if (type === "date") {
      isDate = true;
    }
    for (let i = 1; i < data.length; i++) {
      let bool = false;
      for (let j = 0; j <= i - 1; j++) {
        if (isDate) {
          if (compareDates(data[i][type], newData[j][type])) {
            newData.splice(j, 0, data[i]);
            bool = true;
            break;
          }
        }
        if (data[i][type] < newData[j][type]) {
          newData.splice(j, 0, data[i]);
          bool = true;
          break;
        }
      }
      if (bool == true) bool = false;
      else newData.push(data[i]);
    }
    return newData;
  };
  const sortingSearch = (name = "", data) => {
    let newData = Array();
    data.map(elm => {
      if (elm.name.includes(name)) {
        newData.push(elm);
      }
    });

    return newData;
  };
  useEffect(() => {
    let url;
    if (orderType === "internal") {
      url = "http://localhost:3000/internal_crm_orders";
    } else if (orderType === "external") {
      url = " http://localhost:3000/external_crm_orders";
    }
    if (url)
      Axios.get(url).then(res => {
        if (sortBySearch !== "") {
          setDataTable(sortingSearch(sortBySearch, res.data));
        } else {
          setDataTable(sortignData(sortBy, res.data));
        }
      });
  }, [orderType, sortBy, sortBySearch]);
  const handleFilterTable = e => {
    setSortBy(e);
  };
  const handleOrderType = () => {
    setOrderType(prevState => {
      if (prevState === "internal") {
        return "external";
      } else return "internal";
    });
  };
  const handleEvent = () => {
    console.log("handling");
  };
  return (
    <Container>
      <div className="agency_crm mx-16 px-4">
        <div className="flex justify-between bg-white items-center">
          <div className="flex justify-center items-center p-4">
            <span className="mx-2">
              {" "}
              <StyledSearchBox handleChangeSearch={handleChangeSearch} />
            </span>
            <span className="mx-2 pl-4">
              {" "}
              <FilterDropdown
                filterOption={handleFilterTable}
                sortBy={sortBy}
              />
            </span>
          </div>
          <div className="flex p-4">
            <span
              className={
                orderType === "external"
                  ? "mx-6 text-21 int-ext active cursor-pointer"
                  : "mx-6 text-21 int-ext cursor-pointer"
              }
              onClick={handleOrderType}
            >
              <p>External orders</p>
            </span>
            <span
              className={
                orderType === "internal"
                  ? "mx-6 text-21 int-ext active cursor-pointer"
                  : "mx-6 text-21 int-ext cursor-pointer"
              }
              onClick={handleOrderType}
            >
              <p>Internal orders</p>
            </span>
          </div>
          <div className="flex p-4 justify-between items-center">
            <Link to="/admin/billing" className="agency-btn-custom_v1">
              Add Billing order
            </Link>
            <span className="pl-4">
              <span
                className="hint--bottom text-center hint--medium"
                aria-label="this is a hint"
              >
                <button>
                  <Info fill="#b3b8bd" className="w-6 h-6" />
                </button>
              </span>
            </span>
          </div>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 mb-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg">
            <table className="min-w-full leading-normal">
              <thead className="agency_crm_thead">
                <tr className="agency_crm_tr">
                  <th className="px-5 py-3 agency_crm_thead text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Client name
                  </th>
                  <th className="px-5 py-3 agency_crm_thead text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Destination
                  </th>
                  <th className="px-5 py-3 agency_crm_thead text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Tour id
                  </th>
                  <th className="px-5 py-3 agency_crm_thead text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-8 py-3 agency_crm_thead  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Billing invoices
                  </th>
                  <th className="px-8 py-3 agency_crm_thead text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Confirmation
                  </th>
                  <th className="px-2 py-3 agency_crm_thead text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody>
                {dataTable.map(data => (
                  <tr key={data.id} className="agency_crm_tr">
                    <td className="px-5 py-5 text-left  text-sm">
                      <div className="flex items-center">
                        <p className="text-gray-900 font-bold whitespace-no-wrap text-18">
                          {data["name"]}
                        </p>
                      </div>
                    </td>
                    <td className="px-5 py-5  text-18">
                      <p className="text-gray-700 whitespace-no-wrap">
                        {data["destination"]}
                      </p>
                    </td>
                    <td className="px-5 py-5  text-18">
                      <p className="text-gray-700 whitespace-no-wrap">
                        {data["tour_id"]}
                      </p>
                    </td>
                    <td className="px-5 py-5 text-18">
                      <p className="text-gray-700 whitespace-no-wrap">
                        {data["date"]}
                      </p>
                    </td>
                    <td className="px-5 py-5 text-18 ">
                      <div className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          style={{
                            backgroundColor: !data["billing_invoices_created"]
                              ? "#084C61"
                              : "#FFFFFF",
                            color: !data["billing_invoices_created"]
                              ? ""
                              : "black"
                          }}
                          className={
                            data["billing_invoices_created"]
                              ? "agency-btn-custom shadowz cursor-pointer"
                              : "agency-btn-custom create cursor-pointer"
                          }
                        >
                          <span
                            className="relative text-16"
                            data-created={data["billing_invoices_created"]}
                          >
                            {data["billing_invoices_created"]
                              ? "Preview"
                              : "Create"}
                          </span>
                        </span>
                      </div>
                    </td>
                    <td className=" px-5 py-5  text-sm ">
                      <span className=" px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          style={{
                            backgroundColor: data["confirmation"]
                              ? "#00F318"
                              : "#FFDD00"
                          }}
                          className={
                            !data["confirmation"]
                              ? "agency-btn-custom hold cursor-pointer"
                              : "agency-btn-custom cursor-pointer"
                          }
                        >
                          <span
                            className="relative  text-16"
                            data-confirmation={data["confirmation"]}
                          >
                            {data["confirmation"] ? "Confirmed" : "In hold"}
                          </span>
                        </span>
                      </span>
                    </td>
                    <td className="px-5 py-5 text-18">
                      <p
                        className="cursor-pointer float-left px-2"
                        onClick={handleEvent}
                        id="edit"
                      >
                        <img src={Edit} alt="edit" className="w-6 h-6" />
                      </p>
                      <p
                        className="cursor-pointer float-right px-2"
                        onClick={handleEvent}
                        id="delete"
                      >
                        <img src={Delete} alt="edit" className="w-6 h-6" />
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default TableCrm;

const Container = styled.div`
  p,
  span,
  lebel,
  h1 {
    font-size: 16px !important;
  }
  a,
  th {
    font-size: 18px !important;
  }
`;
