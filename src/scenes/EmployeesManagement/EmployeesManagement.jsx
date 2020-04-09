import React, { Component } from "react";
import styled from "styled-components";
import { employees } from "./data";

import HrTable from "../../components/HrTable/HrTable";
import TableActions from "../../components/HrTable/components/TableActions";

import Modal from "../../components/Modal/Modal";
import { Link } from "react-router-dom";

export default class HrManagement extends Component {
  state = {
    initialEmployees: null,
    filteredEmployees: null,
    searchedName: "",
    searchedDepartment: "all",

    isEmployeesView: true,

    isAddEmployee: false,

    departmentsOptions: ["all", "hr", "sales", "marketing"]
  };

  componentDidMount() {
    this.setState({
      initialEmployees: employees
    });
  }

  // Employees functions -----------------------------
  changeSearchedName(name) {
    this.setState(
      { searchedName: name },
      this.filterEmployees(name, this.state.searchedDepartment)
    );
  }

  changeSearchedDepartment(department) {
    this.setState(
      { searchedDepartment: department },
      this.filterEmployees(this.state.searchedName, department)
    );
  }

  employeesByName(name, employees) {
    const filteredEmployees = employees.filter((el, index) => {
      return el.name.toLowerCase().includes(name);
    });
    return filteredEmployees;
  }

  employeesByDepartment(department, employees) {
    const filteredEmployees = employees.filter((el, index) => {
      return el.department.toLowerCase().includes(department);
    });
    return filteredEmployees;
  }

  filterEmployees(name = "", department = "all") {
    let employees = JSON.parse(JSON.stringify(this.state.initialEmployees));
    let filteredEmployees;
    if (name === "" || department === "all") {
      if (name !== "") {
        filteredEmployees = this.employeesByName(name, employees);
      } else if (department !== "all") {
        filteredEmployees = this.employeesByDepartment(department, employees);
      }
    } else if (name !== "" && department !== "all") {
      const tempData = this.employeesByDepartment(department, employees);
      filteredEmployees = this.employeesByName(name, tempData);
    }

    this.setState({ filteredEmployees });
  }

  // add employee
  addEmployeeHandler() {
    console.log("add Employee");
  }

  hideAddEmployeeModal = () => {
    this.setState({ isAddEmployee: false });
  };

  showAddEmployeeModal = () => {
    this.setState({ isAddEmployee: true });
  };

  // Render Functions -----------------------

  renderTableActions() {
    const isEmployeesView = this.state.isEmployeesView;

    if (isEmployeesView) {
      return (
        <TableActions
          searchedName={name => this.changeSearchedName(name)}
          searchedDepartment={department =>
            this.changeSearchedDepartment(department)
          }
          // addHandler={this.addEmployeeHandler}
          add="+Add Employee"
          search="search employees"
          view="employees"
          selectOptions={this.state.departmentsOptions}
          addEmployee={this.showAddEmployeeModal}
        />
      );
    } else {
      return null;
    }
  }

  renderTable() {
    const filteredEmployees = this.state.filteredEmployees
      ? this.state.filteredEmployees
      : this.state.initialEmployees;

    if (filteredEmployees) {
      return <HrTable employees={filteredEmployees} />;
    } else {
      return null;
    }
  }

  renderModal = () => {
    const isAddEmployee = this.state.isAddEmployee;

    if (isAddEmployee) {
      return (
        <Modal
          closeModal={this.hideAddEmployee}
          // tourDetails={tourDetails}
          modal="addEmployee"
        ></Modal>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <Container>
        {/* <nav></nav> */}

        <main className="hrManagement">
          <div className="hrManagement__top">
            <h3 className="hrManagement__top__title  font-montserrat text-14 sD:text-17 mD:text-19 lD:text-28 ">
              HR HrManagement
            </h3>
            <hr className="hrManagement__top__hr"></hr>
            <div className="hrManagement__top__buttons font-montserrat text-11 sD:text-13 mD:text-15 lD:text-21">
              <button
                className="hrManagement__top__button employeesViewBTN text-11 sD:text-13 mD:text-15 lD:text-21"
                onClick={e => e.preventDefault}
              >
                Employees Management
              </button>
              <button
                className="hrManagement__top__button tasksViewBTN"
                onClick={e => e.preventDefault}
              >
                <Link
                  to="/admin/tasks"
                  className="text-11 sD:text-13 mD:text-15 lD:text-21"
                >
                  Tasks Management
                </Link>
              </button>
            </div>
          </div>
          <div className="hrManagement__content">
            {this.renderTableActions()}
            {this.renderTable()}
            {this.renderModal()}
          </div>
        </main>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  background-color: #f6f6f6;

  padding-bottom: 5rem;

  .hrManagement {
    width: 88%;
    // padding: 1rem 1.6rem;
    margin: 0 auto;
    // padding: 0 40px 0 120px;
  }

  .hrManagement__top {
    margin-top: 2rem;
    // padding: 0 1.6rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }

  .hrManagement__top__title {
    vertical-align: middle;
    color: #171717;
  }

  .hrManagement__top__hr {
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

  .hrManagement__top__button {
    display: inline-block;
    vertical-align: middle;
    border-radius: 4px;
    padding: 0.3em 0.7em;
  }

  .employeesViewBTN {
    color: white;
    background-color: #ffcc4e;
    margin-right: 1em;
  }

  .tasksViewBTN {
    color: #4d4d4d;
    background-color: white;
  }

  .hrManagement__content {
    background-color: #ffffff;
    padding: 1rem 1.6rem;
    margin-top: 2rem;
  }
`;
