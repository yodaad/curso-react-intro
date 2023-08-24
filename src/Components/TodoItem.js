import "../Styles/TodoItem.css";

function TodoItem(props) {
  return (
    <li className="itemContainer">
      <button className="edit" onClick={props.onOpenDeletionModal}></button>
      <button
        className={`check-mark ${props.completed && "check-mark-active"}`}
        onClick={props.onComplete}
      ></button>
      <p className={`text ${props.completed && "text-completed"}`}>
        {props.text}
      </p>
      <button
        className="delete delete-active open-delete-modal"
        onClick={props.onOpenDeleteModal}
      ></button>
    </li>
  );
}

export { TodoItem };
