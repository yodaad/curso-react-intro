import React from "react";
import "../Styles/TodoSearch.css";
import { TodoContext } from "./TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

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
