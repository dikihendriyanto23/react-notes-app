import React from "react";

function Action({ id, archived, onDelete, onArchived }) {
  return (
    <div className="note-item__action">
      <button onClick={() => onDelete(id)} className="note-item__delete-button">
        Delete
      </button>
      <button
        onClick={() => onArchived(id, archived)}
        className="note-item__archive-button"
      >
        {!archived ? "Archived" : "Unarchived"}
      </button>
    </div>
  );
}

export default Action;
