import "./TodoCount.css";

function TodoCount({ total, completed }) {
  return (
    <h1>
      Has completado {completed} de {total} TODOs
    </h1>
  );
}

export { TodoCount };
