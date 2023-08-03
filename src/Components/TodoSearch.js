import "./TodoSearch.css";

function TodoSearch() {
  return (
    <div className="searchContainer">
      <input
        placeholder="Ingresar la tarea a buscar"
        onChange={(event) => console.log(event.target.value)}
      />
    </div>
  );
}

export { TodoSearch };
