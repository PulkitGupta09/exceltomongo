const mongoose = require("mongoose");

const klimbSchema = new mongoose.Schema({
  "Name of the Candidate": {
    type: String,
    // required: [true, "Please tell us your name"],
  },
  Email: {
    type: String,
    unique: true,
    // required: [true, "Please tell your email!"],
    // lowercase: true,
  },
  "Mobile No.": {
    type: String,
    // default: "9928001065",
    // required: [true, "Please tell your Mobile Number"],
  },
  "Date of Birth": {
    type: Date,
    // required: [true, "Please Enter your date of birth"],
  },
  "Work Experience": {
    type: String,
    // required: [true, "Please Enter your Work Experience"],
  },
  "Resume Title": {
    type: String,
    // required: [true, "Please Tell Your Resume Title"],
  },
  "Current Location": {
    type: String,
    // required: [true, "Please Enter your current Location"],
  },
  "Postal Address": {
    type: String,
    // required: [true, "Please Enter your Postal Address"],
  },
  "Current Employer": {
    type: String,
    // required: [true, "Please Enter your Current Employer"],
  },
  "Current Designation": {
    type: String,
    // required: [true, "Please Enter your Current Designation"],
  },
});

const Klimb = mongoose.model("Klimb", klimbSchema);

module.exports = Klimb;
