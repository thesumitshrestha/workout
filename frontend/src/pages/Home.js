import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const fetchWorkout = async () => {
      const res = await axios.get('/api/workouts');
      setWorkouts(res.data);
    };
    fetchWorkout();
  }, []);
  return (
    <div className='home'>
      <div className='workouts'>
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
