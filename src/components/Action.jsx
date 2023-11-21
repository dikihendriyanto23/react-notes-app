import React from "react";

function Action({ onDelete, onArchived }) {
  return (
    <div className="note-item__action">
      <button onClick={onDelete} className="note-item__delete-button">
        Delete
      </button>
      <button onClick={onArchived} className="note-item__archive-button">
        Archive
      </button>
    </div>
  );
}

export default Action;
