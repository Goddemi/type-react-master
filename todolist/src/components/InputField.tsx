import React, { FormEvent, useRef } from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({
  todo,
  setTodo,
  handleSubmit,
}: Props) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleSubmit(e);
        inputRef.current?.blur();
      }}
    >
      <input
        className="mainInput"
        ref={inputRef}
        type="input"
        placeholder="wrtie your task"
        onChange={(e) => {
          handleInput(e);
        }}
        value={todo}
      />
      <button type="submit">Go</button>
    </form>
  );
};

export default InputField;
