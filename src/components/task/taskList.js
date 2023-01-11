import React, { useState, useEffect } from "react";
import Task from "./task";

import { data as tasksData } from "./data";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(tasksData);
    }, []);

    return <section className="task_list">
        {tasks.map(task => {
            return <Task key={task.id} {...task} />
        })}
    </section>
}

export default TaskList;