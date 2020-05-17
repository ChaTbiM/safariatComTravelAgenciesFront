import React, { Component } from "react";

import { tours, toursDetails } from "./data";
import styled from "styled-components";
import Modal from "../Modal/Modal";
import TPBTable from "../TPBTable/TPBTable";
import TableHeader from "../TPBTable/components/TableHeader";

export default class ToursManagement extends Component {
  state = {
    isToursView: true,

    isTourDetailsShown: false,

    tours: null,
    initialTours: null,
    filteredTours: null,

    selectedMonth: "all",
    selectedDestination: "all",
    selectedType: "all",
    searchedTourName: "",
    priceRangeFilter: {
      min: null,
      max: null
    },

    toursDetails: null,
    tourDetails: null
  };

  componentDidMount() {
    this.setState({ initialTours: tours, toursDetails });
  }
  // Modal
  showTourModal = tourId => {
    const tours = this.state.filteredTours
      ? this.state.filteredTours
      : this.state.initialTours;
    const toursDetails = this.state.toursDetails;

    let tour = tours.find(el => Number(el.id) === Number(tourId));
    let details = toursDetails.find(el => Number(el.id) === Number(tourId));

    tour = JSON.parse(JSON.stringify(tour));
    details = JSON.parse(JSON.stringify(details));

    const tourDetails = { ...tour, ...details };
    console.log("tourDetials : ", tourDetails);
    this.setState({ tourDetails, isTourDetailsShown: true });
  };

  hideTourModal = () => {
    this.setState({ tourDetails: null, isTourDetailsShown: false });
  };

  renderModal = () => {
    const tourDetails = this.state.tourDetails;
    const isTourDetailsShown = this.state.isTourDetailsShown;

    if (isTourDetailsShown) {
      return (
        <Modal
          closeModal={this.hideTourModal}
          tourDetails={tourDetails}
          modal="tour"
        ></Modal>
      );
    } else {
      return null;
    }
  };

  // Table ---------------------------------
  // table filter logic
  renderTable() {
    const tours = this.state.filteredTours
      ? this.state.filteredTours
      : this.state.initialTours;
    if (tours) {
      return (
        <TPBTable
          showTourDetails={details => this.showTourModal(details)}
          tours={tours}
        />
      );
    } else {
      return null;
    }
  }

  //  table header ---
  // data
  filtersData() {
    if (this.state.initialTours) {
      const months = this.state.initialTours.map(el =>
        Number(el.date.split("/")[1])
      );
      months.sort((x, y) => x - y);
      const destinations = this.state.initialTours.map(el => el.destination);
      destinations.sort();
      const types = this.state.initialTours.map(el => el.type);
      types.sort();
      const priceRanges = this.state.initialTours.map(el => ({
        min: el.price.split("-")[0],
        max: el.price.split("-")[1]
      }));
      return { months, destinations, types, priceRanges };
    }
  }
  // component
  renderTableHeader() {
    if (this.state.initialTours) {
      return (
        <TableHeader
          selectMonth={selectedMonth => this.selectMonth(selectedMonth)}
          selectDestination={selectedDestination =>
            this.selectDestination(selectedDestination)
          }
          selectType={selectedType => this.selectType(selectedType)}
          filtersData={this.filtersData()}
          searchByName={searchedTourName => this.searchByName(searchedTourName)}
          searchByPriceRange={priceRangeFilter =>
            this.searchByPriceRange(priceRangeFilter)
          }
          view="tours"
        />
      );
    }
  }

  // Filtering logic

  ApplyfilterTours(
    searchedTourName = "",
    selectedMonth = "all",
    selectedDestination = "all",
    selectedType = "all",
    priceRangeFilter = { min: null, max: null }
  ) {
    let tours = JSON.parse(JSON.stringify(this.state.initialTours));
    let filteredTours;

    const selectedOptions = {};

    if (selectedMonth !== "all") {
      selectedOptions.month = selectedMonth;
    }

    if (selectedDestination !== "all") {
      selectedOptions.destination = selectedDestination;
    }

    if (selectedType !== "all") {
      selectedOptions.type = selectedType;
    }

    if (searchedTourName !== "") {
      selectedOptions.name = searchedTourName;
    }

    if (priceRangeFilter.min !== null && priceRangeFilter.min >= 0) {
      selectedOptions.minPrice = priceRangeFilter.min;
    }

    if (priceRangeFilter.max !== null) {
      selectedOptions.maxPrice = priceRangeFilter.max;
    }

    filteredTours = tours.filter((el, index) => {
      return this.filterTours(selectedOptions, el);
    });

    if (filteredTours) {
      this.setState({ filteredTours });
    }
  }
  filterTours = (selectedOptions, el) => {
    return Object.keys(selectedOptions).every(key => {
      if (key === "month") {
        return Number(el.date.split("/")[1]) == selectedOptions[key];
      } else if (key === "minPrice") {
        return Number(el.price.split("-")[0]) >= Number(selectedOptions[key]);
      } else if (key === "maxPrice") {
        return Number(el.price.split("-")[1]) <= Number(selectedOptions[key]);
      } else
        return el[key]
          .toLowerCase()
          .includes(selectedOptions[key].toLowerCase());
    });
  };

  selectMonth(selectedMonth) {
    this.setState(
      { selectedMonth },
      this.ApplyfilterTours(
        this.state.searchedTourName,
        selectedMonth,
        this.state.selectedDestination,
        this.state.selectedType
      )
    );
  }

  selectDestination(selectedDestination) {
    this.setState(
      { selectedDestination },
      this.ApplyfilterTours(
        this.state.searchedTourName,
        this.state.selectedMonth,
        selectedDestination,
        this.state.selectedType
      )
    );
  }

  selectType(selectedType) {
    this.setState(
      { selectedType },
      this.ApplyfilterTours(
        this.state.searchedTourName,
        this.state.selectedMonth,
        this.state.selectedDestination,
        selectedType
      )
    );
  }

  searchByName(searchedTourName) {
    this.setState(
      { searchedTourName },
      this.ApplyfilterTours(
        searchedTourName,
        this.state.selectedMonth,
        this.state.selectedDestination,
        this.state.selectedType
      )
    );
  }

  searchByPriceRange(priceRangeFilter) {
    this.setState(
      { priceRangeFilter },
      this.ApplyfilterTours(
        this.state.searchedTourName,
        this.state.selectedMonth,
        this.state.selectedDestination,
        this.state.selectedType,
        priceRangeFilter
      )
    );
  }

  render() {
    return (
      <Container>
        <div className="toursAndProducts__content">
          {this.renderTableHeader()}
          {this.renderTable()}
          {this.renderModal()}
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  .main {
    display: flex;
    background-color: #f6f6f6;
  }
`;
