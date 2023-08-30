import React from "react";
import { TodoContext } from "./TodoContext";
import "../Styles/EditTodoForm.css";

function EditTodoForm() {
  const { editTodo, setOpenEditionModal, todoToEdit, todos } =
    React.useContext(TodoContext);
  const todoToEditText = todos.find((todo) => todo.id === todoToEdit);
  const [newTodoValue, setNewTodoValue] = React.useState(todoToEditText.text);

  const onSubmit = (event) => {
    event.preventDefault();
    editTodo(todoToEdit, newTodoValue);
    setOpenEditionModal(false);
  };

  const onCancel = () => {
    setOpenEditionModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form className="EditForm" onSubmit={onSubmit}>
      <div className="EditForm-close">
        <button onClick={onCancel}> X </button>
      </div>
      <label>Edit the task</label>
      <textarea type="text" value={newTodoValue} onChange={onChange} required />
      <div className="EditForm-buttonContainer">
        <button
          type="submit"
          className="EditForm-button EditForm-button--accept"
        >
          Edit
        </button>
        <button
          className="EditForm-button EditForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export { EditTodoForm };
