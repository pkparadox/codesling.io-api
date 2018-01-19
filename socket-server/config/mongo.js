const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');
const mongoDB = mongoose.connection;

mongoDB.once('connected', () => {
  console.log('Connected to mongoose database');
});