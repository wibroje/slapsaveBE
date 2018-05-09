var mongoose = require("mongoose");
if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect("mongodb://localhost/whenpresident");
}

module.exports.Machine = require("./machine");

mongodb://slapsave:slapsave@ds251819.mlab.com:51819/echobase
