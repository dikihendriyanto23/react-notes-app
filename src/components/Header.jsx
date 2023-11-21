import React from "react";

function Header() {
  return (
    <div className="note-app__header">
      <h1>Notes App</h1>
      <div className="note-search">
        <input type="text" placeholder="Find notes" />
      </div>
    </div>
  );
}

export default Header;
