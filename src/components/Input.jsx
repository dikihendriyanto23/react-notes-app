import React from "react";

function Input({ name, type, value, onChange, placeholder }) {
  const handleChange = (event) => {
    if (name == "title") {
      const val = event.target.value;
      onChange(val.length <= 50 ? val : value);
    } else {
      onChange(event.target.value);
    }
  };

  if (type == "textarea") {
    return (
      <textarea
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows="5"
      />
    );
  } else {
    return (
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    );
  }
}

export default Input;
