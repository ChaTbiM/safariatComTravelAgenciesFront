import TableCrm from "../../components/TableCrm/TableCrm.jsx";
import HeaderPage from "../../components/HeaderPage/HeaderPage.jsx";
import React from "react";

const Crm = () => {
	return (
		<div className="z-10  flex flex-col">
			<HeaderPage
				isBad
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
			<TableCrm />
		</div>
	);
};
export default Crm;
