import React, { useState } from "react";

import HeaderAdmin from "../../components/HomeHeader/HeaderAdmin";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

import "./admin.css";

const Admin = props => {
	const [toggle, setToggle] = useState(true);

	const handleToggleClick = () => {
		setToggle(!toggle);
	};
	return (
		<>
			<HeaderAdmin
				clickToggle={() => {
					handleToggleClick();
				}}
			/>
			<Sidebar
				toggle={toggle}
				clickToggle={() => {
					handleToggleClick();
				}}
				active={props.active}
			/>
			<div
				className={!toggle ? "padleft" : "padleft-sm"}
				onClick={() => {
					document.getElementsByClassName(
						"notification-box mx-6"
					)[0].style.display = "none";
				}}
			>
				{props.content}
			</div>
		</>
	);
};

export default Admin;
