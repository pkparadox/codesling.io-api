const mongoose = require('mongoose');

mongoose.connect('mongodb://52.53.213.77:27017/test')
const mongoDB = mongoose.connection;

mongoDB.once('connected', function() {
  console.log("Connected to mongoose database")
});