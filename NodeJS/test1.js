// const mongoose = require("mongoose");
// console.log(mongoose.version)
// const conString = 'mongodb://localhost:27017/cars'
// mongoose.connect(conString, {useNewUrlParser: true});
// console.log("Ending variable!")

// mongoose.connect(conString, {useNewUrlParser: true, useunifiedTopology: true});
// console.log("Ending variable2!")
// Rest api in depth using POSTMAN

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongoDB = 'mongodb://localhost:27017/cars'
mongoose.connect(mongoDB, {useNewUrlParser: true, useunifiedTopology: true});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const carSchema = new mongoose.Schema({
    name: String,
    model: Number,
    age: Number
})

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const port = 4567;

const cars = [
  { name: "LC300", model: 2023 },
  { name: "Vitz", model: 2003 },
  { name: "Cultus", model: 2020 },
  { name: "Civic", model: 2022 },
];

app.get("/", (req, res) => {
  res.json(cars);
});

app.get("/cars/:id", (req, res) => {
  console.log(req.body);
  res.json(cars[parseInt(req.params.id)]);
});

app.post("/cars", (req, res) => {
  console.log(req.body);
  res.json({ message: "ok" });
});

app.put("/cars/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req. body)
  res.json({ message: `updating cars info ${req.params.id}` });
});

app.delete("/cars/:id", (req, res) => {
  console.log(req.params.id);
  res.json({ message: `deleting cars info ${req.params.id}` });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});