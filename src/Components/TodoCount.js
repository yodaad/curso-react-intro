import React from "react";
import "../Styles/TodoCount.css";
import { TodoContext } from "./TodoContext";

function TodoCount() {
  const { completedTodos, totalTodos, loading } = React.useContext(TodoContext);

  return completedTodos === totalTodos && loading ? (
    <div className="countContainer">
      <h1>Loading...</h1>
    </div>
  ) : completedTodos === totalTodos ? (
    <div className="countContainer">
      <h1>No tasks available</h1>
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
