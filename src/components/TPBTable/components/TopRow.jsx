import React from "react";
import styled from "styled-components";
import info from "../../../assets/info.svg";
import SelectFilter from "./SelectFilter.jsx";

export default function TopRow(props) {
  const renderSelectFilters = () => {
    if (props.view === "tours") {
      return (
        <div className="selectContainer">
          <SelectFilter
            selectMonth={selectedMonth => props.selectMonth(selectedMonth)}
            months={props.selectData.months}
          />
          <SelectFilter
            selectDestination={selectedDestination =>
              props.selectDestination(selectedDestination)
            }
            destinations={props.selectData.destinations}
          />
          <SelectFilter
            selectType={selectedType => props.selectType(selectedType)}
            tourTypes={props.selectData.tourTypes}
          />
          <img src={info} className="info__icon" alt="" />
        </div>
      );
    } else if (props.view === "products") {
      return (
        <div className="selectContainer">
          <SelectFilter
            selectServiceType={selectedServiceType =>
              props.selectServiceType(selectedServiceType)
            }
            serviceTypes={props.selectData.serviceTypes}
          />
          <SelectFilter
            selectType={selectedTourType =>
              props.selectTourType(selectedTourType)
            }
            tourTypes={props.selectData.tourTypes}
          />
          <img src={info} className="info__icon" alt="" />
        </div>
      );
    } else if (props.view === "bookings") {
      return <h2>hohohoho</h2>;
    } else {
      return null;
    }
  };
  return (
    <Container>
      <h5>{props.view}</h5>
      {renderSelectFilters()}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .select {
    padding: 0.5em 2em 0.5em 2em;
    width: 13em;

    max-height: 38px;

    margin-right: 1.3rem;
    color: grey;
    border: solid 0.5px #707070;
    appearance: none;

    background-size: 10px;

    @media only screen and (min-width: 1200px) {
      background-size: 15px;
    }
  }

  .select {
    outline: none;
  }
  .select {
    border-radius: 4px;
  }

  .info__icon {
    display: inline-block;
    width: 1em;
    cursoir: pointer;
    // margin-left: 0.5rem;
  }
`;
