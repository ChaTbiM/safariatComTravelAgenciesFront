import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
import axios from "axios";
const GraphTours = ({ activeLink, activeLinkTours }) => {
	const [options, setOptions] = useState({});
	const [series, setSeries] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setOptions({
			responsive: [
				{
					breakpoint: 1400,
					options: {
						chart: {
							width: 700
						}
					}
				},
				{
					breakpoint: 1300,
					options: {
						chart: {
							width: 600
						}
					}
				},
				{
					breakpoint: 1200,
					options: {
						chart: {
							width: 450
						}
					}
				},
				{
					breakpoint: 1000,
					options: {
						chart: {
							width: 300
						}
					}
				}
			],
			chart: {
				height: 350,
				type: "area"
			},
			colors: ["#19a4cf", "#ffcc4f"],

			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "smooth",
				colors: ["#19a4cf", "#ffcc4f"]
			},
			fill: {
				colors: ["#19a4cf", "#ffcc4f"]
			},
			xaxis: {
				labels: {
					show: false
				}
			},
			tooltip: {
				x: {
					format: "dd/MM/yy HH:mm"
				}
			}
		});
		if (activeLinkTours === "Tours")
			axios
				.get("http://localhost:3000/users_top_tours")
				.then(res => {
					setSeries(res.data);
					setIsLoading(true);
				})
				.catch(err => {
					setIsLoading(false);
					alert("error on fetching data");
				});
		else if (activeLinkTours === "Products")
			axios
				.get("http://localhost:3000/users_top_products")
				.then(res => {
					setSeries(res.data);
					setIsLoading(true);
				})
				.catch(err => {
					setIsLoading(false);
					alert("error on fetching data");
				});
	}, [activeLinkTours]);

	return (
		<Container>
			{isLoading ? (
				<Chart
					className="agency_tours_chart"
					options={options}
					series={series}
					type="area"
					width="800"
					height="400"
				/>
			) : (
				<div className="flex justify-center items-center">
					<div className="lds-ring">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			)}
		</Container>
	);
};
export default GraphTours;
const Container = styled.div`
	.agency_tours_chart .apexcharts-legend {
		display: flex !important;
		justify-content: flex-end !important;
		padding: 15px 0 !important;
	}
`;
