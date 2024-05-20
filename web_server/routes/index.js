var express = require('express');
var path = require('path');
var router = express.Router();


/* GET index page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/temp_home.html'));
});


router.get('/home', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/home.html'));
});
  
module.exports = router;