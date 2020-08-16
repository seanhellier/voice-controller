import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
	"47a7b11eeb3cc7622ced78a9dcf06b5b2e956eca572e1d8b807a3e2338fdd0dc/stage";

// newsapi apikey 5d84c089ad61400b877a180712aa28da

const App = () => {
	useEffect(() => {
		alanBtn({
			key: alanKey,
			onCommand: ({ command, articles }) => {
				console.log("in onCommand");
				if (command === "newHeadlines") {
					console.log(articles);
					console.log("test");
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
