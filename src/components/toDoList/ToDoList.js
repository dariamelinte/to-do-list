import React from 'react';
import './ToDoList.css';

const toDoList = (props) =>{
    return (
        <div className = "ToDoList">
            <input 
                type = "text" 
                placeholder = "Write something" 
                onChange = {props.changed}
            />
            <button 
                className = "submit"
                onClick = {props.clicked}> + </button>
        </div>
    );
};

export default toDoList;