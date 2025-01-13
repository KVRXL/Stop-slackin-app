import propTypes from "prop-types";
import { TodoCard } from "./TodoCard";

export function TodoList({
  todos,
  selectedTab,
  handleDeleteTodo,
  handleCompleteTodo,
}) {
  // Filter todos based on the selected tab
  const filterTodosList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  // Sort todos: Incomplete first, then completed
  const sortedTodosList = [...filterTodosList].sort(
    (a, b) => a.complete - b.complete
  );

  return (
    <>
      {sortedTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
            todoIndex={todos.findIndex((val) => val.input === todo.input)}
            todo={todo}
          />
        );
      })}
    </>
  );
}

TodoList.propTypes = {
  todos: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      complete: propTypes.bool.isRequired,
      text: propTypes.string,
    })
  ).isRequired,
  selectedTab: propTypes.string,
  handleDeleteTodo: propTypes.func,
  handleCompleteTodo: propTypes.func,
};
