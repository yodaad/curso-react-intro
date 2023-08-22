import "../Styles/TodoCreationButton.css";

function TodoCreationButton({ setOpenCreationModal }) {
  return (
    <div className="buttonContainer">
      <button
        onClick={() => {
          setOpenCreationModal((state) => !state);
        }}
      >
        +
      </button>
    </div>
  );
}

export { TodoCreationButton };
