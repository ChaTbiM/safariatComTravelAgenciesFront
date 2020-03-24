import React, { Component } from "react";
import Img from "../GeneralAnalyDashbord/images/dubai.jpg";
import "./NotificationBox.css";
export default class NotificationsBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notifications_list: [
				{
					key: 0,
					name: "Martin Dekly",
					type: "invoice",
					time: "4 min",
					seen: false
				},
				{
					key: 1,
					name: "Martin Dekly",
					type: "invoice",
					time: "4 min",
					seen: true
				},
				{
					key: 2,
					name: "Bengoudifa oussama",
					type: "picture",
					time: "9 hour",
					seen: true
				}
			]
		};
	}
	makeSeen(elem) {
		//to make it seen
	}
	render() {
		var { notifications_list } = this.state;
		return (
			<div className="_tw">
				<div className="beeperNub"></div>
				<div className="jewelHeader">
					<div className="flex flex-row justify-start items-center">
						<h3 className="h3-notif">Notifications</h3>
					</div>
				</div>
				<div className="jewelBody">
					<div className="jewelScroll">
						<div className="uiScrollableAreaBody">
							<ul className="my-ul">
								{notifications_list.map(notification => (
									<li
										data-key={notification["key"]}
										data-seen={notification["seen"]}
										key={notification["key"]}
										onClick={props => {
											this.makeSeen(props.currentTarget.attributes);
										}}
										className={
											notification["seen"]
												? "jewelItemNew seen"
												: "jewelItemNew"
										}
									>
										<a href="#">
											<div
												className="flex flex-row items-center justify-start pr-4"
												direction="left"
											>
												<div className="float-left">
													<img src={Img} alt="img" className="jewelLeft" />
												</div>
												<div className="" direction="right">
													<div className="overflow-hidden">
														<div className="jewelDisplay">
															<div className="py-px ">
																<span className="font-bold">
																	<span className="text-sm">
																		{notification["name"]}
																	</span>
																</span>
																<span className="ml-2 text-sm">
																	sent you an {notification["type"]}
																</span>
															</div>
															<div className="clearfix" direction="left">
																<div className="float-left">
																	<span className="text-sm">
																		{notification["time"]}
																	</span>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className="jewelFooter">
					<a className="seeMore" href="#">
						View all notifications
					</a>
				</div>
			</div>
		);
	}
}
