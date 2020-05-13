const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const axios = require("axios");
require("dotenv").config();

// API Routes
router.use("/api/books", apiRoutes);

router.get("/search/:search", (req, res) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${req.params.search}&maxResults=40&key=${process.env.API_KEY}`)
  .then(({ data }) => res.json(data))
  .catch(err => console.log(err))
})

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
