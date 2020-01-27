import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Blog from "./components/Blog";
import FeaturedArticle from "./components/FeaturedArticle"; //"./components/BlogPosts";

ReactDOM.render(
	<FeaturedArticle articleId="duck" />,
	document.getElementById("featured")
);
ReactDOM.render(<Blog />, document.getElementById("blog"));
