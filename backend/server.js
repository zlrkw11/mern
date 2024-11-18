require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
// express app
const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// attach all routes to app
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose
  .connect("process.env.MONGO_URI")
  .then(() => {})
  .catch((error) => {
    console.log(error);
  });

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port 4000!");
});
