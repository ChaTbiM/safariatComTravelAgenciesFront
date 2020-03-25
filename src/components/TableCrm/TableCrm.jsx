import React, { useState } from "react";
import FilterDropdown from "../FilterDropdown/FilterDropdown.jsx";
import StyledSearchBox from "../StyledSearchbox/StyledSearchBox.jsx";
import "./TableCrm.css";
import { ReactComponent as Info } from "../GeneralAnalyDashbord/images/information.svg";
import Edit from "../../assets/edit.png";
import Delete from "../../assets/delete.png";

const TableCrm = props => {
	const handleOrderType = () => {
		console.log("handling..");
	};
	const handleEvent = () => {
		console.log("handling");
	};
	return (
		<div className="agency_crm mx-auto px-4 sm:px-8 ">
			<div className="py-4">
				<div className="flex justify-between items-center">
					<div className="flex justify-center items-center p-4">
						<span className="mx-2">
							{" "}
							<StyledSearchBox />
						</span>
						<span className="mx-2 pl-4">
							{" "}
							<FilterDropdown />
						</span>
					</div>
					<div className="flex p-4">
						<span
							className="mx-6 text-21 int-ext cursor-pointer"
							onClick={handleOrderType}
						>
							<p>External orders</p>
						</span>
						<span
							className="mx-6 text-21 int-ext active cursor-pointer"
							onClick={handleOrderType}
						>
							<p>Internal orders</p>
						</span>
					</div>
					<div className="flex p-4 justify-between items-center">
						<span className="px-6 py-2 text-21 custom-blue">
							Add Billing order
						</span>
						<span className="pl-4">
							<span
								className="hint--bottom text-center hint--medium"
								aria-label="this is a hint"
							>
								<button>
									<Info fill="#b3b8bd" className="w-6 h-6" />
								</button>
							</span>
						</span>
					</div>
				</div>
				<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
					<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
						<table className="min-w-full leading-normal">
							<thead>
								<tr>
									<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Client name
									</th>
									<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Destination
									</th>
									<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Tour id
									</th>
									<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Date
									</th>
									<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Billing invoices
									</th>
									<th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Confirmation
									</th>
									<th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<div className="flex items-center">
											<div className="ml-3">
												<p className="text-gray-900 font-bold whitespace-no-wrap text-18">
													Bengoudifa Oussama
												</p>
											</div>
										</div>
									</td>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-18">
										<p className="text-gray-700 whitespace-no-wrap">
											Paris,France
										</p>
									</td>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-18">
										<p className="text-gray-700 whitespace-no-wrap">
											#Paris1899
										</p>
									</td>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-18">
										<p className="text-gray-700 whitespace-no-wrap">
											22/01/2020
										</p>
									</td>
									<td className="py-5 border-b border-gray-200 bg-white text-18 ">
										<span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
											<span
												aria-hidden
												className="custom-blue px-6 text-18 py-2"
											>
												<span className="relative">Create</span>
											</span>
										</span>
									</td>
									<td className=" py-5 border-b border-gray-200 bg-white text-sm">
										<span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
											<span
												aria-hidden
												style={{
													backgroundColor: "#FFDD00"
												}}
												className="custom-blue px-6 text-18 py-2"
											>
												<span className="relative">In hold</span>
											</span>
										</span>
									</td>
									<td className="px-5 py-5 flex justify-around border-b border-gray-200 bg-white text-sm">
										<p
											className="cursor-pointer"
											onClick={handleEvent}
											id="edit"
										>
											<img src={Edit} alt="edit" className="w-6 h-6" />
										</p>
										<p
											className="cursor-pointer"
											onClick={handleEvent}
											id="delete"
										>
											<img src={Delete} alt="edit" className="w-6 h-6" />
										</p>
									</td>
								</tr>
							</tbody>
						</table>
						<div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-end xs:justify-between">
							<div className="inline-flex mt-2 xs:mt-0 float-right">
								<button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
									Prev
								</button>
								<button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
									Next
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default TableCrm;
