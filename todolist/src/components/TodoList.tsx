import React from "react";
import { Todo } from "../types/todo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((element, i) => {
        return <li key={i}>{element.todo}</li>;
      })}
    </div>
  );
};

export default TodoList;
