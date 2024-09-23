// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask, editTask, onUpdateTask }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDefinition, setTaskDefinition] = useState('');
    const [taskPriority, setTaskPriority] = useState('Low');
    const [taskStatus, setTaskStatus] = useState('Incomplete');
    const [dueDate, setDueDate] = useState('');

    useEffect(() => {
        if (editTask) {
            setTaskName(editTask.name);
            setTaskDefinition(editTask.definition);
            setTaskPriority(editTask.priority);
            setTaskStatus(editTask.status);
            setDueDate(editTask.dueDate);
        } else {
            setTaskName('');
            setTaskDefinition('');
            setTaskPriority('Low');
            setTaskStatus('Incomplete');
            setDueDate('');
        }
    }, [editTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = {
            name: taskName,
            definition: taskDefinition,
            priority: taskPriority,
            status: taskStatus,
            dueDate: dueDate,
            id: editTask ? editTask.id : Date.now(),
        };
        if (editTask) {
            onUpdateTask(taskData); // Update existing task
        } else {
            onAddTask(taskData); // Add new task
        }
    };

    return ( <
        div className = "task-form-container" >
        <
        h2 > { editTask ? 'Edit Task' : 'Add Task' } < /h2> <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        value = { taskName }
        onChange = {
            (e) => setTaskName(e.target.value) }
        placeholder = "Task Name"
        required /
        >
        <
        textarea value = { taskDefinition }
        onChange = {
            (e) => setTaskDefinition(e.target.value) }
        placeholder = "Task Definition"
        required /
        >
        <
        select value = { taskPriority }
        onChange = {
            (e) => setTaskPriority(e.target.value) } >
        <
        option value = "Low" > Low < /option> <
        option value = "Medium" > Medium < /option> <
        option value = "High" > High < /option> <
        /select> <
        select value = { taskStatus }
        onChange = {
            (e) => setTaskStatus(e.target.value) } >
        <
        option value = "Incomplete" > Incomplete < /option> <
        option value = "Complete" > Complete < /option> <
        /select> <
        input type = "date"
        value = { dueDate }
        onChange = {
            (e) => setDueDate(e.target.value) }
        /> <
        button type = "submit" > { editTask ? 'Update Task' : 'Add Task' } < /button> <
        /form> <
        /div>
    );
};

export default TaskForm;