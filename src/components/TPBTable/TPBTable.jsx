import React from "react";
import styled from "styled-components";

export default function TPBTable(props) {
  const previewTour = e => {
    e.preventDefault();
    props.showTourDetails(e.currentTarget.dataset.id);
  };

  const previewProduct = e => {
    e.preventDefault();
    props.showProductDetails(e.currentTarget.dataset.id);
  };

  const toursTable = tours => {
    return (
      <table className="table font-montserrat">
        <thead className="thead">
          <tr className="tr text-11 sD:text-13 mD:text-15 lD:text-21">
            <th className="th tour">tour</th>
            <th className="th type">type</th>
            <th className="th destination">destination</th>
            <th className="th date">date</th>
            <th className="th price">price</th>
            <th className="th description">description</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {tours.map((el, index) => {
            return (
              <tr
                key={`row-${index}`}
                className="tr text-9 sD:text-11 mD:text-13 lD:text-18"
              >
                <td className="td ">{el.tour}</td>
                <td className="td ">{el.type}</td>
                <td className="td ">{el.destination}</td>
                <td className="td ">{el.date}</td>
                <td className="td ">{el.price}</td>
                <td className="td">
                  {el.description}
                  <div className="td__preview ">
                    <a
                      data-id={el.id}
                      onClick={previewTour}
                      className="td__preview__link text-8 sD:text-10 mD:text-12 lD:text-16"
                      href="#"
                    >
                      Preview
                    </a>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  const productsTable = products => {
    return (
      <table className="table font-montserrat">
        <thead className="thead">
          <tr className="tr text-11 sD:text-13 mD:text-15 lD:text-21">
            <th className="th tour">product</th>
            <th className="th type">type</th>
            <th className="th destination">type of service</th>
            <th className="th price">price</th>
            <th className="th description">description</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {products.map((el, index) => {
            return (
              <tr
                key={`row-${index}`}
                className="tr text-9 sD:text-11 mD:text-13 lD:text-18"
              >
                <td className="td ">{el.product}</td>
                <td className="td ">{el.type}</td>
                <td className="td ">{el.typeOfService}</td>
                <td className="td ">{el.price}</td>
                <td className="td ">
                  {el.description}
                  <div className="td__preview">
                    <a
                      data-id={el.id}
                      onClick={previewProduct}
                      className="td__preview__link text-8 sD:text-10 mD:text-12 lD:text-16"
                      href="#"
                    >
                      Preview
                    </a>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  return props.tours ? (
    <Container>{toursTable(props.tours)} </Container>
  ) : (
    <Container> {productsTable(props.products)}</Container>
  );
}

const Container = styled.div`
  width: 100%;
  .table {
    margin-top: 0.75rem;

    width: 100%;
    text-align: left;
  }

  .thead {
    text-align: left;
    color: #757575;
    vertical-align: middle;
  }

  .tr {
    border-bottom: solid 0.25px #707070;
  }

  .tr:last-child {
    border-bottom: none;
  }

  .th {
    color: #757575;
    padding: 1em 0.5em;
    background-color: #f5f5f5;
    font-weight: normal;
    // width: 20%;
    vertical-align: middle;
  }

  .td {
    padding: 1.3em 1em;
  }

  .td__preview {
    width: 100%;
    text-align: center;
  }

  .td__preview__link {
    color: #5782c2;
  }

  .tour,
  .type {
    width: 15%;
  }

  .destination,
  .price,
  .date {
    width: 12%;
  }

  // icons
  .message__icon {
    display: inline-block;
    width: 13px;
    margin-right: 5px;
    @media only screen and (min-width: 1200px) {
      width: 14px;
    }

    @media only screen and (min-width: 1440px) {
      width: 18px;
    }
  }

  .remove__icon {
    display: inline-block;
    width: 13px;

    @media only screen and (min-width: 1200px) {
      width: 14px;
    }
    @media only screen and (min-width: 1440px) {
      width: 18px;
    }
  }
`;
