var express = require('express');
var router = express.Router();
const staffController = require('../controllers/staffController')
const {body} = require('express-validator')
/*get staff listing */
router.get('/', staffController.staff);
router.get('/:id', staffController.show);
router.delete('/:id', staffController.destroy);
router.put('/:id', staffController.update);
router.post('/',[body('name').not().isEmpty().withMessage("กรุณาป้อนชื่อสกุลด้วย"),
    body('salary').notEmpty().withMessage("กรุณาใส่เงินเดือน").isInt().withMessage("กรุณนาใส่ตัวเลขเท่านั้น")
], staffController.insert);

module.exports = router;