import React from 'react';

const TaskItem = ({ task, onDelete, onUpdate }) => {
    return ( <
        li >
        <
        h3 > { task.name } < /h3> <
        p > { task.description } < /p> <
        p > Priority: { task.priority } < /p> <
        button onClick = {
            () => onUpdate(task) } > Edit < /button> <
        button onClick = {
            () => onDelete(task.id) } > Delete < /button> <
        /li>
    );
};

export default TaskItem;