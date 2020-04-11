import React from "react";
import downArrow from "../../../assets/downArrow.svg";

export default function SelectFilter(props) {
  const selectImg = {
    backgroundImage: `url(${downArrow})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center right",
    backgroundPositionX: "calc(100% - 10px)"
  };
  // unique filters data
  let selectItem;

  if (props.months) {
    const uniqueMonthsSet = new Set(props.months);
    const uniqueMonths = [...uniqueMonthsSet];
    const selectMonths = (
      <select
        className="select text-9 sD:text-12 mD:text-14 lD:text-16"
        style={selectImg}
        name="month"
        id="month"
        onChange={e => props.selectMonth(e.target.value)}
        defaultValue="all"
      >
        <option value="all">all months</option>
        {uniqueMonths.map((el, i) => {
          return (
            <option key={`option${i}-el`} value={el}>
              {el}
            </option>
          );
        })}
      </select>
    );

    selectItem = selectMonths;
  } else if (props.destinations) {
    const uniqueDestinationsSet = new Set(props.destinations);
    const uniqueDestinations = [...uniqueDestinationsSet];

    const selectDestinations = (
      <select
        className="select text-9 sD:text-12 mD:text-14 lD:text-16"
        style={selectImg}
        name="month"
        id="month"
        defaultValue="all"
        onChange={e => props.selectDestination(e.target.value)}
      >
        <option value="all">all destinations</option>
        {uniqueDestinations.map((el, i) => {
          return (
            <option key={`option${i}-el`} value={el}>
              {el}
            </option>
          );
        })}
      </select>
    );
    selectItem = selectDestinations;
  } else if (props.types) {
    const uniqueTypesSet = new Set(props.types);
    const uniqueTypes = [...uniqueTypesSet];

    const selectTypes = (
      <select
        className="select text-9 sD:text-12 mD:text-14 lD:text-16"
        style={selectImg}
        name="month"
        id="month"
        defaultValue="all"
        onChange={e => props.selectType(e.target.value)}
      >
        <option value="all">all types</option>
        {uniqueTypes.map((el, i) => {
          return (
            <option key={`option${i}-el`} value={el}>
              {el}
            </option>
          );
        })}
      </select>
    );

    selectItem = selectTypes;
  } else return null;
  return <>{selectItem}</>;
}
