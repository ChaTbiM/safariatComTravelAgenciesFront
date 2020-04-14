import React, { Component } from "react";

import { products } from "./data";
import styled from "styled-components";
import Modal from "../../components/Modal/Modal";
import TPBTable from "../../components/TPBTable/TPBTable";

// import TableActions from "../../components/HrTable/components/TableActions";
import TableHeader from "../../components/TPBTable/components/TableHeader";

import { Link } from "react-router-dom";

export default class ToursAndProducts extends Component {
  state = {
    isProductsView: true,

    productsTypes: ["typpe 1", "typpe 2", "marketing"],
    isProductDetailsShown: false,

    initialProducts: null,
    filteredProducts: null,
    productDetails: null,

    selectedTourType: "all",
    selectedServiceType: "all",
    priceRangeFilter: { min: null, max: null }
  };

  componentDidMount() {
    this.setState({ initialProducts: products });
  }

  showProductModal = productId => {
    const products = this.state.initialProducts;
    const productDetails = products.find(
      el => Number(el.id) === Number(productId)
    );
    this.setState({ isProductDetailsShown: true, productDetails });
  };

  hideProductModal = () => {
    this.setState({ productDetails: null, isProductDetailsShown: false });
  };
  // Header

  // component

  filtersData() {
    if (this.state.initialProducts) {
      const tourTypes = this.state.initialProducts.map(el => el.type);
      tourTypes.sort();
      const serviceTypes = this.state.initialProducts.map(
        el => el.typeOfService
      );
      serviceTypes.sort();
      const priceRanges = this.state.initialProducts.map(el => ({
        min: el.price.split("-")[0],
        max: el.price.split("-")[1]
      }));
      return { serviceTypes, priceRanges, tourTypes };
    }
  }

  // filter Logic -----------------------
  ApplyfilterTours(
    selectedTourType = "all",
    selectedServiceType = "all",
    priceRangeFilter = { min: null, max: null }
  ) {
    let products = JSON.parse(JSON.stringify(this.state.initialProducts));
    let filteredProducts;

    const selectedOptions = {};

    if (selectedServiceType !== "all") {
      selectedOptions.serviceType = selectedServiceType;
    }

    if (selectedTourType !== "all") {
      selectedOptions.tourType = selectedTourType;
    }

    if (priceRangeFilter.min !== null && priceRangeFilter.min >= 0) {
      selectedOptions.minPrice = priceRangeFilter.min;
    }

    if (priceRangeFilter.max !== null) {
      selectedOptions.maxPrice = priceRangeFilter.max;
    }

    filteredProducts = products.filter((el, index) => {
      return this.filterTours(selectedOptions, el);
    });

    if (filteredProducts) {
      this.setState({ filteredProducts });
    }
  }

  filterTours = (selectedOptions, el) => {
    return Object.keys(selectedOptions).every(key => {
      if (key === "tourType") {
        return el.type
          .toLowerCase()
          .includes(selectedOptions[key].toLowerCase());
      } else if (key === "serviceType") {
        return el.typeOfService
          .toLowerCase()
          .includes(selectedOptions[key].toLowerCase());
      } else if (key === "minPrice") {
        return Number(el.price.split("-")[0]) >= Number(selectedOptions[key]);
      } else if (key === "maxPrice") {
        return Number(el.price.split("-")[1]) <= Number(selectedOptions[key]);
      }
    });
  };

  selectTourType(selectedTourType) {
    this.setState(
      { selectedTourType },
      this.ApplyfilterTours(
        selectedTourType,
        this.state.selectedServiceType,
        this.state.priceRangeFilter
      )
    );
  }

  selectServiceType(selectedServiceType) {
    this.setState(
      { selectedServiceType },
      this.ApplyfilterTours(
        this.state.selectedTourType,
        selectedServiceType,
        this.state.priceRangeFilter
      )
    );
  }

  searchByPriceRange(priceRangeFilter) {
    this.setState(
      { priceRangeFilter },
      this.ApplyfilterTours(
        this.state.selectedTourType,
        this.state.selectedServiceType,
        priceRangeFilter
      )
    );
  }

  // ----------------

  renderTableHeader() {
    console.log("filtersDate ", this.filtersData());
    if (this.state.initialProducts) {
      return (
        <TableHeader
          selectTourType={selectedTourType =>
            this.selectTourType(selectedTourType)
          }
          selectServiceType={selectServiceType =>
            this.selectServiceType(selectServiceType)
          }
          searchByPriceRange={priceRangeFilter =>
            this.searchByPriceRange(priceRangeFilter)
          }
          view="products"
          filtersData={this.filtersData()}
        />
      );
    }
  }

  renderTable() {
    const products = this.state.filteredProducts
      ? this.state.filteredProducts
      : this.state.initialProducts;

    if (products) {
      return (
        <TPBTable
          showProductDetails={details => this.showProductModal(details)}
          products={products}
        >
          products DAta
        </TPBTable>
      );
    } else {
      return null;
    }
  }

  renderModal = () => {
    const productDetails = this.state.productDetails;

    const isProductDetailsShown = this.state.isProductDetailsShown;

    if (isProductDetailsShown) {
      return (
        <Modal
          closeModal={this.hideProductModal}
          productDetails={productDetails}
          modal="product"
        ></Modal>
      );
    } else {
      return null;
    }
  };

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
