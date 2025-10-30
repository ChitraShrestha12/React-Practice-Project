import React, { useState } from "react";

function App() {
  const [rgbaValues, setRgbaValues] = useState({
    r: 255,
    g: 0,
    b: 0,
    a: 0.5,
  });
  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    //Calculate RGBA
    const r = Math.floor((x / window.innerWidth) * 255);
    const g = Math.floor((y / window.innerHeight) * 255);
    const b = Math.floor(
      ((x + y) / (window.innerWidth + window.innerHeight)) * 255
    );
    let a = (Math.sin(Date.now() * 0.001) + 1) / 2;
    a = a.toFixed(1);
    setRgbaValues({ r, g, b, a });
  };
  return (
    <main>
      <div
        className="color-container"
        style={{
          backgroundColor: `rgba(${rgbaValues.r},${rgbaValues.g},${rgbaValues.b},${rgbaValues.a})`,
        }}
        onMouseMove={handleMouseMove}
      ></div>
      <p>RGBA:{`${rgbaValues.r},${rgbaValues.g},${rgbaValues.b},${rgbaValues.a}`}</p>
    </main>
  );
}

export default App;
