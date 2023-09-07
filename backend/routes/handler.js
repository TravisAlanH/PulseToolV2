const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
  const string = [
    {
      name: "John Doe",
      age: 20,
    },
    {
      name: "Jane Doe",
      age: 25,
    },
  ];

  res.end(JSON.stringify(string));
});

module.exports = router;
