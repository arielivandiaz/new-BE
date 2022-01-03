var express = require('express');
var router = express.Router();
var sql = require('../controllers/sql');
var api = require('../controllers/api');



/* GET home page. */
router.get('/', api.main)

router.get('/asd', api.random )

module.exports = router;
