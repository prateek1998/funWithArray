import React from "react";

function ArrayCreate({ value, onChange }) {
  // console.log(value);
  return (
    <div className="arrayblock">
      <label>Create an Array:</label>
      <input
        type="text"
        placeholder="React, ReactNative,Javascript"
        value={value}
        onChange={onChange}
      />
      <small>separate elements with separate commos</small>
    </div>
  );
}
export default ArrayCreate;
