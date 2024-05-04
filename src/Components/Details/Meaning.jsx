import React from "react";

function Meaning({ meaning }) {
	return (
		<div className="meaning border-t border-gray-300 pt-4 mt-4">
			<div className="text-xl font-semibold text-gray-200">
				Used as {meaning["partOfSpeech"]}
			</div>
			{meaning["synonyms"].length != 0 && (
				<div className="mt-3 text-gray-400 text-md">
					<span className="text-gray-200">Synonyms:{" \u00A0"}</span>
					{'"' + meaning["synonyms"].join('", "') + '"'}
				</div>
			)}
			{meaning["antonyms"].length != 0 && (
				<div className="mt-3 text-gray-400 text-md">
					<span className="text-gray-200">Antonyms:{" \u00A0"}</span>
					{'"' + meaning["antonyms"].join('", "') + '"'}
				</div>
			)}
			<ol className="flex flex-col gap-5 mt-3 text-gray-300 list-disc ml-5">
				{meaning["definitions"].map((value, key) => {
					return (
						<li key={key}>
							<div className="text-md text-gray-300">
								{value["definition"]}
							</div>
							{value["example"] && (
								<div className="text-gray-200 mt-1 before:content-['-->'] before:pr-2 before:text-red-500">
									Example:{" \u00A0"}
									<span className="text-gray-400">
										{value["example"]}
									</span>
								</div>
							)}
						</li>
					);
				})}
			</ol>
		</div>
	);
}

export default Meaning;
