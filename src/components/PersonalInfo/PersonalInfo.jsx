import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const PersonalInfo = (props) => {
  const [profile, setProfile] = useState({});
  const [isPreview, setIsPreview] = useState(true);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const handlePreview = () => {
    if (!isPreview) {
      axios
        .put("http://localhost:3000/user/0", profile)
        .then((res) => console.log(res));
    }
    setIsPreview((prevState) => !prevState);
  };
  const handleChangeInput = (e) => {
    const target = e.currentTarget.id;
    switch (target) {
      case "name":
        setProfile({ ...profile, name: e.currentTarget.value });
        break;
      case "birthday":
        setProfile({ ...profile, birthday: e.currentTarget.value });
        break;
      case "gender":
        setProfile({ ...profile, gender: e.currentTarget.value });
        break;
      case "relashionship":
        setProfile({ ...profile, relashionship: e.currentTarget.value });
        break;
      case "adr":
        setProfile({ ...profile, adr: e.currentTarget.value });
        break;

      case "email":
        setProfile({ ...profile, email: e.currentTarget.value });
        break;
      case "phone":
        setProfile({ ...profile, phone: e.currentTarget.value });
        break;
      case "username":
        setProfile({ ...profile, username: e.currentTarget.value });
        break;
      case "facebook":
        setProfile({ ...profile, facebook: e.currentTarget.value });
        break;
      case "google":
        setProfile({ ...profile, google: e.currentTarget.value });
        break;

      default:
        break;
    }
  };
  const selectCountry = (val) => {
    setCountry(val);
    setProfile({ ...profile, country: val });
  };

  const selectRegion = (val) => {
    setRegion(val);
    setProfile({ ...profile, state: val });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/0")
      .then((res) => setProfile(res.data));
  }, []);
  return (
    <Container>
      <div className="flex flex-col bg-white">
        <div className="flex justify-between pt-4 px-8 items-center">
          <h1
            style={{
              color: "#fdb810",
            }}
          >
            Personal Informations
          </h1>
          <button
            className={
              isPreview
                ? "py-2 px-8 button-edit button-hover"
                : "py-2 px-8 button-edit button-hover-active"
            }
            onClick={handlePreview}
          >
            {isPreview ? "Edit" : "Save"}
          </button>
        </div>
        <div className="flex py-8 justify-between px-8">
          <div className="flex w-5/12 flex-col">
            <h2>About Employee</h2>
            <div
              className={
                isPreview
                  ? "flex p-4 my-4 justify-between button-edit"
                  : "hidden"
              }
            >
              <p>{profile.name}</p>
              <p className="hovered-text">Name</p>
            </div>
            <div className={!isPreview ? "flex flex-col" : "hidden"}>
              <label htmlFor="name" className="mt-4 hovered-text">
                Name
              </label>
              <input
                onChange={handleChangeInput}
                value={profile.name}
                type="text"
                id="name"
                className="button-edit cursor-text p-4 "
              />
            </div>
            <div
              className={
                isPreview
                  ? "flex p-4 my-4 justify-between button-edit"
                  : "hidden"
              }
            >
              {" "}
              <p>{profile.birthday}</p>
              <p className="hovered-text">Birthday</p>
            </div>
            <div className={!isPreview ? "flex flex-col" : "hidden"}>
              <label htmlFor="birthday" className="mt-4 hovered-text">
                Birthday
              </label>
              <input
                onChange={handleChangeInput}
                value={profile.birthday}
                type="date"
                id="birthday"
                className="button-edit cursor-text p-4 "
              />
            </div>
            <div className="row my-4 justify-between">
              <div
                className={
                  isPreview
                    ? "flex p-4 my-4 col justify-between button-edit"
                    : "hidden"
                }
              >
                {" "}
                <p>{profile.gender}</p>
                <p className="hovered-text">Gender</p>
              </div>
              <div
                className={
                  !isPreview
                    ? "flex flex-col w-full mr-4 align-center"
                    : "hidden"
                }
              >
                <label htmlFor="gender" className="mt-4 hovered-text">
                  Gender
                </label>
                <span class="custom-dropdown m-0 w-full button-edit">
                  <select
                    className="select w-full p-4"
                    onChange={handleChangeInput}
                    value={profile.gender}
                    id="gender"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </span>
              </div>
              <div
                className={
                  isPreview
                    ? "flex p-4 my-4 justify-between col button-edit"
                    : "hidden"
                }
              >
                {" "}
                <p>{profile.relashionship}</p>
                <p className="hovered-text">status</p>
              </div>
              <div
                className={
                  !isPreview
                    ? "flex flex-col w-full ml-4 align-center"
                    : "hidden"
                }
              >
                <label htmlFor="relashionship" className="mt-4 hovered-text">
                  Status
                </label>
                <span class="custom-dropdown m-0 w-full button-edit">
                  <select
                    className="select w-full p-4"
                    onChange={handleChangeInput}
                    value={profile.relashionship}
                    id="relashionship"
                  >
                    <option>Married</option>
                    <option>Single</option>
                    <option>Engaged</option>
                    <option>Divorced</option>
                  </select>
                </span>
              </div>
            </div>
            <div
              className={
                isPreview
                  ? "flex p-4 my-4 justify-between button-edit"
                  : "hidden"
              }
            >
              {" "}
              <p>{profile.adr}</p>
              <p className="hovered-text">Address</p>
            </div>
            <div className={!isPreview ? "flex flex-col" : "hidden"}>
              <label htmlFor="adr" className="mt-4 hovered-text">
                Address
              </label>
              <input
                onChange={handleChangeInput}
                value={profile.adr}
                type="text"
                id="adr"
                className="button-edit cursor-text p-4 "
              />
            </div>
            <div className="row my-4 justify-between">
              <div
                className={
                  isPreview
                    ? "flex p-4 my-4 justify-between col button-edit"
                    : "hidden"
                }
              >
                {" "}
                <p>{profile.state}</p>
                <p className="hovered-text">State</p>
              </div>

              <div
                className={
                  isPreview
                    ? "flex p-4 my-4 justify-between col button-edit"
                    : "hidden"
                }
              >
                {" "}
                <p>{profile.country}</p>
                <p className="hovered-text">Country</p>
              </div>
              <div className={!isPreview ? "flex flex-col w-full " : "hidden"}>
                <label htmlFor="country" className="hovered-text">
                  Country
                </label>
                <span class="custom-dropdown m-0 w-full button-edit">
                  <CountryDropdown
                    style={{
                      fontSize: "12px",
                    }}
                    className="w-full  p-4"
                    value={profile.country}
                    onChange={selectCountry}
                  />
                </span>
              </div>
            </div>
            <div
              className={
                !isPreview ? "flex flex-col w-full align-center" : "hidden"
              }
            >
              <div className="flex flex-col w-full">
                <label htmlFor="state" className="hovered-text">
                  State
                </label>
                <span class="custom-dropdown m-0 w-full button-edit">
                  <RegionDropdown
                    style={{
                      fontSize: "12px",
                    }}
                    className="w-full  p-4"
                    country={country}
                    value={region}
                    onChange={selectRegion}
                  />
                </span>
              </div>
            </div>
            <h2 className="mt-4">Contact informations</h2>
            <div
              className={
                isPreview
                  ? "flex p-4 my-4 justify-between button-edit"
                  : "hidden"
              }
            >
              {" "}
              <p>{profile.email}</p>
              <p className="hovered-text">Email</p>
            </div>
            <div className={!isPreview ? "flex flex-col" : "hidden"}>
              <label htmlFor="email" className="mt-4 hovered-text">
                Email
              </label>
              <input
                onChange={handleChangeInput}
                value={profile.email}
                type="text"
                id="email"
                className="button-edit cursor-text p-4 "
              />
            </div>
            <div
              className={
                isPreview
                  ? "flex p-4 my-4 justify-between button-edit"
                  : "hidden"
              }
            >
              {" "}
              <p>{profile.phone}</p>
              <p className="hovered-text">Phone</p>
            </div>
            <div className={!isPreview ? "flex flex-col" : "hidden"}>
              <label htmlFor="phone" className="mt-4 hovered-text">
                Phone
              </label>
              <input
                onChange={handleChangeInput}
                value={profile.phone}
                type="tel"
                id="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                className="button-edit cursor-text p-4 "
              />
            </div>
          </div>
          <div className="flex w-5/12 flex-col">
            <h2>Account informations</h2>
            <div
              className={
                isPreview
                  ? "flex p-4 my-4 justify-between button-edit"
                  : "hidden"
              }
            >
              {" "}
              <p>{profile.username}</p>
              <p className="hovered-text">Username</p>
            </div>
            <div className={!isPreview ? "flex flex-col" : "hidden"}>
              <label htmlFor="username" className="mt-4 hovered-text">
                Username
              </label>
              <input
                onChange={handleChangeInput}
                value={profile.username}
                type="text"
                id="username"
                className="button-edit cursor-text p-4 "
              />
            </div>
            <div
              className={
                isPreview
                  ? "flex p-4 my-4 justify-between button-edit"
                  : "hidden"
              }
            >
              {" "}
              <p>*************</p>
              <p className="hovered-text">Password</p>
            </div>

            <h2 className="mt-4">Additional informations</h2>
            <div
              className={
                isPreview
                  ? "flex p-4 my-4 justify-between button-edit"
                  : "hidden"
              }
            >
              {" "}
              <p>{profile.facebook}</p>
              <p className="hovered-text">Facebook link</p>
            </div>
            <div className={!isPreview ? "flex flex-col" : "hidden"}>
              <label htmlFor="facebook" className="mt-4 hovered-text">
                Facebook link
              </label>
              <input
                onChange={handleChangeInput}
                value={profile.facebook}
                type="text"
                id="facebook"
                className="button-edit cursor-text p-4"
              />
            </div>
            <div
              className={
                isPreview
                  ? "flex p-4 my-4 justify-between button-edit"
                  : "hidden"
              }
            >
              {" "}
              <p>{profile.google}</p>
              <p className="hovered-text">Google link</p>
            </div>
            <div className={!isPreview ? "flex flex-col" : "hidden"}>
              <label htmlFor="google" className="mt-4 hovered-text">
                Google link
              </label>
              <input
                onChange={handleChangeInput}
                value={profile.google}
                type="text"
                id="google"
                className="button-edit cursor-text p-4 "
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default PersonalInfo;

const Container = styled.div`
  .button-edit {
    border-radius: 5px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    cursor: pointer;
  }
  .button-hover-active {
    background: #fdb810;
    color: white;
  }
  .button-hover-active:hover {
    background: #e4a000;
  }
  .custom-dropdown {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin: 10px;
  }
  .custom-dropdown > .select,
  .custom-dropdown select {
    font-size: 12px;
    border: 0;
    margin: 0;
    border-radius: 5px;
    text-indent: 0.01px;
    text-overflow: "";
    -webkit-appearance: button;
    /* hide default arrow in chrome OSX */
  }

  .hovered-text {
    color: #707070;
  }
  h1 {
    font-size: 20px;
    color: #3e3e3e;
  }
  p,
  label,
  input {
    font-size: 12px;
    color: #3e3e3e;
  }
  h2 {
    font-size: 14px;
    color: rgb(8, 76, 97);
  }
  .button-hover:hover {
    background: #414141;
    color: white;
  }
  .row {
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
  }
  .col {
    width: 50% !important;
    margin: 0 !important;
  }

  .row-interne {
    flex-direction: row;
  }
  @media (max-width: 1440px) {
    .row {
      flex-direction: column !important;
      margin: 0 !important;
    }
    .col {
      width: 100% !important;
      margin: 1rem 0 !important;
    }
  }
  @media (max-width: 1200px) {
    .row-interne {
      flex-direction: column !important;
    }
  }
`;
