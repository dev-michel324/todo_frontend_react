import React, { useRef } from "react";
import { Api } from "../../services/api";

const EditTaskModal = ({ id, description, open, setIsOpen }) => {
  const task = { description, open };
  const refDescriptionInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refDescriptionInput.current.name;
    const value = refDescriptionInput.current.value;
    const data = { ...task, [name]: value };
    if (data.description) {
      Api.put(`/todo/${id}`, {
        ...data
      })
        .then((res) => {
          if (res.status >= 200 && res.status <= 299) {
            window.location.reload();
          } else {
            throw new Error(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }else {
        console.log("empty values");
    }
  };

  return (
    <section className="modal_base">
      <article className="details">
        <form>
          <div className="form_control">
            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              defaultValue={description}
              ref={refDescriptionInput}
            />
          </div>
          <footer className="modal_footer">
            <button
              className="btn btn_success"
              id="modal_close_btn"
              onClick={handleSubmit}
            >
              Update
            </button>
            <button
              className="btn btn_primary"
              id="modal_close_btn"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </footer>
        </form>
      </article>
    </section>
  );
};

export default EditTaskModal;
