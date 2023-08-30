import React from "react";
import { AppUI } from "./Components/AppUI";
import { TodoProvider } from "./Components/TodoContext";
import "./Styles/App.css";

function App() {
  return (
    <TodoProvider>
      <div className="app-container">
        <AppUI />
      </div>
    </TodoProvider>
  );
}

export default App;
