import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const JobEmployee = (props) => {
  const [isPreview, setIsPreview] = useState(true);
  const [profile, setProfile] = useState({});
  const [isJobError, setISJobError] = useState(false);
  const [isCvError, setIsCvError] = useState(false);
  const [isPhoneError, setISPhoneError] = useState(false);
  const [isEmpIdError, setIsEmpIdError] = useState(false);
  const [isSupervisorError, setIsSupervisorError] = useState(false);
  const [isOverviewError, setIsOverviewError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/jobEmployee/0")
      .then((res) => setProfile(res.data));
  }, []);
  const validatePhone = (phone) => {
    return (phone.length <= 12 || phone.length >= 8) && !isNaN(Number(phone));
  };
  const handleCancel = () => {
    setIsPreview((prevState) => !prevState);
  };
  const handlePreview = () => {
    if (isJobError) setISJobError(false);
    if (isPhoneError) setISPhoneError(false);
    if (isCvError) setIsCvError(false);
    if (isEmpIdError) setIsEmpIdError(false);
    if (isSupervisorError) setIsSupervisorError(false);
    if (isOverviewError) setIsOverviewError(false);
    let bool = true;

    if (!isPreview) {
      if (profile.supervisor.length <= 4) {
        bool = false;
        setIsSupervisorError(true);
      }
      if (profile.job.length <= 4) {
        bool = false;
        setISJobError(true);
      }
      if (profile.cv.length === "") {
        bool = false;
        setISJobError(true);
      }
      if (profile.overview.length === "") {
        bool = false;
        setIsOverviewError(true);
      }
      if (profile.empId.length <= 4) {
        bool = false;
        setIsEmpIdError(true);
      }
      if (!validatePhone(profile.phone)) {
        bool = false;
        setISPhoneError(true);
      }
      if (bool) {
        axios
          .put("http://localhost:3000/jobEmployee/0", profile)
          .then((res) => console.log(res));
        setIsPreview((prevState) => !prevState);
      }
    } else {
      setIsPreview((prevState) => !prevState);
    }
  };
  const handleChangeInput = (e) => {
    const target = e.currentTarget.id;
    switch (target) {
      case "job":
        setProfile({ ...profile, job: e.currentTarget.value });
        break;
      case "date":
        setProfile({ ...profile, date: e.currentTarget.value });
        break;
      case "departement":
        setProfile({ ...profile, departement: e.currentTarget.value });
        break;
      case "cv":
        setProfile({ ...profile, cv: e.currentTarget.value });
        break;
      case "phone":
        setProfile({ ...profile, phone: e.currentTarget.value });
        break;

      case "empId":
        setProfile({ ...profile, empId: e.currentTarget.value });
        break;
      case "supervisor":
        setProfile({ ...profile, supervisor: e.currentTarget.value });
        break;
      case "overview":
        setProfile({ ...profile, overview: e.currentTarget.value });
        break;

      default:
        break;
    }
  };
  return (
    <Container>
      <div className="flex flex-col bg-white">
        <div className="flex justify-between pt-4 px-8 items-center">
          <h1
            style={{
              color: "#fdb810",
            }}
          >
            Job Informations
          </h1>
          <div className="flex justify-between">
            <button
              className={
                isPreview
                  ? "hidden"
                  : "py-2 px-6 mr-4 button-edit button-hover-active"
              }
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className={
                isPreview
                  ? "py-2 px-8 button-edit button-hover-active"
                  : "py-2 px-8 button-edit button-hover-active inverse"
              }
              onClick={handlePreview}
            >
              {isPreview ? "Edit" : "Save"}
            </button>
          </div>
        </div>
        <div className="flex py-8 justify-between px-8">
          <div className="flex w-5/12 flex-col">
            <div
              className={
                isPreview
                  ? "flex p-4 my-4 justify-between button-edit"
                  : "hidden"
              }
            >
              <p>Developer</p>
              <p className="hovered-text">Job position</p>
            </div>
            {/* input section */}
            <div className={!isPreview ? "flex flex-col" : "hidden"}>
              <label htmlFor="job" className="mt-4 hovered-text">
                Job position
              </label>
              <input
                onChange={handleChangeInput}
                value={profile.job}
                type="text"
                id="job"
                className="button-edit cursor-text p-4"
              />
              <div
                className={
                  isJobError
                    ? "bg-red-100 border border-red-400 text-red-700 px-2 py-1 my-4 flex items-center rounded relative"
                    : "hidden"
                }
                role="alert"
              >
                <strong className="font-bold">Error !</strong>
                <span className="block sm:inline ml-2">
                  job names cannot be too short
                </span>
                <span className="ml-auto" onClick={() => setISJobError(false)}>
                  <svg
                    className="fill-current h-4 w-4 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
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
              <p>28 october 1955</p>
              <p className="hovered-text">date of recruitment</p>
              {/* input section */}
            </div>
            <div className={!isPreview ? "flex flex-col" : "hidden"}>
              <label htmlFor="date" className="mt-4 hovered-text">
                date of recruitment
              </label>
              <input
                onChange={handleChangeInput}
                value={profile.date}
                type="date"
                id="date"
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
              <p>Support & CRM</p>
              <p className="hovered-text">Dapartement</p>
            </div>
            <div
              className={
                !isPreview ? "flex flex-col w-full mr-4 align-center" : "hidden"
              }
            >
              <label htmlFor="departement" className="mt-4 hovered-text">
                Departement
              </label>
              <span class="custom-dropdown m-0 w-full button-edit">
                <select
                  className="select w-full p-4"
                  onChange={handleChangeInput}
                  value={profile.departement}
                  id="departement"
                >
                  <option>Support and CRM</option>
                  <option>Finance</option>
                </select>
              </span>
            </div>

            <div
              className={
                isPreview
                  ? "flex p-4 my-4 justify-between button-edit"
                  : "hidden"
              }
            >
              <p
                className="underline"
                style={{
                  color: "#365CA8",
                }}
              >
                BillGates-CV.pdf
              </p>
              <p className="hovered-text">CV</p>
            </div>
            <div className={!isPreview ? "flex flex-col" : "hidden"}>
              <label htmlFor="cv" className="mt-4 hovered-text">
                CV
              </label>
              <input
                onChange={handleChangeInput}
                value={profile.cv}
                type="file"
                id="cv"
                className="button-edit cursor-text p-4"
              />
              <div
                className={
                  isCvError
                    ? "bg-red-100 border border-red-400 text-red-700 px-2 py-1 my-4 flex items-center rounded relative"
                    : "hidden"
                }
                role="alert"
              >
                <strong className="font-bold">Error !</strong>
                <span className="block sm:inline ml-2">enter a valid file</span>
                <span className="ml-auto" onClick={() => setIsCvError(false)}>
                  <svg
                    className="fill-current h-4 w-4 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
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
              <p>+213 (0) 741 52 86 90</p>
              <p className="hovered-text">Work phone</p>
            </div>
            <div className={!isPreview ? "flex flex-col" : "hidden"}>
              <label htmlFor="phone" className="mt-4 hovered-text">
                Work phone
              </label>
              <input
                onChange={handleChangeInput}
                value={profile.phone}
                type="text"
                id="phone"
                className="button-edit cursor-text p-4"
              />
              <div
                className={
                  isPhoneError
                    ? "bg-red-100 border border-red-400 text-red-700 px-2 py-1 my-4 flex items-center rounded relative"
                    : "hidden"
                }
                role="alert"
              >
                <strong className="font-bold">Error !</strong>
                <span className="block sm:inline ml-2">
                  add a valid phone number
                </span>
                <span
                  className="ml-auto"
                  onClick={() => setISPhoneError(false)}
                >
                  <svg
                    className="fill-current h-4 w-4 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
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
              <p>120056748</p>
              <p className="hovered-text">Employee ID</p>
            </div>
            <div className={!isPreview ? "flex flex-col" : "hidden"}>
              <label htmlFor="empId" className="mt-4 hovered-text">
                Employee ID
              </label>
              <input
                onChange={handleChangeInput}
                value={profile.empId}
                type="text"
                id="empId"
                className="button-edit cursor-text p-4"
              />
              <div
                className={
                  isEmpIdError
                    ? "bg-red-100 border border-red-400 text-red-700 px-2 py-1 my-4 flex items-center rounded relative"
                    : "hidden"
                }
                role="alert"
              >
                <strong className="font-bold">Error !</strong>
                <span className="block sm:inline ml-2">
                  employee id is too short
                </span>
                <span
                  className="ml-auto"
                  onClick={() => setIsEmpIdError(false)}
                >
                  <svg
                    className="fill-current h-4 w-4 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
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
              <p>Supervisor name</p>
              <p className="hovered-text">Supervisor</p>
            </div>
            <div className={!isPreview ? "flex flex-col" : "hidden"}>
              <label htmlFor="supervisor" className="mt-4 hovered-text">
                Supervisor
              </label>
              <input
                onChange={handleChangeInput}
                value={profile.supervisor}
                type="text"
                id="supervisor"
                className="button-edit cursor-text p-4"
              />
              <div
                className={
                  isSupervisorError
                    ? "bg-red-100 border border-red-400 text-red-700 px-2 py-1 my-4 flex items-center rounded relative"
                    : "hidden"
                }
                role="alert"
              >
                <strong className="font-bold">Error !</strong>
                <span className="block sm:inline ml-2">
                  supervisor name is too short
                </span>
                <span
                  className="ml-auto"
                  onClick={() => setIsSupervisorError(false)}
                >
                  <svg
                    className="fill-current h-4 w-4 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-5/12 flex-col">
            <div
              className={
                isPreview
                  ? "flex flex-col p-4 my-4 justify-between button-edit"
                  : "hidden"
              }
            >
              <div className="ml-auto mb-4">
                <p className="hovered-text">Overview</p>
              </div>
              <p>
                Dit streken dan talrijk ver taiping vrouwen met. Noodige der aan
                rug leiding element schepen ontzegd trekken. Ton locomobiel be
                scheiden interesten millioenen afwachting weggevoerd mee. Moet
                rook en ad acre twee. Ieder ad naast er diepe china erbij en
                assam nu.
              </p>
            </div>
            <div className={!isPreview ? "flex flex-col" : "hidden"}>
              <label htmlFor="overview" className="mt-4 hovered-text">
                Overview
              </label>
              <input
                onChange={handleChangeInput}
                value={profile.overview}
                type="text"
                id="overview"
                className="button-edit cursor-text p-4"
              />
              <div
                className={
                  isOverviewError
                    ? "bg-red-100 border border-red-400 text-red-700 px-2 py-1 my-4 flex items-center rounded relative"
                    : "hidden"
                }
                role="alert"
              >
                <strong className="font-bold">Error !</strong>
                <span className="block sm:inline ml-2">
                  add an overview for your profile
                </span>
                <span
                  className="ml-auto"
                  onClick={() => setIsOverviewError(false)}
                >
                  <svg
                    className="fill-current h-4 w-4 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default JobEmployee;
const Container = styled.div`
  .button-edit {
    border-radius: 5px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    cursor: pointer;
  }
  .button-hover-active {
    background: white;
    color: black;
    border: 2px solid black;
    box-shadow: none !important;
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

  .button-hover-active.inverse {
    background: white;
    color: #fdb810;
    border: 2px solid #fdb810;
    box-shadow: none !important;
  }
  .button-hover-active.inverse:hover {
    background: #fdb810;
    color: white;
  }
  .button-hover-active:hover {
    background: black;
    color: white;
  }
  .hovered-text {
    color: #707070;
  }
  h1 {
    font-size: 20px;
    color: #3e3e3e;
  }
  p {
    font-size: 12px;
    color: #3e3e3e;
  }
  label,
  input,
  strong,
  span {
    font-size: 12px;
  }
  h2,
  button {
    font-size: 14px;
    color: rgb(8, 76, 97);
  }
  .button-hover:hover {
    background: #414141;
    color: white;
  }
  .button-hover {
    border: 2px solid black;
    box-shadow: none !important;
  }
`;
