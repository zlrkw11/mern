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
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port!", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
