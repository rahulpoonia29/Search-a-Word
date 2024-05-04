import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Meaning from "./Meaning";

function Details() {
	const { word } = useParams();

	const [data, setData] = useState([]);
	useEffect(() => {
		fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
			.then(async (response) => await response.json())
			.then((data) => setData(data));
	}, [word]);

	return (
		<div className="p-6 text-white bg-slate-800">
			{data[0] && (
				<div className="container mx-auto max-w-5xl px-4 py-8">
					<h1 className="text-3xl text-center font-bold text-gray-200 mb-8">
						Dictionary
					</h1>
					<div>
						<h2 className="text-2xl font-bold mb-4">
							{data[0]["word"]}
						</h2>
						<div className="text-lg mb-2 text-gray-200">
							Pronunciation: &nbsp;
							<span className="text-sm">
								{data[0] &&
									data[0]["phonetics"].map((value) => {
										if (value["text"]) {
											return `[${value["text"]}] \u00A0\u00A0`;
										}
									})}
							</span>
							<audio
								className="p-2 my-2 bg-gray-200 rounded-xl"
								src={data[0]["phonetics"][0]["audio"]}
								controls
							>
								Pronunciation
							</audio>
						</div>
					</div>
					{data[0]["meanings"].map((value, key) => {
						if (value["partOfSpeech"]) {
							return <Meaning key={key} meaning={value} />;
						}
					})}
				</div>
			)}
		</div>
	);
}

export default Details;
