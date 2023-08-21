import React from "react";
import "../Styles/TodoCount.css";
import { TodoContext } from "./TodoContext";

function TodoCount() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return completedTodos === totalTodos ? (
    <div className="countContainer">
      <h1>Tareas completadas!</h1>
    </div>
  ) : (
    <div className="countContainer">
      <h1>
        {completedTodos} tareas completadas de {totalTodos}
      </h1>
    </div>
  );
}

export { TodoCount };
