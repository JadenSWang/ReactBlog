import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Previews from "./components/Previews";
import FeaturedArticle from "./components/featuredarticle";
import FAB from "./components/FAB";

ReactDOM.render(
	<FeaturedArticle articleId="duck" />,
	document.getElementById("featured")
);
ReactDOM.render(<Previews />, document.getElementById("previews"));
ReactDOM.render(<FAB />, document.getElementById("fab"));
