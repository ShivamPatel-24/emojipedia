import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function returnCard(card) {
  return (
    <Card
      key={card.id}
      emoji={card.emoji}
      name={card.name}
      meaning={card.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(returnCard)}</dl>
    </div>
  );
}

export default App;
