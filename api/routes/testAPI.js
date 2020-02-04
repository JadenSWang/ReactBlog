var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", (req, res, next) => {
	res.sendFile("index.html", { rootj: path.join(__dirname, "../") });
});

module.exports = router;
