const mongoose = require("mongoose");
const ENV = process.env.NODE_ENV || "development";
require("dotenv").config({ path: `${__dirname}/../.env.${ENV}` });
const url = process.env.MONG_URI;

mongoose.set("strictQuery", false);

if (!process.env.MONG_URI && !process.env.MONGOATLAS_URL) {
  throw new Error("No MONGO URI set");
}

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log("Oops" + err);
  });

const db = mongoose.createConnection();

module.exports = { db };
