import React, { useState, useEffect, createRef } from "react";
import {
	Card,
	CardActions,
	CardActionArea,
	CardContent,
	Button,
	Typography,
	CardMedia,
} from "@material-ui/core";

import classNames from "classnames";

import useStyles from "./style.js";

const NewsCard = ({
	article: { description, publishedAt, source, title, url, urlToImage },
	i,
	activeArticle,
}) => {
	const classes = useStyles();
	const [elRefs, setElRefs] = useState([]);

	useEffect(() => {
		setElRefs((refs) => Array(20).fill().map(_ , j) => refs[j] || createRef()));
	}, []);

	useEffect(() => {

	}, [ i, activeArticle, elRefs]
	)

	return (
		<Card
			className={classNames(
				classes.card,
				activeArticle === i ? classes.activeCard : null
			)}
		>
			<CardActionArea href={url} target="_blank">
				<CardMedia
					className={classes.media}
					image={
						urlToImage ||
						"https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
					}
				/>
				<div className={classes.details}>
					<Typography variant="body2" color="textSecondary" component="h2">
						{new Date(publishedAt).toDateString()}
					</Typography>

					<Typography variant="body2" color="textSecondary" component="h2">
						{source.name}
					</Typography>
				</div>
				<Typography className={classes.title} gutterBottom variant="h5">
					{title}
				</Typography>
				<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.cardActions}>
				<Button size="small" color="primary">
					More
				</Button>
				<Typography variant="h5" color="textSecondary">
					{i + 1}
				</Typography>
			</CardActions>
		</Card>
	);
};

export default NewsCard;
