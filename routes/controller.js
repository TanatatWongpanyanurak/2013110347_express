var express = require('express');
var router = express.Router();
const passport = require('../middleware/passportJWT')
const checkadmin = require('../middleware/checkAdmin')

const companyController = require('../controllers/companyController')
/* GET users listing. */
router.get('/',[passport.isLogin,checkadmin.isAdmin],companyController.company );

module.exports = router;
