import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Task = (props) => {
  const importantTask = {
    color: "red",
    fontWeight: "bold",
  };

  const { taskText, taskDate, id, active, important, finishDate } = props;

  if (active) {
    return (
      <div className="taskList">
        <p>
          <span  style={important ? importantTask : null}>{taskText}</span> -{" "}
          <span className="finishTo"> termin: {taskDate} </span>
          <button className='transparent' onClick={() => props.changeTaskStatus(id)}>
          <i className="fas fa-check-circle" />
          </button>
          <button className='transparent' onClick={() => props.deleteTask(id)}>
          <i className="fa fa-trash" />
          </button>

        </p>
      </div>
    );
  } else {
    const deadline = new Date(finishDate).toLocaleDateString();
    return (
      <div>
        <p>
         <span>{taskText}</span>  - <span className="deadline">zrobione : {deadline} </span>
          <button className="transparent" onClick={() => props.deleteTask(id)}><i className="fa fa-trash" /></button>
        </p>
      </div>
    );
  }
};

export default Task;
