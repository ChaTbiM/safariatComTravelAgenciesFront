import React, { useState } from "react";
import Add from "../../assets/add.png";
import CurrencyInput from "react-currency-input";
const BillingContainer = props => {
  const {
    handleChangeDetails,
    handleChangeDetailsNumber,
    handleChangeInformations,
    handleDetails,
    array,
    destination,
    TVA,
    TourId,
    Price,
    Qty,
    detailsType,
    detailsNumber,
    BilledTo,
    InvoiceNumber,
    handleChangeInformationsTVA,
    handleChangeInformationsPrice
  } = props;
  return (
    <div className="bg-white w-full shadow-lg">
      <div className="px-10 py-6 flex agency_form_row">
        <div className="flex flex-col xchange">
          <ul className="flex flex-col justify-start">
            <li className="flex flex-col mx-2 my-4">
              <label htmlFor="destination" className="m-1">
                Destination
              </label>
              <input
                onChange={handleChangeInformations}
                value={destination}
                type="text"
                id="destination"
                className="px-6 py-2 rounded-lg agency_billing_input"
              />
            </li>
            <li className="flex flex justofy-between mx-2 my-4">
              <div className="flex flex-col w-full mr-4">
                <label htmlFor="tourid" className="m-1">
                  Tour id
                </label>
                <input
                  onChange={handleChangeInformations}
                  value={TourId}
                  type="text"
                  id="tourid"
                  className="px-6 py-2  rounded-lg agency_billing_input"
                />
              </div>
              <div className="flex flex-col w-full ml-4">
                <label htmlFor="qty" className="m-1">
                  Qty
                </label>
                <input
                  value={Qty}
                  onChange={handleChangeInformations}
                  type="text"
                  id="qty"
                  className="px-6 py-2  rounded-lg agency_billing_input"
                />
              </div>
            </li>
            <li className="flex flex justofy-between mx-2 my-4">
              <div className="flex flex-col w-full mr-4">
                <label htmlFor="price" className="m-1">
                  Price
                </label>
                <CurrencyInput
                  prefix="$"
                  decimalSeparator=","
                  id=""
                  thousandSeparator="."
                  value={Price}
                  className="px-6 py-2 rounded-lg agency_billing_input"
                  onChange={handleChangeInformationsPrice}
                />
              </div>
              <div className="flex flex-col w-full ml-4">
                <label htmlFor="tva" className="m-1">
                  TVA
                </label>
                <CurrencyInput
                  prefix="$"
                  decimalSeparator=","
                  id=""
                  thousandSeparator="."
                  value={TVA}
                  className="px-6 py-2 rounded-lg agency_billing_input"
                  onChange={handleChangeInformationsTVA}
                />
              </div>
            </li>
          </ul>
          <ul className="flex flex-col pad-change  my-8">
            <span
              style={{
                fontSize: "21px",
                margin: "10px 0"
              }}
            >
              Details
            </span>
            {array.map((e, index) => {
              return (
                <li key={index} className="flex justify-between my-2">
                  <input
                    value={detailsType[index]}
                    data-key={index}
                    onChange={handleChangeDetails}
                    type="text"
                    className="py-2 px-6 rounded-lg agency_billing_input d"
                  />
                  <input
                    data-key={index}
                    value={detailsNumber[index]}
                    onChange={handleChangeDetailsNumber}
                    type="text"
                    className="py-2 px-6 rounded-lg agency_billing_input d"
                  />
                </li>
              );
            })}
          </ul>
          <p
            className="bg-white mx-4 shadow-lg rounded-full w-10 h-10 p-2"
            role="button"
            onClick={handleDetails}
          >
            <img src={Add} alt="add" />
          </p>
        </div>
        <div className=" flex flex-col wchange">
          <div className="text-left w-full">
            <div className="flex flex-col">
              <p className="text-21">Total price :</p>
              <h1
                style={{
                  fontSize: "51px"
                }}
              >
                {Price + TVA}$
              </h1>
            </div>
            <ul className="flex flex-col">
              <li className="flex flex-col my-6">
                <label htmlFor="billed" className="m-1">
                  Billed to :
                </label>
                <input
                  value={BilledTo}
                  onChange={handleChangeInformations}
                  type="text"
                  id="billedto"
                  className="px-6 py-2 rounded-lg agency_billing_input"
                />
              </li>
              <li className="flex flex-col my-6">
                <label htmlFor="invoice" className="m-1">
                  Invoice number :
                </label>
                <input
                  value={InvoiceNumber}
                  onChange={handleChangeInformations}
                  type="text"
                  id="invoicenumber"
                  className="px-6 py-2 rounded-lg agency_billing_input"
                />
              </li>
            </ul>
            <div className="flex flex-col">
              <span>Date of depart :</span>
              <span>22 / 02 / 2020 , at 2 : 31 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BillingContainer;
