import React, { Component } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

import ToursManagement from "../../components/ToursManagement/ToursManagement";
import ProductsManagement from "../../components/ProductsManagement/ProductsManagement";
import BookingsManagement from "../../components/BookingsManagement/BookingsManagement";

export default class TPBManagement extends Component {
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
            <ToursManagement />
            <ProductsManagement />
            <BookingsManagement />
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
    // border-radius: 4px;
  }
`;
