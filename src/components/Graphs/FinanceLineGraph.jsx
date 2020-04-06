import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import Axios from "axios";

const FinanceLineGraph = (props) => {
  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    responsive: [
      {
        breakpoint: 1800,
        options: {
          chart: {
            width: 500,
          },
        },
      },
      {
        breakpoint: 1660,
        options: {
          chart: {
            width: 450,
          },
        },
      },
      {
        breakpoint: 1535,
        options: {
          chart: {
            width: 400,
          },
        },
      },
      {
        breakpoint: 1389,
        options: {
          chart: {
            width: 500,
          },
        },
      },
      {
        breakpoint: 1251,
        options: {
          chart: {
            width: 500,
          },
        },
      },
      {
        breakpoint: 1100,
        options: {
          chart: {
            width: 400,
          },
        },
      },
    ],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      fill: "#000",
    },
    colors: ["#084C61"],
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return "$" + val + " K";
        },
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };
  const [series, setSeries] = useState([{ data: [0, 0, 0, 0, 0, 0, 0, 0] }]);
  useEffect(() => {
    Axios.get("http://localhost:3000/tour_sales_values")
      .then((res) => {
        let values = res.data.filter((elm) => elm.type === props.filter)[0];
        setSeries([
          {
            data: values.data,
            name: values.name,
          },
        ]);
      })
      .catch((err) => alert("error on fetching data"));
  }, [props.filter]);

  return (
    <Container className="agency_line_chart ">
      <Chart options={options} series={series} type="line" width="600" />
    </Container>
  );
};

const Container = styled.div`
  .agency_line_chart .apexcharts-legend {
    display: none !important;
  }
`;
export default FinanceLineGraph;
