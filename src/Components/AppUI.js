import { TodoCount } from "./TodoCount";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoCreationButton } from "./TodoCreationButton";
import { DeleteModal } from "./DeleteModal";

function AppUI({
  loading,
  error,
  openDeleteModal,
  setOpenDeleteModal,
  deleteTodo,
  todoToDelete,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  setTodoToDelete,
}) {
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
        {loading && <p>Loading</p>}
        {error && <p>There was an error</p>}
        {!loading && searchedTodos.length === 0 && (
          <p>Create your first task</p>
        )}

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

export { AppUI };
