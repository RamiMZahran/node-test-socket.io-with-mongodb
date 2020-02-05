var mongoose = require('mongoose');

var Message = mongoose.model('Message', {userId: String , name: String, message: String });

module.exports = { Message };
