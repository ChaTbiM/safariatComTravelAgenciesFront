import React, { useState } from "react";
import "./FilterDropdown.css";
const FilterDropdown = (props) => {
  const handleChangeInput = (e) => {
    props.filterOption(e.currentTarget.attributes["data-type"].nodeValue);
  };
  return (
    <div className="select-box">
      <div className="select-box__current" tabIndex="1">
        <div className="select-box__value">
          <input
            className="select-box__input"
            type="radio"
            id="0"
            value="1"
            name="Ben"
            data-type="name"
            defaultChecked={props.sortBy === "name" ? "checked" : ""}
            onClick={handleChangeInput}
          />
          <p className="select-box__input-text">By Name</p>
        </div>
        <div className="select-box__value">
          <input
            className="select-box__input"
            type="radio"
            id="1"
            value="2"
            name="Ben"
            data-type="date"
            defaultChecked={props.sortBy === "date" ? "checked" : ""}
            onClick={handleChangeInput}
          />
          <p className="select-box__input-text">By Date</p>
        </div>

        <div className="select-box__value">
          <input
            className="select-box__input"
            type="radio"
            id="3"
            value="4"
            data-type="destination"
            name="Ben"
            defaultChecked={props.sortBy === "destination" ? "checked" : ""}
            onClick={handleChangeInput}
          />
          <p className="select-box__input-text">By Destination</p>
        </div>

        <img
          className="select-box__icon"
          src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
          alt="Arrow Icon"
          aria-hidden="true"
        />
      </div>
      <ul className="select-box__list">
        <li>
          <label
            className="select-box__option"
            htmlFor="0"
            aria-hidden="aria-hidden"
          >
            By Name
          </label>
        </li>
        <li>
          <label
            className="select-box__option"
            htmlFor="1"
            aria-hidden="aria-hidden"
          >
            By Date
          </label>
        </li>

        <li>
          <label
            className="select-box__option"
            htmlFor="3"
            aria-hidden="aria-hidden"
          >
            By Destination
          </label>
        </li>
      </ul>
    </div>
  );
};
export default FilterDropdown;
