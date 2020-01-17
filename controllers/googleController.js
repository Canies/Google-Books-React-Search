const axios = require("axios");
const router = require("express").Router();
module.exports = {
    findAll: function(req, res) {
        axios
        .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
        .then(results => {
        console.log(results.data)
            res.json(results.data)
        })
        .catch(err => res.status(422).json(err));
    } 
}