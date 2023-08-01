import { TodoCount } from "./TodoCount";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoCreationButton } from "./TodoCreationButton";
import React from "react";

const defaultTodos = [
  { text: "Hacer compras", completed: true },
  { text: "Crear cuentas de marketing", completed: false },
  { text: "Ir al banco", completed: false },
  { text: "Hacer aseo en la casa", completed: false },
];

function App() {
  return (
    <>
      <TodoCount completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <TodoCreationButton />
    </>
  );
}

export default App;
