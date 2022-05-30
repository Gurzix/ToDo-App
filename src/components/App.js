import "./App.css";
import { useState } from "react";
import AddTask from "./AddTask";
import TasksList from "./TasksList";

function App() {


const [counter,setCounter] = useState(3);
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: "zapisać się na studia!",
      date: "2022-05-20",
      important: true,
      active: true,
      finishDate: null,
    },
    {
      id: 1,
      text: "kupić ołówki",
      date: "2022-06-21",
      important: false,
      active: true,
      finishDate: null,
    },
    {
      id: 2,
      text: "pomalować płot",
      date: "2022-06-20",
      important: false,
      active: true,
      finishDate: null,
    },
  ]);

  const addTask =(text, date, important)=> {
    
    
    const task = {
      id: counter,
      text: text, // tekst pobrany z inputa (pojedyncze zadanie)
      date: date,
      important: important,
      active: true,
      finishDate: null,
    }
  
    setCounter(prevCount=> prevCount + 1)
    console.log(task, counter);


    setTasks(prevTasks => [...prevTasks, task]);
  
    return true;
  }

 const deleteTask = (id) => {
   const deletedTasks= [...tasks];
   const index = tasks.findIndex(task => task.id === id);
   deletedTasks.splice(index, 1);
   setTasks(deletedTasks);
   };

  

  const changeTaskStatus = (id) => {
   const doneTasks = [...tasks];
   doneTasks.forEach(task => {
     if(task.id === id) {
       task.active = false
       task.finishDate = new Date().getTime();
     }
   })
   setTasks(doneTasks)
  };

  return (
    <div className="App">
      <p className="todo">lista zadań</p>
      <AddTask tasks={tasks} addTask={addTask}/>
      <TasksList
        deleteTask={deleteTask}
        changeTaskStatus={changeTaskStatus}
        tasks={tasks}
      />
    </div>
  );
}

export default App;
