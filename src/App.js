import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/newsCards/newsCards";
import useStyles from "./styles.js";

const alanKey =
	"47a7b11eeb3cc7622ced78a9dcf06b5b2e956eca572e1d8b807a3e2338fdd0dc/stage";

// newsapi apikey 5d84c089ad61400b877a180712aa28da

// play head 34:42

const App = () => {
	const [newsArticles, setNewsArticles] = useState([]);
	const classes = useStyles();
	useEffect(() => {
		alanBtn({
			key: alanKey,
			onCommand: ({ command, articles }) => {
				console.log("in onCommand");
				if (command === "newHeadlines") {
					setNewsArticles(articles);
				}
			},
		});
	}, []);

	return (
		// <div>
		// 	<div className={classes.logoContainer}>
		// 		<img
		// 			src="../img/news-alt.png"
		// 			className={classes.projectLogo}
		// 			alt="project logo"
		// 		/>
		// 		<NewsCards articles={newsArticles} />
		// 	</div>

		<div>
			<h1>Voice Controller</h1>
			<NewsCards articles={newsArticles} />
		</div>
	);
};

export default App;
