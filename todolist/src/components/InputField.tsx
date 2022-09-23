import React from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        type="input"
        placeholder="wrtie your task"
        value={todo}
        onChange={inputValue}
      />
      <button type="submit">Go</button>
    </form>
  );
};

export default InputField;
