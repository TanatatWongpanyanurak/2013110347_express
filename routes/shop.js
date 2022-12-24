var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController')

const shops = require('../models/shop')
/* GET users listing. */
router.get('/',shopController.shop );
router.get('/menu',shopController.menu );
module.exports = router;