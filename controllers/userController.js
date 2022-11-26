exports.index = (req, res, next) => {
    //res.send('Hello Kitty');
    res.status(200).json({
      fullname:'Tanatat Wongpunyanurak'
    })
  }
  exports.bio = (req, res, next) => {
    //res.send('Hello Kitty');
    res.status(200).json({
      fullname:'Tanatat Wongpunyanurak',
      nickname:'Boom',
      hobby:'play game and lisen music',
      gitusername:'Buukunn'
    })
  }
  exports.company =(req,res,next) =>{
    res.status(200).json({
        data:[{
            id :'1',
            name:"Sony",
            address:{
                province:'Bangkok',
                postcode:"10310"
            }
        },
        {
            id :'2',
            name:"MFEC",
            address:{
                province:'Bangkok',
                postcode:"10250"
            }
        },
        {
            id :'3',
            name:"IT One Co., Ltd.",
            address:{
                province:'Bangkok',
                postcode:"10400"
            }
        },
    ]
    })
  }