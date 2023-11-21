import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

function Body({ listNotes, onCreated }) {
  return (
    <div className="note-app__body">
      <Form onCreated={onCreated} />
      <List label="Active Note" listNote={listNotes} />
      <List label="Archieved Note" listNote={listNotes} />
    </div>
  );
}

export default Body;
