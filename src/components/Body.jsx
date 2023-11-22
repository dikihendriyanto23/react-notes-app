import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

function Body({ listNotes, listArchived, onSetNotes }) {
  return (
    <div className="note-app__body">
      <Form onCreated={onSetNotes} />
      <List label="Active Note" listNote={listNotes} onSetNotes={onSetNotes} />
      <List
        label="Archieved Note"
        listNote={listArchived}
        onSetNotes={onSetNotes}
      />
    </div>
  );
}

export default Body;
