import React, { useState } from 'react';
function Mode(props) {
    const [mode, setMode] = useState(props.mode);
    // Toggle between light and dark mode
    const toggleMode = () => {
        setMode(mode === "light" ? "dark" : "light");
        document.body.style.backgroundColor = mode === "light" ? "#343a40" : "#f8f9fa";
        document.body.style.color = mode === "light" ? "#fff" : "#000";
    };
  return (

    <div className={`mode-container ${props.mode}`}>
      <button className="btn btn-toggle float-end" onClick={toggleMode}>
        {mode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
        <style jsx>{`
            .mode-container {
            padding: 10px;
            background-color: ${mode === "light" ? "#f8f9fa" : "#343a40"};
            color: ${mode === "light" ? "#000" : "#fff"};
            }
            .btn-toggle {
            background-color: ${mode === "light" ? "#007bff" : "#6c757d"};
            color: #fff;
            }
        `}</style>
    </div>
    
  );
}
export default Mode;