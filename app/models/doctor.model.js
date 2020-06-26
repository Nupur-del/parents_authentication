const mongoose = require('mongoose');

const DoctorSchema = mongoose.Schema({
    uid : Number,
    name: String,
    gender: String,
    address: String,
    email: { type : String,
             unique : true,
           },
    mobile: { type : String,
            unique : true,
          },
    password: String,
    license_number: String,
    user_type: Number
});
module.exports = mongoose.model("doctor",DoctorSchema);