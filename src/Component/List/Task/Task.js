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
                > ✔ </button>
            <button
                className = {classes.no}
                onClick = {() => props.deleteTask(props.id)}
                > ✘ </button>
        </div>
    );
};

export default task;