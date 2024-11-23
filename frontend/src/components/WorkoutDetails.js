const WorkoutDetails = ({ workout }) => {
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>Load(kg): {workout.load}</p>
      <p>Reps: {workout.reps}</p>
      <p>Created at: {workout.createdAt}</p>
    </div>
  );
};

export default WorkoutDetails;
