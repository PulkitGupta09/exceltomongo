const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getOverview = catchAsync(async (req, res) => {
  res.status(200).render("overview", {
    title: "Excel to Json",
  });
});
