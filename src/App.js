import React from "react";
import { TodoCount } from "./Components/TodoCount";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
import { TodoCreationButton } from "./Components/TodoCreationButton";

const defaultTodos = [
  { number: "1. ", text: "Hacer compras", completed: true },
  { number: "2. ", text: "Crear cuentas de marketing", completed: false },
  { number: "3. ", text: "Ir al banco", completed: false },
  { number: "4. ", text: "Hacer aseo en la casa", completed: false },
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
            number={todo.number}
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
