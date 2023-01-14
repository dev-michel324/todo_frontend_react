import React, { useState } from "react";
import TaskDetailModal from "../modal/taskDetails";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Api } from "../../services/api";
import EditTaskModal from "../modal/editTask";

const Task = ({ id, description, open, created_at, updated_at }) => {
  const [openModalDetails, setOpenModalDetails] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const removeTask = (id) => {
    Api.delete(`/todo/${id}`)
      .then((res) => {
        if(res.status >= 200 && res.status <= 299)
          window.location.reload();
        else
          throw new Error(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const closeTask = (id) => {
    Api.put(`/todo/close/${id}`)
      .then((res) => {
        if(res.status >= 200 && res.status <= 299)
          window.location.reload();
        else
          throw new Error(res);
      }).catch((err) => {
        console.log(err);
      })
  };

  return (
    <>
      <article className="task">
        <section>
          <h2
            className="task_title"
            onClick={() => setOpenModalDetails(!openModalDetails)}
          >
            {description}
          </h2>
          <p>{open ? "open" : "closed"}</p>
        </section>
        <div className="actions">
          <p onClick={() => closeTask(id)}>C</p>
          <BsFillPencilFill
            color="rgb(162, 162, 128)"
            className="edit_icon"
            size={"24px"}
            onClick={() => setOpenModalEdit(!openModalEdit)}
          />
          <BsFillTrashFill
            color="red"
            className="remove_icon"
            size={"24px"}
            onClick={() => removeTask(id)}
          />
        </div>
      </article>
      {openModalDetails && (
        <TaskDetailModal
          description={description}
          open={open}
          created_at={created_at}
          updated_at={updated_at}
          setIsOpen={setOpenModalDetails}
        />
      )}
      {openModalEdit && (
        <EditTaskModal
          id={id}
          description={description}
          open={open}
          setIsOpen={setOpenModalEdit}
        />
      )}
    </>
  );
};

export default Task;
