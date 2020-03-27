import React from "react";

const BillingPreview = props => {
	const {
		destination,
		TVA,
		TourId,
		Price,
		Qty,
		detailsType,
		detailsNumber,
		BilledTo,
		InvoiceNumber
	} = props;
	return (
		<div className="bg-white w-full shadow-lg">
			<div className="px-10 py-6 flex agency_form_row">
				<div className="flex flex-col xchange">
					<ul className="flex justify-start flex-wrap">
						<li className="flex flex-col px-6">
							<span className="my-2 text-18">Destination</span>
							<p>{destination}</p>
						</li>
						<li className="flex flex-col px-6">
							<span className="my-2 text-18">Tour id</span>
							<p>{TourId}</p>
						</li>
						<li className="flex flex-col px-6">
							<span className="my-2 text-18">Price</span>
							<p>{Price}</p>
						</li>
						<li className="flex flex-col px-6">
							<span className="my-2 text-18">Qty</span>
							<p>{Qty}</p>
						</li>
						<li className="flex flex-col px-6">
							<span className="my-2 text-18">TVA</span>
							<p>{TVA}</p>
						</li>
					</ul>
					<div className="flex flex-col pad-change my-8">
						<span
							style={{
								fontSize: "21px",
								margin: "10px 0"
							}}
						>
							Details
						</span>
						<div className="flex justify-around">
							<ul className="flex flex-col pad-change my-8">
								{detailsType.map((elm, index) => (
									<li key={index} className="flex justify-between my-2">
										{elm}
									</li>
								))}
							</ul>
							<ul className="flex flex-col pad-change my-8">
								{detailsNumber.map((elm, index) => (
									<li key={index} className="flex justify-between my-2">
										{elm}
									</li>
								))}
							</ul>
						</div>
					</div>
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
									Billed to : {BilledTo}
								</label>
							</li>
							<li className="flex flex-col my-6">
								<label htmlFor="invoice" className="m-1">
									Invoice number : {InvoiceNumber}
								</label>
							</li>
						</ul>
						<div className="flex flex-col">
							<span>Date of depart :</span>
							<span>22 / 02 / 2020 , at 2 : 31 PM</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BillingPreview;
