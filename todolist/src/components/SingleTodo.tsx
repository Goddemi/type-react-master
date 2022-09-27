import React, { useState } from "react";
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
  const [edit, setEdit] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(todo.todo);

  const handleEdit = (clickedId: number) => {
    setEdit(!edit);
  };

  const handleSubmit = (clickedId: number) => {
    setTodos(
      todos.map((originTodo) =>
        originTodo.id === clickedId
          ? { ...originTodo, todo: editValue }
          : originTodo
      )
    );
  };

  const handleDelete = (clickedId: number) => {
    setTodos(todos.filter((originTodo) => originTodo.id !== clickedId));
  };

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
    <form
      className="singleTodo"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(todo.id);
        setEdit(!edit);
      }}
    >
      {edit ? (
        <input
          value={editValue}
          onChange={(e) => {
            setEditValue(e.target.value);
          }}
        />
      ) : todo.isDone ? (
        <s className="singleTodoData">{todo.todo}</s>
      ) : (
        <span className="singleTodoData">{todo.todo}</span>
      )}

      <div className="icons">
        <span
          className="icon"
          onClick={() => {
            handleEdit(todo.id);
          }}
        >
          <AiFillEdit />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
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
    </form>
  );
};

export default SingleTodo;
