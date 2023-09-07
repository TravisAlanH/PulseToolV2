const express = require("express");
const router = express.Router();
const axios = require("axios");
const { Client } = require("pg");

router.get("/about", (req, res) => {
  // Replace the following with your actual database connection details

  const config = {
    user: "admin",
    password: "WAT499er!",
    host: "10.34.3.86",
    database: "raritan",
    port: 5432, // Replace with your PostgreSQL port if it's different
  };
  const query = 'SELECT "ModelName" from odbc."dcModels"';
  const client = new Client(config);
  client.connect();
  client.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      client.end();
      return;
    }
    client.end();
    const jsonResult = JSON.stringify(result.rows);
    console.log(jsonResult);
    res.end(jsonResult);
  });

  //
  // let config = {
  //   method: "get",
  //   maxBodyLength: Infinity,
  //   url: "10.34.3.86/api/v2/dcimoperations/search/models/poweredge",
  //   headers: {
  //     "Authorization": "Basic YWRtaW46c3VuYmlyZA==",
  //   },
  // };

  // axios
  //   .request(config)
  //   .then((response) => {
  //     console.log(JSON.stringify(response.data));
  //     res.end(JSON.stringify(response.data));
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  //

  // axios.get("https://dummyjson.com/products").then((response) => {
  //   console.log(response.data.products);
  //   res.end(JSON.stringify(response.data.products));
  // });
});

module.exports = router;
