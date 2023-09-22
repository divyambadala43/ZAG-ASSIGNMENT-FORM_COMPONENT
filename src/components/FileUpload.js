// src/components/FileUploadForm.js
import React, { useState } from "react";
import FileContents from "./FileContents";
import SuccessModal from "./SuccessModal";
import "../styles/styles.css";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContents, setFileContents] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setError("Please select a file.");
      setIsFormValid(false);
      return;
    }

    if (file.type === "application/json") {
      setError("");
      setSelectedFile(file);
      setIsFormValid(true);

      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target.result;
        setFileContents(content);
      };
      reader.readAsText(file);
    } else {
      setError("Please select a valid JSON file.");
      setSelectedFile(null);
      setFileContents("");
      setIsFormValid(false);
    }
  };

  const handleSubmit = () => {
    if (isFormValid) {
      setShowModal(true);
    }
  };

  return (
    <div>
      <div className="title">Upload JSON File</div>
      <div className="fileUploader">
        <label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="26"
            viewBox="0 0 22 26"
            fill="none">
            <path
              d="M20.7256 7.033L14.3862 0.754C13.9006 0.273 13.2312 0 12.5356 0H3.125C1.68125 0 0.513125 1.17 0.513125 2.6L0.5 23.4C0.5 24.83 1.66812 26 3.11187 26H18.875C20.3188 26 21.5 24.83 21.5 23.4V8.879C21.5 8.19 21.2244 7.527 20.7256 7.033ZM14.675 16.9H12.3125V20.8C12.3125 21.515 11.7219 22.1 11 22.1C10.2781 22.1 9.6875 21.515 9.6875 20.8V16.9H7.33813C6.7475 16.9 6.45875 16.198 6.87875 15.795L10.5538 12.168C10.8162 11.921 11.2231 11.921 11.4856 12.168L15.1475 15.795C15.5413 16.198 15.2525 16.9 14.675 16.9ZM13.625 9.1C12.9031 9.1 12.3125 8.515 12.3125 7.8V1.95L19.5312 9.1H13.625Z"
              fill="#4381FF"
            />
          </svg>
          <input
            name="file"
            type="file"
            accept=".json"
            onChange={handleFileChange}
          />
          {error && <p className="error">{error}</p>}
          Browse Files
        </label>
      </div>
      {fileContents && <FileContents fileContents={fileContents} />}
      <div className="buttonContainer">
        <button
          disabled={!isFormValid}
          className="submitButton"
          onClick={handleSubmit}
          value={selectedFile}>
          Submit
        </button>
      </div>
      {showModal && <SuccessModal />}
    </div>
  );
}

export default FileUpload;
