//const express = require("express");
const router = require("express").Router();
const axios = require("axios");
//const cheerio = require("cheerio");
const db = require("../../models");

router.get("/articles", (req, res) => {
    const params = Object.assign(
        { api_key: "72f9978cdf6d4588859456531d3b5936" },
        req.query
      );
    axios
        .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {params})
        .then(({ data: { results } }) => res.json(results))
        .catch(err => res.status(422).json(err));
        
});
module.exports = router;