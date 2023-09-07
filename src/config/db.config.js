const mongoose = require("mongoose");
const db_url =
  "mongodb+srv://riyazn886:V79fFP6BqTHyOdfO@riyaz.aatdsty.mongodb.net/";
const SECRETE_KEY =
  "9becf5d90a8e8fa85d2903a7848b4ed8c4e4e5ee72ca4c243aaea9d927fc67ec";

  const dbConnection = async () => {
    console.log("inside db connection");
    try {
      await mongoose.connect(db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("database connection established");
    } catch (error) {
      console.error("Error connecting to the database:", error);
    }
  };
  

module.exports = {
  dbConnection,
  SECRETE_KEY,
};
