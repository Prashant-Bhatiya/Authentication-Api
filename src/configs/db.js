const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb+srv://prashant:prashant@cluster0.pfl9a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};

module.exports = connect;
