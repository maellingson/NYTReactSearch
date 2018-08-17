
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


const db = require('./models');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/reacthealthtracker";
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");


mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    useMongoClient: true
});


app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});