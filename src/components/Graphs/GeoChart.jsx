import React, { useState, useEffect } from "react";
import { VectorMap } from "react-jvectormap";
import styled from "styled-components";
import { countries } from "../Graphs/data/countries";
import axios from "axios";

const MapChart = () => {
	const [countryData, setCountryData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const countryNames = [];
	useEffect(() => {
		axios
			.get("http://localhost:3000/top_regions")
			.then(res => {
				res.data.map(country => {
					console.log(country.place.split(",")[1]);
					let country_filtred = countries.filter(
						option => option.name === country.place.split(",")[1]
					)[0];
					let country_data = {
						name: country_filtred.name,
						latLng: [country_filtred.latitude, country_filtred.longitude]
					};
					countryNames.push(country_data);
				});
				setCountryData(countryNames);
				setIsLoading(true);
			})
			.catch(err => {
				setIsLoading(false);
				alert(
					"error in fetching data ... pls turn on json-server or refresh the page"
				);
			});
	}, []);
	return (
		<Container className="w-full">
			<div style={{ width: "100%", height: 450 }}>
				{isLoading ? (
					<VectorMap
						map={"world_mill"}
						zoomOnScroll={false}
						backgroundColor="#F5F5F5"
						hoverOpacity={0.7}
						id="map"
						containerStyle={{
							width: "100%",
							height: "100%"
						}}
						markerStyle={{
							initial: {
								fill: "#FFCC4E"
							}
						}}
						containerClassName="map"
						markers={Object.assign({}, countryData)}
					>
						<p>test</p>
					</VectorMap>
				) : (
					<div className="lds-ring">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				)}
			</div>
		</Container>
	);
};
export default MapChart;
const Container = styled.div`
	.jvectormap-region.jvectormap-element {
		fill: #084c61;
	}
	.jvectormap-zoomout,
	.jvectormap-zoomin {
		display: none !important;
	}
`;
