import React from "react";
import "../styles/InputContainer.css";

const InputContainer = () => {
  return (
    <div className="inputContainer">
      <div className="title">Full Name</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "18px",
        }}>
        <input className="input" type="text" placeholder="Full Name" />
      </div>
    </div>
  );
};

export default InputContainer;
