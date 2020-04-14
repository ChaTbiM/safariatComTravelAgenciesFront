import React, { Component } from "react";
import styled from "styled-components";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";

export default function TableHeader(props) {
  // render() {

  const renderTopRow = () => {
    if (props.view === "tours") {
      const selectData = {
        months: props.filtersData.months,
        tourTypes: props.filtersData.types,
        destinations: props.filtersData.destinations
      };
      return (
        <TopRow
          selectMonth={selectedMonth => props.selectMonth(selectedMonth)}
          selectDestination={selectedDestination =>
            props.selectDestination(selectedDestination)
          }
          selectType={selectedType => props.selectType(selectedType)}
          selectData={selectData}
          view={props.view}
        />
      );
    } else if (props.view === "products") {
      const selectData = {
        tourTypes: props.filtersData.tourTypes,
        serviceTypes: props.filtersData.serviceTypes
      };
      return (
        <TopRow
          selectTourType={selectedTourType =>
            props.selectTourType(selectedTourType)
          }
          selectServiceType={selectedServiceType =>
            props.selectServiceType(selectedServiceType)
          }
          selectData={selectData}
          view="products"
        />
      );
    } else if (props.view === "bookings") {
      return <TopRow view="bookings" />;
    }
  };

  const renderBottomRow = () => {
    if (props.view === "tours") {
      return (
        <BottomRow
          searchByName={searchedTourName =>
            props.searchByName(searchedTourName)
          }
          searchByPriceRange={priceRangeFilter =>
            props.searchByPriceRange(priceRangeFilter)
          }
          view={props.view}
          priceRanges={props.priceRanges}
        />
      );
    } else if (props.view === "products") {
      return (
        <BottomRow
          searchByPriceRange={priceRangeFilter =>
            props.searchByPriceRange(priceRangeFilter)
          }
          view="products"
        />
      );
    } else if (props.view === "bookings") {
      return <BottomRow view="bookings" />;
    }
  };

  return (
    <Container>
      {renderTopRow()}
      {renderBottomRow()}
    </Container>
  );
  // }
}

const Container = styled.div``;
