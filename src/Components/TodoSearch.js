import "../Styles/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <div className="searchContainer">
      <input
        placeholder="Ingresar la tarea a buscar"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };
