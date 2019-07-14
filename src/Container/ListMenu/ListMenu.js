import React, {Component} from 'react';
import classes from './ListMenu.module.css';
import WriteTask from '../../Component/WriteTask/WriteTask';
import List from '../../Component/List/List';

class ListMenu extends Component {

    constructor (props) {
        super(props);

        this.state = {
            task : '',
            listOfTasks : []
        }
    }

    onChangeHandler = (event) => {
        const task = event.target.value;
        this.setState({task});
    }

    onAddListener = () => {
        const newTask = this.state.task;
        if(newTask.trim().length == 0)
            alert("please type something");
        else {
            const newList = [ ... this.state.listOfTasks, newTask];
            this.setState({listOfTasks: newList, task: ''});
        }
    }
   

    render() {
        return ( 
            <div className = {classes.container}>
                <WriteTask 
                    changed = {this.onChangeHandler}
                    clicked = {this.onAddListener}
                    inputText = {this.state.task}
                    />
                <List 
                    listOfTasks = {this.state.listOfTasks}/>
            </div>
        );
    }
};

export default ListMenu;