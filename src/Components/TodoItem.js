import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="itemContainer">
      <button className="edit edit-active"></button>
      <button className="check-mark check-mark--active"></button>
      <p className="numbers">{props.number}</p>
      <p className="text">{props.text}</p>
      <button className="delete delete-active"></button>
    </li>
  );
}

export { TodoItem };
