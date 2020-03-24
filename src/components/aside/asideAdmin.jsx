import React, { Component } from "react";
import "./asideAdmin.css";
import Report from "./images/report.png";
import Business from "./images/business-and-finance.png";
import Crm from "./images/crm.png";
import Plus from "./images/plus.png";
import Logout from "./images/logout.png";
import Compass from "./images/compass.png";
import Ouss from "../HomeHeader/images/ouss.jpg";

import { Link } from "react-router-dom";
class AsideAdmin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navItems: [
				{
					name: "Analytics and Statistics",
					options: [
						{
							key: 516312315320,
							name: "Tours booking & products",
							scrollchor: "/admin/tours"
						},
						{
							key: 45444754201,

							name: "Users interactions",
							scrollchor: "/admin/users"
						}
					],
					visible: false,
					key: 0,
					icon: Report,
					scrollchor: "/admin/tours"
				},
				{
					name: "HR management",
					options: [
						{
							key: 516312312010112015320,

							name: "Employees managements ",
							scrollchor: "/admin/employees"
						},
						{
							key: 516312315101121211320,

							name: "Tasks managements",
							scrollchor: "/admin/tasks"
						}
					],
					visible: false,
					scrollchor: "/admin/employees",
					key: 1,
					icon: Business
				},
				{
					name: "Travel & product management",
					key: 2,
					icon: Crm,
					options: [
						{
							key: 111211121211212,

							name: "Tours managements ",
							scrollchor: "/admin/tmanagement"
						},
						{
							key: 2501,

							name: "products managements",
							scrollchor: "/admin/pmanagement"
						}
					],
					visible: false,
					scrollchor: "/admin/tmanagement"
				},
				{
					name: "Travel and product CRM",
					options: [
						{
							key: 101124110,

							name: "Tours booking & products",
							scrollchor: "/admin/tours"
						},
						{
							key: 11111122,

							name: "Users interactions",
							scrollchor: "/admin/users"
						}
					],
					visible: false,

					key: 3,
					icon: Plus,

					scrollchor: "#contact"
				},
				{
					name: "Finance management",
					options: [
						{
							key: 12354,
							name: "Finance management",
							scrollchor: "/admin/finance"
						},
						{
							key: 125354,
							name: "Change plan",
							scrollchor: "/admin/finance"
						}
					],
					visible: false,

					key: 4,
					icon: Compass,

					scrollchor: "/admin/finance"
				}
			],
			activeLink: this.props.active
		};
	}
	setActive = link => {
		const name = link[0].nodeValue;
		var li_data = this.state.navItems.filter(elm => elm.name === name)[0]
			.visible;
		this.state.navItems.filter(elm => elm.name === name)[0].visible = !li_data;
		this.state.navItems
			.filter(elm => elm.name !== name)
			.map(item => {
				item.visible = false;
			});
		this.setState({ activeLink: link[0].nodeValue });
	};
	render() {
		return (
			<>
				<aside
					className={
						this.props.toggle
							? "mainAsideAdmin  flex  justify-between items-center flex-col"
							: "mainAsideAdminResized  flex justify-between items-center flex-col"
					}
				>
					<div className="flex justify-between w-full  items-center flex-col">
						<div className="flex justify-center w-full flex-col items-center  pad-pro px-2">
							<div href="#" className="nameAdmin w-full flex justify-center">
								<img
									className={this.props.toggle ? "mr-2" : ""}
									src={Ouss}
									alt="usernamePhoto"
								/>
								<div className="flex  flex-col justify-center items-start">
									<span
										className={
											this.props.toggle
												? "text-white  whitespace-no-wrap font-medium hide-dis xsD:text-8 sD:text-10 mD:text-12 lD:text-16"
												: "text-white  whitespace-no-wrap font-medium hide-dis ok "
										}
									>
										Oussama Bengoudifa
									</span>
									<p
										className={
											this.props.toggle
												? "text-white font-light text-xxs  whitespace-no-wrap hide-dis"
												: "text-white font-light text-xxs  whitespace-no-wrap hide-dis ok"
										}
									>
										{" "}
										CEO of travel agency{" "}
									</p>
								</div>
							</div>
						</div>
						<div className="mainAsideSection h-full flex w-full">
							<ul className="flex  justify-end sidebar-menu items-center flex-col w-full">
								{this.state.navItems.map(elm => {
									let isActive = this.state.activeLink === elm.name;
									let navClass = isActive
										? "w-full pad-logout cursor-pointer  my-4 xsD:text-8 sD:text-10 mD:text-12 lD:text-16"
										: this.props.toggle
										? "w-full pad-logout cursor-pointer my-4 pl-2 xsD:text-8 sD:text-10 mD:text-12 lD:text-16"
										: "w-full pad-logout cursor-pointer justify-center my-4";
									return (
										<li
											key={elm.key}
											onClick={props =>
												this.setActive(props.currentTarget.attributes)
											}
											name={elm.name}
											className={navClass}
										>
											<div
												className={
													this.props.toggle
														? isActive
															? "flex justify-center items-center active-sidebar"
															: "flex justify-center items-center"
														: isActive
														? "flex justify-center items-center  active-sidebar"
														: "flex justify-center items-center"
												}
											>
												<Link
													to={this.props.toggle ? "#" : `${elm["scrollchor"]}`}
													className={
														this.props.toggle
															? "flex justify-center items-center mr-auto pad-a"
															: "flex justify-center items-center w-full pad-a"
													}
												>
													<img
														className="logout-btn"
														src={elm.icon}
														alt="Report"
													/>
													<span
														className={
															this.props.toggle
																? "text-white ml-2 whitespace-pre-line  hide-dis"
																: "text-white hide-dis ok "
														}
													>
														{elm["name"]}
													</span>
												</Link>
											</div>
											<ul
												key={elm["key"].toString()}
												className={
													elm.visible
														? this.props.toggle
															? "treeview-menu h-auto"
															: "hidden"
														: "treeview-menu hid"
												}
											>
												{elm.options.map(opt => {
													return (
														<li key={opt.key}>
															<Link to={opt.scrollchor}>
																<i className="fa fa-circle-o"></i>
																{opt.name}
															</Link>
														</li>
													);
												})}
											</ul>
										</li>
									);
								})}
							</ul>
						</div>
					</div>

					<div
						className={
							this.props.toggle
								? "flex pl-2  justify-start pad-logout w-full items-center "
								: "flex   justify-center pad-logout w-full items-center "
						}
					>
						<Link className="flex justify-center  items-center pad-a" to="#">
							<img className="logout-btn" src={Logout} alt="logout" />
							<span
								className={
									this.props.toggle
										? "text-white ml-2 pl-px hide-dis"
										: "hide-dis text-white ok"
								}
							>
								Logout
							</span>
						</Link>
					</div>
				</aside>
			</>
		);
	}
}

export default AsideAdmin;
