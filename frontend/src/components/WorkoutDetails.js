import React from 'react';
import axios from 'axios';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { formatDistanceToNow } from 'date-fns';

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const handleClick = async () => {
    const res = await axios.delete('/api/workouts/' + workout._id);
    dispatch({ type: 'DELETE_WORKOUT', payload: res.data });
  };
  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p>
        <strong> Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong> Reps: </strong> {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span className='material-symbols-outlined' onClick={handleClick}>
        {' '}
        delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
