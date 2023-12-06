import React from "react";
import Input from "./Input";

export default function Child(props) {
  return (
    <div>
      <p>Input A</p>
      <Input inputRef={props.inputA} />
      <p>Input B</p>
      <Input inputRef={props.inputB} />
      <button onClick={props.onSave} className="border-2 border-black">
        SAVE
      </button>
    </div>
  );
}