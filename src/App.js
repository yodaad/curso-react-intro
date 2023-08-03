import React from "react";
import { TodoCount } from "./Components/TodoCount";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
import { TodoCreationButton } from "./Components/TodoCreationButton";

const defaultTodos = [
  { number: "1.", text: "Hacer compras", completed: true },
  { number: "2.", text: "Crear cuentas de marketing", completed: false },
  { number: "3.", text: "Ir al banco", completed: false },
  { number: "4.", text: "Hacer aseo en la casa", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log(searchValue);

  return (
    <>
      <TodoCount completed={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

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
