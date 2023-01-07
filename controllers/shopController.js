const Shop = require('../models/shop')
const Menu = require('../models/menu')
const config = require('../config/index')

//get all data
exports.shop = async (req, res, next) => {
    const shops =await Shop.find().select('name photo location').sort({_id:-1})

        const shopWithPhotoDomain = shops.map((shop,index) => {
            return{
                    id: shop._id,
                    name: shop.name,
                    photo: config.DOMAIN,
                    location: shop.location,
                    
            }
        })

    res.status(200).json({
        data: shopWithPhotoDomain
    }) 
}
exports.menu = async (req, res, next) => {
    const menu =await Menu.find().populate('shop')
    res.status(200).json({
        data: menu
    }) 
}
exports.show = async (req, res, next) => {
    const shop =await Shop.findById(req.params.id).populate('menus')
    res.status(200).json({
        data: shop,
    }) 
}
