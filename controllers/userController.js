const User = require("../models/user")

exports.index = (req, res, next) => {
    //res.send('Hello Kitty');
    res.status(200).json({
      fullname:'Tanatat Wongpunyanurak'
    })
  }

  
exports.bio = (req, res, next) => {
  //res.send('Hello Kitty');
  res.status(200).json({
    fullname:'Tanatat Wongpunyanurakasdf'
  })
}
exports.register = async(req,res,next) => {
    const{name,email,password} = req.body
    let user = new User();
    user.name = name
    user.email = email
    user.password = await user.encryptPassword(password)

    await user.save()

    res.status(201).json({
      message: 'ลงทะเบียนเรียบร้อย'
    })
}