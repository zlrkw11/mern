const WorkoutDetails = ({ workout }) => {
  const handleClick = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      console.log("deleted");
    }
  };
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>Load(kg): {workout.load}</p>
      <p>Reps: {workout.reps}</p>
      <p>Created at: {workout.createdAt}</p>
      <span className="delete-button" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
