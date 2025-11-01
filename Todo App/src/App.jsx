import React, { useState } from "react";
import InputField from "./Components/InputField";
import Button from "./Components/Button";

function App() {
  const [addTask, setAddTask] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");
  const inputHandler = (e) => {
    setUserInput(e.target.value);
    if (error) setError("");
    return;
  };
  const addTaskHandler = () => {
    if (userInput === "") {
      setError("Add a task!");
    } else {
      setAddTask((prev) => [...prev, userInput]);
      setUserInput('')
    }
  };

  const deleteTaskHandler=(index)=>{
    setAddTask(addTask.filter((_,i)=>i!==index))
  }
  return (
    <main>
      <div className="add-item">
        <InputField inputHandler={inputHandler} userInput={userInput}/>
        <Button btnName={"Add"} taskHandler={addTaskHandler} />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {addTask.map((task, i) => {
        return (
          <div className="task-container" key={i}>
            <p>{task}</p>
            <Button btnName={"Delete"} taskHandler={()=>deleteTaskHandler(i)}/>
          </div>
        );
      })}
    </main>
  );
}

export default App;
