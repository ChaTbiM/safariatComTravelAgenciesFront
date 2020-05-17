import React from "react";
import styled from "styled-components";
import Search from "./Search";
import PriceRange from "./PriceRange";
import search from "../../../assets/search.svg";

export default function BottomRow(props) {
  const renderSearch = () => {
    if (props.view === "tours") {
      return (
        <label className=" left searchLabel" htmlFor="search">
          <img src={search} className="search__icon " alt="" />
          <input
            className="search font-montserrat text-9 sD:text-11 mD:text-13 lD:text-18"
            onChange={e => props.searchByName(e.target.value)}
            type="search"
            name="search"
            id="search"
            placeholder={`search ${props.view}`}
          />
        </label>
      );
    } else if (props.view === "products") {
      return (
        <label className=" left searchLabel" htmlFor="search">
          <img src={search} className="search__icon " alt="" />
          <input
            className="search font-montserrat text-9 sD:text-11 mD:text-13 lD:text-18"
            onChange={e => props.searchByName(e.target.value)}
            type="search"
            name="search"
            id="search"
            placeholder={`search ${props.view}`}
          />
        </label>
      );
    } else if (props.view === "bookings") {
      return <div>bottom bookings</div>;
    } else {
      return null;
    }
  };

  const renderPriceRange = () => {
    if (props.view === "tours") {
      return (
        <PriceRange
          searchByPriceRange={priceRangeFilter =>
            props.searchByPriceRange(priceRangeFilter)
          }
        />
      );
    } else if (props.view === "products") {
      return (
        <PriceRange
          searchByPriceRange={priceRangeFilter =>
            props.searchByPriceRange(priceRangeFilter)
          }
        />
      );
    } else if (props.view === "bookings") {
      return <div>bookigns price range</div>;
    } else {
      return null;
    }
  };
  return (
    <Container>
      {renderSearch()}
      {renderPriceRange()}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 1rem;

  .searchLabel {
    display: flex;
    align-item: center;
    justify-content: space-between;
    flex-shrink: 1;
    padding-left: 1rem;
    background-color: #eee;
    margin-right: 1rem;
    max-width: 230px;
    border-radius: 4px;
  }

  .search {
    padding: 0.7em 2.8em 0.7em 2em;
    color: #7d7d7d;
    background-color: transparent;
    outline: none;
  }

  .search__icon {
    display: inline-block;
    width: 1em;
  }

  @media only screen and (min-width: 1300px) {
    .search__icon {
      width: 1.5em;
    }
  }
`;
