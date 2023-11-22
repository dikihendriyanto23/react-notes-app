import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function Form({ onCreated }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body) {
      alert("Title and body field is required and cannot be empty!");
      return;
    } else {
      let act = confirm("Are you sure to create new note?");
      if (act) {
        const date = new Date().toISOString();
        const newNote = {
          id: date,
          title,
          body,
          archived: false,
          createdAt: date,
        };

        onCreated((prevState) => [...prevState, newNote]);
        setTitle("");
        setBody("");
        alert("New note is successfully created!");
      }
    }
  };

  return (
    <div className="note-input">
      <form onSubmit={handleSubmit}>
        <h2>New Notes</h2>
        <p className="note-input__title__char-limit">
          Characters left: {50 - title.length}
        </p>
        <label>Title</label>
        <Input
          type="text"
          name="title"
          value={title}
          onChange={setTitle}
          placeholder="Title"
        />
        <label>Description</label>
        <Input
          type="textarea"
          name="body"
          value={body}
          onChange={setBody}
          placeholder="Type your notes here.."
        />
        <Button type="submit" text="Create New" />
      </form>
    </div>
  );
}

export default Form;
