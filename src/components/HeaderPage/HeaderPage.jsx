import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class HeaderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, buttons } = this.props;
    return (
      <Container>
        <section className="agency_header_section">
          <div className="flex items-center">
            <div className="agency_header_text">
              <h1>{title}</h1>
            </div>
            <div className="ml-auto ">
              {buttons.map(btn => (
                <Link
                  className={
                    btn.active
                      ? "agency_active_btn mx-4 px-2 py-4 "
                      : "agency_secondary_btn mx-4 px-2 py-4"
                  }
                  to={btn.href}
                >
                  {btn.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Container>
    );
  }
}
const Container = styled.div`
  .agency_active_btn {
    color: white;
    background-color: #ffb808;
    font-size: 18px;
    border-radius: 18px;
    box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
  }
  .agency_secondary_btn {
    color: #ffb808;
    background-color: white;
    font-size: 18px;
    border-radius: 18px;
    box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
  }
  .agency_secondary_btn:hover {
    color: white;
    background-color: #ffb808;
  }
  .agency_header_section {
    padding: 2.9em;
    margin: 0px -30px 30px;
    margin-bottom: 0 !important;
  }
  .agency_header_text {
    font-size: 28px;
  }
`;
