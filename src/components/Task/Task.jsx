import React, { useState, useEffect } from "react";
import "./Task.css";
import Axios from "axios";

const Task = () => {
	const [dataTasks, setDataTasks] = useState([]);
	const handleCheckBox = e => {
		let key = e.currentTarget.attributes[1].nodeValue;
		//put request
	};
	useEffect(() => {
		Axios.get("http://localhost:3000/tasks").then(res => {
			setDataTasks(res.data);
		});
	}, []);
	return (
		<div className="flex flex-row justify-start items-start w-full">
			<div className="w-1/2">
				{dataTasks.map(item => (
					<div
						key={item.id}
						className="flex flex-row justify-start w-full my-4 items-center"
					>
						<div className="float-left  flex flex-col justify-center items-start">
							<div className="flex justify-between items-center">
								<input
									type="checkbox"
									data-key={item.id}
									onChange={handleCheckBox}
								/>
								<label
									className="my-label"
									htmlFor="todo"
									data-content="travel agency need 1"
								>
									{item.name}
								</label>
							</div>
							<span className="ml-10 text-sm text-deco">{item.date}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Task;
