import React from "react";
import { TodoCount } from "./Components/TodoCount";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
import { TodoCreationButton } from "./Components/TodoCreationButton";
import { DeleteModal } from "./Components/DeleteModal";

/* const defaultTodos = [
  { text: "Hacer compras", completed: true },
  { text: "Crear cuentas de marketing", completed: false },
  { text: "Ir al banco", completed: false },
  { text: "Hacer aseo en la casa", completed: false },
  { text: "Enviar cotizaciones", completed: true },
];

localStorage.setItem('TASKAPP_V1', JSON.stringify(defaultTodos));
localStorage.removeItem('TASKAPP_V1');  */

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage("TASKAPP_V1", []);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [todoToDelete, setTodoToDelete] = React.useState(null);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
    setOpenDeleteModal(false);
  };

  return (
    <>
      {openDeleteModal && (
        <DeleteModal
          closeModal={() => setOpenDeleteModal(false)}
          onDelete={() => deleteTodo(todoToDelete)}
        />
      )}

      <TodoCount completed={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onOpenDeleteModal={() => {
              setOpenDeleteModal(true);
              setTodoToDelete(todo.text);
            }}
          />
        ))}
      </TodoList>
      <TodoCreationButton />
    </>
  );
}

export default App;
