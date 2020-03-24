import React, { useState, useEffect } from "react";
import "./New.css";
import { ReactComponent as Info } from "../GeneralAnalyDashbord/images/information.svg";
import Img from "../GeneralAnalyDashbord/images/dubai.jpg";
import { ReactComponent as Restart } from "./images/update-arrow.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const New = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		axios.get(" http://localhost:3000/news").then(res => {
			setData(res.data);
			setIsLoading(true);
		});
	}, []);
	const restartData = () => {
		setIsLoading(false);
		axios.get(" http://localhost:3000/news").then(res => {
			setData(res.data);
			setIsLoading(true);
		});
	};

	return (
		<Container>
			<div className="mb-3 card bg-white">
				<div className="flex items-center h-16 border-none py-2  px-6 ">
					<div className="flex items-center whitespace-no-wrap text-21">
						News
					</div>
					<div className="ml-auto whitespace-no-wrap flex justify-center items-center">
						<div className="flex justify-center items-center mx-3">
							<Link to="#">
								<Restart
									fill="#b3b8bd"
									className="w-4 h-4"
									onClick={restartData}
								/>
							</Link>
							{/* here the dropdown div... */}
						</div>
						<div className="btn-group dropdown flex justify-center items-center mx-3">
							<span
								className="hint--left text-center flex hint--medium"
								aria-label="this is a hint"
							>
								<button>
									<Info fill="#b3b8bd" className="w-4 h-4" />
								</button>
							</span>
							{/* here the dropdown div... */}
						</div>
					</div>
				</div>
				<div className="bg-white scroll-div">
					{isLoading ? (
						data.map(data_news => (
							<div key={data_news["id"]} className="px-6 ">
								<div className="pt-0 pb-0 px-2 x">
									<div className="flex justify-between items-center">
										<div className="w-1/2 flex justify-start">
											<img
												className="w-16 rounded-full h-16"
												src={Img}
												alt="img"
											/>
											<div className="flex flex-col ml-4">
												<div className="whitespace-no-wrap text-21">
													<h1>{data_news["name"]}</h1>
												</div>
												<div className="whitespace-no-wrap text-13 text-gray-600">
													<p>{data_news["time"]}</p>
												</div>
												<div className="my-4 mx-0 whitespace-no-wrap text-18 text-gray-600">
													<p>has added a new {data_news["type"]}</p>
												</div>
											</div>
										</div>
										<div className="w-1/2 notification-part-right">
											<div className="flex p-6 justify-end items-center w-3/5">
												<img className="lg:w-64" src={Img} alt="img" />
											</div>
										</div>
									</div>
								</div>
							</div>
						))
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
				</div>
			</div>
		</Container>
	);
};
export default New;

const Container = styled.div``;
