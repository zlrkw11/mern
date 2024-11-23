import { useState } from "react";
const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new workout</h3>
      <label>Exercise title</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      ></input>

      <label>Load (kg)</label>
      <input
        type="text"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      ></input>

      <label>Reps</label>
      <input
        type="text"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      ></input>

      <button>Add Workout</button>
    </form>
  );
};

export default WorkoutForm;
