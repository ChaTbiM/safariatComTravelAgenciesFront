import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Info } from "../GeneralAnalyDashbord/images/information.svg";
import "./Finance.css";
import FinanceLineChart from "../Graphs/FinanceLineGraph.jsx";
import FinanceBarChart from "../Graphs/FinanceBarGraph.jsx";
import FinanceCard from "../FinanceCard/FinanceCard.jsx";
import FinanceDonut from "../Graphs/FinanceDonut.jsx";
//import Task from "../Task/Task.jsx";
import FinanceTable from "../FinanceTable/FinanceTable";
import TransportationTable from "../TransportationTable/TransportationTable.jsx";
import AccommondationTable from "../AccommodationTable/AccommodationTabe.jsx";
import CostsTable from "../CostsTable/CostsTable.jsx";
import HeaderPage from "../HeaderPage/HeaderPage";
import Axios from "axios";
const Finance = (
  {
    items = [
      {
        name: "Week",
        key: 21,
        scrollchor: "#about",
      },
      {
        name: "Month",
        key: 31,
        scrollchor: "#contact",
      },
    ],
    actions_data = [
      "#2DCE98",
      "#F53C56",
      "#11CDEF",
      "#FEB969",
      "#EF5B5B",
      "#175170",
      "#FAA154",
      "#21A0A0",
      "#946846",
      "#6D213C",
    ],
  },
  props
) => {
  const [activeLink, setActiveLink] = useState("Week");
  const [dataTasks, setDataTasks] = useState([]);
  const [dataActions, setAcionsData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3000/donut").then((res) => {
      setAcionsData(res.data.series);
    });
  }, []);

  useEffect(() => {}, []);
  const setActive = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="z-10 flex flex-col">
      <HeaderPage
        title="Finance"
        buttons={[
          {
            title: "Finance management",
            active: true,
            href: "/admin/finance",
          },
        ]}
      />
      <div className="flex">
        <div className="w-3/5 px-4">
          <div className="w-full flex card flex-col  h-full justify-between  bg-white ">
            <div className="flex items-center h-16 border-none py-2  px-6 bg-white">
              <div className="flex items-center whitespace-no-wrap text-21">
                Tour sales value
              </div>
              <div className="mx-4 flex ml-auto justify-center items-center">
                {items.map((elem) => {
                  let isActive = activeLink === elem.name;
                  let navClass = isActive
                    ? "agency_choice_time_btn active border-none cursor-pointer "
                    : " agency_choice_time_btn border-none cursor-pointer ";
                  return (
                    <Link
                      to="#"
                      name={elem["name"]}
                      className={navClass}
                      scrollchor={elem["scrollchor"]}
                      key={elem["key"]}
                      onClick={(props) =>
                        setActive(props.currentTarget.attributes[0].nodeValue)
                      }
                    >
                      {elem["name"]}
                    </Link>
                  );
                })}
              </div>

              <span
                className="hint--bottom text-center  hint--medium"
                aria-label="this is a hint"
              >
                <button className="btn-icon btn-icon-only btn btn-link">
                  <Info fill="#b3b8bd" className="w-4 h-4" />
                </button>
              </span>
            </div>
            <div className="flex justify-center items-center">
              <FinanceLineChart filter={activeLink} />
            </div>
          </div>
          {/* Product sales value */}
        </div>
        <div className="w-2/5">
          <div className="w-full flex card flex-col justify-center h-full bg-white ">
            <div className="flex items-center h-16 border-none py-2  px-6 bg-white">
              <div className="flex items-center whitespace-no-wrap text-21">
                Tour sales value
              </div>
              <span
                className="hint--bottom text-center ml-auto  hint--medium"
                aria-label="this is a hint"
              >
                <button className="btn-icon btn-icon-only btn btn-link">
                  <Info fill="#b3b8bd" className="w-4 h-4" />
                </button>
              </span>
            </div>
            <FinanceBarChart />
          </div>
          {/* Product sales value */}
        </div>
        <div className="fin-part1  px-2">
          <div className="flex ">
            <div className="w-1/2">
              <div className=" h-full card-hover cursor-pointer">
                <FinanceCard type="product" />
              </div>
            </div>
            <div className="w-1/2">
              <div className=" h-full card-hover cursor-pointer">
                <FinanceCard type="tour" />
              </div>
            </div>
          </div>
          <div className="flex card mt-4 mx-2">
            <div className="w-full">
              <div className="w-full card ">
                <div className="flex items-center h-16 border-none py-2  px-6 bg-white">
                  <div className="flex items-center whitespace-no-wrap text-21">
                    Budget manager
                  </div>
                  <div className="flex ml-auto justify-between items-center">
                    <p className="agency_choice_time_btn text-18 py-2 shadow-lg border-none cursor-pointer">
                      Change plan
                    </p>
                  </div>
                </div>
                <div className="px-5 bg-white flex justify-between flex-col">
                  <div className="flex justify-between items-center w-full">
                    <div className="w-1/2 chart-donut">
                      <FinanceDonut data={dataActions} />
                    </div>
                    <div className="w-1/2">
                      <div className="scroling-div">
                        {dataActions.map((action, i) => {
                          return (
                            <div
                              key={i}
                              className="py-2 flex flex-col justify-between items-center"
                            >
                              <div className="flex justify-center items-center my-2">
                                <div className="float-left flex justify-between items-center">
                                  <div
                                    className="mr-2 relative w-3 h-3 flex justify-center items-center text-center rounded-full"
                                    style={{
                                      backgroundColor: actions_data[i],
                                    }}
                                  >
                                    <div className="absolute w-1 h-1 rounded-full bg-white"></div>
                                  </div>
                                </div>
                                <span className="mr-4">Action {i}</span>

                                <div className="float-right ml-auto">
                                  <span className="text-sm text-gray-600">
                                    {action}$
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <div className="w-full border-none finance-part1">
            <div className="w-full h-full px-4 pr-0 my-4  ">
              <FinanceTable />
            </div>
            {/* tableau */}
          </div>
        </div>
        <div className="w-1/2 px-4">
          <div className="w-full border-none finance-part1">
            <div className="w-full h-full px-4 pr-0 my-4  ">
              <TransportationTable />
            </div>
            {/* tableau */}
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <div className="w-full border-none finance-part1">
            <div className="w-full h-full px-4 pr-0 my-4  ">
              <AccommondationTable />
            </div>
            {/* tableau */}
          </div>
        </div>
        <div className="w-1/2 px-4">
          <div className="w-full border-none finance-part1">
            <div className="w-full h-full px-4 pr-0 my-4  ">
              <CostsTable />
            </div>
            {/* tableau */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Finance;
