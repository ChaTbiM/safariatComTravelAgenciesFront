import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryProgress = props => {
	const [isLoading, setIsLoading] = useState(false);
	const [data_regions, setDataRegions] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:3000/top_regions")
			.then(res => {
				setDataRegions(res.data);
				setIsLoading(true);
			})
			.catch(err => {
				setIsLoading(false);
				alert("err on fetching data try refreshing the page");
			});
	}, []);
	return (
		<div className="bg-white flex  flex-col text-center scroll-div">
			{data_regions.map(region => {
				return (
					<div key={region.id} className="flex flex-row py-4  justify-between">
						<div className="w-2/5">
							<p className="text-lg font-bold-500 whitespace-no-wrap">
								{region["place"]}
							</p>
						</div>
						<div className="w-2/5">
							<div className="p-2 border h-4 relative bg-gray-400 rounded-full">
								<span
									className="agency_span"
									style={{ width: `${region["progress"]}%` }}
								></span>
							</div>
						</div>
						<div className="w-1/5 ">{region["progress"]}%</div>
					</div>
				);
			})}
		</div>
	);
};
export default CountryProgress;
