import React from "react";
import styled from "styled-components";
import search from "../../../assets/search.svg";
import info from "../../../assets/info.svg";
import downArrow from "../../../assets/downArrow.svg";

export default function TableActions(props) {
  const selectImg = {
    backgroundImage: `url(${downArrow})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center right",
    backgroundPositionX: "calc(100% - 10px)"
  };
  const renderSearch = () => {
    if (props.view === "employees") {
      return (
        <label className="searchLabel" htmlFor="search">
          {/* <i className="fas fa-search "></i> */}
          <img src={search} className="search__icon " alt="" />
          <input
            className="search font-montserrat text-9 sD:text-11 mD:text-13 lD:text-18"
            onChange={e => props.searchedName(e.target.value)}
            type="search"
            name="search"
            id="search"
            placeholder={props.search}
          />
        </label>
      );
    } else if (props.view === "tasks") {
      return (
        <label className="searchLabel" for="search">
          <img src={search} className="search__icon " alt="" />

          <input
            className="search font-montserrat text-9 sD:text-11 mD:text-13 lD:text-18"
            onChange={e => props.searchedTask(e.target.value)}
            type="search"
            name="search"
            id="search"
            placeholder={props.search}
          />
        </label>
      );
    } else if (props.view === "tours") {
      return (
        <label className="searchLabel" for="search">
          <img src={search} className="search__icon " alt="" />
          <input
            className="search font-montserrat text-9 sD:text-11 mD:text-13 lD:text-18"
            // onChange={e => props.searchedTask(e.target.value)}
            type="search"
            name="search"
            id="search"
            placeholder={props.search}
          />
        </label>
      );
    } else if (props.view === "products") {
      return (
        <label className="searchLabel" for="search">
          <img src={search} className="search__icon " alt="" />

          <input
            className="search font-montserrat text-9 sD:text-11 mD:text-13 lD:text-18"
            // onChange={e => props.searchedTask(e.target.value)}
            type="search"
            name="search"
            id="search"
            placeholder={props.search}
          />
        </label>
      );
    } else {
      return null;
    }
  };

  const renderSelect = () => {
    if (props.view === "employees") {
      return (
        <select
          style={selectImg}
          onChange={e => props.searchedDepartment(e.target.value)}
          // url={downArrow}
          className="select text-9 sD:text-11 mD:text-13 lD:text-18"
          defaultValue="all"
          name="departments"
        >
          {props.selectOptions.map((el, index) => (
            <option key={`option-${index}`} value={el}>
              {el}
            </option>
          ))}
        </select>
      );
    } else if (props.view === "tasks") {
      return (
        <select
          style={selectImg}
          onChange={e => props.searchedTaskType(e.target.value)}
          // url={downArrow}
          className="select text-9 sD:text-11 mD:text-13 lD:text-18"
          defaultValue="all"
          name="types"
        >
          {props.selectOptions.map((el, index) => (
            <option key={`option-${index}`} value={el}>
              {el}
            </option>
          ))}
        </select>
      );
    }

    // return props.view === "employees" ? (
    //   <select
    //     onChange={e => props.searchedDepartment(e.target.value)}
    //     className="select text-9 sD:text-11 mD:text-13 lD:text-18"
    //     defaultValue="all"
    //     name="departments"
    //   >
    //     {props.selectOptions.map((el, index) => (
    //       <option key={`option-${index}`} value={el}>
    //         {el}
    //       </option>
    //     ))}
    //   </select>
    // ) : (
    //   <select
    //     // onChange={e => props.searchedDepartment(e.target.value)}
    //     className="select text-9 sD:text-11 mD:text-13 lD:text-18"
    //     defaultValue="type1"
    //     name="types"
    //   >
    //     {props.selectOptions.map(el => (
    //       <option value={el}>{el}</option>
    //     ))}
    //   </select>
    // );
  };

  const renderAddButton = () => {
    if (props.view === "employees") {
      return (
        <button
          onClick={props.addEmployee}
          className="addEmployee addBtn font-montserrat text-11 sD:text-13 mD:text-15 lD:text-21"
          // onClick={e => props.addHandler()}
        >
          {props.add}
        </button>
      );
    } else if (props.view === "tasks") {
      return (
        <button
          className="addTasks addBtn font-montserrat text-11 sD:text-13 mD:text-15 lD:text-21 "
          onClick={props.addTask}
        >
          {props.add}
        </button>
      );
    } else if (props.view === "tours") {
    } else {
      return null;
    }
  };

  return (
    <Container>
      <div className="left">
        {renderSearch()}
        {renderSelect()}
      </div>
      <div className="right">
        {renderAddButton()}
        {props.view === "employees" || props.view === "tasks" ? (
          <img src={info} className="info__icon" alt="" />
        ) : null}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  flex-wrap: wrap;

  .left {
    display: flex;
    align-item: center;
    justify-content: space-between;
    flex-shrink: 1;
  }

  .searchLabel {
    padding-left: 1rem;
    background-color: #eee;
    margin-right: 1rem;
  }

  .search {
    padding: 0.7em 2.8em 0.7em 2em;
    color: #7d7d7d;
    background-color: transparent;
  }

  .select {
    padding: 0.8em 10.7em 0.8em 2em;
    color: grey;
    border: solid 0.5px #707070;
    appearance: none;

    background-size: 10px;

    @media only screen and (min-width: 1200px) {
      background-size: 15px;
    }
  }
  .select,
  .search {
    outline: none;
  }
  .select,
  .searchLabel {
    border-radius: 4px;
  }

  .right {
    vertical-align: middle;
  }

  .addBtn {
    background-color: #084c61;
    color: #fff;
    padding: 0.7em 2.8em;
    border-radius: 4px;
    margin-right: 1.5rem;
    vertical-align: middle;
  }

  //

  // icons
  .search__icon {
    display: inline-block;
    width: 1em;
  }

  @media only screen and (min-width: 1300px) {
    .search__icon {
      width: 1.5em;
    }
  }

  .info__icon {
    display: inline-block;
    width: 1em;
    cursoir: pointer;
  }
`;
