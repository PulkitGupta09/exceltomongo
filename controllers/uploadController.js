const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const multer = require("multer");
const ExcelData = require("../models/addFromExcel");
const xlsx = require("xlsx");
const fs = require("fs");

const readExcelFile = async (path, filePath) => {
  try {
    const file = xlsx.readFile(`${path}/${filePath}`);
    let data = [];
    const sheets = file.SheetNames;
    var temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]);

    return temp;
  } catch (err) {
    console.log(err);
  }
};

exports.uploadToServer = catchAsync(async (req, res, next) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
      return cb(null, `${file.originalname}`);
    },
  });
  const upload = multer({ storage });
  upload.single("excel")(req, res, function (err) {
    if (err) {
      // Handle any multer errors
      return res.status(400).json({
        status: "error",
        message: "File upload failed",
      });
    }
    next();
  });
});

exports.uploadToDb = catchAsync(async (req, res) => {
  console.log(req.file.originalname);
  const result = await readExcelFile("./uploads", req.file.originalname);

  await ExcelData.insertMany(result, { ordered: false })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  fs.unlink("./uploads/" + req.file.originalname, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });

  res.status(200).render("success", {
    msg: "Success",
  });
});
