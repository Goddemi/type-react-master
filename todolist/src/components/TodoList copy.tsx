import React from "react";
import { Todo } from "../types/todo";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((todo, i) => {
        return (
          <>
            <SingleTodo key={i} todo={todo} todos={todos} setTodos={setTodos} />
          </>
        );
      })}
    </div>
  );
};

export default TodoList;