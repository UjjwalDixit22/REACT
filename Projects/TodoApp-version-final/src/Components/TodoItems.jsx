import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems , onDeleteClick }) => {
  return (
    <div className="items-container">
      {todoItems.map((items) => (
        <TodoItem  TodoName={items.name} TodoDate={items.dueDate} onDeleteClick = {onDeleteClick}/>
      ))}
    </div>
  );
};
export default TodoItems;
