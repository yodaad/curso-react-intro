import React from "react";
import "../Styles/TodoForm.css";

function TodoForm({ closeForm }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="TodoForm-close">
        <button onClick={() => closeForm(false)}> X </button>
      </div>
      <label>Write a new task</label>
      <textarea placeholder="New Task" />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          onClick={() => closeForm(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--accept"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
