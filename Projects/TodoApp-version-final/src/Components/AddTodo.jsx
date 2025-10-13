// import { useState , useRef} from "react";
import {useRef} from "react";
import { FaAddressCard } from "react-icons/fa";
function AddTodo({onNewItem}) {
  // const [todoName,setTodoName] = useState();
  // const [dueDate,setDueDate] = useState();
  // const noOfUpdates = useRef(0);//b/w diff render cycle value is preserved
  const todoNameElement = useRef();
  const dueDateElement = useRef();


  // const handleNameChange = (event) =>{
  //   setTodoName(event.target.value);
  //   // noOfUpdates.current += 1;
    
  // }
  // const handleDateChange = (event) =>{
  //   setDueDate(event.target.value);
  //   // console.log(noOfUpdates.current);
  // }
  const handleAddButtonClicked = (e) =>{
    e.preventDefault();// Prevents the default form submission behavior data goes where you want in method.
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    console.log(todoName,dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    
    onNewItem(todoName,dueDate);
    // setTodoName("");
    // setDueDate("");
  }
 


  return (
    <div className="container text-center">
      <form className="row kg-row"
      onSubmit={handleAddButtonClicked} >
        <div className="col-6">
          <input type="text" ref={todoNameElement} placeholder="Enter task here" 
          // value={todoName} 
          />
          {/* // onChange={handleNameChange}/> */}
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} 
          // value={dueDate}
          />
          {/* //  onChange={handleDateChange}/> */}
        </div>
        <div className="col-2">
          <button  
          className="btn btn-success kg-button">
          {/* // onClick={}> */}
            <FaAddressCard />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
// useRef is used to persist values b/w render cycles without causing re-renders