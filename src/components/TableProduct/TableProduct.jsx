import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowDown } from "../../assets/down-arrow.svg";
import { ReactComponent as ArrowUp } from "../../assets/upArrow.svg";
import StarRatingComponent from "react-star-rating-component";
import Img from "../../assets/person.png";
import axios from "axios";
const TableProduct = () => {
  const [top_product_data, setProductData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then(res => {
        setProductData(res.data);
        setIsLoaded(true);
      })
      .catch(err => {
        setIsLoaded(false);
        alert("error on fetching the data");
      });
  }, []);

  return (
    <Container className="bg-white">
      <div className="px-3 bg-white agency_scroll">
        {isLoaded ? (
          <table className="w-full">
            <thead>
              <tr>
                <th className="agency_th">Product name</th>
                <th className="agency_th">Price</th>
                <th className="agency_th">Rate</th>
              </tr>
            </thead>
            <tbody>
              {top_product_data.map(product => {
                return (
                  <tr key={product["id"]} className="hover:bg-gray-100  ">
                    <td className="w-full flex justify-start items-center p-3 border border-b">
                      <div className="flex justify-center items-center text-center">
                        <img src={Img} alt="img" width="40" />
                        <p className="text-center px-2 agency_table_text">
                          {product["productName"]}
                        </p>
                      </div>
                    </td>
                    <td className=" p-3 border border-b flex justify-center items-center table-cell">
                      <p className="text-left agency_table_text">
                        {product["price"]}
                      </p>
                    </td>
                    <td className="w-auto p-3 border border-b flex justify-start items-center table-cell">
                      <div className="flex justify-start items-center">
                        <div className="agency_margin flex justify-center items-center">
                          <h1 className="agency_table_text">{product["up"]}</h1>
                          <ArrowUp
                            fill="#2edc5d"
                            className="agency_arrow ml-2"
                          />
                        </div>
                        <div className="agency_margin flex justify-center items-center">
                          <h1 className="agency_table_text">
                            {product["down"]}
                          </h1>
                          <ArrowDown
                            fill="#f53636"
                            className="agency_arrow ml-2"
                          />
                        </div>
                        <div className="agency_margin flex justify-center items-center">
                          <StarRatingComponent
                            name="rate1"
                            starCount={5}
                            value={product["rate"]}
                            className="agency_table_text"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="flex justify-center items-center">
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .agency_scroll {
    max-height: 330px;
    overflow: scroll;
    overflow-x: hidden;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none;
    overflow: -moz-scrollbars-none;
  }
  .agency_margin {
    margin: 0 1rem;
  }
  .agency_th {
    text-align: left;
    padding: 0.75rem;
    font-size: 18px;
    width: 2/5;
    background-color: #f5f5f5;
  }
  .agency_arrow {
    width: 16px;
    height: 16px;
  }
  .agency_tbody {
    height: 200px;
  }
  .agency_table_text {
    font-size: 16px;
  }
  @media (max-width: 1366px) {
    .agency_margin {
      margin: 0 !important;
    }
  }
`;
export default TableProduct;
