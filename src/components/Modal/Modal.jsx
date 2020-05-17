import React, { useState } from "react";
import styled from "styled-components";
import ProductsModal from "./components/ProductsModal";
import AddEmployeeModal from "./components/AddEmployeeModal";
import AddTaskModal from "./components/AddTaskModal";

import BigImg from "./images/01.png";
import SmallImg from "./images/02.png";

import productBig from "./images/productBig.png";
import dotImg from "../../assets/dot.png";
// import product from "./images/product.png";

export default function Modal(props) {
  const [fileName, setFileName] = useState("cv");
  const uploadCv = e => {
    console.log("upload : ");
  };

  const getFileName = function(e) {
    setFileName(e.currentTarget.files[0].name);
  };

  const renderTourDetails = tourDetails => {
    return (
      <div className="modal-main">
        <header className="header">
          <a onClick={props.closeModal} href="">
            <i className=" header__back fas fa-long-arrow-alt-left"></i>
          </a>
          <h4 className="header__title text-11 sD:text-13 mD:text-15 lD:text-21">
            Tour Preview
          </h4>
        </header>
        <div className="top">
          {/*  */}
          <div className="details__text">
            <div className="details__buttons">
              <button className="edit">edit</button>
              {/* <button className="delete">delete</button> */}
            </div>
            <div className="details__info">
              <div className="details__info__row">
                <p className="details__info__col ">Tour</p>
                <p className="details__info__col subText">{tourDetails.tour}</p>
              </div>
              <div className="details__info__row">
                <p className="details__info__col">Type</p>
                <p className="details__info__col subText">{tourDetails.type}</p>
              </div>
              <div className="details__info__row">
                <p className="details__info__col">destination</p>
                <p className="details__info__col subText">
                  {tourDetails.destination}
                </p>
              </div>
              <div className="details__info__row">
                <p className="details__info__col">date</p>
                <p className="details__info__col subText">{tourDetails.date}</p>
              </div>
              <div className="details__info__row">
                <p className="details__info__col">Price</p>
                <p className="details__info__col subText">
                  {tourDetails.price}
                </p>
              </div>
              <div className="details__info__row">
                <p className="details__info__col">Activity Level</p>
                <p className="details__info__col subText">
                  {tourDetails.activityLevel}
                </p>
              </div>
              <div className="details__info__row">
                <p className="details__info__col">Number of Groups</p>
                <p className="details__info__col subText">
                  {tourDetails.numberOfGroup}
                </p>
              </div>
              <div className="details__info__row">
                <p className="details__info__col">Number of Members</p>
                <p className="details__info__col">
                  {tourDetails.numberOfMembers}
                </p>
              </div>
              <div className="details__info__row">
                <p className="details__info__col">Description</p>
                <p className="details__info__col  subText">
                  {tourDetails.longDescription}
                </p>
              </div>
            </div>
          </div>

          <div className="details__images">
            <img src={BigImg} alt="" className="tourMainImage" />
            <div className="details__images__small">
              <img className="smallImage" src={SmallImg} alt="" />
              <img className="smallImage" src={SmallImg} alt="" />
              <img className="smallImage" src={SmallImg} alt="" />
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="bottom__package">
            <div className="bottom__package__includes">
              <p className="bottom__package__includes__title">
                <i class="far fa-check-circle checked"></i> Includes
              </p>
              {tourDetails.includes.map((el, index) => {
                return (
                  <li className="bottom__package__includes__text">{el}</li>
                );
              })}
            </div>
            <div className="bottom__package__excludes">
              <p className="bottom__package__excludes__title">
                <i class="far fa-times-circle unchecked"></i> Excludes
              </p>
              {tourDetails.excludes.map((el, index) => {
                return (
                  <li className="bottom__package__excludes__text">{el}</li>
                );
              })}
            </div>
          </div>
          <div className="bottom__extra">
            <div className="bottom__itinerary">
              <p className="bottom__itinerary__title">itinerary</p>
              <p className="bottom__itinerary__text">{tourDetails.itinerary}</p>
            </div>
            <div className="bottom__accomedation">
              <p className="bottom__accomedation__title">accomedation</p>
              <p className="bottom__accomedation__text">
                {tourDetails.accomedation}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderProductsDetails = productDetails => {
    return (
      <div className="modal-main">
        <header className="header">
          <a onClick={props.closeModal} href="">
            <i className=" header__back fas fa-long-arrow-alt-left"></i>
          </a>
          <h4 className="header__title text-11 sD:text-13 mD:text-15 lD:text-21">
            Product Preview
          </h4>
        </header>
        <div className="top">
          {/*  */}
          <div className="details__text">
            <div className="details__buttons">
              <button className="edit">edit</button>
              <button className="delete">delete</button>
            </div>
            <div className="details__info">
              <div className="details__info__row">
                <p className="details__info__col ">product</p>
                <p className="details__info__col subText">
                  {productDetails.product}
                </p>
              </div>
              <div className="details__info__row">
                <p className="details__info__col">Type</p>
                <p className="details__info__col subText">
                  {productDetails.type}
                </p>
              </div>

              <div className="details__info__row">
                <p className="details__info__col">Price</p>
                <p className="details__info__col subText">
                  {productDetails.price}
                </p>
              </div>
              <div className="details__info__row">
                <p className="details__info__col">description</p>
                <p className="details__info__col subText">
                  {productDetails.description}
                </p>
              </div>
            </div>
          </div>

          <div className="details__images">
            <img src={productBig} alt="" className="productImage" />
          </div>
        </div>
      </div>
    );
  };

  const renderAddEmployee = () => {
    return (
      <div className="modal-main">
        <header className="header">
          <a onClick={props.closeModal} href="">
            <i className=" header__back fas fa-long-arrow-alt-left"></i>
          </a>
          <h4 className="header__title text-11 sD:text-13 mD:text-15 lD:text-21 ">
            Add Employee
          </h4>
        </header>
        <form className="form font-montserrat text-9 sD:text-11 mD:text-13 lD:text-18">
          <input
            className="form__label__input"
            id="fullName"
            type="text"
            placeholder="full name"
          />
          <input
            className="form__label__input"
            id="birthDay"
            type="text"
            placeholder="birth day"
          />
          <input
            className="form__label__input"
            id="phoneNumber"
            type="text"
            placeholder="phone number"
          />
          <input
            className="form__label__input"
            id="address"
            type="text"
            placeholder="address"
          />
          <input
            className="form__label__input"
            id="email"
            type="email"
            placeholder="email"
          />
          <input
            className="form__label__input"
            id="nationalIdCard"
            type="text"
            placeholder="National Id Card"
          />

          <select className="form__select status" defaultValue="single">
            <option className="form__select__option" value="single">
              single
            </option>
            <option className="form__select__option" value="married">
              married
            </option>
          </select>

          <input
            className="form__label__input jobTitle"
            id="jobTitle"
            type="text"
            placeholder="job title"
          />

          <div className="departmentAndCv ">
            <select
              name="department"
              id="department"
              className="department__input"
            >
              <option value="department1">department1</option>
              <option value="department1">department1</option>
              <option value="department1">department1</option>
            </select>

            {/* <input
              className="department__input"
              id="department"
              type="text"
              placeholder="department"
            /> */}
            <div className="fileContainer">
              <input
                className="selectedFile"
                id="Cv"
                type="file"
                onChange={getFileName}
                placeholder="cv"
              />
              <input type="text" className="inputFile" placeholder={fileName} />
              <span onClick={uploadCv} className="upload">
                upload
              </span>
            </div>
          </div>

          <input
            className="form__label__input"
            id="hireDate"
            type="text"
            placeholder="hire Date"
          />
          <input
            className="form__label__input"
            id="employeeId"
            type="text"
            placeholder="Employee Id"
          />
          <input
            className="form__label__input"
            id="salary"
            type="text"
            placeholder="Salary"
          />

          <input
            type="submit"
            value="add employee"
            className="add add__employee text-11 sD:text-13 mD:text-15 lD:text-21"
          />
        </form>
      </div>
    );
  };

  const renderAddTask = () => {
    return (
      <div className="modal-main">
        <header className="header">
          <a onClick={props.closeModal} href="">
            <i className=" header__back fas fa-long-arrow-alt-left"></i>
          </a>
          <h4 className="header__title text-11 sD:text-13 mD:text-15 lD:text-21">
            Add Task
          </h4>
        </header>
        <form className="form font-montserrat text-9 sD:text-11 mD:text-13 lD:text-18">
          <input
            className="form__label__input"
            id="fullName"
            type="text"
            placeholder="Task Name"
          />

          <select className="form__select" defaultValue="type1">
            <option className="form__select__option" value="type1">
              type1
            </option>
            <option className="form__select__option" value="type2">
              type2
            </option>
          </select>

          <select className="form__select" defaultValue="single">
            <option className="form__select__option" value="name1">
              name 1
            </option>
            <option className="form__select__option" value="name2">
              name 2
            </option>
          </select>

          <input
            className="form__label__input"
            id="deliveryDate"
            type="text"
            placeholder="delivery date"
          />

          <textarea
            name="description"
            id="description"
            placeholder="Description.."
            className="form__label__input text"
          ></textarea>

          <input
            type="submit"
            value="add task"
            className="add add__task text-11 sD:text-13 mD:text-15 lD:text-21"
          />
        </form>
      </div>
    );
  };

  const renderOneModal = () => {
    if (props.modal === "tour") {
      return (
        <ProductsModal dotImg={dotImg} className="modal">
          {renderTourDetails(props.tourDetails)}
        </ProductsModal>
      );
    } else if (props.modal === "product") {
      return (
        <ProductsModal dotImg={dotImg} className="modal">
          {renderProductsDetails(props.productDetails)}
        </ProductsModal>
      );
    } else if (props.modal === "addEmployee") {
      return <AddEmployeeModal>{renderAddEmployee()}</AddEmployeeModal>;
    } else if (props.modal === "addTask") {
      return <AddTaskModal>{renderAddTask()}</AddTaskModal>;
    }
  };

  return <Container> {renderOneModal()} </Container>;
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

  .bottom__package__includes__text,
  .bottom__package__excludes__text {
    list-style-image: url(${dotImg});
    margin-right: 1rem;
  }
`;
