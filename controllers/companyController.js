const Companys = require("../models/company");

exports.company = async (req, res, next) => {
  const company = await Companys.findOne();

  res.status(200).json({
    data: company,
  });
};
