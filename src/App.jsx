import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTab, setSelectedTab] = useState("Open");

  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  const handleCompleteTodo = (index) => {
    const newTodoList = todos.map((todo, i) =>
      i === index ? { ...todo, complete: true } : todo
    );
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };
  const handleDeleteTodo = (index) => {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  const handleSaveData = (currentTodos) => {
    localStorage.setItem(
      "stop-slackin-todo-app",
      JSON.stringify({ todos: currentTodos })
    );
  };

  useEffect(() => {
    const storedData = localStorage.getItem("stop-slackin-todo-app");
    if (storedData) {
      const db = JSON.parse(storedData);
      setTodos(db.todos || []);
    }
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
        selectedTab={selectedTab}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
