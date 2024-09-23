// src/components/Home.js
import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [editTask, setEditTask] = useState(null); // For handling updates

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    const handleAddTask = (newTask) => {
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const handleUpdateTask = (updatedTask) => {
        const updatedTasks = tasks.map(task =>
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setEditTask(null); // Reset edit mode
    };

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const handleEditClick = (task) => {
        setEditTask(task); // Set the task to edit
    };

    return ( <
        div >
        <
        h1 > Task List < /h1> <
        TaskForm onAddTask = { handleAddTask }
        editTask = { editTask }
        onUpdateTask = { handleUpdateTask }
        /> <
        ul > {
            tasks.map(task => ( <
                li key = { task.id } >
                <
                h3 > { task.name }({ task.priority }) < /h3> <
                p > { task.definition } < /p> <
                p > Status: { task.status } < /p> <
                p > Due Date: { task.dueDate } < /p> <
                button onClick = {
                    () => handleEditClick(task) } > Edit < /button> <
                button onClick = {
                    () => handleDeleteTask(task.id) } > Delete < /button> <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
};

export default Home;