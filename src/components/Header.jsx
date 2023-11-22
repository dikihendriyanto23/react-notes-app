import React, { useState } from "react";

function Header({ search, setSearch }) {
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="note-app__header">
      <h1>Notes App</h1>
      <div className="note-search">
        <input
          type="text"
          value={search}
          placeholder="Find notes.."
          onChange={handleChangeSearch}
        />
      </div>
    </div>
  );
}

export default Header;
