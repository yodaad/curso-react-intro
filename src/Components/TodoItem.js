import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="itemContainer">
      <button className="edit"></button>
      <button
        className={`check-mark ${props.completed && "check-mark-active"}`}
      ></button>
      <p className="numbers">{props.number}</p>
      <p className={`text ${props.completed && "text-completed"}`}>
        {props.text}
      </p>
      <button className="delete delete-active"></button>
    </li>
  );
}

export { TodoItem };
