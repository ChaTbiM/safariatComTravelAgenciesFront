import React, { Component } from "react";

import { tours, toursDetails } from "./data";
import styled from "styled-components";
import Modal from "../../components/Modal/Modal";
import TPBTable from "../../components/TPBTable/TPBTable";
// import TableActions from "../../components/HrTable/components/TableActions";
import TableHeader from "../../components/TPBTable/components/TableHeader";
import { Link } from "react-router-dom";

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
        />
      );
    }
  }

  // Filtering logic

  ApplyfilterTours(
    selectedMonth = "all",
    selectedDestination = "all",
    selectedType = "all"
  ) {
    let tours = JSON.parse(JSON.stringify(this.state.initialTours));
    let filteredTours;

    // const selectedMonth = this.state.selectedMonth;
    // const selectedDestination = this.state.selectedDestination;
    // const selectedType = this.state.selectedType;

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
        this.state.selectedMonth,
        selectedDestination,
        this.state.selectedType
      )
    );
  }

  selectType(selectedType) {
    console.log("what ??", selectedType);

    this.setState(
      { selectedType },
      this.ApplyfilterTours(
        this.state.selectedMonth,
        this.state.selectedDestination,
        selectedType
      )
    );
  }

  render() {
    return (
      <Container>
        {/* <HeaderAdmin /> */}

        <div className="main">
          <main className="toursAndProducts">
            <div className="toursAndProducts__top">
              <h3 className="toursAndProducts__top__title font-montserrat text-14 sD:text-17 mD:text-19 lD:text-28">
                Tours And Products Management
              </h3>
              <hr className="toursAndProducts__top__hr"></hr>
              <div className="toursAndProducts__top__buttons font-montserrat text-11 sD:text-13 mD:text-15 lD:text-21">
                <button
                  className="toursAndProducts__top__button toursViewBTN text-11 sD:text-13 mD:text-15 lD:text-21"
                  onClick={e => e.preventDefault}
                >
                  Tours Management
                </button>
                <button
                  className="toursAndProducts__top__button productsViewBTN"
                  onClick={e => e.preventDefault}
                >
                  <Link
                    to="/admin/pmanagement"
                    className="text-11 sD:text-13 mD:text-15 lD:text-21"
                  >
                    Products Management
                  </Link>
                </button>
              </div>
            </div>
            <div className="toursAndProducts__content">
              {this.renderTableHeader()}
              {this.renderTable()}
              {this.renderModal()}
            </div>
          </main>
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

  .toursAndProducts {
    width: 88%;
    // padding: 1rem 1.6rem;
    margin: 0 auto;
    // padding: 0 40px 0 120px;
  }

  .toursAndProducts__top {
    margin-top: 2rem;
    // padding: 0 1.6rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }

  .toursAndProducts__top__title {
    vertical-align: middle;
    color: #171717;
  }

  .toursAndProducts__top__hr {
    background: #707070;
    border: 0;
    color: #707070;
    height: 1px;
    flex-shrink: 1;
    flex-grow: 1;
    margin: 0 10px;
    flex-basis: auto;
    opacity: 0.5;
  }

  .toursAndProducts__top__button {
    display: inline-block;
    vertical-align: middle;
    border-radius: 4px;
    padding: 0.3em 0.7em;
  }

  .toursViewBTN {
    color: white;
    background-color: #ffcc4e;
    margin-right: 1em;
  }

  .productsViewBTN {
    color: #4d4d4d;
    background-color: white;
  }

  .toursAndProducts__content {
    background-color: #ffffff;
    padding: 1rem 1.6rem;
    margin-top: 2rem;
    border-radius: 4px;
  }
`;
