import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
	"47a7b11eeb3cc7622ced78a9dcf06b5b2e956eca572e1d8b807a3e2338fdd0dc/stage";

// head position 19:16

const App = () => {
	useEffect(() => {
		alanBtn({
			key: alanKey,
			onCommand: ({ command }) => {
				if (command === "testCommand") {
					alert("testCommand was executed");
				}
			},
		});
	}, []);

	return (
		<div>
			<h1>Voice Controller</h1>
		</div>
	);
};

export default App;
