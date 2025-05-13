const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());

const port = process.env.PORT || 6000;
const mongoUri = process.env.MONGODB_URI;

mongoose
  .connect(mongoUri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

  app.use('/users', require('./routes/userRoute'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
