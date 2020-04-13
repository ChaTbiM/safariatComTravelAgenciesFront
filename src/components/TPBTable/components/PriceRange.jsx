import React, { useState } from "react";
import styled from "styled-components";

export default function PriceRange(props) {
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const filterPrice = (e, type = "") => {
    if (type === "minPrice") {
      setMinPrice(e.target.value);
      props.searchByPriceRange({ min: e.target.value, max: maxPrice });
    } else if (type === "maxPrice") {
      setMaxPrice(e.target.value);
      props.searchByPriceRange({ min: minPrice, max: e.target.value });
    }
  };
  return (
    <Container>
      <p className="priceRange text-9 sD:text-12 mD:text-14 lD:text-16">
        Price Range
      </p>
      <label
        className="minPriceLabel font-montserrat text-9 sD:text-12 mD:text-14 lD:text-16"
        htmlFor="minPrice"
      >
        <input
          onChange={e => filterPrice(e, "minPrice")}
          type="text"
          id="minPrice"
          className="minPrice__input"
          placeholder="From"
        />
      </label>
      <label
        className="maxPriceLabel font-montserrat text-9 sD:text-12 mD:text-14 lD:text-16"
        htmlFor="minPrice"
      >
        <input
          onChange={e => filterPrice(e, "maxPrice")}
          type="text"
          id="maxPrice"
          className="maxPrice__input"
          placeholder="To"
        />
      </label>
    </Container>
  );
}

const Container = styled.div`
  // flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;

  margin-right: 2.3rem;
  .priceRange,
  .minPriceLabel {
    margin-right: 1em;
  }

  .minPriceLabel,
  .maxPriceLabel {
    width: 98px;
  }

  .maxPrice__input,
  .minPrice__input {
    max-width: 98px;
    color: #7d7d7d;
    border: solid 1px #7d7d7d;
    border-radius: 4px;
    padding: 0.5em 0.25em 0.5em 0.5em;
  }
`;
