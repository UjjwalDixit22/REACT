import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
      <div className="items-container">
        {todoItems.map((items) => (
          <TodoItem TodoDate={items.name} TodoName={items.dueDate} />
        ))}
      </div>
  );
};
export default TodoItems;
