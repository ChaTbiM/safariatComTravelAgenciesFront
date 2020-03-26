import React, { useState, useEffect } from "react";
import axios from "axios";
const CardTours = () => {
	const [result, setResult] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [slicer, setSlicer] = useState(0);

	useEffect(() => {
		//fetch data
		axios
			.get("http://localhost:3000/tours")
			.then(res => {
				setResult(res.data);
				setSlicer(Math.round(res.data.length / 2));
				setIsLoaded(true);
			})
			.catch(err => {
				setIsLoaded(false);
				alert("error on fetching the data");
			});
	}, []);
	return (
		<div className="p-2 flex bg-white flex-row justify-between items-start">
			{isLoaded ? (
				<>
					<div className="w-1/2">
						{result.slice(0, slicer).map(item => (
							<div
								key={item.id}
								className=" rounded set-top-tour mx-1 my-1 sD:m-4"
							>
								<div className="flex flex-col p-2 justify-start set-background-color-v2">
									<h1 className="text-18">{item["title"]}</h1>
									<p className="text-11 text-gray-800">{item["body"]}</p>
								</div>
							</div>
						))}
					</div>
					<div className="w-1/2">
						{result.slice(slicer).map(item => (
							<div
								key={item.id}
								className=" rounded set-top-tour mx-1 my-1 sD:m-4"
							>
								<div className="flex flex-col p-2 justify-start set-background-color-v2">
									<h1 className="font-size-res">{item["title"]}</h1>
									<p>{item["body"]}</p>
								</div>
							</div>
						))}
					</div>
				</>
			) : (
				<div className="w-full text-center">
					<div className="lds-ring">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			)}
		</div>
	);
};
export default CardTours;
