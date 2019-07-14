import React from 'react';
import Task from './Task/Task';

const list = (props) => {
    const listTasks = props.tasks;
    return(
        listTasks.map( (task, index) => 
            <Task
                task = {task}
                key = {index}
            />
        )
    );
};

export default list;
