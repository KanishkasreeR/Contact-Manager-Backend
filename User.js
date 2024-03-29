const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"name is required"]
    },
    password:{
        type:String,
        required:[true,"name is required"]
    },

});
const User = new mongoose.model("User",UserSchema);
module.exports = User;