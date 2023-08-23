import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TASKAPP_V1", []);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [openCreationModal, setOpenCreationModal] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [todoToDelete, setTodoToDelete] = React.useState(null);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

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
    <TodoContext.Provider
      value={{
        loading,
        error,
        openDeleteModal,
        setOpenDeleteModal,
        openCreationModal,
        setOpenCreationModal,
        addTodo,
        deleteTodo,
        todoToDelete,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        setTodoToDelete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
