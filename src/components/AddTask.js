import React, { useState } from "react";

const AddTask = (props) => {

  const minDate = new Date().toISOString().slice(0, 10);

  let maxDate = minDate.slice(0,4) * 1 + 1;
  maxDate = maxDate + '-12-31'


  const [task, setTask] = useState("");
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(minDate);

  const handleDate = (e) => {
    setDate(
     e.target.value
    )
  }

  const handleInput= (e) => {
    setTask(
     e.target.value
    )
  }

  const handleChecker= (e) => {
    setChecked(
     e.target.checked
    )
  }

  const handleClick = () => {
   const add = props.addTask(task, date, checked);
   if(task.length > 5) {
   if(add) {
     setTask('');
     setDate(minDate);
     setChecked(false);
   }
  } else {
    alert('za krótkie zadanie do wykonania')
  }
  }

  return (
    <div className="form">
      <input className="text" type="text" placeholder="wpisz zadanie" value={task} onChange={handleInput} />
      <br/>
      <div className="priorytet">
      <input className="checkbox" type="checkbox" checked={checked} onChange={handleChecker} id="important" />
      <label htmlFor="important">Priorytet</label>
      </div>
      <br />
      <div className="deadline">
      <label htmlFor="date" style={{textTransform: 'uppercase', paddingRight:'10px'}}>wykonaj do: </label>
      <input
        className="date"
        type="date"
        id="date"
        value={date}
        min={minDate}
        max={maxDate}
        onChange={handleDate}
      />
      </div>
      <div className="add">
      <button className = "addButton" onClick={handleClick}  style={{textTransform: 'uppercase'}}>dodaj</button>
      </div>
    </div>
  );
};

export default AddTask;
