import React, { useState, useEffect } from "react";
import "./BillingInvoiceOrder.css";
import HeaderPage from "../../components/HeaderPage/HeaderPage.jsx";
import Modal from "../ModalConfirmation/ModalConfirmation.jsx";
import BillingHeader from "../BillingHeader/BillingHeader.jsx";
import BillingContainer from "../BillingContainer/BillingContainer.jsx";
import BillingPreview from "../BillingPreview/BillingPreview.jsx";

const BillingInvoiceOrder = () => {
  const [dataDetails, setDataDetails] = useState(1);
  const [detailsType, setDetailsType] = useState([""]);
  const [detailsNumber, setDetailsNumber] = useState([""]);
  const [destination, setDestination] = useState("");
  const [TourId, setTourId] = useState("");
  const [TVA, setTVA] = useState("0.00");
  const [Price, setPrice] = useState("0.00");
  const [Qty, setQty] = useState("");
  const [BilledTo, setBilledTo] = useState("");
  const [InvoiceNumber, setInvoiceNumber] = useState("");

  const handleChangeInformations = e => {
    let type = e.currentTarget.attributes["id"].nodeValue;
    let value = e.currentTarget.value;
    switch (type) {
      case "destination":
        setDestination(value);
        break;
      case "tourid":
        setTourId(value);
        break;
      case "qty":
        setQty(value);
        break;
      case "billedto":
        setBilledTo(value);
        break;
      case "invoicenumber":
        setInvoiceNumber(value);
        break;
    }
  };
  const handleChangeInformationsTVA = (e, i) => {
    setTVA(i);
  };
  const handleChangeInformationsPrice = (e, i) => {
    setPrice(i);
  };

  const handleChangeDetailsNumber = e => {
    let key = e.currentTarget.attributes["data-key"].nodeValue;
    let value = e.currentTarget.value;
    let arr = [...detailsNumber];
    arr[key] = value;
    setDetailsNumber(arr);
  };
  const handleChangeDetails = e => {
    let key = e.currentTarget.attributes["data-key"].nodeValue;
    let value = e.currentTarget.value;
    let arr = [...detailsType];
    arr[key] = value;
    setDetailsType(arr);
  };
  const handleDetails = () => {
    let arr = detailsType;
    let arri = detailsNumber;
    arr.push("");
    arri.push("");
    setDataDetails(prevState => prevState + 1);
    setDetailsType(arr);
    setDetailsNumber(arri);
  };
  let array = [];
  for (let i = 0; i < dataDetails; i++) {
    array.push(1);
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  const handlePreview = () => {
    if (isNaN(Qty)) {
      // to be changed ..
      alert("Qty is not a number ..");
    } else setIsPreview(prevState => !prevState);
  };

  const toggleState = () => {
    if (isNaN(Qty)) {
      // to be changed ..
      alert("Qty is not a number ..");
    } else setIsModalOpen(prevState => !prevState);
  };
  return (
    <>
      <HeaderPage
        isBad
        title="Travel CRM"
        buttons={[
          {
            title: "Tours CRM",
            active: true,
            href: "/admin/crm"
          },
          {
            title: "Products CRM",
            active: false,
            href: "/admin/crm"
          }
        ]}
      />
      {/* hna nabdou dok f billing  */}
      <div className="p-4 pt-0 mx-12">
        <div className=" px-2 py-4 pt-0 flex flex-col justify-between items-start">
          <BillingHeader />
          {isPreview ? (
            <BillingPreview
              totalPrice={totalPrice}
              destination={destination}
              TVA={TVA}
              TourId={TourId}
              Price={Price}
              Qty={Qty}
              BilledTo={BilledTo}
              InvoiceNumber={InvoiceNumber}
              detailsType={detailsType}
              detailsNumber={detailsNumber}
            />
          ) : (
            <BillingContainer
              handleChangeInformationsPrice={handleChangeInformationsPrice}
              handleChangeInformationsTVA={handleChangeInformationsTVA}
              totalPrice={totalPrice}
              destination={destination}
              TVA={TVA}
              TourId={TourId}
              Price={Price}
              Qty={Qty}
              BilledTo={BilledTo}
              InvoiceNumber={InvoiceNumber}
              detailsType={detailsType}
              detailsNumber={detailsNumber}
              array={array}
              handleChangeDetails={handleChangeDetails}
              handleChangeDetailsNumber={handleChangeDetailsNumber}
              handleChangeInformations={handleChangeInformations}
              handleDetails={handleDetails}
            />
          )}

          <div className="w-full justify-center shadow-lg bg-white py-12 flex">
            <span>
              Travel agency Signature :{" "}
              <span className="underline text-21">Signature CEO</span>
            </span>
          </div>
          <div className="w-full justify-center  flex py-6">
            <a
              href="/admin/crm"
              className="px-10 py-2 mx-4 shadow-md rounded-lg"
              style={{
                backgroundColor: "#2C2C2C",
                color: "white"
              }}
            >
              <i className="fas fa-long-arrow-alt-left fa-lg"></i>
            </a>
            <a
              onClick={handlePreview}
              href="#"
              className="px-10 py-2 bg-white mx-4 shadow-md rounded-lg"
            >
              <span>{isPreview ? "Edit" : "Preview"}</span>
            </a>
            <a
              href="#"
              className="px-10 py-2 bg-white mx-4 shadow-md rounded-lg"
            >
              <span>Print</span>
            </a>
            <p
              onClick={toggleState}
              className="px-10 py-2 bg-white mx-4 shadow-md rounded-lg cursor-pointer"
            >
              <span>Save</span>
              {isModalOpen && (
                <Modal id="modal" isOpen={isModalOpen} onClose={toggleState}>
                  <div className="flex justify-center items-center bg-red">
                    <a
                      href="#"
                      style={{
                        backgroundColor: "#00F318",
                        color: "white"
                      }}
                      className="px-10 py-2  mx-4 shadow-md rounded-lg"
                    >
                      <span>Confirmed</span>
                    </a>
                    <a
                      href="#"
                      style={{
                        backgroundColor: "#FFDD00",
                        color: "white"
                      }}
                      className="px-10 py-2 mx-4 shadow-md rounded-lg"
                    >
                      <span>In hold</span>
                    </a>
                  </div>
                </Modal>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingInvoiceOrder;
