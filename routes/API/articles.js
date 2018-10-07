//const express = require("express");
const router = require("express").Router();
const axios = require("axios");
//const cheerio = require("cheerio");
const db = require("../../models");

router.get("/articles", (req, res) => {
    console.log(req.query.q);
    const apiKey = "72f9978cdf6d4588859456531d3b5936";
    const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=';
    const fullURL = `${baseURL}${apiKey}&q=${req.query.q}`;
    console.log(fullURL);
    axios
        .get(fullURL)
        .then((data) => {
            res.json(data.data.response);     
        })
        .catch(err => res.status(422).json(err));
        
});
module.exports = router;