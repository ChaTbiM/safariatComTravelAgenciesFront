import React, { useState, useEffect } from "react";
import { ReactComponent as Dollar } from "./images/Group 17.svg";
import "./FinanceCard.css";
import Axios from "axios";
const FinanceCard = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let url;
    if (props.type === "product") {
      url = "http://localhost:3000/product_sale";
    } else if (props.type === "tour") {
      url = "  http://localhost:3000/tour_sale";
    }
    Axios.get(url)
      .then(res => setData(res.data))
      .catch(err => alert("error fetching data"));
  }, []);
  const { time, taux, number } = data;
  return (
    <div className="p-4 shadow-lg bg-white md-col2 mx-2 rounded-lg flex justify-between flex-row items-center">
      <div className="w-4/5 flex flex-col justify-between items-start">
        <div className="flex flex-col justify-between items-start">
          <span className="text-gray-900 text-md md-text leading-relaxed">
            {props.type} sales
          </span>
          <p className="leading-loose text-md ">{number}</p>
        </div>
        <div className="flex w-full flex-row justify-start md-col items-center">
          <span
            className={
              taux < 0
                ? "text-sm text-red-600 md-text"
                : "text-sm text-green-400 md-text"
            }
          >
            {taux > 0 ? `+${taux}` : taux}%
          </span>
          <span className="text-sm ml-4 whitespace-no-wrap md-text">
            Since last {time}
          </span>
        </div>
      </div>
      <div className="flex justify-end w-1/5">
        <span>
          <Dollar className="md-svg" />
        </span>
      </div>
    </div>
  );
};
export default FinanceCard;
