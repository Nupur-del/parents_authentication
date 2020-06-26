const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
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
    babygender: String,
    babyage: Number,
    user_type: Number
});
module.exports = mongoose.model("user",UserSchema);