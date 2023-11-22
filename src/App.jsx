import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { getInitialData } from "./utils/index";

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [search, setSearch] = useState("");
  const [searchNotes, setSearchNotes] = useState("");

  const noteAll = (searchNotes || notes).filter(
    (note) => note.archived == false
  );
  const noteArchived = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, notes]);

  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <Body
        listNotes={noteAll}
        onSetNotes={setNotes}
        listArchived={noteArchived}
      />
      <Footer />
    </div>
  );
}

export default App;
