// src/components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, setTasks }) => {
    const handleDelete = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return ( <
        ul > {
            tasks.map((task, index) => ( <
                li key = { index } > { task.name } - { task.priority } <
                button onClick = {
                    () => handleDelete(index)
                } > Delete < /button> < /
                li >
            ))
        } <
        /ul>
    );
};

export default TaskList;