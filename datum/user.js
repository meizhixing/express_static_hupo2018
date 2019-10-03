// ref: 
// https://blog.csdn.net/qq_38801354/article/details/78024680
let mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nickname: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
});

userSchema.methods.speak = function () {
    var greeting = "db-Nickname: " + this.nickname
	+ " db-Username: " + this.username
	+ " db-password: " + this.password
    console.log(greeting);
}
const userModel = mongoose.model('User',userSchema);
const adminModel = mongoose.model('Admin',userSchema);


module.exports = {
userModel : userModel,
adminModel : adminModel
}
