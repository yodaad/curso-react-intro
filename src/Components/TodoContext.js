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
  const [openEditionModal, setOpenEditionModal] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [todoToDelete, setTodoToDelete] = React.useState(null);
  const [todoToEdit, setTodoToEdit] = React.useState(null);

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
      id: newTodos.length + 1,
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

  const editTodo = (id, newText) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    saveTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    const newTodos = updatedTodos.map((todo, index) => ({
      ...todo,
      id: index + 1,
    }));
    saveTodos(newTodos);
    setOpenDeleteModal(false);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        todos,
        openDeleteModal,
        setOpenDeleteModal,
        openCreationModal,
        setOpenCreationModal,
        openEditionModal,
        setOpenEditionModal,
        addTodo,
        editTodo,
        deleteTodo,
        todoToDelete,
        todoToEdit,
        setTodoToEdit,
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
