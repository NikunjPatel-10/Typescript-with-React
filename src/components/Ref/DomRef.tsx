import React, { useRef } from "react";

function DomRef() {
  const InputRef = useRef<HTMLInputElement>(null);

  const getValue = () => {
    const Value = InputRef.current?.value;
    console.log(Value);
  };

  return (
    <div>
      <input type="text" ref={InputRef} />
      <button onClick={getValue}>Button</button>
    </div>
  );
}

export default DomRef;
