import React from "react";
import { TodoCount } from "./TodoCount";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoCreationButton } from "./TodoCreationButton";
import { TodosLoading } from "./TodosLoading";
import { TodosError } from "./TodosError";
import { TodoForm } from "./TodoForm";
import { EmptyTodos } from "./EmptyTodos";
import { DeleteModal } from "./DeleteModal";
import { CreationModal } from "./CreationModal";
import { TodoContext } from "./TodoContext";

function AppUI() {
  const {
    loading,
    error,
    openDeleteModal,
    setOpenDeleteModal,
    openCreationModal,
    setOpenCreationModal,
    deleteTodo,
    todoToDelete,
    searchedTodos,
    completeTodo,
    setTodoToDelete,
  } = React.useContext(TodoContext);

  return (
    <>
      {openDeleteModal && (
        <DeleteModal
          closeModal={() => setOpenDeleteModal(false)}
          onDelete={() => deleteTodo(todoToDelete)}
        />
      )}

      <TodoCount />

      <TodoSearch />

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}

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
      <TodoCreationButton setOpenCreationModal={setOpenCreationModal} />

      {openCreationModal && (
        <CreationModal>
          <TodoForm />
        </CreationModal>
      )}
    </>
  );
}

export { AppUI };
