import React, { useState, useEffect } from "react";
import GeneralGraph from "../../components/Graphs/GraphGen.jsx";
import Dubai from "./images/dubai.jpg";
import Sahara from "./images/sahara.jpg";
import { ReactComponent as ArrowLeft } from "./images/left-arrow.svg";
import { ReactComponent as ArrowRight } from "./images/right-arrow.svg";
import { ReactComponent as Info } from "./images/information.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TableProduct from "../TableProduct/TableProduct.jsx";
import MyCard from "../Card/Card.jsx";
import New from "../New/New.jsx";
import { Link } from "react-router-dom";
import HeaderPage from "../HeaderPage/HeaderPage";
import axios from "axios";
const GenerlaAnalystics = ({
	items = [
		{
			name: "Hour",
			key: 0,
			scrollchor: "#"
		},
		{
			name: "Day",
			key: 1,

			scrollchor: "#"
		},
		{
			name: "Week",
			key: 2,
			scrollchor: "#about"
		},
		{
			name: "Month",
			key: 3,
			scrollchor: "#contact"
		}
	]
}) => {
	const [activeLink, setActiveLink] = useState("Hour");
	const [slider, setSlider] = useState(null);
	const [dataTopTours, setDataTopTours] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		axios.get(" http://localhost:3000/top_tours").then(res => {
			setDataTopTours(res.data);
			setIsLoading(true);
		});
	}, []);
	const setActive = link => {
		setActiveLink(link);
	};
	const next = () => {
		slider.slickNext();
	};
	const previous = () => {
		slider.slickPrev();
	};

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		arrows: false,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1108,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<div className="z-10 flex flex-col ">
			<HeaderPage
				title="Analytics and Statistics"
				buttons={[
					{
						title: "Tours booking & Products",
						active: true,
						href: "/admin/tours"
					},
					{
						title: "Users interactions",
						active: false,
						href: "/admin/users"
					}
				]}
			/>
			<div className="flex agency_row">
				<div className="w-1/2 agency_col">
					<div className="flex">
						<div className="w-full">
							<div className="px-4">
								<GeneralGraph items={items} />
							</div>
						</div>
					</div>

					<div className="flex">
						<div className="px-4 w-full">
							<div className="mb-3 card">
								<div className="flex items-center h-16 border-none py-2  px-6 bg-white">
									<div className="flex items-center whitespace-no-wrap text-21">
										Top product
									</div>
									<div className="flex justify-center items-center ml-auto whitespace-no-wrap">
										<div className="flex justify-center items-center">
											<span
												className="hint--bottom text-center hint--medium"
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
								<TableProduct />
							</div>
						</div>
					</div>
				</div>
				<div className="w-1/2 agency_col">
					<div className="flex">
						<div className="px-4 w-full">
							<div className="mb-3 card">
								<div className="flex items-center h-16 border-none py-2  px-6 bg-white">
									<div className="flex items-center whitespace-no-wrap text-21">
										Top tours
									</div>
									<div className="ml-auto whitespace-no-wrap flex justify-center items-center">
										<ArrowLeft
											onClick={previous}
											className="cursor-pointer w-6 h-6 px-1"
										/>
										<ArrowRight
											className="cursor-pointer w-6 h-6 px-1"
											onClick={next}
										/>
										<div className="mx-4 flex justify-center items-center">
											{items.map(elem => {
												let isActive = activeLink === elem.name;
												let navClass = isActive
													? "agency_choice_time_btn active border-none cursor-pointer "
													: " agency_choice_time_btn border-none cursor-pointer ";
												return (
													<Link
														to="#"
														name={elem["name"]}
														className={navClass}
														scrollchor={elem["scrollchor"]}
														key={elem["key"]}
														onClick={props =>
															setActive(
																props.currentTarget.attributes[0].nodeValue
															)
														}
													>
														{elem["name"]}
													</Link>
												);
											})}
										</div>
										<div className="flex justify-center items-center">
											<span
												className="hint--left text-center flex hint--medium"
												aria-label="this is a hint"
											>
												<button className="btn-icon btn-icon-only">
													<Info fill="#b3b8bd" className="w-4 h-4" />
												</button>
											</span>
										</div>
									</div>
								</div>
								<div className="p-0 agency_top_tours_slider">
									<div className="p-5 pr-0 pt-0 pb-0 bg-white">
										<Slider ref={c => setSlider(c)} {...settings}>
											{isLoading ? (
												dataTopTours.map(data => (
													<div className="flex justify-center items-center">
														<MyCard
															Title={data.Title}
															Img={Sahara}
															Rate={data.Rate}
															views={data.views}
														/>
													</div>
												))
											) : (
												<div className="slider-spinner flex justify-center items-center">
													<div class="lds-ring">
														<div></div>
														<div></div>
														<div></div>
														<div></div>
													</div>
												</div>
											)}
										</Slider>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex">
						<div className="w-full">
							<div className="px-4">
								<New />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GenerlaAnalystics;
