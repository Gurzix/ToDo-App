import React from "react";
import Task from "./Task";

const TasksList = (props) => {

  const active = props.tasks.filter((item) => item.active);
  const done = props.tasks.filter((item) => !item.active);

  if (active.length>=2) {
    active.sort((a,b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if(a.text < b.text) {
        return -1;
      }
      if(a.text > b.text) {
        return 1;
      }
      return 0;
    })
  }


  if (done.length >= 2) {
    done.sort((a, b) => {
      return a.finishDate - b.finishDate;
    });
  }

  const activeTasks = active.map((task) => (
    <Task
      deleteTask={props.deleteTask}
      changeTaskStatus={props.changeTaskStatus}
      key={task.id}
      id={task.id}
      taskDate={task.date}
      taskText={task.text}
      active={task.active}
      important={task.important}
    />
  ));

  const doneTasks = done.map((task) => (
    <Task
      deleteTask={props.deleteTask}
      changeTaskStatus={props.changeTaskStatus}
      key={task.id}
      id={task.id}
      taskDate={task.date}
      taskText={task.text}
      active={task.active}
      finishDate={task.finishDate}
    />
  ));

  return (
    <>
      <div className="activeTasks">
        <h4 className="tasksToDo">Zadania do zrobienia:</h4>
        {activeTasks.length > 0 ? (
          activeTasks
        ) : (
          <p>Nie masz zadań do wykonania</p>
        )}
      </div>
      <div className="tasksDone">
        <h4 className="tasksAlreadyDone">
          Zadania zrobione: <b>({done.length})</b>
        </h4>
        {doneTasks.length > 5 && (
          <span>wyświetlonych jest 5 ostatnich zadań</span>
        )}

        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TasksList;
