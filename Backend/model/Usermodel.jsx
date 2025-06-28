const mongoose = require("mongoose");
const Userschema = new mongoose.Schema({
    Name : String,
    Email: String,
    Phone:String,
    Address:String,
    Password : String
})
const UserModel = mongoose.model("userprofile",Userschema);
module.exports = UserModel