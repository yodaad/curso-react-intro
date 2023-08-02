import "./TodoCount.css";

function TodoCount({ total, completed }) {
  return (
    <div className="countContainer">
      <h1>
        {completed} tareas completadas de {total}
      </h1>
    </div>
  );
}

export { TodoCount };
