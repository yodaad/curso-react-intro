import React from "react";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { TodoCount } from "./TodoCount";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoCreationButton } from "./TodoCreationButton";
import { TodosLoading } from "./TodosLoading";
import { TodosError } from "./TodosError";
import { TodoForm } from "./TodoForm";
import { EditTodoForm } from "./EditTodoForm";
import { EmptyTodos } from "./EmptyTodos";
import { DeleteModal } from "./DeleteModal";
import { CreationModal } from "./CreationModal";
import { InfoModal } from "./InfoModal.js";
import { TodoContext } from "./TodoContext";

function AppUI() {
  const {
    loading,
    error,
    openDeleteModal,
    setOpenDeleteModal,
    openCreationModal,
    setOpenCreationModal,
    openEditionModal,
    setOpenEditionModal,
    openInfoModal,
    setOpenInfoModal,
    deleteTodo,
    todoToDelete,
    setTodoToEdit,
    searchedTodos,
    completeTodo,
    setTodoToDelete,
  } = React.useContext(TodoContext);

  return (
    <>
      <Header
        onOpenInfoModal={() => {
          setOpenInfoModal(true);
        }}
      />

      <TodoCount />

      <TodoSearch />

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onOpenDeleteModal={() => {
              setOpenDeleteModal(true);
              setTodoToDelete(todo.id);
            }}
            onOpenEditionModal={() => {
              setOpenEditionModal(true);
              setTodoToEdit(todo.id);
            }}
          />
        ))}
      </TodoList>
      {!loading && searchedTodos.length === 0 && <EmptyTodos />}

      <TodoCreationButton setOpenCreationModal={setOpenCreationModal} />

      {openInfoModal && (
        <CreationModal>
          <InfoModal closeModal={() => setOpenInfoModal(false)} />
        </CreationModal>
      )}

      {openCreationModal && (
        <CreationModal>
          <TodoForm />
        </CreationModal>
      )}

      {openEditionModal && (
        <CreationModal>
          <EditTodoForm />
        </CreationModal>
      )}

      {openDeleteModal && (
        <CreationModal>
          <DeleteModal
            closeModal={() => setOpenDeleteModal(false)}
            onDelete={() => deleteTodo(todoToDelete)}
          />
        </CreationModal>
      )}

      <Footer />
    </>
  );
}

export { AppUI };
