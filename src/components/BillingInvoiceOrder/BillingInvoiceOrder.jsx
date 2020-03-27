import React, { useState, useEffect } from "react";
import HeaderPage from "../../components/HeaderPage/HeaderPage.jsx";
import TravelIcon from "../../assets/travel.png";
import "./BillingInvoiceOrder.css";
import Add from "../../assets/add.png";

const BillingInvoiceOrder = () => {
	const [dataDetails, setDataDetails] = useState(1);
	const [detailsType, setDetailsType] = useState([""]);
	const [detailsNumber, setDetailsNumber] = useState([""]);
	const [destination, setDestination] = useState("");
	const [TourId, setTourId] = useState("");
	const [TVA, setTVA] = useState("");
	const [Price, setPrice] = useState("");
	const [Qty, setQty] = useState("");
	const [BilledTo, setBilledTo] = useState("");
	const [InvoiceNumber, setInvoiceNumber] = useState("");

	const handleChangeInformations = e => {
		let type = e.currentTarget.attributes["id"].nodeValue;
		let value = e.currentTarget.value;
		switch (type) {
			case "destination":
				setDestination(value);
				break;
			case "tourid":
				setTourId(value);
				break;
			case "tva":
				setTVA(value);
				break;

			case "price":
				setPrice(value);
				break;
			case "qty":
				setQty(value);
				break;
			case "billedto":
				setBilledTo(value);
				break;
			case "invoicenumber":
				setInvoiceNumber(value);
				break;
		}
	};

	const handleChangeDetailsNumber = e => {
		let key = e.currentTarget.attributes["data-key"].nodeValue;
		let value = e.currentTarget.value;
		let arr = [...detailsNumber];
		arr[key] = value;
		setDetailsNumber(arr);
	};
	const handleChangeDetails = e => {
		let key = e.currentTarget.attributes["data-key"].nodeValue;
		let value = e.currentTarget.value;
		let arr = [...detailsType];
		arr[key] = value;
		setDetailsType(arr);
	};
	const handleDetails = () => {
		let arr = detailsType;
		let arri = detailsNumber;
		arr.push("");
		arri.push("");
		setDataDetails(prevState => prevState + 1);
		setDetailsType(arr);
		setDetailsType(arri);
		console.log(destination);
	};
	let array = [];
	for (let i = 0; i < dataDetails; i++) {
		array.push(1);
	}
	return (
		<>
			<HeaderPage
				title="Travel CRM"
				buttons={[
					{
						title: "Tours CRM",
						active: true,
						href: "/admin/crm"
					},
					{
						title: "Products CRM",
						active: false,
						href: "/admin/crm"
					}
				]}
			/>
			{/* hna nabdou dok f billing  */}
			<div className="p-4 pt-0 mx-12">
				<div className=" px-6 py-4 pt-0 flex flex-col justify-between items-start">
					<div className="agency_billing_order_header shadow-lg w-full flex justify-between px-10">
						<div className="flex flex-col justify-center items-center">
							<p className="text-18">Travel agency name</p>
							<span className="text-16">+213 (0) 752 52 47 86</span>
						</div>
						<div className="flex flex-col justify-start pt-6 items-center">
							<p className="agency_billing_title whitespace-no-wrap">
								Billing invoice order
							</p>
							<img src={TravelIcon} alt="travel icon" className="w-32 h-32" />
						</div>
						<div className="flex flex-col justify-center items-center">
							<p className="text-18">9499 Longfellow Street.</p>
							<p className="text-18">Chelmsford, MA 01824</p>
						</div>
					</div>
					<div className="bg-white w-full shadow-lg">
						<div className="px-10 py-6 flex agency_form_row">
							<div className="flex flex-col xchange">
								<ul className="flex flex-col justify-start">
									<li className="flex flex-col mx-2 my-4">
										<label htmlFor="destination" className="m-1">
											Destination
										</label>
										<input
											onChange={handleChangeInformations}
											type="text"
											id="destination"
											className="px-6 py-2 rounded-lg agency_billing_input"
										/>
									</li>
									<li className="flex flex justofy-between mx-2 my-4">
										<div className="flex flex-col w-full mr-4">
											<label htmlFor="tourid" className="m-1">
												Tour id
											</label>
											<input
												onChange={handleChangeInformations}
												type="text"
												id="tourid"
												className="px-6 py-2  rounded-lg agency_billing_input"
											/>
										</div>
										<div className="flex flex-col w-full ml-4">
											<label htmlFor="tva" className="m-1">
												TVA
											</label>
											<input
												onChange={handleChangeInformations}
												type="text"
												id="tva"
												className="px-6 py-2  rounded-lg agency_billing_input"
											/>
										</div>
									</li>
									<li className="flex flex justofy-between mx-2 my-4">
										<div className="flex flex-col w-full mr-4">
											<label htmlFor="price" className="m-1">
												Price
											</label>
											<input
												onChange={handleChangeInformations}
												type="text"
												id="price"
												className="px-6 py-2  rounded-lg agency_billing_input"
											/>
										</div>
										<div className="flex flex-col w-full ml-4">
											<label htmlFor="qty" className="m-1">
												Qty
											</label>
											<input
												onChange={handleChangeInformations}
												type="text"
												id="qty"
												className="px-6 py-2  rounded-lg agency_billing_input"
											/>
										</div>
									</li>
								</ul>
								<ul className="flex flex-col pad-change  my-8">
									<span
										style={{
											fontSize: "21px",
											margin: "10px 0"
										}}
									>
										Details
									</span>
									{array.map((e, index) => {
										return (
											<li key={index} className="flex justify-between my-2">
												<input
													data-key={index}
													onChange={handleChangeDetails}
													type="text"
													className="py-2 px-6 rounded-lg agency_billing_input d"
												/>
												<input
													data-key={index}
													onChange={handleChangeDetailsNumber}
													type="text"
													className="py-2 px-6 rounded-lg agency_billing_input d"
												/>
											</li>
										);
									})}
								</ul>
								<p
									className="bg-white mx-4 shadow-lg rounded-full w-10 h-10 p-2"
									role="button"
									onClick={handleDetails}
								>
									<img src={Add} alt="add" />
								</p>
							</div>
							<div className=" flex flex-col wchange">
								<div className="text-left w-full">
									<div className="flex flex-col">
										<p className="text-21">Total price :</p>
										<h1
											style={{
												fontSize: "51px"
											}}
										>
											1205.99$
										</h1>
									</div>
									<ul className="flex flex-col">
										<li className="flex flex-col my-6">
											<label htmlFor="billed" className="m-1">
												Billed to :
											</label>
											<input
												onChange={handleChangeInformations}
												type="text"
												id="billedto"
												className="px-6 py-2 rounded-lg agency_billing_input"
											/>
										</li>
										<li className="flex flex-col my-6">
											<label htmlFor="invoice" className="m-1">
												Invoice number :
											</label>
											<input
												onChange={handleChangeInformations}
												type="text"
												id="invoicenumber"
												className="px-6 py-2 rounded-lg agency_billing_input"
											/>
										</li>
									</ul>
									<div className="flex flex-col">
										<span>Date :</span>
										<span>22 / 02 / 2020 , at 2 : 31 PM</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full justify-center shadow-lg bg-white py-12 flex">
						<span>
							Travel agency Signature :{" "}
							<span className="underline text-21">Signature CEO</span>
						</span>
					</div>
					<div className="w-full justify-center  flex py-6">
						<a
							href="/admin/crm"
							className="px-10 py-2 mx-4 shadow-md rounded-lg"
							style={{
								backgroundColor: "#2C2C2C",
								color: "white"
							}}
						>
							<i className="fas fa-long-arrow-alt-left fa-lg"></i>
						</a>
						<a
							href="#"
							className="px-10 py-2 bg-white mx-4 shadow-md rounded-lg"
						>
							<span>Preview</span>
						</a>
						<a
							href="#"
							className="px-10 py-2 bg-white mx-4 shadow-md rounded-lg"
						>
							<span>Print</span>
						</a>
						<a
							href="#"
							className="px-10 py-2 bg-white mx-4 shadow-md rounded-lg"
						>
							<span>Save</span>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default BillingInvoiceOrder;
