import React from "react";
import CardNote from "./CardNote";

function List({ label, listNote, onSetNotes }) {
  return (
    <>
      <h2>{label}</h2>
      <div className="notes-list">
        {listNote.length === 0 ? (
          <p className="notes-list__empty-message">List note is empty.</p>
        ) : (
          listNote.map((notes) => (
            <CardNote
              onDelete={onSetNotes}
              onArchived={onSetNotes}
              key={notes.id}
              id={notes.id}
              title={notes.title}
              body={notes.body}
              archived={notes.archived}
              createdAt={notes.createdAt}
            />
          ))
        )}
      </div>
    </>
  );
}

export default List;
