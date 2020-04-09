import React, { Component } from "react";
import styled from "styled-components";
import { tasks } from "./data";

import HrTable from "../../components/HrTable/HrTable";
import TableActions from "../../components/HrTable/components/TableActions";

import Modal from "../../components/Modal/Modal";
import { Link } from "react-router-dom";

export default class HrManagement extends Component {
  state = {
    initialTasks: null,
    filteredTasks: null,
    searchedTask: "",
    searchedTaskType: "all",

    isTasksView: true,

    isAddTask: false,

    tasksTypes: ["all", "type1", "type2"]
  };

  componentDidMount() {
    this.setState({
      initialTasks: tasks
    });
  }

  // Tasks functions -----------------------------
  changeSearchedTasks(task) {
    this.setState(
      { searchedTask: task },
      this.filterTasks(task, this.state.searchedTaskType)
    );
  }

  changeSearchedTaskType(taskType) {
    this.setState(
      { searchedTaskType: taskType },
      this.filterTasks(this.state.searchedTask, taskType)
    );
  }

  tasksByName(task, tasks) {
    const filteredTasks = tasks.filter((el, index) => {
      return el.task.toLowerCase().includes(task);
    });
    return filteredTasks;
  }

  tasksByType(taskType, tasks) {
    const filteredTasks = tasks.filter((el, index) => {
      return el.type.toLowerCase().includes(taskType);
    });
    return filteredTasks;
  }

  filterTasks(task = "", taskType = "all") {
    let tasks = JSON.parse(JSON.stringify(this.state.initialTasks));
    let filteredTasks;
    if (task === "" || taskType === "all") {
      if (task !== "") {
        filteredTasks = this.tasksByName(task, tasks);
      } else if (taskType !== "all") {
        filteredTasks = this.tasksByType(taskType, tasks);
      }
    } else if (task !== "" && taskType !== "all") {
      const tempData = this.tasksByName(task, tasks);
      filteredTasks = this.tasksByType(taskType, tempData);
    }

    this.setState({ filteredTasks });
  }

  // add task

  addTasksHandler() {
    console.log("add Tasks");
  }

  hideAddTaskModal = () => {
    this.setState({ isAddTask: false });
  };

  showAddTaskModal = () => {
    this.setState({ isAddTask: true });
  };

  // Render Functions -----------------------

  renderTableActions() {
    const isTasksView = this.state.isTasksView;

    if (isTasksView) {
      return (
        <TableActions
          searchedTask={task => this.changeSearchedTasks(task)}
          searchedTaskType={taskType => this.changeSearchedTaskType(taskType)}
          // addHandler={this.addTasksHandler}
          addTask={this.showAddTaskModal}
          add="add Task"
          search="search tasks"
          view="tasks"
          selectOptions={this.state.tasksTypes}
        />
      );
    } else {
      return null;
    }
  }

  renderTable() {
    const filteredTasks = this.state.filteredTasks
      ? this.state.filteredTasks
      : this.state.initialTasks;

    if (filteredTasks) {
      console.log("work");
      return <HrTable tasks={filteredTasks} />;
    } else {
      return null;
    }
  }

  renderModal = () => {
    const isAddTask = this.state.isAddTask;

    if (isAddTask) {
      return (
        <Modal
          closeModal={this.hideTaskModal}
          // productDetails={productDetails}
          modal="addTask"
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
                className="hrManagement__top__button employeesViewBTN "
                onClick={e => e.preventDefault}
              >
                <Link
                  to="/admin/employees"
                  className="text-11 sD:text-13 mD:text-15 lD:text-21"
                >
                  Employees Management{" "}
                </Link>
              </button>
              <button
                className="hrManagement__top__button tasksViewBTN text-11 sD:text-13 mD:text-15 lD:text-21"
                onClick={e => e.preventDefault}
              >
                Tasks Management
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
