const express = require("express");
const fs = require("fs");
require("../public/posts/duck.json");

const router = express.Router();

router.get("/", function(req, res, next) {
	const path = "../api/public/posts/";
	const data = [];

	fs.readdir(path, (err, files) => {
		return new Promise((resolve, reject) => {
			if (err) reject(err);
			files.forEach(file => {
				let content = require(`${dir}${file}`);
				data["passed"] += content.passed;
				data["fixtures"] = data["fixtures"].concat(content["fixtures"]);
			});
			resolve(data);
		}).then(data => {
			res.send(data);
		});
	});
});

module.exports = router;
