const express = require('express');
require('dotenv').config();

const port = process.env.PORT;
const workoutRoutes = require('./routes/workouts');

const mongoose = require('mongoose');

// Express App
const app = express();
app.use(express.json());
const cors = require('cors');

app.use(cors());

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/workouts', workoutRoutes);

//Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen requests
    app.listen(port, () => {
      console.log(`Connected to DB & listening to the port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
