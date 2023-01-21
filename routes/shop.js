var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController')
const {body} = require('express-validator')
const shops = require('../models/shop')
/* GET users listing. */
router.get('/',shopController.shop );
router.get('/menu',shopController.menu );
router.get('/:id', shopController.show);
router.post('/',[
    body('name').not().isEmpty().withMessage("กรุณาใส้ชื่อร้านด้วย")
],shopController.insert)
module.exports = router;