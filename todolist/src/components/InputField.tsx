import React, { useRef } from "react";
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

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
      }}
    >
      <input
        ref={inputRef}
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
