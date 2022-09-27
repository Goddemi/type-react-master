import React, { useRef } from "react";
import "./style.css";

const InputField = () => {
  return (
    <form className="input">
      <input type="input" placeholder="wrtie your task" />
      <button type="submit">Go</button>
    </form>
  );
};

export default InputField;
