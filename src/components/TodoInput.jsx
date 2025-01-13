import { useState } from "react";
import propTypes from "prop-types";

export function TodoInput({ handleAddTodo }) {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  const handleContent = () => {
    if (!inputValue) {
      return;
    }
    handleAddTodo(inputValue);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleContent();
    }
  };

  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Add task"
        onKeyDown={handleKeyDown} // Added onKeyDown handler here
      />
      <button onClick={handleContent}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

TodoInput.propTypes = {
  handleAddTodo: propTypes.func.isRequired, // It's good to indicate that this prop is required
};
