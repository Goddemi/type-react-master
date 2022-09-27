import React from "react";
import { Todo } from "../types/todo";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (clickedId: number) => {
    setTodos(
      todos.map((originTodo) =>
        originTodo.id === clickedId
          ? { ...originTodo, isDone: !originTodo.isDone }
          : originTodo
      )
    );
  };

  return (
    <div className="singleTodo">
      {todo.isDone ? (
        <s className="singleTodoData">{todo.todo}</s>
      ) : (
        <span className="singleTodoData">{todo.todo}</span>
      )}

      <div className="icons">
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDone(todo.id);
          }}
        >
          <MdDone />
        </span>
      </div>
    </div>
  );
};

export default SingleTodo;
