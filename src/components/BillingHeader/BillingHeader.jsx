import React from "react";
import TravelIcon from "../../assets/travel.png";

const BillingHeader = () => {
	return (
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
	);
};
export default BillingHeader;
