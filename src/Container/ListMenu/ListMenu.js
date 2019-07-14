import React, {Component} from 'react';
import classes from './ListMenu.module.css';
import Input from '../../Component/Input/Input';
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

    onAddClick = () => {
        if(this.state.task.trim().length == 0)
            alert("plese type something");
        else
            {
                const newTask = this.state.task;
                const newList = [... this.state.listOfTasks, newTask];
                this.setState({listOfTasks : newList, task: ''});
            }
    }

    render() {
        return ( 
            <div className = {classes.container}>
                <Input 
                    changed = {this.onChangeHandler}
                    clicked = {this.onAddClick}
                    inputText = {this.state.task} />
                <List 
                    tasks = {this.state.listOfTasks}/>
            </div>
        );
    }
};

export default ListMenu;