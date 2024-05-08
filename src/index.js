const express = require("express");
const app = express();
const morgan = require("morgan");
const expressHandlebars = require("express-handlebars");
const path = require("path");
const port = 8080;
// const fetch = require("node-fetch");
const route = require("./routers");



//HTTP logger
app.use(morgan("combined"));


app.use(express.static(path.join(__dirname, "public")));


app.engine("handlebars", expressHandlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "/resources/views"));

// Route
const animals = {
  "chó": [
      {
          "name": "Bobby",
          "type": "Labrador Retriever",
          "img": "labrador.jpg",
          "price": 100,
          "quantity": 5
      },
      {
          "name": "Bella",
          "type": "Bulldog",
          "img": "bulldog.jpg",
          "price": 150,
          "quantity": 3
      }
  ],
  "mèo": [
      {
          "name": "Whiskers",
          "type": "Siamese",
          "img": "siamese.jpg",
          "price": 80,
          "quantity": 7
      },
      {
          "name": "Fluffy",
          "type": "Persian",
          "img": "persian.jpg",
          "price": 120,
          "quantity": 4
      },{
        "name": "Fluffy",
        "type": "Persian",
        "img": "persian.jpg",
        "price": 120,
        "quantity": 4
    },{
      "name": "Fluffy",
      "type": "Persian",
      "img": "persian.jpg",
      "price": 120,
      "quantity": 4
  },{
    "name": "Fluffy",
    "type": "Persian",
    "img": "persian.jpg",
    "price": 120,
    "quantity": 4
},{
  "name": "Fluffy",
  "type": "Persian",
  "img": "persian.jpg",
  "price": 120,
  "quantity": 4
},
  ]
};
route(app);
app.get('/api/animals', (req, res) => {
  res.json(animals);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
