var express = require('express');
var router = express.Router();

var fs = require('fs');
const path = require("path");

const text = fs.readFileSync(path.resolve(__dirname, './export0.txt'), "utf8");

var analys = require('analys_csv.js');
let interventions = analys(text);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', interventions: interventions });
});


module.exports = router;
