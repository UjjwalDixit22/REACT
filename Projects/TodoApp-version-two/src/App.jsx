import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItems from "./Components/TodoItems";

// import app.css
function App() {
  const todoItems = [
    {
      name: "Buying Milk",
      dueDate: "4/10/25",
    },
    {
      name: "Go to College",
      dueDate: "5/10/2025",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}/> 
    </center>
  );
}

export default App;
