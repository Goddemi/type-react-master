import React from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
  const inputValue = (e) => {
    setTodo(e.target.value);
  };

  return (
    <form className="input">
      <input type="input" placeholder="wrtie your task" onChange={inputValue} />
      <button type="submit">Go</button>
    </form>
  );
};

export default InputField;
