import React from "react";

const TaskDetailModal = ({
  description,
  open,
  created_at,
  updated_at,
  setIsOpen,
}) => {

  return (
    <section className="modal_base">
      <article className="details">
        <p>
          <b>Description: </b>
          {description}
        </p>
        <p>
          <b>Status: </b>
          {open ? "open" : "closed"}
        </p>
        <p>
          <b>Created at: </b>
          {new Date(created_at).toLocaleDateString("pt-br")}
        </p>
        <p>
          <b>Updated at: </b>
          {new Date(updated_at).toLocaleDateString("pt-br")}
        </p>
        <footer className="modal_footer">
          <button
            className="btn btn_primary"
            id="modal_close_btn"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </footer>
      </article>
    </section>
  );
};

export default TaskDetailModal;