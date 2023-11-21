import React from "react";
import CardNote from "./CardNote";

function List({ label, listNote }) {
  return (
    <>
      <h2>{label}</h2>
      <div className="notes-list">
        {listNote.length === 0 ? (
          <p className="notes-list__empty-message">List note is empty.</p>
        ) : (
          listNote.map((notes) => (
            <CardNote
              key={notes.id}
              title={notes.title}
              body={notes.body}
              createdAt={notes.createdAt}
              onDelete={notes}
              onArchived={notes}
            />
          ))
        )}
      </div>
    </>
  );
}

export default List;
