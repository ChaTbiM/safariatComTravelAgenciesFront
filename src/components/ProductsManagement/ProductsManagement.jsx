import React, { Component } from "react";

import { products } from "./data";
import styled from "styled-components";
import Modal from "../Modal/Modal";
import TPBTable from "../TPBTable/TPBTable";

// import TableActions from "../../components/HrTable/components/TableActions";
import TableHeader from "../TPBTable/components/TableHeader";


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
    searchedProduct: "",
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
    searchedProduct = "",
    selectedTourType = "all",
    selectedServiceType = "all",
    priceRangeFilter = { min: null, max: null }
  ) {
    let products = JSON.parse(JSON.stringify(this.state.initialProducts));
    let filteredProducts;

    const selectedOptions = {};

    if (searchedProduct !== "all") {
      selectedOptions.product = searchedProduct;
    }

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
      } else if (key === "product") {
        return el.product
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
        this.state.searchedProduct,
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
        this.state.searchedProduct,
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
        this.state.searchedProduct,
        this.state.selectedTourType,
        this.state.selectedServiceType,
        priceRangeFilter
      )
    );
  }

  searchByName(searchedProduct) {
    this.setState(
      { searchedProduct },
      this.ApplyfilterTours(
        searchedProduct,
        this.state.selectedTourType,
        this.state.selectedServiceType,
        this.state.priceRangeFilter
      )
    );
  }
  // ----------------

  renderTableHeader() {
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
          searchByName={searchedProduct => this.searchByName(searchedProduct)}
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
`;
