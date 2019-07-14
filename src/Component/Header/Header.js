import React from 'react';
import classes from './Header.module.css';

const header = () => (
    <div className = {classes.header}>
        <h1 className = {classes.headerFont}> To Do List </h1>
    </div>
);

export default header;