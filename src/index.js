import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Blog from "./components/blog/blog";
import FeaturedArticle from "./components/featuredarticle";

ReactDOM.render(
	<FeaturedArticle articleName="duck" />,
	document.getElementById("featured")
);
ReactDOM.render(<Blog />, document.getElementById("blog"));
