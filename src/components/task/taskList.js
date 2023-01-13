import React, { useState, useEffect } from "react";
import Task from "./task";
import { Api } from "../../services/api";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const getAllTasks = () => {
        Api.get("todo").then((res) => {
            if(res.status >= 200 && res.status <= 299){
                setTasks(res.data.todos);
                setIsLoading(false);
            }
            else{
                setIsError(true);
                setIsLoading(false);
                throw new Error(res);
            }
        }).catch((err) => {
            setIsError(true);
            setIsLoading(false);
            console.log(err);
        })
    };

    useEffect(() => {
        getAllTasks();
        console.log(tasks);
    }, []);

    if(isLoading)
        return <h1>Loading tasks...</h1>
    if(isError)
        return <h1 style={{color: "red"}}>Error on get tasks...</h1>

    return <section className="task_list">
        {tasks.map(task => {
            return <Task key={task.id} {...task} />
        })}
    </section>
}

export default TaskList;