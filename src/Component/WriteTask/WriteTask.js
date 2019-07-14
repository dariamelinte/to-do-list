import React from 'react';
import classes from './WriteTask.module.css';

const input = (props) => {
    return (
        <div className = {classes.container}>
            <input 
                placeholder = "please type something"
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