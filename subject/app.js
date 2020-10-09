const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.listen(3000, () => {
    console.log("start! express server on port 3000");
});

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/searching", (req, res) => {
    console.log(req.body.search);
    let responseData = { search: req.body.search };
    res.json(responseData);
});
