import React from "react";
// import "./App.css";
import { useState } from "react";

function App() {
	const [optionContent, setOptionContent] = useState("");
	const [options, setOptions] = useState([]);

	const handleChange = (e) => {
		setOptionContent(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (optionContent) {
			setOptions([
				...options,
				{ optionContent: optionContent, selected: false },
			]);
			setOptionContent("");
		}
	};

	const handleClick = () => {
		generation();
	};

	const selecting = () => {
		const selectedItem = options[Math.floor(Math.random() * options.length)];

		const newOptions = options.map((option) =>
			option === selectedItem
				? { ...option, selected: true }
				: { ...option, selected: false }
		);
		setOptions(newOptions);
	};

	const deleteBtn = (idx) => {
		const newOptions = options.filter((option, i) => i !== idx);
		setOptions(newOptions);
	};

	const generation = () => {
		for (let i = 0; i < 30; i++) {
			setTimeout(selecting, 100 * (i / 2));
		}
	};

	return (
		<div className="App max-w-sm mx-auto p-6 font-medium text-center bg-gray-200 rounded-lg shadow-xl">
			<form className="select-none mb-4" onSubmit={handleSubmit}>
				<input
					className="outline-none border-2 border-gray-400 p-0.5 text-center font-medium rounded"
					id="input"
					type="text"
					value={optionContent}
					onChange={handleChange}
					placeholder="Add a New Item..."
				/>
				<button
					className="focus:outline-none ring-2 ring-yellow-500 ring-opacity-50  outline-none select-none p-1 bg-yellow-200 hover:bg-yellow-400 ml-2 rounded font-medium"
					id="addBtn"
				>
					Add
				</button>
			</form>

			<div className="options-container">
				{options.map((option, idx) => (
					<div
						className={
							option.selected
								? "option flex justify-between items-center rounded bg-yellow-400"
								: "option flex justify-between items-center rounded  "
						}
						key={idx}
					>
						<p className="max-w-ful break-all m-2">{option.optionContent}</p>
						<button
							className="focus:outline-none ring-2 ring-yellow-500 ring-opacity-50  outline-none select-none mr-1 p-1 bg-yellow-200 hover:bg-yellow-400 ml-2 rounded font-medium"
							id="deleteBtn"
							onClick={() => {
								deleteBtn(idx);
							}}
						>
							Delete
						</button>
					</div>
				))}
			</div>

			<button
				className="focus:outline-none ring-2 ring-yellow-500 ring-opacity-50 select-none mt-4 font-bold p-2 bg-yellow-200 hover:bg-yellow-400 rounded-xl w-full"
				id="startBtn"
				onClick={handleClick}
			>
				Randomize!
			</button>
		</div>
	);
}

export default App;
