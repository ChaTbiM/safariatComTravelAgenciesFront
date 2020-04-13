import React, { Component } from "react";
import styled from "styled-components";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";

export default function TableHeader(props) {
  // render() {
  const selectData = {
    months: props.filtersData.months,
    types: props.filtersData.types,
    destinations: props.filtersData.destinations
  };
  return (
    <Container>
      <TopRow
        selectMonth={selectedMonth => props.selectMonth(selectedMonth)}
        selectDestination={selectedDestination =>
          props.selectDestination(selectedDestination)
        }
        selectType={selectedType => props.selectType(selectedType)}
        selectData={selectData}
      />
      <BottomRow
        searchByName={searchedTourName => props.searchByName(searchedTourName)}
        searchByPriceRange={priceRangeFilter =>
          props.searchByPriceRange(priceRangeFilter)
        }
        view={props.view}
        priceRanges={props.priceRanges}
      />
    </Container>
  );
  // }
}

const Container = styled.div``;
