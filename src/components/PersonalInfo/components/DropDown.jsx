import React from "react";

const handleChangeInput = (e) => {
  props.filterOption(e.currentTarget.attributes["data-type"].nodeValue);
};
const DropDown = () => {
  <div className="select-box">
    <div>
      {" "}
      <div className="select-box__current" tabIndex="1">
        {props.data.map((elm) => (
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="0"
              value="1"
              name="Ben"
              data-type="name"
              onClick={handleChangeInput}
            />
            <p className="select-box__input-text">elm</p>
          </div>
        ))}
      </div>
      <img
        className="select-box__icon"
        src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
        alt="Arrow Icon"
        aria-hidden="true"
      />
    </div>
    <ul className="select-box__list">
      {props.labels.map((elm) => (
        <li>
          <label
            className="select-box__option"
            htmlFor="0"
            aria-hidden="aria-hidden"
          >
            elm
          </label>
        </li>
      ))}
    </ul>
  </div>;
};
