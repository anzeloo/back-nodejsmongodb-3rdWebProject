const mongoose = require('mongoose');

let url = "mongodb+srv://christianlopez4:Password1@cluster0.fxjik.mongodb.net/test?retryWrites=true&w=majority";

mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);

mongoose.connect(url);

let db = mongoose.connection;

db.on("error", console.error.bind(console, "Mongo coneection error"));

module.exports = db;