import React from "react";
import InputContainer from "./InputContainer";
import FileUpload from "./FileUpload";

const Form = () => {
  return (
    <>
      <InputContainer title="Full Name" placeholder="Full Name" />
      <InputContainer title="Email" placeholder="Email" />
      <FileUpload />
    </>
  );
};

export default Form;
