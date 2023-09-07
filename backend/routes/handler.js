const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/about", (req, res) => {
  // const string = [
  //   {
  //     name: "John Doe",
  //     age: 20,
  //   },
  //   {
  //     name: "Jane Doe",
  //     age: 25,
  //   },
  // ];
  axios.get("https://dummyjson.com/products").then((response) => {
    console.log(response.data.products);
    res.end(JSON.stringify(response.data.products));
  });

  // res.end(JSON.stringify(string));
});

module.exports = router;
