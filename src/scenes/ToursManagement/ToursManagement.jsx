import React, { Component } from "react";

import { tours, toursDetails } from "./data";
import styled from "styled-components";
import Modal from "../../components/Modal/Modal";
import TPTable from "../../components/TPTable/TPTable";
import TableActions from "../../components/HrTable/components/TableActions";
import { Link } from "react-router-dom";
export default class ToursManagement extends Component {
  state = {
    isToursView: true,

    toursTypes: ["type 1", "type 2", "marketing"],
    isTourDetailsShown: false,

    tours: null,
    toursDetails: null,
    tourDetails: null
  };

  componentDidMount() {
    this.setState({ tours, toursDetails });
  }

  showTourModal = tourId => {
    const tours = this.state.tours;
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

  renderTable() {
    const tours = this.state.tours ? this.state.tours : null;

    if (tours) {
      return (
        <TPTable
          showTourDetails={details => this.showTourModal(details)}
          tours={tours}
        >
          products DAta
        </TPTable>
      );
    } else {
      return null;
    }
  }

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

  renderTableActions() {
    const isToursView = this.state.isToursView;

    if (isToursView) {
      return (
        <TableActions
          search="search tours"
          view="tours"
          selectOptions={this.state.toursTypes}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <Container>
        {/* <HeaderAdmin /> */}

        <div className="main">
          {/* <div className="sidebar"><AsideAdmin /></div> */}
          {/* <AsideAdmin className="sidebar" /> */}

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
              {this.renderTableActions()}

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
