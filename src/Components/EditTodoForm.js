import React from "react";
import { TodoContext } from "./TodoContext";
import "../Styles/EditTodoForm.css";

function EditTodoForm() {
  const { editTodo, setOpenEditionModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    editTodo(newTodoValue);
    setOpenEditionModal(false);
  };

  const onCancel = () => {
    setOpenEditionModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="TodoForm-close">
        <button onClick={onCancel}> X </button>
      </div>
      <label>Edit the task</label>
      <textarea
        placeholder="Edit"
        value={newTodoValue}
        onChange={onChange}
        required
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--accept"
        >
          Edit
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

export { EditTodoForm };
