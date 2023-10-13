import React, { useState } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import axios from 'axios';

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5003/api/workouts', {
        title: title,
        load: load,
        reps: reps,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res.data);
      console.log('NEW WORKOUT ADDED');
      dispatch({ type: 'CREATE_WORKOUT', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3> Add a New Workout</h3>

      <label htmlFor=''>Exercise Title: </label>
      <input
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label htmlFor=''>Load (in Kg): </label>
      <input
        type='number'
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <label htmlFor=''>Reps: </label>
      <input
        type='number'
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <button> Add Workout</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default WorkoutForm;
