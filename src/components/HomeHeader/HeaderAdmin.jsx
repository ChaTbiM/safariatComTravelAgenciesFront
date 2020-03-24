import React, { useState } from "react";
import "./HeaderAdmin.css";
import Notification from "./images/notifications.svg";
import Logo from "./images/logoForWeb.png";
import SearchBar from "../SearchBar/SearchBar.jsx";
import NotificationBox from "../NotificationsBox/NotificationsBox.jsx";
const HeaderAdmin = props => {
	const [show, setShow] = useState(false);
	const [navL, setNavL] = useState(false);
	const showNotifications = () => {
		setShow(!show);
	};
	const handleLogo = () => {
		setNavL(!navL);
		props.clickToggle();
	};

	return (
		<>
			<div className="main_header_admin ">
				<nav
					className={navL ? "navbar_header_admin" : "navbar_header_admin res"}
				>
					<div className="flex items-center nav-h">
						<a
							className=" mD:w-3/4 lD:w-3/4 sD:3/4 xsD:w-3/4"
							href="#"
							onClick={handleLogo}
						>
							<img src={Logo} alt="logo" />
						</a>
					</div>
					<div className="partLeft">
						<SearchBar />
						<div className="middlePart">
							<div className="buttons_nav">
								<a className="text-18 active" href="#">
									Home
								</a>
								<a className="text-18" href="#">
									Create+
								</a>
								<a className="text-18" href="#">
									Services
								</a>
								<a className="text-18" href="#">
									Support
								</a>
							</div>
						</div>
					</div>
					<div className="ml-auto flex flex-row justify-center items-center">
						<div className="flex flex-col relative items-end">
							<p
								className="mx-4 lD:h-12 lD:w-12 cursor-pointer xsD:w-12 xsD:h-12 sD:w-12 sD:h-12 mD:w-16 mD:h-16 "
								onClick={showNotifications}
							>
								<img src={Notification} alt="notification" />
							</p>
							<div
								className={
									show
										? "notification-box flex mx-6"
										: "notification-box hidden mx-6"
								}
							>
								<NotificationBox />
							</div>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default HeaderAdmin;
