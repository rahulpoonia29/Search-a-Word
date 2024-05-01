import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
	const { word } = useParams();

	const [data, setData] = useState([]);
	useEffect(() => {
		fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
			.then(async (response) => await response.json())
			.then((data) => setData(data));
	}, []);

	// data[0] && console.log(data[0]["phonetics"])
	data[0] && data[0]["phonetics"].map((value) => console.log(value));

	return (
		<div className="p-6 text-white">
			{data[0] && (
				<div className="container mx-auto max-w-3xl px-4 py-8">
					<h1 className="text-3xl text-center font-semibold text-gray-200 mb-8">
						Dictionary
					</h1>
					<div className="word">
						<h2 className="text-2xl font-bold mb-4">
							{data[0]["word"]}
						</h2>
						<div className="text-md mb-2 text-gray-300">
							Pronunciation: &nbsp;
							{data[0] &&
								data[0]["phonetics"].map((value) => {
									if (value["text"]) {
										return `[${value["text"]}] \u00A0\u00A0`;
									}
								})}
						</div>
						<div className="origin text-lg mb-4">
							Origin: early 19th century: variant of earlier hollo
							; related to holla.
						</div>
					</div>
					<div className="meanings">
						<div className="meaning border-t border-gray-300 pt-4">
							<div className="part-of-speech font-semibold">
								Exclamation
							</div>
							<div className="definition text-lg mb-2">
								Used as a greeting or to begin a phone
								conversation.
							</div>
							<div className="example text-gray-600">
								Example: hello there, Katie!
							</div>
						</div>
						<div className="meaning border-t border-gray-300 pt-4">
							<div className="part-of-speech font-semibold">
								Noun
							</div>
							<div className="definition text-lg mb-2">
								An utterance of ‘hello’; a greeting.
							</div>
							<div className="example text-gray-600">
								Example: she was getting polite nods and hellos
								from people
							</div>
						</div>
						<div className="meaning border-t border-gray-300 pt-4">
							<div className="part-of-speech font-semibold">
								Verb
							</div>
							<div className="definition text-lg mb-2">
								Say or shout ‘hello’.
							</div>
							<div className="example text-gray-600">
								Example: I pressed the phone button and helloed
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Details;
