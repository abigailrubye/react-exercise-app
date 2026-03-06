import { useState } from "react"; //update
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Plank", type: "duration" },
    { name: "Jumping Jacks", type: "repetition" }
  ];

  let screen = <p>Select an exercise</p>;

  if (selectedExercise) {
    if (selectedExercise.type === "repetition") {
      screen = <RepetitionExercise name={selectedExercise.name} />;
    } else {
      screen = <DurationExercise name={selectedExercise.name} />;
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Exercise Tracker</h1>

      {!selectedExercise && (
        <div>
          {exercises.map((exercise, index) => (
            <button
              key={index}
              onClick={() => setSelectedExercise(exercise)}
              style={{ margin: "5px" }}
            >
              {exercise.name}
            </button>
          ))}
        </div>
      )}

      {screen}
    </div>
  );
}

export default App;
