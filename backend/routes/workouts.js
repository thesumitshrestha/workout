const express = require('express');

const router = express.Router();

// Get all workouts
router.get('/', (req, res) => {
  res.json({ msg: 'Get all workouts' });
});

// Workout detail
router.get('/:id', (req, res) => {
  res.json({ msg: 'Workout Detail' });
});

// Post a workout
router.post('/', (req, res) => {
  res.json({ msg: 'POST a new workout' });
});

// Delete a workout
router.delete('/:id', (req, res) => {
  res.json({ msg: 'DELETE a new workout' });
});

// UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({ msg: 'UPDATE a new workout' });
});

module.exports = router;
