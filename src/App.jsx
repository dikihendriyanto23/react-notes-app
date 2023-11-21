import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { getInitialData } from "./utils/index";

function App() {
  const [notes, setNotes] = useState(getInitialData());

  return (
    <div>
      <Header />
      <Body listNotes={notes} onCreated={setNotes} />
    </div>
  );
}

export default App;
