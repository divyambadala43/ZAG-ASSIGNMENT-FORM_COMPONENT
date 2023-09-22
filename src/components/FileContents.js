import React from 'react'

const FileContents = ({fileContents}) => {
  return (
    <div>
      <h2>File Contents</h2>
      <pre>{fileContents}</pre>
    </div>
  );
}

export default FileContents