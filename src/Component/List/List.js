import React from 'react';
import Task from './Task/Task';

const list = (props) => {
    const listOfTasks = props.listOfTasks;

    return(
        listOfTasks.map( (task, index) => (
            <Task 
                task = {task}
                key = {index} />
        ))
    );
};

export default list;
