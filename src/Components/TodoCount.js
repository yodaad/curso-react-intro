import "./TodoCount.css";

function TodoCount({ total, completed }) {
  return completed === total ? (
    <div className="countContainer">
      <h1 className="TodoCounter">Tareas completadas!</h1>
    </div>
  ) : (
    <div className="countContainer">
      <h1>
        {completed} tareas completadas de {total}
      </h1>
    </div>
  );
}

export { TodoCount };
