const mongoose=require('mongoose');
const express = require("express");
const userRoutes=require("./routes/userRoutes");
const app=express();

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/backend_proje",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected to MongoDB");
      }
    }
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

  app.listen(3000, () => {
    console.log(`Server is running on port `);
  });

  module.exports = app;
