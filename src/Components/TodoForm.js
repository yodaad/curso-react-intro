import React from "react";
import { TodoContext } from "./TodoContext";
import "../Styles/TodoForm.css";

function TodoForm() {
  const { addTodo, setOpenCreationModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenCreationModal(false);
  };

  const onCancel = () => {
    setOpenCreationModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="TodoForm-close">
        <button onClick={onCancel}> X </button>
      </div>
      <label>Write a new task</label>
      <textarea
        placeholder="New Task"
        value={newTodoValue}
        onChange={onChange}
        required
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--accept"
        >
          Add
        </button>
        <button
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
