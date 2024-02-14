import React from "react";
import { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  // resigsters changes
  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    // prevents autoclear
    event.preventDefault();
    if (name.trim()) {
      props.onSubmit(name);
      setName("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Skin Care Routine
        </label>
      </h3>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
