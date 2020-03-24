import React, { useState, useEffect } from "react";
import Person from "../../assets/person_girl.jpg";
import axios from "axios";
import { ReactComponent as Mail } from "../GeneralAnalyDashbord/images/envelope.svg";
import { ReactComponent as Dots } from "../GeneralAnalyDashbord/images/ellipsis.svg";
const CardActifUser = () => {
	const [data_active_users, setActiveUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		axios
			.get(" http://localhost:3000/top_active_users")
			.then(res => {
				setActiveUsers(res.data);
				setIsLoading(true);
			})
			.catch(err => {
				setIsLoading(false);
				alert("fetching data error .. try refreshing the page");
			});
	}, []);
	return (
		<>
			{isLoading ? (
				<div className="p-5 pt-8 pt-2 pb-2 bg-white">
					{data_active_users.map(user => (
						<div className="py-2">
							<div
								style={{
									backgroundColor: "#f3f3f3"
								}}
								className=" flex flex-row flex-row justify-between items-center p-3"
							>
								<div
									className="flex flex-row items-center justify-start"
									direction="left"
								>
									<div className="float-left">
										<img src={Person} alt="img" className="jewelLeft" />
									</div>
									<div className="" direction="right">
										<div className="overflow-hidden">
											<div className="jewelDisplay">
												<span>
													<span className="font-bold">
														<span className="text-sm">{user["name"]}</span>
													</span>
												</span>
												<div className="clearfix" direction="left">
													<div className="float-left">
														<span className="text-sm">{user["type"]}</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="agency_contact_user flex flex-row justify-start items-center">
									<a href="#">
										<Mail
											className="px-2 w-10 h-10 responsive-icons"
											fill="#707070"
										/>
									</a>
									<a href="#">
										<Dots
											className="px-2 w-10 h-10 responsive-icons"
											fill="#707070"
										/>
									</a>{" "}
								</div>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className="flex justify-center items-center bg-white">
					<div class="lds-ring">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			)}
		</>
	);
};
export default CardActifUser;
