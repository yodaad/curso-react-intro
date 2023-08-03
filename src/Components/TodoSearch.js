import "./TodoSearch.css";
import searchIcon from "../Assets/Seach.png";

function TodoSearch() {
  return (
    <div className="searchContainer">
      <input placeholder="Ingresar la tarea a buscar" />
      <img className="search-icon" src={searchIcon} alt="Search Icon" />
    </div>
  );
}

export { TodoSearch };
