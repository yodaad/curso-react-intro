import "./TodoCreationButton.css";

function TodoCreationButton() {
  return (
    <div className="buttonContainer">
      <button onClick={() => console.log("Clicked")}>+</button>
    </div>
  );
}

export { TodoCreationButton };
