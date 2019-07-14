import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    return (
        <div className = {classes.container}>
            <input 
                placeholder = "type your task"
                onChange = {props.changed}
                value = {props.inputText}
            />
            
            <button 
                className = {classes.submit}
                onClick = {props.clicked}
            > + </button>
        </div>
    );
};

export default input;