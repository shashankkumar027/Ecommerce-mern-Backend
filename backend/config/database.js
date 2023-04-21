const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URI, {},mongoose.set('strictQuery', false)).then((data) => {
    try {
      console.log(`* Server connected with MongoDB: ${data.connection.host}`);
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports = connectDatabase;
