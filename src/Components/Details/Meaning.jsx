import React from "react";

function Meaning({meaning}) {
	return (
		<div className="meaning border-t border-gray-300 pt-4 mt-4">
			<div className="text-xl font-semibold text-gray-200">Used as {meaning["partOfSpeech"]}</div>
			<div className="definition text-md text-gray-300">
				Used as a greeting or to begin a phone conversation.
			</div>
			<div className="example text-gray-600">
				Example: hello there, Katie!
			</div>
		</div>
	);
}

export default Meaning;
