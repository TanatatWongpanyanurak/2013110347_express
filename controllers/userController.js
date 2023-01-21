const User = require("../models/user");
const {validationResult} = require('express-validator')
exports.index = (req, res, next) => {
  //res.send('Hello Kitty');
  res.status(200).json({
    fullname: "Tanatat Wongpunyanurak",
  });
};

exports.bio = (req, res, next) => {
  //res.send('Hello Kitty');
  res.status(200).json({
    fullname: "Tanatat Wongpunyanurakasdf",
  });
};
exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    //Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error("ข้อมูลที่ได้รับมาไม่ถูกต้อง")
        error.statusCode = 422;
        error.validation = errors.array()
        throw error;
    }

    const existEmail = await User.findOne({ email: email });
    if (existEmail) {
       const error = new Error("อีเมลนี้มีผู้ใช้งานในระบบแล้ว")
       error.statusCode = 400
       throw error;
    }

    let user = new User();
    user.name = name;
    user.email = email;
    user.password = await user.encryptPassword(password);

    await user.save();

    res.status(201).json({
      message: "ลงทะเบียนเรียบร้อย",
    });
  } catch (error) {
    next(error);
  }
};
