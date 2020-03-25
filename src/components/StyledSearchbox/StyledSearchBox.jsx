import styled from "styled-components";
import React, { useState } from "react";

const StyledSearchBox = props => {
	return (
		<Container>
			<div className=" items-center flex ">
				<span className="container_search">
					<label>
						<input
							type="text"
							placeholder="Search..."
							onChange={props.handleChangeSearch}
						/>
					</label>
				</span>
			</div>
		</Container>
	);
};

const Container = styled.div`
	.container_search input {
		padding: 13px 35px;
		display: block;
		background: #f1f1f1;
		color: #7d7d7d;
		width: 250px;
	}
	.container_search input::placeholder {
		color: #7d7d7d;
	}
	.container_search label {
		box-sizing: border-box;
		cursor: default;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: normal;
		margin: 0;
		position: relative;
		vertical-align: middle;
		border: none;
		width: 100%;
	}
	.container_search label::before {
		font-family: "Font Awesome 5 Free";
		content: "\f002";
		display: inline-block;
		vertical-align: middle;
		font-weight: 900;
		left: 6px;
		position: absolute;
		width: 16px;
		padding: 0 5px;
		cursor: normal;
	}
	.container_search input:focus {
		outline: none;
	}
`;
export default StyledSearchBox;
