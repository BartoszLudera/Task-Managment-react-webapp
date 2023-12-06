import React, { useState, useRef } from "react";
import Child from "./Child";

export default function Display() {
  const [addNew, setAddNew] = useState(false);

  const inputA = useRef();
  const inputB = useRef();

  const saveHandler = () => {
    console.log("InputA:", inputA.current.value);
    console.log("InputB:", inputB.current.value);
    // Tutaj możesz wykorzystać zapis danych lub ich wyświetlenie na ekranie
  };

  const addHandler = () => {
    setAddNew(true);
  };

  return (
    <div>
      <p>InputA:</p>
      <p>InputB:</p>
      <button onClick={addHandler} className="border-2 border-black">
        ADD
      </button>
      <div>
        {addNew ? <Child inputA={inputA} inputB={inputB} onSave={saveHandler} /> : ""}
      </div>
    </div>
  );
}