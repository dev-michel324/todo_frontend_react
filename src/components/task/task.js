import React from "react";

const Task = ({id, description, status}) => {
    
    return <article className="task">
        <h2>{description}</h2>
        <p>{status}</p>
    </article>

}

export default Task;