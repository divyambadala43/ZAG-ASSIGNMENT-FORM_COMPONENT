import React from "react";
import "../styles/styles.css";

const FileContents = ({ fileContents }) => {
  return (
    <div>
      <pre>{fileContents}</pre>
    </div>
  );
};

export default FileContents;
