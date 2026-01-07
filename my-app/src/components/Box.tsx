import React, { useEffect, useState } from "react";

const Box = () => {
  const [color, setcolor] = useState<string>("red");

  useEffect(() => {
    console.log("color", color);
  }, [color]);

  const handleColor = () => {
    setcolor((prevColor: string) => (prevColor === "red" ? "blue" : "red"));
  };
  return (
    <div>
      <button onClick={handleColor}>Change Color</button>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color,
          marginTop: "10px",
        }}
      />
    </div>
  );
};

export default Box;
