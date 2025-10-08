import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";
// import TodoItem from "./Components/TodoItem";

// import app.css
function App() {
  const initialtodoItems = [
    // {
    //   name: "Buying Milk",
    //   dueDate: "4/10/25",
    // },
    // {
    //   name: "Go to College",
    //   dueDate: "5/10/2025",
    // },
  ];
  const [todoItems, setTodoItems] = useState(initialtodoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    const newItem = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newItem);
  };
  const handleDeleteItem = (todoItemName) => {
     console.log("Item Deleted");
    const newTodoItems = todoItems.filter((todo) => todo.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick = {handleDeleteItem} />
    </center>
  );
}

export default App;
