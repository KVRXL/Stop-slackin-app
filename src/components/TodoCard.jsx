import propTypes from "prop-types";

export function TodoCard({
  todo,
  handleDeleteTodo,
  todoIndex,
  handleCompleteTodo,
}) {
  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          className="done-button"
          onClick={() => {
            handleCompleteTodo(todoIndex);
          }}
          disabled={todo.complete}
        >
          <h6>Done</h6>
        </button>
        <button
          className="delete-button"
          onClick={() => {
            handleDeleteTodo(todoIndex);
          }}
        >
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
TodoCard.propTypes = {
  todo: propTypes.shape({
    id: propTypes.number.isRequired,
    input: propTypes.string.isRequired,
    complete: propTypes.bool.isRequired,
  }).isRequired,
  handleDeleteTodo: propTypes.func.isRequired,
  handleCompleteTodo: propTypes.func.isRequired,
  todoIndex: propTypes.number.isRequired,
};
