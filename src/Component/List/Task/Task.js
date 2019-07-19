import React from 'react';
import classes from './Task.module.css';

const task = (props) => {
    return(
        <div 
            className = {classes.container}
            >
            <div
                className = {classes.task}
                > {props.task} </div>
            <button 
                className = {classes.yes}
                onClick = {() => props.deleteTask(props.id)}
                > <i className="fas fa-check"></i> </button>
            <button
                className = {classes.no}
                onClick = {() => props.deleteTask(props.id)}
                > <i className="fas fa-times"></i> </button>
        </div>
    );
};

export default task;