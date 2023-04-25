import React from 'react';

export const Task = (props) => {


    return (
        <div>
            <h1 style={{backgroundColor: props.task.completed ? "green":"white"}}>
              {props.task.taskName} 
            </h1>
            <button onClick={() => props.deleteTask(props.task.id)}>X</button>
            <button onClick={() => props.completeTask(props.task.id)}>Complete</button>
          </div>
    );
}

export default Task;
