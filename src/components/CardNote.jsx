import React from "react";
import Action from "./Action";
import { showFormattedDate } from "../utils";

function CardNote({ id, title, body, createdAt, onDelete, onArchived }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <Action onDelete={onDelete} onArchived={onArchived} />
    </div>
  );
}

export default CardNote;
