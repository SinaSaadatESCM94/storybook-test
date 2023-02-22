import React from "react";

interface InputProps {
  inputPaddingX: string;
  inputPaddingY: string;
  inputRadius: string;
  inputType: "text" | "email" | "password";
  inputId: string;
  inputValue: string;
  inputLabel: string;
  inputName: string;
  bg: string;
}
function Input({
  inputPaddingX = "0.25rem",
  inputPaddingY = "0.25rem",
  inputRadius = "0.5rem",
  inputType = "text",
  inputId = "",
  inputLabel = "unknown",
  inputName = "",
  varient = "bg-danger",
  bg = "transparent",
}) {
  return (
    <div
      style={{
        padding: `${inputPaddingX} ${inputPaddingY} ${inputPaddingY} ${inputPaddingX}`,
        borderRadius: inputRadius,
      }}
    >
      <label
        htmlFor={inputName}
        className="w-100 d-flex flex-start text-capitalize"
      >
        {inputLabel}
      </label>
      <input
        type={inputType}
        id={inputId}
        className="w-100 d-flex flex-start border-0"
      />
    </div>
  );
}

export default Input;
