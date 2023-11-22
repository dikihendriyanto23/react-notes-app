import React from "react";
import Action from "./Action";
import { showFormattedDate } from "../utils";

function CardNote({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchived,
}) {
  const onDeleteNote = (id) => {
    let act = confirm("Are you sure to delete this note?");
    if (act) {
      onDelete((notes) => notes.filter((note) => note.id !== id));
      alert("Note deleted successfully!");
    }
  };
  const onArchivedNote = (id, archived) => {
    let textArc = !archived ? "Archived" : "Unarchived";
    let act = confirm("Are you sure to " + textArc + " this note?");
    if (act) {
      onArchived((notes) =>
        notes.map((note) => {
          if (note.id === id) {
            return { ...note, archived: !note.archived };
          }
          return note;
        })
      );
      alert("Note " + textArc + " successfully!");
    }
  };
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <Action
        onDelete={onDeleteNote}
        onArchived={onArchivedNote}
        id={id}
        archived={archived}
      />
    </div>
  );
}

export default CardNote;
