import React, { Component } from "react";
import styled from "styled-components";

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggled: false
		};
	}

	render() {
		return (
			<Container className="flex justify-center items-center">
				<div className="agency-search-bar">
					<div className="glass-icon">
						<div className=" glass-icon-c">
							<span className="glass-icon__circle"></span>
							<span className="glass-icon__stick"></span>
						</div>
					</div>
					<input className="text-18" type="text" />
				</div>
			</Container>
		);
	}
}

const Container = styled.div`
	.glass-icon {
		height: 2rem;
		width: 2rem;
		position: relative;
		cursor: pointer;
	}
	.agency-input {
		background: #fff;
		color: #a7a7a7;
		width: 13vw;
	}
	.agency-search-bar {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		background: #fff;
		padding: 1.1rem 1.1rem !important;
		border-radius: 1.6rem;
		color: #a7a7a7;
		margin: 0 auto;
		cursor: text;
		height: 35px;
		-webkit-box-shadow: 0px 0px 20px -9px #999;
		-moz-box-shadow: 0px 0px 20px -9px #999;
		box-shadow: 0px 0px 20px -9px #999;
	}

	.glass-icon {
		height: 1.5rem;
		width: 1.5rem;
		position: relative;
		margin-right: 5px;
	}
	.glass-icon .glass-icon-c {
		height: 100%;
		width: 55%;
		position: absolute;
		left: 50%;
		transform-origin: center center;
		transform: translateX(-50%) rotate(-45deg);
		transition: transform 0.7s cubic-bezier(0.31, -0.84, 0.64, 1.76);
	}

	.glass-icon .glass-icon__circle {
		height: 55%;
		width: 100%;
		background: #a7a7a7;
		border-radius: 100%;
		display: block;
		position: relative;
		transition: all 0.7s cubic-bezier(0.31, -0.84, 0.64, 1.76);
	}
	.glass-icon .glass-icon__circle::after {
		background: #fff;
		height: 64%;
		width: 64%;
		position: absolute;
		left: 18%;
		top: 18%;
		display: block;
		content: "";
		border-radius: 100%;
		transition: all 0.7s cubic-bezier(0.31, -0.84, 0.64, 1.76);
	}
	.glass-icon .glass-icon__stick {
		width: 0.25rem;
		height: 55%;
		display: block;
		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;
		position: absolute;
		bottom: 0;
		left: calc(50% - 0.1433333333rem);
		background: #a7a7a7;
	}
`;
