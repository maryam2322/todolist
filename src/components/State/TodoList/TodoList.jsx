import { useContext } from "react";
import { makeRandomID } from "./data";
import "./TodoList.style.css"
import TodoCard from "../TodoCard/TodoCard";
import { TodoContext } from "../Context/TodoContext";
import Header from "../Header/Header";
import {Link} from 'react-router-dom'

function TodoList() {
  const { todoList, setTodoList } = useContext(TodoContext);
  const handleAddTodoList = () => {
    const name = prompt("please enter the title");
    const description = prompt("please enter the description");
    setTodoList([
      ...todoList,
      { id: makeRandomID(), name, description, items: [] },
    ]);
  };
  return (
    <>
      <Header handleAddTodoList={handleAddTodoList}/>
    <div className="TodoList">

      {todoList.map((todo) => (

        <TodoCard
          key={todo.id}
          todo={todo}
        />
      ))}      
    </div>
    </>
  );
}

export default TodoList;
