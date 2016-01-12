var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/mydb');

var userSchema = new Schema({
    id: String,
    alias: String,
    avatar: String,
    mail: String
});
mongoose.model('User', userSchema);
var threadSchema = new Schema({
    id: String,
    name: String,
    describe: String,
    members: Array,
    c_time: String
});
mongoose.model('Thread', threadSchema);
var msgSchema = new Schema({
    id: String,
    text: String,
    time: String,
    user: String,
    thread: String
});
mongoose.model('Msg', msgSchema);