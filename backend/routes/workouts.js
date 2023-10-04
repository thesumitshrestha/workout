const express = require('express');
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require('../controllers/workoutController');

const Workout = require('../models/workoutmodel');

const router = express.Router();

// Get all workouts
router.get('/', getWorkouts);

// Workout detail
router.get('/:id', getWorkout);

// Post a workout
router.post('/', createWorkout);

// Delete a workout
router.delete('/:id', deleteWorkout);

// UPDATE a workout
router.patch('/:id', updateWorkout);

module.exports = router;
