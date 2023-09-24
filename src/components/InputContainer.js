import React from "react";
import "../styles/styles.css";

const InputContainer = ({ title, placeholder, onChange, value }) => {
  return (
    <div className="inputContainer">
      <div className="title">{title}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "18px",
        }}>
        <input
          className="input"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputContainer;
