import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Previews from "./components/Previews";
import FeaturedArticle from "./components/FeaturedArticle"; //"./components/BlogPosts";

ReactDOM.render(
	<FeaturedArticle articleId="duck" />,
	document.getElementById("featured")
);
ReactDOM.render(<Previews />, document.getElementById("previews"));
